import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Three scroll effects for every page:
 *
 * 1. Smooth scroll (Lenis): the mouse wheel glides instead of jumping in steps.
 *
 * 2. Soft lock-on: while you scroll slowly, we look at where the glide is
 *    going to land. If that landing spot is close to a section's resting
 *    point (its content centred on screen), we bend the glide to land there, the same eased
 *    movement as clicking a menu link. Fast scrolling is never touched.
 *
 * 3. Reveal: sections below the fold start hidden and unveil top to bottom
 *    as they arrive (IntersectionObserver + CSS in styles.css).
 *
 * All of it is switched off for people who have "reduce motion" on.
 */

// ---- Tuning knobs ----
const GLIDE = 0.075; // Lenis smoothing. Lower = softer, longer glide
const INPUT_PAUSE_MS = 110; // wheel quiet this long = "you let go"
const SPEED_WINDOW_MS = 350; // how far back we judge speed
const MAX_WHEEL_PX = 700; // more wheel than this in the window = fast, no lock
const MAX_TOUCH_VELOCITY = 18; // same idea for touch (px per frame)
const AHEAD_RANGE = 0.35; // lock to a section up to 35% of the screen ahead of the landing spot
const BEHIND_RANGE = 0.12; // ...or up to 12% already passed
const LOCK_DURATION = 1.1; // seconds for the lock-on glide
const REVEAL_LINE = 0.7; // a piece fades in when its top passes 70% down the screen (lower = later)

// Same curve for the lock-on and for menu/anchor jumps: soft start, soft landing.
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export function useScrollPolish(pathname: string) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section"));
    const header = document.querySelector("header");
    const headerOffset = () => header?.getBoundingClientRect().height ?? 0;

    // ---------- 1. Smooth scroll ----------
    const lenis = new Lenis({
      lerp: GLIDE,
      wheelMultiplier: 0.9,
    // Let horizontal scrollers (the Experience swipe panels) scroll on their own.
    allowNestedScroll: true,
      anchors: { offset: -headerOffset(), duration: LOCK_DURATION, easing: easeInOutCubic },
    });
    let rafId = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    });

    // ---------- 2. Soft lock-on ----------
    const wheelLog: { t: number; dy: number }[] = [];
    let pauseTimer: number | undefined;
    let locking = false;
    let touching = false;
    let touchPeak = 0;

    const tryLock = (speedOk: boolean) => {
      if (!speedOk || locking) return;
      const landing = lenis.targetScroll; // where the glide will stop
      const direction = Math.sign(landing - lenis.animatedScroll) || lenis.direction;
      if (!direction) return;

      const vh = window.innerHeight;
      const offset = headerOffset();
      let best: number | null = null;
      for (const el of sections) {
        const sectionTop = restingPoint(el, lenis.animatedScroll, offset, vh);
        const ahead = (sectionTop - landing) * direction; // >0 = section is past the landing spot
        // Never pull back to a section we have already scrolled past.
        if ((sectionTop - lenis.animatedScroll) * direction < 4) continue;
        if (ahead > vh * AHEAD_RANGE || ahead < -vh * BEHIND_RANGE) continue;
        if (best === null || Math.abs(sectionTop - landing) < Math.abs(best - landing)) best = sectionTop;
      }
      if (best === null || Math.abs(best - landing) < 4) return;

      locking = true;
      lenis.scrollTo(best, {
        duration: LOCK_DURATION,
        easing: easeInOutCubic,
        onComplete: () => (locking = false),
      });
    };

    const onWheel = (e: WheelEvent) => {
      locking = false; // a new wheel move always wins over a lock in progress
      const now = performance.now();
      wheelLog.push({ t: now, dy: Math.abs(e.deltaY) });
      while (wheelLog.length && now - wheelLog[0].t > SPEED_WINDOW_MS) wheelLog.shift();
      window.clearTimeout(pauseTimer);
      pauseTimer = window.setTimeout(() => {
        const recent = wheelLog.reduce((sum, w) => sum + w.dy, 0);
        wheelLog.length = 0;
        tryLock(recent <= MAX_WHEEL_PX);
      }, INPUT_PAUSE_MS);
    };

    // Touch: phones scroll natively (Lenis leaves touch alone), so we wait
    // for the finger to lift and the momentum to die down, then decide.
    const onTouchStart = () => {
      touching = true;
      touchPeak = 0;
      locking = false;
    };
    const onTouchEnd = () => (touching = false);
    const onScroll = () => {
      if (locking || !("ontouchstart" in window)) return;
      touchPeak = Math.max(touchPeak, Math.abs(lenis.velocity));
      window.clearTimeout(pauseTimer);
      pauseTimer = window.setTimeout(() => {
        if (touching) return;
        tryLock(touchPeak <= MAX_TOUCH_VELOCITY);
        touchPeak = 0;
      }, 160);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    lenis.on("scroll", onScroll);

    // ---------- 3. Reveal ----------
    // Every piece of content (heading, text, each card...) is watched on its
    // own, so things unfold as YOU reach them, not when their section starts.
    // Pieces that arrive together fade in top to bottom, one after another.
    // Anything already on screen when the page loads is left alone.
    //
    // Why not IntersectionObserver's rootMargin? Inside an embedded frame
    // (like the Claude preview panel) browsers ignore rootMargin, so the
    // "start later" setting silently did nothing. Measuring on scroll is
    // simple and behaves the same everywhere.
    const items = sections.flatMap(revealPieces);
    const vhNow = window.innerHeight;
    const waiting = items.filter((el) => el.getBoundingClientRect().top > vhNow * 0.9);
    for (const el of waiting) el.classList.add("reveal-item");

    let revealQueued = false;
    const checkReveal = () => {
      revealQueued = false;
      const line = window.innerHeight * REVEAL_LINE;
      const arriving: HTMLElement[] = [];
      for (let i = waiting.length - 1; i >= 0; i--) {
        if (waiting[i].getBoundingClientRect().top < line) {
          arriving.push(waiting[i]);
          waiting.splice(i, 1); // only once
        }
      }
      arriving
        .sort((x, y) => x.getBoundingClientRect().top - y.getBoundingClientRect().top)
        .forEach((el, i) => {
          el.style.setProperty("--reveal-i", String(Math.min(i, 6)));
          el.classList.add("is-visible");
        });
    };
    const queueReveal = () => {
      if (revealQueued || waiting.length === 0) return;
      revealQueued = true;
      requestAnimationFrame(checkReveal);
    };
    window.addEventListener("scroll", queueReveal, { passive: true });
    window.addEventListener("resize", queueReveal);
    queueReveal();

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(pauseTimer);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      lenis.destroy();
      window.removeEventListener("scroll", queueReveal);
      window.removeEventListener("resize", queueReveal);
      for (const el of items) el.classList.remove("reveal-item", "is-visible");
    };
  }, [pathname]);
}

/**
 * The visible "pieces" of a section: heading, text, image, each card...
 */
function revealPieces(section: HTMLElement): HTMLElement[] {
  // Walk down through single-child wrappers to the real content.
  let wrapper: Element = section;
  while (wrapper.children.length === 1) wrapper = wrapper.children[0];

  // A grid or row of cards counts as several pieces, not one.
  const pieces = Array.from(wrapper.children).flatMap((item) =>
    item.children.length > 1 && /grid|flex/.test(getComputedStyle(item).display)
      ? Array.from(item.children)
      : [item],
  );
  // Skip invisible helpers: empty wrappers and absolutely placed layers
  // (like the hero photo and its gradient). Hiding those would hide the photo.
  const visible = (pieces as HTMLElement[]).filter(
    (el) => el.offsetHeight > 0 && getComputedStyle(el).position !== "absolute",
  );
  return visible.length ? visible : [section];
}

/**
 * Where the page should rest for a section: its CONTENT (not the padded box)
 * centred in the space below the header. If the content is too tall to fit,
 * its top sits a little below the header instead.
 *
 * Centring can leave a strip of the section above visible. That is fine when
 * the two look alike (same background), but not when the one above looks
 * different, like the photo hero. Then the section's top edge is not allowed
 * to drop below the header.
 */
function restingPoint(section: HTMLElement, scrollY: number, headerH: number, vh: number) {
  let content: Element = section;
  while (content.children.length === 1) content = content.children[0];
  const box = content.getBoundingClientRect();
  const visible = vh - headerH;

  let target =
    box.height > visible * 0.85
      ? box.top + scrollY - headerH - 48
      : box.top + scrollY + box.height / 2 - (headerH + visible / 2);

  const above = previousSection(section);
  if (above && looksDifferent(above, section)) {
    const sectionTop = section.getBoundingClientRect().top + scrollY - headerH;
    target = Math.max(target, sectionTop);
  }
  return target;
}

function previousSection(section: HTMLElement) {
  const all = Array.from(document.querySelectorAll<HTMLElement>("main section"));
  const i = all.indexOf(section);
  return i > 0 ? all[i - 1] : null;
}

/** Different background colour, or mostly covered by a photo (like the hero). */
function looksDifferent(a: HTMLElement, b: HTMLElement) {
  const bg = (el: HTMLElement) => getComputedStyle(el).backgroundColor;
  if (bg(a) !== bg(b)) return true;
  const area = a.offsetWidth * a.offsetHeight || 1;
  return Array.from(a.querySelectorAll("img")).some((img) => {
    const r = img.getBoundingClientRect();
    return (r.width * r.height) / area > 0.5;
  });
}

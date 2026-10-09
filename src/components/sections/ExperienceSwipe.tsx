import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { scrollBelowHeader, takeScrollRequest } from "@/lib/scroll-intent";

export type SwipePanel = { key: string; label: string; content: ReactNode };

/**
 * The four experience categories side by side, one visible at a time.
 * Swipe with the thumb, tap a progress segment, or use the arrows.
 *
 * How it works:
 * - We move the panels ourselves (a CSS transform) instead of letting the
 *   browser scroll them. With browser scrolling, a fast flick on a phone could
 *   fly past a category or stop half way. Here one swipe is always exactly
 *   one step: we follow the finger while it is down, and when it lets go we
 *   decide "next", "previous" or "back to where it was".
 * - "touch-action: pan-y" tells the browser: up/down is yours (page scroll),
 *   sideways is ours. If the finger goes mostly up/down, the browser takes
 *   over and sends "pointercancel", and we just put the panel back.
 * - Swipes that start inside a photo slideshow (data-swipe-ignore) belong to
 *   the slideshow, not to the categories.
 * - Trackpads: a sideways two-finger swipe also moves one step, then waits a
 *   moment so one swipe can't count twice.
 * - Panels have different heights. The track's height follows the panel in
 *   view, so a short panel doesn't leave an empty gap below it.
 */
export function ExperienceSwipe({
  lang,
  panels,
  initial = 0,
}: {
  lang: "sv" | "en";
  panels: SwipePanel[];
  initial?: number;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [index, setIndex] = useState(initial);
  const [drag, setDrag] = useState(0); // px the finger has moved the row
  const [dragging, setDragging] = useState(false);
  const [animate, setAnimate] = useState(false); // no slide on first paint
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [hasMoved, setHasMoved] = useState(false);

  const sv = lang === "sv";
  const last = panels.length - 1;
  const clamp = (i: number) => Math.max(0, Math.min(last, i));
  const safeIndex = clamp(index);
  const next = panels[safeIndex + 1];

  // Deep links like /experience/media start on their own panel, without sliding.
  useEffect(() => {
    setAnimate(false);
    setIndex(clamp(initial));
  }, [initial]); // eslint-disable-line react-hooks/exhaustive-deps

  // Opened from the menu? Then glide down to the slider once the page has settled.
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (takeScrollRequest() !== "erfarenhet-kategorier") return;
    const t = window.setTimeout(() => {
      if (rootRef.current) scrollBelowHeader(rootRef.current);
    }, 150);
    return () => window.clearTimeout(t);
  }, []);

  const go = useCallback(
    (i: number) => {
      setAnimate(true);
      setIndex((prev) => {
        const target = Math.max(0, Math.min(panels.length - 1, i));
        if (target !== prev) setHasMoved(true);
        return target;
      });
    },
    [panels.length],
  );

  // Finger swipes and trackpad swipes. Native listeners on the element itself,
  // so touches inside popups (rendered elsewhere in the page) never count.
  const indexRef = useRef(index);
  indexRef.current = safeIndex;
  const justSwiped = useRef(false);
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    let startX = 0;
    let startT = 0;
    let id: number | null = null;
    let dx = 0;

    const down = (e: PointerEvent) => {
      if (e.pointerType === "mouse") return; // mouse users have the arrows
      if ((e.target as HTMLElement).closest("[data-swipe-ignore]")) return;
      id = e.pointerId;
      startX = e.clientX;
      startT = e.timeStamp;
      dx = 0;
    };
    const move = (e: PointerEvent) => {
      if (e.pointerId !== id) return;
      dx = e.clientX - startX;
      if (Math.abs(dx) < 6) return; // ignore the tiny wobble at the start of a vertical scroll
      const i = indexRef.current;
      // Rubber band at the first and last panel: the row only gives a little.
      const atEdge = (i === 0 && dx > 0) || (i === panels.length - 1 && dx < 0);
      setDragging(true);
      setDrag(atEdge ? dx / 3 : dx);
    };
    const up = (e: PointerEvent) => {
      if (e.pointerId !== id) return;
      id = null;
      const width = vp.clientWidth;
      const speed = Math.abs(dx) / Math.max(1, e.timeStamp - startT); // px per ms
      const far = Math.abs(dx) > width * 0.18;
      const flick = speed > 0.35 && Math.abs(dx) > 30;
      setDragging(false);
      setDrag(0);
      if (far || flick) {
        justSwiped.current = true; // the click that follows a swipe should not open a card
        window.setTimeout(() => (justSwiped.current = false), 50);
        go(indexRef.current + (dx < 0 ? 1 : -1)); // never more than one step
      } else {
        setAnimate(true);
      }
    };
    const cancel = (e: PointerEvent) => {
      if (e.pointerId !== id) return;
      id = null;
      setAnimate(true);
      setDragging(false);
      setDrag(0);
    };

    let wheelLock = false;
    let wheelSum = 0;
    const wheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return; // vertical: page scroll
      e.preventDefault();
      if (wheelLock) return;
      wheelSum += e.deltaX;
      if (Math.abs(wheelSum) > 40) {
        go(indexRef.current + (wheelSum > 0 ? 1 : -1));
        wheelSum = 0;
        wheelLock = true;
        window.setTimeout(() => (wheelLock = false), 700);
      }
    };
    const click = (e: MouseEvent) => {
      if (justSwiped.current) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    vp.addEventListener("pointerdown", down);
    vp.addEventListener("pointermove", move);
    vp.addEventListener("pointerup", up);
    vp.addEventListener("pointercancel", cancel);
    vp.addEventListener("wheel", wheel, { passive: false });
    vp.addEventListener("click", click, true);
    return () => {
      vp.removeEventListener("pointerdown", down);
      vp.removeEventListener("pointermove", move);
      vp.removeEventListener("pointerup", up);
      vp.removeEventListener("pointercancel", cancel);
      vp.removeEventListener("wheel", wheel);
      vp.removeEventListener("click", click, true);
    };
  }, [go, panels.length]);

  // Side arrows: only shown while the panels fill a good part of the screen,
  // so they never float over the hero or the footer.
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    // Measured on scroll instead of with IntersectionObserver: inside an embedded
    // frame (like the preview) browsers ignore the observer's margins, and the
    // arrows then showed up over the hero and the footer.
    let queued = false;
    const check = () => {
      queued = false;
      const r = vp.getBoundingClientRect();
      const vh = window.innerHeight;
      // "In view" = the panels cover the middle of the screen (35% to 65% down)
      setInView(r.top < vh * 0.35 && r.bottom > vh * 0.65);
    };
    const queue = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    return () => {
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", queue);
    };
  }, []);

  // Track height follows the visible panel, also when its content changes size.
  useEffect(() => {
    const el = panelRefs.current[safeIndex];
    if (!el) return;
    const update = () => setHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [safeIndex]);

  return (
    <div ref={rootRef} id="erfarenhet-kategorier" className="bg-forest text-background scroll-mt-24">
      {/* Navigation: counter, arrows, progress segments */}
      <div className="px-6 md:px-10 pt-10 md:pt-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-background/60" aria-live="polite">
              {safeIndex + 1} / {panels.length}
              <span className="sr-only"> {panels[safeIndex].label}</span>
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(safeIndex - 1)}
                disabled={safeIndex === 0}
                aria-label={sv ? "Föregående" : "Previous"}
                className="h-10 w-10 rounded-full border border-background/30 text-background transition-colors hover:bg-background/10 disabled:opacity-30 disabled:hover:bg-transparent"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => go(safeIndex + 1)}
                disabled={safeIndex === last}
                aria-label={sv ? "Nästa" : "Next"}
                className="h-10 w-10 rounded-full border border-background/30 text-background transition-colors hover:bg-background/10 disabled:opacity-30 disabled:hover:bg-transparent"
              >
                →
              </button>
            </div>
          </div>

          <div className="mt-5 grid gap-2" style={{ gridTemplateColumns: `repeat(${panels.length}, minmax(0, 1fr))` }}>
            {panels.map((p, i) => (
              <button
                key={p.key}
                type="button"
                onClick={() => go(i)}
                aria-label={p.label}
                aria-current={i === safeIndex ? "true" : undefined}
                className="group flex flex-col justify-start text-left py-2"
              >
                <span
                  className={`block h-[2px] transition-colors duration-300 ${
                    i === safeIndex ? "bg-background" : "bg-background/25 group-hover:bg-background/50"
                  }`}
                />
                <span
                  className={`mt-3 hidden md:block text-[11px] leading-snug uppercase tracking-[0.2em] transition-colors duration-300 ${
                    i === safeIndex ? "text-background" : "text-background/45 group-hover:text-background/70"
                  }`}
                >
                  {p.label}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile hint: fades out after the first swipe */}
          {next && (
            <button
              type="button"
              onClick={() => go(safeIndex + 1)}
              className={`md:hidden mt-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-background/70 transition-opacity duration-500 ${
                hasMoved ? "opacity-60" : "opacity-100"
              }`}
            >
              {!hasMoved && <span>{sv ? "Svep" : "Swipe"}</span>}
              <span className="swipe-hint-arrow" aria-hidden>→</span>
              <span className="text-background">{next.label}</span>
            </button>
          )}
        </div>
      </div>

      {/* Side arrows (">"): make it obvious there is more to the left/right.
          Fixed to the screen's sides so they stay in view while you scroll a long panel. */}
      {[-1, 1].map((dir) => {
        const target = safeIndex + dir;
        const show = inView && target >= 0 && target <= last;
        return (
          <button
            key={dir}
            type="button"
            onClick={() => go(target)}
            tabIndex={show ? undefined : -1}
            aria-hidden={!show || undefined}
            aria-label={dir === 1 ? `${sv ? "Nästa" : "Next"}: ${panels[target]?.label ?? ""}` : `${sv ? "Föregående" : "Previous"}: ${panels[target]?.label ?? ""}`}
            className={`fixed top-1/2 z-30 -translate-y-1/2 ${dir === 1 ? "right-1.5 md:right-4" : "left-1.5 md:left-4"} flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-foreground/80 text-background shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-[opacity,transform] duration-300 hover:bg-foreground ${show ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d={dir === 1 ? "M9 5l7 7-7 7" : "M15 5l-7 7 7 7"} />
            </svg>
          </button>
        );
      })}

      {/* The swipe track: a window (viewport) and the row of panels that slides inside it */}
      <div
        ref={viewportRef}
        role="region"
        aria-roledescription={sv ? "karusell" : "carousel"}
        aria-label={sv ? "Erfarenhetskategorier" : "Experience categories"}
        className="overflow-hidden transition-[height] duration-500 ease-out touch-pan-y select-none md:select-auto"
        style={{ height }}
      >
        <div
          className="flex items-start"
          style={{
            transform: `translate3d(calc(${-safeIndex * 100}% + ${drag}px), 0, 0)`,
            transition: dragging || !animate ? "none" : "transform 450ms cubic-bezier(0.22, 0.61, 0.36, 1)",
          }}
        >
          {panels.map((p, i) => (
            <div
              key={p.key}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className="w-full shrink-0"
              inert={i !== safeIndex}
            >
              {p.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

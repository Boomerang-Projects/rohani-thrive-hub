import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export type SwipePanel = { key: string; label: string; content: ReactNode };

/**
 * The four experience categories side by side, one visible at a time.
 * Swipe (touch or trackpad), tap a progress segment, or use the arrows.
 *
 * How it works:
 * - The track is a horizontal scroller with CSS scroll-snap, so a swipe
 *   always lands exactly on one panel. The browser does the swiping itself,
 *   which keeps it smooth on phones.
 * - Panels have different heights. The track's height follows the panel
 *   in view, so a short panel doesn't leave an empty gap below it.
 * - overflow-y-hidden matters: the hidden panels can be taller than the one
 *   in view, and without it the track becomes a small vertical scroller of its
 *   own inside the page.
 * - The swipe hint shows until the visitor has moved once, then fades away.
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
  const trackRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [index, setIndex] = useState(initial);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [hasMoved, setHasMoved] = useState(false);

  const sv = lang === "sv";
  const next = panels[index + 1];

  // Jump to the starting panel without animation (deep links like /experience/media).
  useEffect(() => {
    const track = trackRef.current;
    if (track) track.scrollLeft = initial * track.clientWidth;
  }, [initial]);

  // Which panel is in view? Rounded position of the scroller.
  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.round(track.scrollLeft / track.clientWidth);
    setIndex((prev) => {
      if (prev !== i) setHasMoved(true);
      return i;
    });
  }, []);

  // Track height follows the visible panel, also when its content changes size.
  useEffect(() => {
    const el = panelRefs.current[index];
    if (!el) return;
    const update = () => setHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [index]);

  const go = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(panels.length - 1, i));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="bg-forest text-background">
      {/* Navigation: counter, arrows, progress segments */}
      <div className="px-6 md:px-10 pt-10 md:pt-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-background/60" aria-live="polite">
              {index + 1} / {panels.length}
              <span className="sr-only"> {panels[index].label}</span>
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(index - 1)}
                disabled={index === 0}
                aria-label={sv ? "Föregående" : "Previous"}
                className="h-10 w-10 rounded-full border border-background/30 text-background transition-colors hover:bg-background/10 disabled:opacity-30 disabled:hover:bg-transparent"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                disabled={index === panels.length - 1}
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
                aria-current={i === index ? "true" : undefined}
                className="group text-left py-2"
              >
                <span
                  className={`block h-[2px] transition-colors duration-300 ${
                    i === index ? "bg-background" : "bg-background/25 group-hover:bg-background/50"
                  }`}
                />
                <span
                  className={`mt-3 hidden md:block text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                    i === index ? "text-background" : "text-background/45 group-hover:text-background/70"
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
              onClick={() => go(index + 1)}
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

      {/* The swipe track */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        role="region"
        aria-roledescription={sv ? "karusell" : "carousel"}
        aria-label={sv ? "Erfarenhetskategorier" : "Experience categories"}
        className="flex items-start overflow-x-auto overflow-y-hidden snap-x snap-mandatory overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden transition-[height] duration-500 ease-out"
        style={{ height }}
      >
        {panels.map((p, i) => (
          <div
            key={p.key}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            className="w-full shrink-0 snap-start snap-always"
            inert={i !== index}
          >
            {p.content}
          </div>
        ))}
      </div>
    </div>
  );
}

import { useEffect, useRef, type MouseEvent } from "react";

/**
 * Card with photos on top, used for "Social påverkan".
 * Same idea as the "Så arbetar vi" cards on the home page: photo first,
 * then a centred title and a short text. The logo is not shown here,
 * it appears at the top of the popup when the card is opened.
 *
 * The photo area is an endless slideshow: swipe, or use the arrows.
 * The trick: the photos are rendered three times (A A A),
 * we start in the middle copy, and when you end up in the first or last copy
 * we jump one full copy back without animation. It looks identical, so it
 * never runs out in either direction.
 */
export function PhotoEntryCard({
  photos,
  title,
  meta,
  text,
  readMore,
  lang,
  onOpen,
}: {
  photos: string[];
  title: string;
  meta: string;
  text: string;
  readMore: string;
  lang: "sv" | "en";
  onOpen: () => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const n = photos.length;
  const many = n > 1;
  const slides = many ? [...photos, ...photos, ...photos] : photos;
  const sv = lang === "sv";

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !many) return;
    const width = () => track.clientWidth; // one slide = full width
    track.scrollLeft = n * width(); // start on the first photo of the middle copy

    let timer: number | undefined;
    const onScroll = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const i = Math.round(track.scrollLeft / width());
        if (i < n) track.scrollLeft += n * width();
        else if (i >= 2 * n) track.scrollLeft -= n * width();
      }, 140);
    };
    const onResize = () => {
      const i = Math.round(track.scrollLeft / width()) % n;
      track.scrollLeft = (n + i) * width();
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.clearTimeout(timer);
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [n, many]);

  // Arrow click: move one photo, and don't let the click open the popup.
  const step = (e: MouseEvent, dir: 1 | -1) => {
    e.stopPropagation();
    const track = trackRef.current;
    if (track) track.scrollBy({ left: dir * track.clientWidth, behavior: "smooth" });
  };

  const arrow =
    "absolute top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] transition-transform hover:scale-110";

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.target !== e.currentTarget) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      className="group flex w-full flex-col overflow-hidden rounded-3xl bg-background text-foreground cursor-pointer shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100 sm:w-[calc(50%-0.625rem)] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
    >
      <div className="relative h-56 md:h-64">
        <div
          ref={trackRef}
          className="flex h-full overflow-x-auto snap-x snap-mandatory overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              draggable={false}
              className="h-full w-full shrink-0 snap-center object-cover"
            />
          ))}
        </div>
        {many && (
          <>
            <button type="button" onClick={(e) => step(e, -1)} aria-label={sv ? "Föregående bild" : "Previous photo"} className={`${arrow} left-2`}>
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M15 5l-7 7 7 7" /></svg>
            </button>
            <button type="button" onClick={(e) => step(e, 1)} aria-label={sv ? "Nästa bild" : "Next photo"} className={`${arrow} right-2`}>
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col items-center px-6 py-7 text-center">
        <h3 className="font-serif font-bold text-lg leading-tight uppercase text-balance">
          {title}
        </h3>
        <p className="mt-3 text-[10px] uppercase tracking-[0.18em] leading-relaxed text-foreground/55">{meta}</p>
        <p className="mt-4 text-sm leading-relaxed text-foreground/75">{text}</p>
        <span className="mt-auto pt-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/60 px-4 py-2 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.2em] text-accent transition-colors duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-background">
            {readMore} <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </span>
      </div>
    </article>
  );
}

import { useEffect, useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

/**
 * Full-screen photo viewer. Opens on the photo you tapped, lets you swipe
 * (or use the arrows / arrow keys) between all the photos of that card, and
 * closes with a tap on the dark background, the X, or Escape.
 *
 * Built on the same Radix Dialog as the popups, which gives us focus handling
 * and Escape for free, and lets it open on top of a popup that is already open.
 * The photos sit in a sideways scroller with one photo per screen width;
 * scroll-snap-stop ("snap-always") makes one swipe move one photo.
 */
export function PhotoLightbox({
  photos,
  start,
  open,
  onClose,
  lang,
}: {
  photos: string[];
  start: number;
  open: boolean;
  onClose: () => void;
  lang: "sv" | "en";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(start);
  const sv = lang === "sv";

  // Jump straight to the tapped photo when the viewer opens.
  useEffect(() => {
    if (!open) return;
    setIndex(start);
    const place = () => {
      const t = trackRef.current;
      if (t) t.scrollLeft = start * t.clientWidth;
    };
    place();
    const raf = requestAnimationFrame(place);
    return () => cancelAnimationFrame(raf);
  }, [open, start]);

  const onScroll = () => {
    const t = trackRef.current;
    if (!t) return;
    setIndex(Math.max(0, Math.min(photos.length - 1, Math.round(t.scrollLeft / t.clientWidth))));
  };

  const go = (i: number) => {
    const t = trackRef.current;
    if (!t) return;
    const target = Math.max(0, Math.min(photos.length - 1, i));
    t.scrollTo({ left: target * t.clientWidth, behavior: "smooth" });
  };

  const arrow =
    "absolute top-1/2 -translate-y-1/2 z-10 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-0";

  return (
    <DialogPrimitive.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          data-lenis-prevent
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(index + 1);
            if (e.key === "ArrowLeft") go(index - 1);
          }}
          className="fixed inset-0 z-[60] outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0"
        >
          <DialogPrimitive.Title className="sr-only">{sv ? "Bildvisning" : "Photo viewer"}</DialogPrimitive.Title>
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="flex h-full overflow-x-auto snap-x snap-mandatory overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {photos.map((src, i) => (
              // Tapping anywhere (photo or dark area) closes; swiping does not count as a tap.
              <div
                key={src + i}
                onClick={onClose}
                className="flex h-full w-full shrink-0 snap-center snap-always items-center justify-center p-4 md:p-12"
              >
                <img
                  src={src}
                  alt={`${sv ? "Bild" : "Photo"} ${i + 1} ${sv ? "av" : "of"} ${photos.length}`}
                  draggable={false}
                  className="max-h-full max-w-full rounded-lg object-contain select-none"
                />
              </div>
            ))}
          </div>

          {photos.length > 1 && (
            <>
              <button type="button" onClick={() => go(index - 1)} disabled={index === 0} aria-label={sv ? "Föregående bild" : "Previous photo"} className={`${arrow} left-4`}>
                ←
              </button>
              <button type="button" onClick={() => go(index + 1)} disabled={index === photos.length - 1} aria-label={sv ? "Nästa bild" : "Next photo"} className={`${arrow} right-4`}>
                →
              </button>
              <p className="pointer-events-none absolute bottom-5 inset-x-0 text-center text-[11px] uppercase tracking-[0.3em] text-white/70" aria-live="polite">
                {index + 1} / {photos.length}
              </p>
            </>
          )}

          <DialogPrimitive.Close className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
            <X className="h-5 w-5" />
            <span className="sr-only">{sv ? "Stäng" : "Close"}</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

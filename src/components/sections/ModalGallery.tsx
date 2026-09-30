import { useRef, useState } from "react";

/**
 * All the gallery photos, found automatically.
 * import.meta.glob is a Vite feature: at build time it finds every file that
 * matches the pattern and hands us a map of { "file path": "image url" }.
 * So adding a photo = dropping a file in src/assets/photos/gallery/<card>/.
 * No code change needed. Files are shown in name order (01.jpg, 02.jpg...).
 */
const files = import.meta.glob("/src/assets/photos/gallery/*/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export function galleryFor(folder: string): string[] {
  return Object.keys(files)
    .filter((path) => path.includes(`/gallery/${folder}/`))
    .sort()
    .map((path) => files[path]);
}

/**
 * Swipe row of photos inside a card's popup (modal), placed under the text.
 * Photos keep their own shape: every photo gets the same height and its
 * natural width, so nothing important gets cropped away.
 * The next photo peeks in at the edge, which shows that you can swipe.
 * The photos only load when the popup opens, because the popup's content
 * isn't on the page until then.
 */
export function ModalGallery({ photos, label, lang }: { photos: string[]; label: string; lang: "sv" | "en" }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const sv = lang === "sv";

  if (photos.length === 0) return null;

  // Which photo is closest to the centre of the row?
  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(track.children).forEach((el, i) => {
      const e = el as HTMLElement;
      const d = Math.abs(e.offsetLeft + e.offsetWidth / 2 - mid);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setIndex(best);
  };

  const go = (i: number) => {
    const track = trackRef.current;
    const el = track?.children[Math.max(0, Math.min(photos.length - 1, i))] as HTMLElement | undefined;
    if (!track || !el) return;
    track.scrollTo({ left: el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2, behavior: "smooth" });
  };

  return (
    <div className="pt-2">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="-mx-6 px-6 flex gap-3 overflow-x-auto snap-x snap-mandatory overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${label}, ${sv ? "bild" : "photo"} ${i + 1}`}
            draggable={false}
            className="h-64 md:h-80 w-auto max-w-[85%] shrink-0 snap-center rounded-2xl object-cover"
          />
        ))}
      </div>

      {/* Dots, counter and arrows */}
      {photos.length > 1 && (
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {photos.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => go(i)}
                aria-label={`${sv ? "Visa bild" : "Show photo"} ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-foreground" : "w-2 bg-foreground/25 hover:bg-foreground/50"}`}
              />
            ))}
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              disabled={index === 0}
              aria-label={sv ? "Föregående bild" : "Previous photo"}
              className="h-9 w-9 rounded-full border border-foreground/25 transition-colors hover:bg-foreground/5 disabled:opacity-30"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              disabled={index === photos.length - 1}
              aria-label={sv ? "Nästa bild" : "Next photo"}
              className="h-9 w-9 rounded-full border border-foreground/25 transition-colors hover:bg-foreground/5 disabled:opacity-30"
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export type TimelineItem = {
  org: string;
  role: string;
  context?: string;
  period: string;
  feature?: boolean;
  to?: string;
  cta?: string;
  detail: string[];
};

export function HorizontalTimeline({
  items,
  fallbackCta,
}: {
  items: TimelineItem[];
  fallbackCta: string;
}) {
  const [selected, setSelected] = useState(0);
  const item = items[selected];

  return (
    <div className="mt-10 md:mt-14">
      <div className="overflow-x-auto pb-3" aria-label="Timeline">
        <div className="relative grid grid-cols-5 min-w-[740px] md:min-w-0">
          <span aria-hidden className="absolute top-[38px] left-[10%] right-[10%] h-px bg-border" />
          {items.map((entry, index) => (
            <div key={`${entry.org}-${index}`} className="relative flex justify-center min-w-0">
              <Button
                type="button"
                variant="ghost"
                aria-label={`${entry.period}: ${entry.org}`}
                aria-pressed={selected === index}
                aria-controls="timeline-detail"
                onClick={() => setSelected(index)}
                className="group relative flex h-[106px] w-full flex-col items-center justify-start gap-0 px-1 py-0 text-foreground hover:bg-transparent hover:text-foreground focus-visible:ring-accent"
              >
                <span className="h-[30px] flex items-center text-center text-[10px] uppercase tracking-[0.16em] text-accent">
                  {entry.period}
                </span>
                <span
                  aria-hidden
                  className={`relative z-10 mt-px size-4 shrink-0 rounded-full border-2 transition-all duration-200 motion-reduce:transition-none ${selected === index ? "border-accent bg-accent ring-4 ring-background outline outline-1 outline-accent" : "border-sage bg-background group-hover:border-accent group-hover:bg-accent group-focus-visible:border-accent"}`}
                />
                <span className={`mt-5 max-w-full text-center font-serif text-lg leading-tight whitespace-normal break-words transition-opacity duration-200 motion-reduce:transition-none ${selected === index ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"}`}>
                  {entry.org}
                </span>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {item && (
        <article
          id="timeline-detail"
          key={selected}
          className="mt-5 grid gap-6 border-t border-border pt-8 md:mt-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-12 md:pt-9 animate-in fade-in duration-300 motion-reduce:animate-none"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-accent">{item.period}</p>
            <h3 className="mt-2 font-serif text-3xl md:text-4xl leading-tight text-balance">{item.org}</h3>
            <p className="mt-2 font-serif italic text-lg md:text-xl leading-snug text-foreground/70">{item.role}</p>
            {item.context && (
              <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-foreground/50">{item.context}</p>
            )}
          </div>
          <div className="md:border-l md:border-border md:pl-10 space-y-3">
            {item.detail.map((paragraph) => (
              <p key={paragraph} className="text-base leading-[1.75] text-foreground/75">{paragraph}</p>
            ))}
            {item.to && (
              <div className="pt-3">
                <Link
                  to={item.to}
                  className="inline-flex items-center gap-2 border-b border-accent pb-1 text-[11px] uppercase tracking-[0.18em] hover:text-accent transition-colors"
                >
                  {item.cta ?? fallbackCta} <span aria-hidden>→</span>
                </Link>
              </div>
            )}
          </div>
        </article>
      )}
    </div>
  );
}
import { type ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8 space-y-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
            {eyebrow}
          </p>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.05] text-balance">
            {title}
          </h1>
        </div>
        {intro && (
          <div className="md:col-span-4">
            <p className="text-base leading-relaxed text-foreground/70">
              {intro}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

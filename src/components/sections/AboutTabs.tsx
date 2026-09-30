import { useEffect, useState } from "react";

const sections = [
  { id: "vagleder", sv: "Det som vägleder oss", en: "What Guides Us" },
  { id: "mission", sv: "Vår mission", en: "Our Mission" },
  { id: "grundaren", sv: "Möt grundaren", en: "Meet the Founder" },
  { id: "heart", sv: "Hjärtat av ROHANI", en: "The Heart of ROHANI" },
  { id: "samarbeten", sv: "Samarbeten & sponsorer", en: "Partners & Sponsors" },
] as const;

export function AboutTabs({ lang }: { lang: "sv" | "en" }) {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    function onScroll() {
      let current: string = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 180) current = s.id;
      }
      setActive(current);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav
      aria-label={lang === "en" ? "About sections" : "Om-sektioner"}
      className="sticky top-[4.5rem] z-40 border-b border-border/60 bg-background/90 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex gap-6 md:gap-12 md:justify-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {sections.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => scrollTo(s.id)}
            aria-current={active === s.id ? "true" : undefined}
            className={`shrink-0 py-5 text-xs font-serif uppercase tracking-[0.22em] font-medium border-b-2 -mb-px transition-colors whitespace-nowrap ${
              active === s.id
                ? "border-accent text-foreground"
                : "border-transparent text-foreground/55 hover:text-foreground"
            }`}
          >
            {lang === "en" ? s.en : s.sv}
          </button>
        ))}
      </div>
    </nav>
  );
}

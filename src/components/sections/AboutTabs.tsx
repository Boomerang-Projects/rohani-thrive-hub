import { useEffect, useState } from "react";

const sections = [
  { id: "vagleder", sv: "Det som vägleder oss", en: "What Guides Us" },
  { id: "mission", sv: "Vår mission", en: "Our Mission" },
  { id: "metod", sv: "Så arbetar vi", en: "How we work" },
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
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center gap-2 md:gap-3 md:justify-center overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {sections.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => scrollTo(s.id)}
            aria-current={active === s.id ? "true" : undefined}
            className={`shrink-0 py-2.5 px-5 text-sm font-serif uppercase tracking-[0.14em] font-semibold rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap ${
              active === s.id
                ? "bg-foreground/10 text-foreground"
                : "bg-foreground/5 text-foreground hover:bg-foreground/10"
            }`}
          >
            {lang === "en" ? s.en : s.sv}
          </button>
        ))}
      </div>
    </nav>
  );
}

import { Link } from "@tanstack/react-router";

export type ExperienceSection = "clinical" | "organisational" | "community" | "media";

const tabs = [
  { key: "clinical", to: "/experience", sv: "Kliniskt arbete", en: "Clinical Practice" },
  { key: "organisational", to: "/experience/organisational", sv: "Organisatoriskt arbete", en: "Organisational Work" },
  { key: "community", to: "/experience/social", sv: "Social påverkan", en: "Social Impact" },
  { key: "media", to: "/experience/media", sv: "I media", en: "In the Media" },
] as const;

export function ExperienceTabs({ lang, active }: { lang: "sv" | "en"; active: ExperienceSection }) {
  return (
    <nav aria-label={lang === "en" ? "Experience categories" : "Erfarenhetskategorier"} className="sticky top-[4.5rem] z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center gap-2 md:gap-3 md:justify-center overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((t) => {
          const isActive = t.key === active;
          return (
            <Link
              key={t.key}
              to={t.to}
              aria-current={isActive ? "page" : undefined}
              className={`shrink-0 py-2.5 px-5 text-sm font-serif uppercase tracking-[0.14em] font-semibold rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                isActive ? "bg-foreground/10 text-foreground" : "bg-foreground/5 text-foreground hover:bg-foreground/10"
              }`}
            >
              {lang === "en" ? t.en : t.sv}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

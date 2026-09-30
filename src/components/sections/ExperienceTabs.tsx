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
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex gap-6 md:gap-12 md:justify-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((t) => {
          const isActive = t.key === active;
          return (
            <Link
              key={t.key}
              to={t.to}
              aria-current={isActive ? "page" : undefined}
              className={`shrink-0 py-5 text-xs font-serif uppercase tracking-[0.22em] font-medium border-b-2 -mb-px transition-colors whitespace-nowrap ${
                isActive ? "border-accent text-foreground" : "border-transparent text-foreground/55 hover:text-foreground"
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

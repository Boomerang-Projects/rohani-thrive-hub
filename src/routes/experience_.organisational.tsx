import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { ExperienceEn } from "@/components/en/ExperienceEn";
import { ExperiencePageSv } from "@/components/sections/ExperienceSv";

export const Route = createFileRoute("/experience_/organisational")({
  head: () => ({
    meta: [
      { title: "Organisatoriskt arbete - ROHANI" },
      { name: "description", content: "Välbefinnande i arbetslivet: meditation för vårdpersonal och workshops för organisationer som Somaya Stödjour." },
      { property: "og:title", content: "Organisatoriskt arbete - ROHANI" },
      { property: "og:description", content: "Välbefinnande i arbetslivet: meditation för vårdpersonal och workshops för organisationer som Somaya Stödjour." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperienceOrganisationalPage,
});

function ExperienceOrganisationalPage() {
  const { lang } = useLang();
  return lang === "en" ? <ExperienceEn section="organisational" /> : <ExperiencePageSv section="organisational" />;
}

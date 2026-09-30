import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { ExperienceEn } from "@/components/en/ExperienceEn";
import { ExperiencePageSv } from "@/components/sections/ExperienceSv";

export const Route = createFileRoute("/experience_/social")({
  head: () => ({
    meta: [
      { title: "Social påverkan — ROHANI" },
      { name: "description", content: "Samhällsinitiativ för ungas välbefinnande tillsammans med ABF Södertörn och Haninge kommun." },
      { property: "og:title", content: "Social påverkan — ROHANI" },
      { property: "og:description", content: "Samhällsinitiativ för ungas välbefinnande tillsammans med ABF Södertörn och Haninge kommun." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperienceSocialPage,
});

function ExperienceSocialPage() {
  const { lang } = useLang();
  return lang === "en" ? <ExperienceEn section="community" /> : <ExperiencePageSv section="community" />;
}

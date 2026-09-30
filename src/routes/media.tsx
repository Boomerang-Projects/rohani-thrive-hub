import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { ExperienceEn } from "@/components/en/ExperienceEn";
import { ExperiencePageSv } from "@/components/sections/ExperienceSv";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "I media — ROHANI" },
      { name: "description", content: "ROHANI i Sveriges Radio, Psykologtidningen och poddar om psykologi, kultur och välbefinnande." },
      { property: "og:title", content: "I media — ROHANI" },
      { property: "og:description", content: "ROHANI i Sveriges Radio, Psykologtidningen och poddar om psykologi, kultur och välbefinnande." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MediaPage,
});

function MediaPage() {
  const { lang } = useLang();
  return lang === "en" ? <ExperienceEn section="media" /> : <ExperiencePageSv section="media" />;
}

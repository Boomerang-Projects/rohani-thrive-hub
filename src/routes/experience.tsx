import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { ExperienceEn } from "@/components/en/ExperienceEn";
import { ExperiencePageSv } from "@/components/sections/ExperienceSv";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      {
        title: "Erfarenhet - Psykologi, välbefinnande & mänsklig utveckling | Rohani",
      },
      {
        name: "description",
        content:
          "Resan bakom ROHANI: klinisk psykologi, organisatoriskt välbefinnande, samhällsinitiativ och upplevelsebaserade retreats i Sverige och internationellt.",
      },
      { property: "og:title", content: "Erfarenhet - Rohani" },
      {
        property: "og:description",
        content:
          "Klinisk psykologi, välbefinnande i arbetslivet, ungdomsinitiativ och retreats - miljöerna, organisationerna och initiativen ROHANI har bidragit till.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});


function ExperiencePage() {
  const { lang } = useLang();
  return lang === "en" ? <ExperienceEn section="clinical" /> : <ExperiencePageSv section="clinical" />;
}

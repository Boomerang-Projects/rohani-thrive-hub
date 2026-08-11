import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/sections/PageHero";
import { Impact } from "@/components/sections/Impact";
import { Testimonials } from "@/components/sections/Testimonials";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience Rohani — Impact, Outcomes & Client Voices" },
      {
        name: "description",
        content:
          "What it is like to work with Rohani: the outcomes organizations and individuals experience, and words from the people we have worked with.",
      },
      { property: "og:title", content: "Experience Rohani" },
      {
        property: "og:description",
        content:
          "The outcomes, impact and lived experience of working with Rohani — for organizations, teams and individuals.",
      },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Experience"
          title={<>What it feels like to work with Rohani</>}
          intro="Calm, rigorous and human — designed around the people in the room, and the change they came for."
        />
        <Impact />
        <Testimonials />
      </main>
      <SiteFooter />
    </div>
  );
}

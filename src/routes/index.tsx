import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Impact } from "@/components/sections/Impact";
import { Founder } from "@/components/sections/Founder";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Rohani — Peace of Mind | Corporate Wellbeing & Leadership Development",
      },
      {
        name: "description",
        content:
          "Psychology-based wellbeing, leadership development and mindfulness programs for international organizations, HR teams, executives and individuals.",
      },
      {
        property: "og:title",
        content: "Rohani — Peace of Mind",
      },
      {
        property: "og:description",
        content:
          "Helping people and organizations thrive through psychology, mindfulness and human development.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Impact />
        <Founder />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/sections/PageHero";
import { Founder } from "@/components/sections/Founder";
import founderImage from "@/assets/founder-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rohani — A Psychologist's Approach to Human Development" },
      {
        name: "description",
        content:
          "Rohani bridges psychology, mindfulness and leadership for international organizations and individuals seeking sustainable wellbeing and meaningful growth.",
      },
      { property: "og:title", content: "About Rohani" },
      {
        property: "og:description",
        content:
          "A psychology-based practice for organizations, leaders and individuals who care about how they live and lead.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const principles = [
  {
    title: "Evidence-based",
    body:
      "Every program is anchored in modern psychology, behavioral science and clinical mindfulness — not trends.",
  },
  {
    title: "Human first",
    body:
      "We design experiences that meet people where they are, with warmth, dignity and genuine presence.",
  },
  {
    title: "Internationally fluent",
    body:
      "We work fluently across cultures, industries and seniority levels, from boardrooms to retreat spaces.",
  },
  {
    title: "Quietly premium",
    body:
      "Every detail is considered. The work feels calm because it is rigorous underneath.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="ABOUT ROHANI"
          title={<>Elevating wellbeing, sustainability and quality of life through modern psychology.</>}
          intro="Rohani was founded to bridge psychology, mindfulness and human development — for the people, teams and organizations who shape our world."
        />

        <section className="px-6 md:px-10 max-w-7xl mx-auto pb-20 md:pb-28">
          <img
            src={founderImage}
            alt="The Rohani practice"
            width={1600}
            height={900}
            loading="lazy"
            className="w-full aspect-[16/9] object-cover rounded-3xl"
          />
        </section>

        <section className="bg-secondary py-24 md:py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-5">
                Our Philosophy
              </p>
              <h2 className="text-3xl md:text-4xl font-serif leading-tight">
                Wellbeing is not a benefit. It is the foundation of everything good work rests on.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-foreground/75 leading-relaxed">
              <p>
                We believe that lasting performance, healthy cultures and
                resilient leadership begin with the same thing — people who feel
                safe, seen and capable of leading themselves.
              </p>
              <p>
                Rohani exists for HR leaders, executives and international
                organizations who want to invest in their people seriously, and
                for individuals ready to grow with intention.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-5">
              What guides us
            </p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Four principles, in everything we do
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="p-8 md:p-10 border border-border rounded-3xl bg-background"
              >
                <p className="font-serif text-3xl text-accent mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-2xl font-serif mb-3">{p.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <Founder />

        <section className="bg-primary text-primary-foreground py-24 px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-balance">
              Ready to begin a conversation?
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              We work with organizations and individuals worldwide. Most
              partnerships begin with a quiet 30-minute call.
            </p>
            <Link
              to="/contact"
              className="inline-flex px-8 py-4 bg-background text-foreground rounded-full text-xs uppercase tracking-[0.22em] hover:bg-secondary transition-all"
            >
              Book a Discovery Call
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

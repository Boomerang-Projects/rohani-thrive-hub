import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/sections/PageHero";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      {
        title:
          "Workshops — Workplace Wellbeing, Resilience & Psychological Safety | Rohani",
      },
      {
        name: "description",
        content:
          "Evidence-based workshops on workplace wellbeing, leadership, emotional intelligence, resilience training, psychological safety and mindfulness at work.",
      },
      { property: "og:title", content: "Workshops at Rohani" },
      {
        property: "og:description",
        content:
          "Half-day, full-day and multi-session workshops for HR teams, leaders and international organizations.",
      },
      { property: "og:url", content: "/workshops" },
    ],
    links: [{ rel: "canonical", href: "/workshops" }],
  }),
  component: WorkshopsPage,
});

const workshops = [
  {
    duration: "Half day",
    title: "Psychological Safety in Practice",
    body:
      "Equip leaders and teams with the language, behaviours and small rituals that build trust and honest conversation at work.",
    audience: "Leaders · Teams",
  },
  {
    duration: "Full day",
    title: "Mindful Leadership",
    body:
      "An immersive day blending psychology, mindfulness and self-leadership for executives navigating complexity.",
    audience: "Executives",
  },
  {
    duration: "Multi-session",
    title: "Resilience for High Performers",
    body:
      "A four-part program for sustaining clarity, energy and presence under pressure, grounded in clinical research.",
    audience: "Senior professionals",
  },
  {
    duration: "Half day",
    title: "Emotional Intelligence at Work",
    body:
      "Practical tools to recognise, regulate and use emotions skillfully across teams, projects and difficult conversations.",
    audience: "All levels",
  },
  {
    duration: "Keynote",
    title: "From Stress to Sustainable Performance",
    body:
      "A signature talk on what modern psychology teaches us about performing well without burning out.",
    audience: "Conferences · Off-sites",
  },
  {
    duration: "Custom",
    title: "Bespoke programs",
    body:
      "Multi-month engagements designed around your organization's culture, ambitions and people.",
    audience: "HR & Leadership teams",
  },
];

function WorkshopsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Workshops"
          title={<>Workshops, talks and programs for modern organizations</>}
          intro="Single sessions and multi-month programs that translate psychology into practical, lasting change for your people."
        />

        <section className="px-6 md:px-10 max-w-7xl mx-auto pb-24 md:pb-32">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {workshops.map((w) => (
              <article
                key={w.title}
                className="group p-8 md:p-10 bg-background border border-border rounded-3xl hover:border-forest transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-accent">
                    {w.duration}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-foreground/45">
                    {w.audience}
                  </span>
                </div>
                <h2 className="font-serif text-2xl md:text-[1.8rem] mb-4 leading-tight">
                  {w.title}
                </h2>
                <p className="text-foreground/70 leading-relaxed">{w.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-secondary py-24 px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
              Bring Rohani to your team
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-balance">
              Designed around your organization
            </h2>
            <p className="text-foreground/70 text-lg">
              Every workshop is shaped to your people, your context and your goals.
              Tell us a little about where you are, and we'll suggest a starting point.
            </p>
            <Link
              to="/contact"
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-full text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-all"
            >
              Request a proposal
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

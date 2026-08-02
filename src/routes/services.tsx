import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/sections/PageHero";
import { Impact } from "@/components/sections/Impact";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title:
          "Services — Corporate Wellbeing, Leadership Development & Coaching | Rohani",
      },
      {
        name: "description",
        content:
          "Psychology-based services for organizations and individuals: leadership development, employee wellbeing, psychological safety, stress prevention, coaching and mindfulness.",
      },
      { property: "og:title", content: "Rohani Services" },
      {
        property: "og:description",
        content:
          "Programs that strengthen wellbeing, leadership and sustainable performance — for international teams and high-performing individuals.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const pillars = [
  {
    eyebrow: "01 · For organizations",
    title: "Organizations",
    description:
      "Designed for HR leaders, People & Culture teams and executives building healthy, high-performing cultures across borders.",
    items: [
      "Leadership Development",
      "Employee Wellbeing",
      "Psychological Safety",
      "Stress Prevention",
      "Team Development",
    ],
    cta: { label: "Discuss a partnership", to: "/contact" as const },
  },
  {
    eyebrow: "02 · For individuals",
    title: "Individuals",
    description:
      "Confidential one-to-one work for leaders, executives and ambitious professionals committed to growth that lasts.",
    items: ["Coaching", "Personal Growth", "Self-Leadership", "Mindfulness"],
    cta: { label: "Begin a conversation", to: "/contact" as const },
  },
  {
    eyebrow: "03 · For teams & people",
    title: "Retreats & Experiences",
    description:
      "Immersive off-sites and transformational experiences in considered, restorative environments.",
    items: [
      "Wellbeing Retreats",
      "Corporate Retreats",
      "Transformational Experiences",
    ],
    cta: { label: "Enquire about retreats", to: "/contact" as const },
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Services"
          title={<>Programs designed for how people actually grow</>}
          intro="From corporate wellbeing strategies to executive coaching and immersive retreats, every engagement is shaped around the people and the outcomes that matter."
        />

        <section className="relative z-10 px-6 md:px-10 max-w-7xl mx-auto mt-0 md:-mt-2 -mb-16 md:-mb-20">
          <div className="w-32 h-32 md:w-40 md:h-40 md:-ml-10">
            <div className="bg-secondary rounded-3xl p-5 md:p-6 w-full h-full flex items-center justify-center shadow-sm">
              <p className="font-serif text-xs md:text-sm text-center leading-snug text-foreground/80">
                Sustainable change happens when people feel safe, understood and
                equipped with practical tools for everyday life and work.
              </p>
            </div>
          </div>
        </section>





        <section className="px-6 md:px-10 max-w-7xl mx-auto pb-24 md:pb-32 space-y-10">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="grid md:grid-cols-12 gap-10 p-8 md:p-12 border border-border rounded-3xl bg-background"
            >
              <div className="md:col-span-5 space-y-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                  {p.eyebrow}
                </p>
                <h2 className="text-3xl md:text-4xl font-serif leading-tight">
                  {p.title}
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  {p.description}
                </p>
                <Link
                  to={p.cta.to}
                  className="inline-flex text-xs uppercase tracking-[0.22em] border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
                >
                  {p.cta.label}
                </Link>
              </div>
              <div className="md:col-span-7">
                <ul className="grid sm:grid-cols-2 gap-x-8">
                  {p.items.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-baseline justify-between gap-6 py-5 border-b border-border last:border-b-0"
                    >
                      <span className="text-base md:text-lg">{item}</span>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <Impact />

        <section className="py-24 px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-balance">
              Not sure what fits? Let's talk.
            </h2>
            <p className="text-foreground/70 text-lg">
              Every organization is different. We'll listen first, then suggest
              a path that makes sense for your people and your context.
            </p>
            <Link
              to="/contact"
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-full text-xs uppercase tracking-[0.22em] hover:bg-primary/90 transition-all"
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

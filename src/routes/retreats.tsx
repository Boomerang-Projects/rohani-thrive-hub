import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/sections/PageHero";
import retreatImage from "@/assets/retreat-landscape.jpg";
import heroImage from "@/assets/hero-office.jpg";

export const Route = createFileRoute("/retreats")({
  head: () => ({
    meta: [
      {
        title: "Retreats — Corporate, Wellbeing & Transformational | Rohani",
      },
      {
        name: "description",
        content:
          "Immersive corporate retreats, wellbeing retreats and transformational experiences led by a psychologist in considered Scandinavian and international settings.",
      },
      { property: "og:title", content: "Rohani Retreats" },
      {
        property: "og:description",
        content:
          "Restorative, evidence-based retreats for teams and individuals who want to return clearer, calmer and more connected.",
      },
      { property: "og:url", content: "/retreats" },
      { property: "og:image", content: retreatImage },
    ],
    links: [{ rel: "canonical", href: "/retreats" }],
  }),
  component: RetreatsPage,
});

const retreats = [
  {
    image: heroImage,
    kind: "Corporate Retreat",
    title: "Leadership Reset",
    body:
      "A two- or three-day off-site for leadership teams: psychological safety, alignment, and a clearer way forward.",
  },
  {
    image: retreatImage,
    kind: "Wellbeing Retreat",
    title: "Stillness & Strength",
    body:
      "An intimate retreat combining mindfulness, somatic practice and psychology — for professionals who need to truly arrive.",
  },
  {
    image: heroImage,
    kind: "Transformational Experience",
    title: "The Inner Quarter",
    body:
      "A signature 4-day experience for senior leaders ready to rebuild their relationship with work and meaning.",
  },
];

function RetreatsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Retreats"
          title={<>Spaces to pause, recalibrate and grow</>}
          intro="Considered retreats in restorative environments — designed for teams and individuals who take their wellbeing and leadership seriously."
        />

        <section className="px-6 md:px-10 max-w-7xl mx-auto pb-12">
          <img
            src={retreatImage}
            alt="Misty Scandinavian landscape at dawn"
            width={1920}
            height={1080}
            loading="lazy"
            className="w-full aspect-[16/9] object-cover rounded-3xl"
          />
        </section>

        <section className="py-20 md:py-28 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="space-y-16">
            {retreats.map((r, i) => (
              <article
                key={r.title}
                className={`grid md:grid-cols-12 gap-10 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="md:col-span-6">
                  <img
                    src={r.image}
                    alt={r.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover rounded-3xl"
                  />
                </div>
                <div className="md:col-span-6 space-y-5 md:px-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                    {r.kind}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                    {r.title}
                  </h2>
                  <p className="text-foreground/70 text-lg leading-relaxed">
                    {r.body}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex text-xs uppercase tracking-[0.22em] border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
                  >
                    Enquire about this retreat
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-24 px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-balance">
              Design a private retreat for your team
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              We curate fully bespoke retreats for leadership teams and
              organizations — in Scandinavia and internationally.
            </p>
            <Link
              to="/contact"
              className="inline-flex px-8 py-4 bg-background text-foreground rounded-full text-xs uppercase tracking-[0.22em] hover:bg-secondary transition-all"
            >
              Start a conversation
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

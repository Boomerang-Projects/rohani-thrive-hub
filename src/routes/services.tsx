import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/sections/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title:
          "Services — Psychology, Wellbeing & Sustainable Performance | Rohani",
      },
      {
        name: "description",
        content:
          "ROHANI services for individuals, teams and communities: psychology, mindfulness, breathwork, movement, workshops, talks, retreats and wellbeing programs grounded in modern psychology and human connection.",
      },
      { property: "og:title", content: "Rohani Services" },
      {
        property: "og:description",
        content:
          "Human-first psychology, mindfulness and wellbeing programs for individuals, organizations and communities. Grounded in science. Guided by humanity. Designed for lasting impact.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

/* ---------- Data ---------- */

const individualServices = [
  {
    title: "Psychology & Personal Development",
    body: [
      "Whether you are navigating stress, life transitions, burnout, anxiety, or simply seeking greater clarity and direction, ROHANI offers psychology-informed support that meets you where you are.",
      "Sessions integrate evidence-based psychological principles with practical tools that strengthen resilience, emotional awareness, and long-term wellbeing.",
      "Together, we work toward sustainable change — not by fixing who you are, but by helping you understand yourself more deeply and create lasting patterns that support the life you want to live.",
    ],
    listLabel: "Areas of focus include:",
    items: [
      "Stress & burnout",
      "Anxiety & emotional wellbeing",
      "Self-esteem & confidence",
      "Personal growth",
      "Life transitions",
      "Relationships & boundaries",
      "Emotional regulation",
      "Values & purpose",
      "Sustainable habits & lifestyle change",
    ],
  },
  {
    title: "Mindfulness, Breathwork & Nervous System Regulation",
    body: [
      "Modern life keeps many of us in a constant state of activation.",
      "Through guided mindfulness, breathwork, and nervous system regulation techniques, you'll learn practical ways to slow down, recover, and reconnect with yourself.",
      "These sessions are suitable both as stand-alone experiences and as a complement to psychological work.",
    ],
    listLabel: "Benefits may include:",
    items: [
      "Reduced stress",
      "Improved focus",
      "Better sleep",
      "Increased emotional resilience",
      "Greater self-awareness",
      "Enhanced recovery and energy",
    ],
  },
  {
    title: "Movement, Yoga & Embodied Wellbeing",
    body: [
      "Wellbeing isn't only about the way we think — it is something we experience through the body.",
      "ROHANI offers movement experiences that combine psychology, mindfulness, and intentional movement to cultivate presence, confidence, and vitality.",
      "Sessions may include yoga, mindful movement, mobility practices, or dance-based experiences depending on your goals.",
    ],
  },
];

const workshopCategories = [
  {
    category: "Performance & Leadership",
    topics: [
      "The Psychology of Sustainable Performance",
      "Self-Leadership",
      "IQ vs. EQ",
      "Confidence Without Perfectionism",
      "Attention in the Age of Distraction",
    ],
  },
  {
    category: "Wellbeing & Resilience",
    topics: [
      "The Science of Stress",
      "Stress Management & Burnout Prevention",
      "Nervous System Regulation",
      "Mindfulness at Work",
      "Work-Life Balance",
      "The Psychology of Wellbeing at Work",
    ],
  },
  {
    category: "Culture & Connection",
    topics: [
      "Communication, Relationships & Healthy Team Dynamics",
      "Belonging, Connection & Workplace Culture",
      "Resilience During Change",
    ],
  },
];

const teamServices = [
  {
    title: "Workshops",
    description:
      "Interactive workshops combining psychological science with practical tools employees can immediately apply.",
    hasCategories: true,
  },
  {
    title: "Talks & Keynotes",
    description:
      "Evidence-based presentations that inspire while remaining practical and actionable.",
    body: [
      "Designed for conferences, leadership events, educational institutes, and organizations seeking meaningful conversations around mental health, wellbeing, and human performance.",
      "Topics can be fully customized.",
    ],
  },
  {
    title: "Team Development & Retreats",
    description:
      "Create experiences that strengthen connection, trust, and collaboration.",
    body: [
      "ROHANI designs and facilitates tailored team days, retreats, and wellbeing experiences that may combine:",
    ],
    combine: [
      "Psychology",
      "Team-building",
      "Reflection",
      "Mindfulness",
      "Breathwork",
      "Movement",
      "Outdoor experiences",
      "Creative exercises",
    ],
    idealLabel: "Ideal for:",
    ideal: [
      "Leadership teams",
      "Company retreats",
      "Strategy days",
      "Away Days",
      "Health & Wellbeing Days",
      "Off-sites",
      "Team celebrations",
    ],
  },
  {
    title: "Wellbeing Programs",
    description:
      "Longer-term partnerships supporting healthier workplace cultures through recurring workshops, wellbeing sessions, and psychological education.",
    body: [
      "Programs are designed around your organization's goals and can include monthly sessions, leadership support, and employee wellbeing initiatives.",
    ],
  },
];

const communityExamples = [
  "Youth empowerment programs",
  "Mental health initiatives",
  "Parent education",
  "Community wellbeing events",
  "Mindfulness and movement programs",
  "Preventive mental health interventions",
];

/* ---------- Small UI helpers ---------- */

function SectionHeader({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="space-y-4">
      <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
        {index} · {eyebrow}
      </p>
      <h2 className="text-4xl md:text-5xl font-serif leading-[1.05] text-balance">
        {title}
      </h2>
    </div>
  );
}

/* ---------- Page ---------- */

function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="ROHANI Approach"
          title={<>Human&nbsp;First.</>}
          intro="ROHANI is a psychology-based wellbeing and human development practice serving individuals, teams, organizations and communities."
        />

        {/* Approach intro */}
        <section className="px-6 md:px-10 max-w-7xl mx-auto pb-16 md:pb-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
                We believe sustainable change happens when people feel safe,
                understood, and equipped with practical tools they can carry
                into everyday life.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground/70">
                Our work combines modern psychology with mindfulness, nervous
                system regulation, and experiential learning to create
                meaningful change that lasts.
              </p>
            </div>
            <div className="md:col-span-5 md:pl-8 md:border-l border-border">
              <div className="space-y-2 font-serif text-xl md:text-2xl leading-snug">
                <p>Grounded in science.</p>
                <p>Guided by humanity.</p>
                <p>Designed for lasting impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== For Individuals ===== */}
        <section className="bg-secondary/60 py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              index="01"
              eyebrow="For individuals"
              title="For Individuals"
            />

            <div className="mt-12 md:mt-16 space-y-8">
              {individualServices.map((s) => (
                <article
                  key={s.title}
                  className="grid md:grid-cols-12 gap-8 md:gap-12 p-8 md:p-12 bg-background border border-border rounded-3xl"
                >
                  <div className="md:col-span-4">
                    <h3 className="text-2xl md:text-3xl font-serif leading-tight">
                      {s.title}
                    </h3>
                  </div>
                  <div className="md:col-span-8 space-y-5">
                    {s.body.map((p, i) => (
                      <p
                        key={i}
                        className="text-base md:text-lg leading-relaxed text-foreground/75"
                      >
                        {p}
                      </p>
                    ))}
                    {s.items && (
                      <div className="pt-4">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50 mb-4">
                          {s.listLabel}
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                          {s.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-baseline gap-3 text-base text-foreground/80"
                            >
                              <span className="size-1 rounded-full bg-accent/70 mt-2 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== For Teams & Organizations ===== */}
        <section className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              index="02"
              eyebrow="For teams & organizations"
              title="For Teams & Organizations"
            />

            <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-10 p-8 md:p-12 bg-background border border-border rounded-3xl">
              <div className="md:col-span-5 space-y-5">
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">
                  Sustainable Performance Starts with People
                </h3>
              </div>
              <div className="md:col-span-7 space-y-5 text-base md:text-lg leading-relaxed text-foreground/75">
                <p>
                  Healthy organizations are built by people who have the
                  psychological resources and regulated nervous systems to
                  thrive.
                </p>
                <p>
                  ROHANI partners with companies, educational institutes, and
                  organizations to strengthen wellbeing, resilience, and
                  sustainable performance through evidence-based psychology and
                  engaging, practical experiences.
                </p>
                <p>
                  Every collaboration is tailored to the needs, culture, and
                  objectives of your organization.
                </p>
                <p>
                  Whether you're planning a leadership workshop, wellbeing
                  initiative, conference, or team development day, the content is
                  designed to create meaningful and lasting impact.
                </p>
              </div>
            </div>

            {/* Sub-services */}
            <div className="mt-10 space-y-10">
              {teamServices.map((svc) => (
                <article
                  key={svc.title}
                  className="p-8 md:p-12 bg-background border border-border rounded-3xl"
                >
                  <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                    <div className="md:col-span-4 space-y-4">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                        {svc.title}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-serif leading-tight">
                        {svc.title}
                      </h3>
                      <p className="text-base leading-relaxed text-foreground/70">
                        {svc.description}
                      </p>
                    </div>
                    <div className="md:col-span-8 space-y-6">
                      {svc.body?.map((p, i) => (
                        <p
                          key={i}
                          className="text-base md:text-lg leading-relaxed text-foreground/75"
                        >
                          {p}
                        </p>
                      ))}

                      {svc.hasCategories && (
                        <div className="space-y-8 pt-2">
                          <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                            Popular topics include:
                          </p>
                          {workshopCategories.map((cat) => (
                            <div key={cat.category}>
                              <p className="font-serif text-lg md:text-xl mb-4 text-foreground">
                                {cat.category}
                              </p>
                              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                                {cat.topics.map((topic) => (
                                  <li
                                    key={topic}
                                    className="flex items-baseline gap-3 text-base text-foreground/80"
                                  >
                                    <span className="size-1 rounded-full bg-accent/70 mt-2 shrink-0" />
                                    <span>{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {svc.combine && (
                        <div className="pt-2">
                          <ul className="flex flex-wrap gap-2">
                            {svc.combine.map((item) => (
                              <li
                                key={item}
                                className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground/80"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {svc.ideal && (
                        <div className="pt-4">
                          <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50 mb-4">
                            {svc.idealLabel}
                          </p>
                          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                            {svc.ideal.map((item) => (
                              <li
                                key={item}
                                className="flex items-baseline gap-3 text-base text-foreground/80"
                              >
                                <span className="size-1 rounded-full bg-accent/70 mt-2 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== For Communities ===== */}
        <section className="bg-secondary/60 py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              index="03"
              eyebrow="For communities"
              title="For Communities"
            />

            <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 md:gap-12 p-8 md:p-12 bg-background border border-border rounded-3xl">
              <div className="md:col-span-5 space-y-5">
                <h3 className="text-2xl md:text-3xl font-serif leading-tight">
                  Programs that Create Meaningful Change
                </h3>
              </div>
              <div className="md:col-span-7 space-y-6">
                <p className="text-base md:text-lg leading-relaxed text-foreground/75">
                  ROHANI collaborates with municipalities, schools, NGOs, and
                  community organizations to design accessible programs that
                  strengthen wellbeing, resilience, and belonging.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/75">
                  Projects are tailored to each community and may include
                  workshops, group programs, retreats, or educational
                  initiatives for children, adolescents, adults, or families.
                </p>
                <div className="pt-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50 mb-4">
                    Examples include:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {communityExamples.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-3 text-base text-foreground/80"
                      >
                        <span className="size-1 rounded-full bg-accent/70 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-24 md:py-32 px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-balance">
              Let's design something meaningful, together.
            </h2>
            <p className="text-foreground/70 text-lg">
              Every person, team and community is different. We'll listen first,
              then shape a path that fits your context and goals.
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

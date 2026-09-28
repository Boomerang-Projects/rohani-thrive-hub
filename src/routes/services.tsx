import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ServiceCard, CardList } from "@/components/sections/ServiceCard";
import servicesHero from "@/assets/services-hero.jpg";
import servicesIndividuals from "@/assets/services-individuals.jpg";
import servicesTeams from "@/assets/services-teams.jpg";
import servicesTexture from "@/assets/services-texture.jpg";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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

const sections = [
  { id: "individuals", index: "01", label: "For Individuals" },
  { id: "teams", index: "02", label: "For Teams & Organizations" },
  { id: "communities", index: "03", label: "For Communities" },
];

/* ---------- Helpers ---------- */

function SectionHeader({
  id,
  index,
  title,
  intro,
}: {
  id: string;
  index: string;
  title: string;
  intro?: string;
}) {
  return (
    <div
      id={id}
      className="scroll-mt-28 grid md:grid-cols-12 gap-8 md:gap-12 items-end"
    >
      <div className="md:col-span-7 space-y-4">
        <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
          {index} · {title}
        </p>
        <h2 className="text-4xl md:text-5xl font-serif leading-[1.05] text-balance">
          {title}
        </h2>
      </div>
      {intro && (
        <div className="md:col-span-5">
          <p className="text-base leading-relaxed text-foreground/70">
            {intro}
          </p>
        </div>
      )}
    </div>
  );
}

function Body({ text }: { text: string }) {
  return (
    <p className="text-base leading-relaxed text-foreground/75">{text}</p>
  );
}

function TeamDetail({ svc }: { svc: (typeof teamServices)[number] }) {
  return (
    <div className="space-y-5">
      {svc.body?.map((p, i) => (
        <Body key={i} text={p} />
      ))}

      {svc.hasCategories && (
        <div className="space-y-5">
          <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">
            Popular topics include:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopCategories.map((cat) => (
              <div key={cat.category}>
                <p className="font-serif text-lg mb-3">{cat.category}</p>
                <CardList items={cat.topics} />
              </div>
            ))}
          </div>
        </div>
      )}

      {svc.combine && (
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
      )}

      {svc.ideal && <CardList label={svc.idealLabel} items={svc.ideal} />}
    </div>
  );
}

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

function TeamsPanel() {
  const [open, setOpen] = useState<number | null>(null);

  const activeCol = open === null ? null : open % 2;
  const activeRow = open === null ? null : Math.floor(open / 2);

  const track = (active: number | null, i: number) =>
    active === null ? "1fr" : active === i ? "2.6fr" : "1fr";

  return (
    <div className="rounded-4xl bg-secondary p-3 sm:p-4 md:p-6 border border-foreground/[0.06]">
      <div
        className="grid gap-3 md:gap-4"
        style={{
          gridTemplateColumns: `${track(activeCol, 0)} ${track(activeCol, 1)}`,
          gridTemplateRows: `${track(activeRow, 0)} ${track(activeRow, 1)}`,
          minHeight: open === null ? "22rem" : "34rem",
          transition: `grid-template-columns 900ms ${EASE}, grid-template-rows 900ms ${EASE}, min-height 900ms ${EASE}`,
        }}
      >
        {teamServices.map((svc, i) => {
          const isOpen = open === i;
          const dimmed = open !== null && !isOpen;
          return (
            <article
              key={svc.title}
              className="group relative min-w-0 min-h-0 flex flex-col rounded-3xl border border-foreground/10 bg-background/70 px-5 py-5 sm:px-6 sm:py-6 md:px-7 md:py-6 overflow-hidden hover:border-forest/40"
              style={{
                transition: `border-color 500ms ${EASE}, background-color 700ms ${EASE}, opacity 700ms ${EASE}`,
                opacity: dimmed ? 0.72 : 1,
              }}
            >

              {/* header row */}
              <div className="flex items-baseline justify-between gap-4 pb-3 mb-3 border-b border-foreground/10">
                <h3
                  className="font-serif leading-tight text-balance"
                  style={{
                    fontSize: isOpen ? "1.7rem" : "1.3rem",
                    transition: `font-size 900ms ${EASE}`,
                  }}
                >
                  {svc.title}
                </h3>
                <span className="shrink-0 text-[10px] tracking-[0.25em] text-foreground/30 tabular-nums">
                  0{i + 1}
                </span>
              </div>

              <div className={`min-h-0 flex-1 flex flex-col ${isOpen ? "" : "justify-center"}`}>
                <p className="text-[0.95rem] leading-[1.75] text-foreground/70">
                  {svc.description}
                </p>

                <div
                  className={`min-h-0 ${isOpen ? "flex-1 overflow-y-auto pr-2 mt-6" : "overflow-hidden"}`}
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(8px)",
                    maxHeight: isOpen ? "100%" : 0,
                    transition: `opacity ${isOpen ? "800ms 350ms" : "250ms"} ${EASE}, transform ${isOpen ? "800ms 350ms" : "250ms"} ${EASE}`,
                  }}
                  aria-hidden={!isOpen}
                >
                  <TeamDetail svc={svc} />
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="mt-4 pt-3 border-t border-foreground/10 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.25em] text-foreground/60 hover:text-accent transition-colors"
              >
                <span>{isOpen ? "Read less" : "Read more"}</span>
                <span
                  aria-hidden
                  className="text-sm leading-none transition-transform duration-500 group-hover:translate-x-1"
                  style={{ transform: isOpen ? "rotate(180deg)" : undefined }}
                >
                  →
                </span>
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}




/* ---------- Page ---------- */

function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 scroll-smooth">
        {/* ===== Hero ===== */}
        <section className="px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-end">
            <div className="md:col-span-7 space-y-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                ROHANI Approach
              </p>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.02] text-balance">
                Human First.
              </h1>
              <p className="text-lg md:text-xl leading-[1.7] text-foreground/75 max-w-xl">
                ROHANI is a psychology-based wellbeing and human development
                practice serving individuals, teams, organizations and
                communities.
              </p>
            </div>

            <div className="md:col-span-5 space-y-6">
              <p className="text-base leading-[1.75] text-foreground/70">
                We believe sustainable change happens when people feel safe,
                understood, and equipped with practical tools they can carry
                into everyday life.
              </p>
              <p className="text-base leading-[1.75] text-foreground/70">
                Our work combines modern psychology with mindfulness, nervous
                system regulation, and experiential learning to create
                meaningful change that lasts.
              </p>
            </div>
          </div>

          {/* Statement + in-page nav */}
          <div className="max-w-7xl mx-auto mt-16 md:mt-20 pt-10 md:pt-14 border-t border-border/60 grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-7 space-y-3">
              <p className="font-serif text-2xl md:text-3xl leading-snug">
                Grounded in science.
              </p>
              <p className="font-serif text-2xl md:text-3xl leading-snug">
                Guided by humanity.
              </p>
              <p className="font-serif text-2xl md:text-3xl leading-snug">
                Designed for lasting impact.
              </p>
            </div>
            <nav className="md:col-span-5 flex flex-col gap-4 md:pt-2">
              <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                Explore
              </p>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group flex items-baseline justify-between gap-4 border-b border-border/70 pb-3 hover:border-accent transition-colors"
                >
                  <span className="text-base md:text-lg font-serif group-hover:text-accent transition-colors">
                    {s.label}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/40">
                    {s.index}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* ===== Atmospheric band ===== */}
        <section className="px-6 md:px-10 pb-4 md:pb-8">
          <div className="max-w-7xl mx-auto overflow-hidden rounded-4xl">
            <img
              src={servicesHero}
              alt="Calm, sunlit Scandinavian interior"
              width={1920}
              height={912}
              className="w-full h-[16rem] md:h-[26rem] object-cover"
            />
          </div>
        </section>

        {/* ===== For Individuals ===== */}
        <section className="bg-secondary/60 py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
              <div className="md:col-span-7">
                <SectionHeader
                  id="individuals"
                  index="01"
                  title="For Individuals"
                  intro="Psychology-informed support, mindfulness and embodied practice — tailored to where you are right now."
                />
              </div>
              <div className="md:col-span-5">
                <img
                  src={servicesIndividuals}
                  alt="Quiet, textured corner with linen and warm daylight"
                  width={1200}
                  height={1504}
                  loading="lazy"
                  className="w-full h-[18rem] md:h-[24rem] object-cover rounded-4xl"
                />
              </div>
            </div>
            <div className="mt-12 md:mt-16 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
              {individualServices.map((s) => (
                <ServiceCard
                  key={s.title}
                  title={s.title}
                  intro={s.body[0]}
                  className="min-h-[26rem]"
                >
                  {s.body.slice(1).map((p, i) => (
                    <Body key={i} text={p} />
                  ))}
                  {s.items && (
                    <CardList label={s.listLabel} items={s.items} />
                  )}
                </ServiceCard>
              ))}
            </div>
          </div>
        </section>

        {/* ===== For Teams & Organizations ===== */}
        <section className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div
              id="teams"
              className="scroll-mt-28 grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start"
            >
              <div className="space-y-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                  02 · For Teams &amp; Organizations
                </p>
                <h2 className="text-4xl md:text-5xl font-serif leading-[1.1] text-balance">
                  Sustainable Performance Starts with People
                </h2>
                <p className="text-base md:text-lg leading-[1.8] text-foreground/75">
                  Healthy organizations are built by people who have the
                  psychological resources and regulated nervous systems to
                  thrive.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-base leading-[1.8] text-foreground/75">
                  ROHANI partners with companies, educational institutes, and
                  organizations to strengthen wellbeing, resilience, and
                  sustainable performance through evidence-based psychology and
                  engaging, practical experiences.
                </p>
                <div className="pt-6 border-t border-border/60 space-y-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                    How we collaborate
                  </p>
                  <p className="text-base leading-[1.8] text-foreground/75">
                    Every collaboration is tailored to the needs, culture, and
                    objectives of your organization.
                  </p>
                  <p className="text-base leading-[1.8] text-foreground/75">
                    Whether you're planning a leadership workshop, wellbeing
                    initiative, conference, or team development day, the content
                    is designed to create meaningful and lasting impact.
                  </p>
                </div>
              </div>
            </div>


            <div className="mt-12 md:mt-16 overflow-hidden rounded-4xl">
              <img
                src={servicesTeams}
                alt="Sunlit meeting space set for a workshop"
                width={1600}
                height={1008}
                loading="lazy"
                className="w-full h-[14rem] md:h-[22rem] object-cover"
              />
            </div>

            <div className="mt-12 md:mt-16">
              <TeamsPanel />
            </div>
          </div>
        </section>

        {/* ===== For Communities ===== */}
        <section className="bg-secondary/60 py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div
              id="communities"
              className="scroll-mt-28 grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start"
            >
              <div className="space-y-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                  03 · For Communities
                </p>
                <h2 className="text-4xl md:text-5xl font-serif leading-[1.1] text-balance">
                  Programs that Create Meaningful Change
                </h2>
                <p className="text-base md:text-lg leading-[1.8] text-foreground/75">
                  ROHANI collaborates with municipalities, schools, NGOs, and
                  community organizations to design accessible programs that
                  strengthen wellbeing, resilience, and belonging.
                </p>
              </div>
              <div className="space-y-6 md:pt-14">
                <p className="text-base leading-[1.8] text-foreground/75">
                  Accessible programs that strengthen wellbeing, resilience, and
                  belonging.
                </p>
                <p className="text-base leading-[1.8] text-foreground/75">
                  Projects are tailored to each community and may include
                  workshops, group programs, retreats, or educational
                  initiatives for children, adolescents, adults, or families.
                </p>
              </div>
            </div>

            <div className="mt-12 md:mt-16">
              <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50 mb-6">
                Examples include:
              </p>
              <div className="grid gap-4 md:gap-5 sm:grid-cols-2 max-w-4xl">
                {communityExamples.map((item) => (
                  <article
                    key={item}
                    className="flex min-h-[7rem] w-full items-center justify-center rounded-3xl border border-border bg-background/70 px-8 py-7 transition-[transform,box-shadow,border-color] duration-500 ease-in-out will-change-transform hover:scale-[1.015] hover:shadow-lg hover:shadow-foreground/5 hover:border-forest/60"
                  >
                    <h4 className="font-serif text-lg md:text-xl leading-snug text-balance pl-4 -indent-4">
                      <span className="inline-block align-middle mb-[0.18em] mr-3 size-1 rounded-full bg-accent/70" />
                      {item}
                    </h4>
                  </article>
                ))}
              </div>



            </div>

          </div>
        </section>


        {/* Texture band */}
        <div
          aria-hidden
          className="h-24 md:h-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesTexture})` }}
        />

        {/* Closing CTA */}
        <section className="bg-primary text-primary-foreground py-24 px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-balance">
              Begin where you are.
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              Meaningful change rarely starts with having all the answers.
              Sometimes, it simply starts with a conversation.
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

import { useState, useRef, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      {
        title: "Experience — Psychology, Wellbeing & Human Development | Rohani",
      },
      {
        name: "description",
        content:
          "The professional journey behind ROHANI: clinical psychology, organisational wellbeing, community initiatives and experiential retreats across Sweden and internationally.",
      },
      { property: "og:title", content: "Experience — Rohani" },
      {
        property: "og:description",
        content:
          "Clinical psychology, workplace wellbeing, youth initiatives and retreats — the environments, organisations and initiatives ROHANI has contributed to.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

/* ---------- Data ---------- */

const navSections = [
  { id: "selected-experience", label: "Selected Experience" },
  { id: "clinical", label: "Psychology & Clinical Practice" },
  { id: "organisational", label: "Professional & Organisational Work" },
  { id: "community", label: "Community & Social Impact" },
  { id: "wellbeing", label: "Wellbeing & Experiential Work" },
  { id: "media", label: "In the Media" },
];

type TimelineItem = {
  org: string;
  role: string;
  context?: string;
  period: string;
  feature?: boolean;
  to?: string;
  detail: string[];
  cta?: string;
};

const timeline: TimelineItem[] = [
  {
    org: "ROHANI",
    role: "Founder · Psychology · Wellbeing · Human Development",
    context: "Sweden / International",
    period: "2025 — Present",
    feature: true,
    to: "/services",
    cta: "View the ROHANI approach",
    detail: [
      "ROHANI is a psychology-based wellbeing and human development practice working with individuals, teams, organisations and communities.",
      "The work combines psychological science with mindfulness, nervous system regulation, movement and experiential learning — translated into accessible, practical and human-centred formats.",
    ],
  },
  {
    org: "Adult Psychiatry",
    role: "Clinical Psychologist",
    context: "Public Healthcare · Mental Health · Psychological Practice",
    period: "2025 — Present",
    detail: [
      "Providing psychological assessment and treatment within adult psychiatric care, working with a broad range of mental health concerns including anxiety, depression, stress-related difficulties and complex psychological presentations.",
      "The role involves independent clinical work, treatment planning and therapeutic interventions.",
    ],
  },
  {
    org: "Haninge Municipality: G-Flow",
    role: "Founder & Facilitator",
    context: "Youth Wellbeing · Culture · Community",
    period: "2023 — 2025",
    detail: [
      "A youth-focused initiative integrating psychology, movement, self-expression and community to support wellbeing and personal development among young females in SE vulnerable areas.",
      "Delivered in collaboration with Haninge Municipality and ABF Södertörn, creating accessible spaces for reflection, connection, movement and personal development.",
    ],
  },
  {
    org: "BUP: Barn- och Ungdomspsykiatrin",
    role: "Clinical Psychologist",
    context: "Child & Adolescent Mental Health · Psychology",
    period: "2018 — 2022",
    detail: [
      "Worked within child and adolescent psychiatry, supporting young people with a broad range of psychological and mental health challenges.",
      "The work included psychological assessment, therapeutic interventions, psychoeducation, crisis management and collaboration with families and multidisciplinary teams.",
    ],
  },
  {
    org: "Karolinska Sjukhuset: Vuxenpsykiatrin",
    role: "Psychological Practice · Crisis Intervention · Mental Health",
    period: "2018 — 2022",
    detail: [
      "Experience within adult psychiatric services, working with individuals experiencing a range of severe mental health challenges.",
      "Developed a strong foundation in crisis intervention, psychological care and working within complex, high-pressure clinical environments.",
    ],
  },
];

type Entry = {
  period?: string;
  title: string;
  meta: string;
  body: string[];
  tags?: string;
  link?: { label: string; href: string };
};

const clinicalEntries: Entry[] = [
  {
    period: "2025 — Present",
    title: "General Adult Psychiatry",
    meta: "Public Healthcare · Clinical Psychologist",
    body: [
      "Providing psychological assessment and treatment within adult psychiatric care, working with a broad range of mental health concerns including anxiety, depression, stress-related difficulties and complex psychological presentations.",
      "The role involves independent clinical work, treatment planning and therapeutic interventions.",
      "Working across different presentations and individual needs has further developed my ability to adapt psychological approaches, communication and interventions to the person, context and stage of life.",
    ],
  },
  {
    period: "2018 — 2022",
    title: "Child & Adolescent Mental Health",
    meta: "BUP Brommaplan, Stockholm · Clinical Psychologist",
    body: [
      "Worked within child and adolescent psychiatry, supporting young people with a broad range of psychological and mental health challenges.",
      "My work included psychological assessment, therapeutic interventions, psychoeducation, crisis management and collaboration with families and multidisciplinary teams.",
      "This experience helped strengthen and shape my ability to adapt therapeutic approaches, communication and interventions to different developmental stages, individual needs and family constellations.",
    ],
    link: {
      label: "BUP Brommaplan",
      href: "https://www.skhlm.se/service/bup-barn-och-ungdomspsykiatri/",
    },
  },
  {
    period: "2018 — 2022",
    title: "Psychiatric Hospital & Emergency Healthcare",
    meta: "Karolinska University Hospital · Crisis Intervention",
    body: [
      "Experience within adult psychiatric services, working with individuals experiencing a range of severe mental health challenges.",
      "Developed a strong foundation in crisis intervention, psychological care and working within complex, high-pressure clinical environments.",
      "Particular areas of experience include personality disorders, psychosis, crisis management and suicide prevention.",
      "Working in high-pressure clinical environments strengthened my ability to remain grounded, attuned and solution-focused when working with complexity and uncertainty.",
    ],
  },
];

const organisationalEntries: Entry[] = [
  {
    title: "Somaya Women's Support Centre",
    meta: "Psychological & Wellbeing Work",
    body: [
      "Held a movement workshop for an organisation supporting women and families experiencing complex domestic, social and psychological challenges.",
      "This work deepened my understanding of the relationship between psychological wellbeing, safety, relationships, culture and wider social circumstances.",
    ],
    link: {
      label: "Somaya Women's Support Centre",
      href: "https://www.linkedin.com/company/somaya-stodjour/?viewAsMember=true",
    },
  },
  {
    title: "Workplace Meditation & Wellbeing",
    meta: "Region Stockholm · BUP Brommaplan",
    body: [
      "Facilitated regular guided meditation sessions for healthcare professionals within child and adolescent psychiatry.",
      "The sessions created a structured space for pausing, grounding and recovery within a demanding clinical environment, introducing practical mindfulness-based tools for stress regulation and sustainable wellbeing at work.",
    ],
    tags: "Workplace Wellbeing · Mindfulness · Stress Regulation · Healthcare",
  },
];

const communityEntries: Entry[] = [
  {
    title: "G-Flow · ABF Södertörn",
    meta: "Community Education · Youth Wellbeing · Culture",
    body: [
      "Collaborated with ABF Södertörn on initiatives combining psychology, culture, movement and community-based learning.",
      "The collaboration reflects my interest in making psychological knowledge accessible beyond traditional clinical settings and creating spaces where wellbeing, self-expression and connection can develop together.",
    ],
  },
  {
    title: "Haninge Municipality",
    meta: "Youth Wellbeing · Community Development · Public Sector Collaboration",
    body: [
      "Collaborated with Haninge Municipality through youth-focused wellbeing initiatives, creating accessible spaces for reflection, connection, movement and personal development.",
      "The work has strengthened my experience of translating psychological perspectives into community-based formats and working across professional and public-sector contexts.",
    ],
  },
];

const wellbeingEntries: Entry[] = [
  {
    title: "Joy in the Wild",
    meta: "Founder & Facilitator",
    body: [
      "A women-centred nature and wellbeing experience exploring connection, presence, movement and self-reflection.",
      "The initiative brings together psychological perspectives with embodied practices and nature-based experiences, creating space for participants to slow down, reconnect and explore wellbeing beyond the demands of everyday life.",
    ],
  },
  {
    title: "Vägen tillbaka",
    meta: "Retreat · Psychology · Self-Reflection & Embodied Wellbeing",
    body: [
      "A retreat concept centred around reconnecting with oneself through reflection, psychological insight, mindfulness, movement and embodied practices.",
      "The retreat format reflects my broader approach to wellbeing: creating experiences that engage the whole person — cognitively, emotionally, relationally and physically.",
    ],
  },
];

const organisations = [
  "ROHANI",
  "Region Stockholm",
  "BUP Brommaplan",
  "Karolinska University Hospital",
  "Haninge Municipality",
  "ABF Södertörn",
  "Somaya Women's Support Centre",
];

/* ---------- Helpers ---------- */

function ExternalLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] border-b border-foreground/30 pb-1 hover:text-accent hover:border-accent transition-colors"
    >
      {label} <span aria-hidden>→</span>
    </a>
  );
}

function SectionHeader({
  id,
  index,
  title,
  intro,
}: {
  id: string;
  index?: string;
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
          {index ? `${index} · ${title}` : title}
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

function EntryCard({ entry }: { entry: Entry }) {
  return (
    <article className="rounded-3xl border border-border bg-background/70 p-7 md:p-9 transition-colors duration-500 hover:border-forest/50">
      <div className="grid md:grid-cols-12 gap-5 md:gap-8">
        <div className="md:col-span-4 space-y-2">
          {entry.period && (
            <p className="text-[10px] uppercase tracking-[0.25em] text-accent">
              {entry.period}
            </p>
          )}
          <h3 className="text-xl md:text-2xl font-serif leading-tight text-balance">
            {entry.title}
          </h3>
          <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/50 leading-relaxed">
            {entry.meta}
          </p>
        </div>
        <div className="md:col-span-8 space-y-4">
          {entry.body.map((p) => (
            <p key={p} className="text-base leading-[1.75] text-foreground/75">
              {p}
            </p>
          ))}
          {entry.tags && (
            <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/45 pt-1">
              {entry.tags}
            </p>
          )}
          {entry.link && (
            <div className="pt-2">
              <ExternalLink {...entry.link} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function TimelineRow({
  item,
  open,
  onToggle,
  last,
}: {
  item: TimelineItem;
  open: boolean;
  onToggle: () => void;
  last: boolean;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const update = () => setHeight(el.scrollHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className={`relative pl-8 md:pl-12 ${last ? "" : "pb-10 md:pb-12"}`}>
      {/* rail */}
      {!last && (
        <span
          aria-hidden
          className="absolute left-[5px] md:left-[7px] top-4 bottom-0 w-px bg-border"
        />
      )}
      <span
        aria-hidden
        className={`absolute left-0 top-2.5 rounded-full transition-colors ${
          item.feature
            ? "size-3 md:size-4 bg-accent"
            : "size-2.5 md:size-3.5 bg-taupe"
        }`}
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full text-left group"
      >
        <div className="grid md:grid-cols-12 gap-2 md:gap-8 items-baseline">
          <div className="md:col-span-8 space-y-1.5">
            <h3
              className={`font-serif leading-tight text-balance transition-colors group-hover:text-accent ${
                item.feature
                  ? "text-3xl md:text-4xl"
                  : "text-2xl md:text-[1.7rem]"
              }`}
            >
              {item.org}
            </h3>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-foreground/60">
              {item.role}
            </p>
            {item.context && (
              <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/40">
                {item.context}
              </p>
            )}
          </div>
          <div className="md:col-span-4 md:text-right">
            <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/50">
              {item.period}
            </p>
          </div>
        </div>
      </button>

      <div
        className="overflow-hidden transition-[max-height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ maxHeight: open ? height : 0 }}
        aria-hidden={!open}
      >
        <div
          ref={innerRef}
          className={`pt-5 grid md:grid-cols-12 gap-4 md:gap-8 transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="md:col-span-8 space-y-4">
            {item.detail.map((p) => (
              <p key={p} className="text-base leading-[1.75] text-foreground/75">
                {p}
              </p>
            ))}
            {item.to && (
              <Link
                to={item.to}
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] border-b border-foreground/30 pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                {item.cta ?? "View experience"} <span aria-hidden>→</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="mt-4 text-[10px] uppercase tracking-[0.25em] text-foreground/55 border-b border-foreground/25 pb-1 hover:text-accent hover:border-accent transition-colors"
      >
        {open ? "Close" : "Read more"} <span aria-hidden>→</span>
      </button>
    </div>
  );
}

/* ---------- Page ---------- */

function ExperiencePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 scroll-smooth">
        {/* ===== Introduction ===== */}
        <section className="px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-7 space-y-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                Experience
              </p>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.02] text-balance">
                Psychology, Wellbeing &amp; Human Development
              </h1>
              <p className="text-lg md:text-xl leading-[1.7] text-foreground/75 max-w-xl">
                My work brings together psychological expertise, human
                development and embodied approaches to wellbeing– across
                clinical, organisational and community settings.
              </p>
            </div>

            <div className="md:col-span-5 space-y-6 md:pt-24">
              <p className="text-base leading-[1.75] text-foreground/70">
                At the heart of this work is a curiosity about who we are, what
                shapes us, and who we are becoming.
              </p>
              <p className="text-base leading-[1.75] text-foreground/70">
                How can we move through life with greater awareness, agency and
                intention– rather than simply reacting to what happens around
                us?
              </p>
              <p className="text-base leading-[1.75] text-foreground/70">
                What if meaningful change begins with becoming more conscious of
                the way we see, experience and engage with the world?
              </p>
              <p className="text-base leading-[1.75] text-foreground/70">
                My work combines psychological science with a human, embodied
                and culturally responsive approach to wellbeing and development.
              </p>
            </div>
          </div>

          {/* Statement + in-page nav */}
          <div className="max-w-7xl mx-auto mt-14 md:mt-20 pt-10 md:pt-14 border-t border-border/60 grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-7">
              <p className="font-serif text-xl md:text-[1.6rem] leading-snug max-w-xl text-balance">
                These are the environments, organisations and initiatives ROHANI
                has contributed to.
              </p>
            </div>
            <nav className="md:col-span-5 flex flex-col gap-3.5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                Explore
              </p>
              {navSections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group flex items-baseline justify-between gap-4 border-b border-border/70 pb-2.5 hover:border-accent transition-colors"
                >
                  <span className="text-base font-serif group-hover:text-accent transition-colors">
                    {s.label}
                  </span>
                  <span
                    aria-hidden
                    className="text-[10px] text-foreground/35 group-hover:text-accent transition-colors"
                  >
                    ↓
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* ===== Selected Experience ===== */}
        <section className="bg-secondary/60 py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              id="selected-experience"
              title="Selected Experience"
              intro="A curated professional journey across clinical psychology, organisations and community work."
            />
            <div className="mt-14 md:mt-20 max-w-5xl">
              {timeline.map((item, i) => (
                <TimelineRow
                  key={item.org}
                  item={item}
                  last={i === timeline.length - 1}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ===== 01 Psychology & Clinical Practice ===== */}
        <section className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              id="clinical"
              index="01"
              title="Psychology & Clinical Practice"
              intro="Assessment, treatment and crisis work across adult and child & adolescent psychiatry."
            />
            <div className="mt-12 md:mt-16 grid gap-5 md:gap-6">
              {clinicalEntries.map((e) => (
                <EntryCard key={e.title} entry={e} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== Professional Work & Social Impact ===== */}
        <section className="bg-secondary/60 py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
              <div className="md:col-span-6 space-y-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                  Professional Work &amp; Social Impact
                </p>
                <h2 className="text-4xl md:text-5xl font-serif leading-[1.05] text-balance">
                  Beyond the clinic
                </h2>
              </div>
              <div className="md:col-span-6 space-y-5 md:pt-10">
                <p className="text-base leading-[1.75] text-foreground/75">
                  Beyond clinical psychology, my work has extended into
                  organisations, education, community development and
                  experiences that support long-term wellbeing.
                </p>
                <p className="text-base leading-[1.75] text-foreground/70">
                  Across these settings, I have explored how psychological
                  knowledge can be translated into accessible, practical and
                  human-centred formats — from workplace wellbeing and guided
                  meditation to youth initiatives, community programmes and
                  experiential retreats.
                </p>
              </div>
            </div>

            {/* Professional & Organisational Work */}
            <div>
              <div id="organisational" className="scroll-mt-28">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">
                  Professional &amp; Organisational Work
                </p>
                <h3 className="text-3xl md:text-4xl font-serif leading-tight">
                  Professional &amp; Organisational Work
                </h3>
              </div>
              <div className="mt-10 md:mt-12 grid gap-5 md:gap-6">
                {organisationalEntries.map((e) => (
                  <EntryCard key={e.title} entry={e} />
                ))}
              </div>
            </div>

            {/* Community & Social Impact */}
            <div>
              <div id="community" className="scroll-mt-28">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">
                  Community &amp; Social Impact
                </p>
                <h3 className="text-3xl md:text-4xl font-serif leading-tight">
                  Community &amp; Social Impact
                </h3>
              </div>
              <div className="mt-10 md:mt-12 grid gap-5 md:gap-6">
                {communityEntries.map((e) => (
                  <EntryCard key={e.title} entry={e} />
                ))}
              </div>
            </div>

            {/* Wellbeing, Retreats & Experiential Work */}
            <div>
              <div id="wellbeing" className="scroll-mt-28">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">
                  Wellbeing, Retreats &amp; Experiential Work
                </p>
                <h3 className="text-3xl md:text-4xl font-serif leading-tight">
                  Wellbeing, Retreats &amp; Experiential Work
                </h3>
              </div>
              <div className="mt-10 md:mt-12 grid gap-5 md:gap-6">
                {wellbeingEntries.map((e) => (
                  <EntryCard key={e.title} entry={e} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== G-Flow feature ===== */}
        <section className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-4xl border border-forest/25 bg-background p-9 md:p-16 grid md:grid-cols-12 gap-8 md:gap-16 items-center">
              <div className="md:col-span-5 space-y-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                  Feature
                </p>
                <h2 className="text-5xl md:text-6xl font-serif leading-[1.03]">
                  G-Flow
                </h2>
                <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/55">
                  Founder &amp; Facilitator
                </p>
              </div>
              <div className="md:col-span-7">
                <p className="text-lg md:text-xl leading-[1.7] text-foreground/80">
                  A youth-focused initiative integrating psychology, movement,
                  self-expression and community to support wellbeing and
                  personal development among young females in SE vulnerable
                  areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== In the Media ===== */}
        <section className="bg-secondary/60 py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader id="media" title="In the Media" />
            <div className="mt-12 md:mt-16 max-w-4xl divide-y divide-border/70 border-t border-border/70">
              {[
                {
                  name: "Sveriges Radio",
                  text: "Interviewed on youth wellbeing, psychology and community-based folkbildning.",
                },
                {
                  name: "Psykologtidningen",
                  text: "Featured in connection with G-Flow and the intersection of psychology, culture and youth development.",
                },
              ].map((m) => (
                <div
                  key={m.name}
                  className="py-6 grid md:grid-cols-12 gap-2 md:gap-8 items-baseline"
                >
                  <p className="md:col-span-4 font-serif text-xl md:text-2xl">
                    {m.name}
                  </p>
                  <p className="md:col-span-8 text-base leading-[1.75] text-foreground/70">
                    {m.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Selected organisations */}
            <div className="mt-16 md:mt-24 pt-10 md:pt-14 border-t border-border/70">
              <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/45 mb-6">
                Experience Across
              </p>
              <ul className="flex flex-wrap gap-x-8 gap-y-3.5">
                {organisations.map((o) => (
                  <li
                    key={o}
                    className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-foreground/55"
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

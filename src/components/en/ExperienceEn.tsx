import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ArticleLightbox } from "@/components/sections/ArticleLightbox";
import experienceHero from "@/assets/experience-hero.jpg.asset.json";
import { HorizontalTimeline, type TimelineItem } from "@/components/sections/HorizontalTimeline";
import mediaArticle from "@/assets/media-article.jpg.asset.json";
import mediaRadio from "@/assets/media-radio.jpg";
import mediaMagazine from "@/assets/media-magazine.jpg";
import mediaPodcast from "@/assets/media-podcast.jpg";
import personalPlaceholder from "@/assets/personal-placeholder.jpg";

/* ---------- Data ---------- */

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
    context: "Public Healthcare · Hospital Setting",
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

const trainingColumns = [
  {
    title: "Clinical Qualification",
    items: [
      "Clinical Psychologist",
      "Psychological assessment & treatment",
      "Treatment planning",
      "Therapeutic interventions",
      "Crisis intervention",
    ],
  },
  {
    title: "Clinical Domains",
    items: [
      "Adult psychiatry",
      "Child & adolescent mental health",
      "Psychiatric hospital & emergency care",
      "Crisis management & suicide prevention",
      "Personality disorders & psychosis",
      "Multidisciplinary teams",
    ],
  },
  {
    title: "Wellbeing & Facilitation",
    items: [
      "Mindfulness & guided meditation",
      "Nervous system regulation",
      "Movement & embodied practices",
      "Retreat design",
      "Youth work — G-Flow",
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

function ExternalLink({
  label,
  href,
  dark,
}: {
  label: string;
  href: string;
  dark?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] border-b pb-1 transition-colors ${
        dark
          ? "border-background/30 text-background/80 hover:text-gold hover:border-gold"
          : "border-foreground/30 hover:text-accent hover:border-accent"
      }`}
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
  dark,
}: {
  id?: string;
  index?: string;
  title: string;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <div
      id={id}
      className="scroll-mt-28 grid md:grid-cols-12 gap-8 md:gap-12 items-end"
    >
      <div className="md:col-span-7 space-y-4">
        <p
          className={`text-[10px] uppercase tracking-[0.3em] ${
            dark ? "text-gold" : "text-accent"
          }`}
        >
          {index ? `${index} · ${title}` : title}
        </p>
        <h2
          className={`text-4xl md:text-5xl font-serif leading-[1.05] text-balance ${
            dark ? "text-background" : ""
          }`}
        >
          {title}
        </h2>
      </div>
      {intro && (
        <div className="md:col-span-5">
          <p
            className={`text-base leading-relaxed ${
              dark ? "text-background/70" : "text-foreground/70"
            }`}
          >
            {intro}
          </p>
        </div>
      )}
    </div>
  );
}

function ClinicalCard({ entry }: { entry: Entry }) {
  return (
    <article className="flex flex-col rounded-3xl border border-background/15 bg-background/[0.04] p-7 md:p-8 transition-colors duration-500 hover:border-gold/40">
      {entry.period && (
        <p className="text-[10px] uppercase tracking-[0.25em] text-gold">
          {entry.period}
        </p>
      )}
      <h3 className="mt-3 text-xl md:text-2xl font-serif leading-tight text-background text-balance">
        {entry.title}
      </h3>
      <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-background/55 leading-relaxed">
        {entry.meta}
      </p>
      <div className="mt-5 space-y-4">
        {entry.body.map((p) => (
          <p key={p} className="text-base leading-[1.75] text-background/75">
            {p}
          </p>
        ))}
      </div>
      {entry.link && (
        <div className="mt-auto pt-6">
          <ExternalLink {...entry.link} dark />
        </div>
      )}
    </article>
  );
}

function EntryRow({ entry }: { entry: Entry }) {
  return (
    <article className="rounded-2xl border border-border bg-background/60 p-6 md:p-8 transition-colors duration-500 hover:border-forest/40">
      <div className="grid md:grid-cols-12 gap-4 md:gap-8">
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
        <div className="md:col-span-8 space-y-3">
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

/* ---------- Page ---------- */

type BeyondTabId = "organisational" | "community" | "wellbeing";

export function ExperienceEn() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<BeyondTabId>("organisational");

  useEffect(() => {
    const syncFromHash = () => {
      const h = window.location.hash.replace("#", "");
      if (h === "organisational" || h === "community" || h === "wellbeing") {
        setActiveTab(h);
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const beyondTabs: { id: BeyondTabId; label: string; entries: Entry[] }[] = [
    {
      id: "organisational",
      label: "Professional & Organisational Work",
      entries: organisationalEntries,
    },
    {
      id: "community",
      label: "Community & Social Impact",
      entries: communityEntries,
    },
    {
      id: "wellbeing",
      label: "Wellbeing, Retreats & Experiential Work",
      entries: wellbeingEntries,
    },
  ];
  const activeTabData =
    beyondTabs.find((t) => t.id === activeTab) ?? beyondTabs[0];
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 scroll-smooth">
        {/* ===== Hero ===== */}
        <section className="relative overflow-hidden">
          <img
            src={experienceHero.url}
            alt="A group resting on mats outdoors in the evening sun"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "50% 60%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/25" />
          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 pt-44 md:pt-60 pb-16 md:pb-24 space-y-7 [text-shadow:0_2px_18px_rgba(58,41,34,0.55)]">
            <p className="text-[10px] uppercase tracking-[0.3em] text-background">
              Experience
            </p>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.02] text-balance max-w-4xl text-background">
              Psychology, Wellbeing & Human Development
            </h1>
            <p className="text-lg md:text-xl leading-[1.7] text-background/85 max-w-2xl">
              My work brings together psychological expertise, human
              development and embodied approaches to wellbeing– across
              clinical, organisational and community settings.
            </p>
          </div>
        </section>

        {/* ===== Timeline ===== */}
        <section className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              id="selected-experience"
              title="Selected Experience"
              intro="A curated professional journey across clinical psychology, organisations and community work."
            />
            <HorizontalTimeline items={timeline} fallbackCta="View experience" />
          </div>
        </section>

        {/* ===== Collaborations — dark band ===== */}
        <section className="bg-forest py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              id="clinical"
              index="01"
              dark
              title="Psychology & Clinical Practice"
              intro="Assessment, treatment and crisis work across adult and child & adolescent psychiatry."
            />
            <div className="mt-12 md:mt-16 grid gap-5 md:gap-6 md:grid-cols-3">
              {clinicalEntries.map((e) => (
                <ClinicalCard key={e.title} entry={e} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== Beyond the clinic ===== */}
        <section className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
              <div className="md:col-span-6 space-y-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                  Professional Work & Social Impact
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
            {/* Beyond-the-clinic tabs */}
            <div>
              <div
                role="tablist"
                aria-label="Beyond the clinic"
                className="flex flex-wrap gap-2 md:gap-3"
              >
                {beyondTabs.map((tab) => (
                  <button
                    key={tab.id}
                    id={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={
                      "scroll-mt-28 cursor-pointer rounded-full border px-5 py-2.5 text-sm transition-colors duration-200 " +
                      (activeTab === tab.id
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-foreground/70 hover:border-accent hover:text-foreground")
                    }
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div
                role="tabpanel"
                aria-label={activeTabData.label}
                className="mt-8 md:mt-10 grid gap-4 md:gap-5"
              >
                {activeTabData.entries.map((e) => (
                  <EntryRow key={e.title} entry={e} />
                ))}
              </div>
            </div>

            {/* G-Flow highlight */}
            <div className="rounded-3xl border border-forest/25 bg-secondary/50 p-8 md:p-12 grid md:grid-cols-12 gap-6 md:gap-12 items-center">
              <div className="md:col-span-5 space-y-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                  Feature
                </p>
                <h3 className="text-4xl md:text-5xl font-serif leading-[1.03]">
                  G-Flow
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/55">
                  Founder & Facilitator
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

        {/* ===== Personal block ===== */}
        <section className="bg-secondary/60 border-y border-border/60 py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-4">
              <img
                src={personalPlaceholder}
                alt="Placeholder image — calm reading corner in morning light"
                loading="lazy"
                width={1024}
                height={1280}
                draggable={false}
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-[0_20px_60px_-25px_rgba(58,41,34,0.35)]"
              />
            </div>
            <div className="md:col-span-8 md:col-start-5 space-y-6">
              <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground">
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
        </section>

        {/* ===== Training ===== */}
        <section className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader title="Training & Expertise" />
            <div className="mt-12 md:mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
              {trainingColumns.map((col) => (
                <div key={col.title}>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-accent pb-4 border-b border-border/70">
                    {col.title}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {col.items.map((i) => (
                      <li
                        key={i}
                        className="text-base leading-relaxed text-foreground/70"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== In the Media + organisations ===== */}
        <section className="bg-secondary/60 py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader id="media" title="In the Media" />
            <div className="mt-12 md:mt-16 grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
              {/* Sveriges Radio */}
              <div>
                <img
                  src={mediaRadio}
                  alt="Studio microphone in warm light"
                  loading="lazy"
                  width={1200}
                  height={900}
                  draggable={false}
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_20px_60px_-25px_rgba(58,41,34,0.35)]"
                />
                <h3 className="mt-5 font-serif text-xl md:text-2xl leading-snug">
                  Sveriges Radio
                </h3>
                <p className="mt-2 text-base leading-[1.75] text-foreground/70">
                  Interviewed on youth wellbeing, psychology and community-based folkbildning.
                </p>
              </div>

              {/* Psykologtidningen */}
              <div>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  aria-label="Open the article full size"
                  className="block w-full cursor-zoom-in"
                >
                  <img
                    src={mediaArticle.url}
                    alt="Article in Psykologtidningen about G-Flow"
                    loading="lazy"
                    draggable={false}
                    className="aspect-[4/3] w-full rounded-2xl object-cover object-top shadow-[0_20px_60px_-25px_rgba(58,41,34,0.35)] transition-transform duration-300 hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </button>
                <h3 className="mt-5 font-serif text-xl md:text-2xl leading-snug">
                  Psykologtidningen
                </h3>
                <p className="mt-2 text-base leading-[1.75] text-foreground/70">
                  Featured in connection with G-Flow and the intersection of psychology, culture and youth development.
                </p>
              </div>

              {/* Podcast */}
              <div>
                <img
                  src={mediaPodcast}
                  alt="Podcast microphones in a recording studio"
                  loading="lazy"
                  width={1200}
                  height={900}
                  draggable={false}
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_20px_60px_-25px_rgba(58,41,34,0.35)]"
                />
                <h3 className="mt-5 font-serif text-xl md:text-2xl leading-snug">
                  Podcast
                </h3>
                <p className="mt-2 text-base leading-[1.75] text-foreground/70">
                  A guest in conversation about psychology, culture and wellbeing.
                </p>
              </div>
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
        <ArticleLightbox
          src={mediaArticle.url}
          alt="Article in Psykologtidningen about G-Flow"
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      </main>
      <SiteFooter />
    </div>
  );
}

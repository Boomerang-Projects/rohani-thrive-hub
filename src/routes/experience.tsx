import { useState, useRef, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      {
        title: "Erfarenhet — Psykologi, välbefinnande & mänsklig utveckling | Rohani",
      },
      {
        name: "description",
        content:
          "Resan bakom ROHANI: klinisk psykologi, organisatoriskt välbefinnande, samhällsinitiativ och upplevelsebaserade retreats i Sverige och internationellt.",
      },
      { property: "og:title", content: "Erfarenhet — Rohani" },
      {
        property: "og:description",
        content:
          "Klinisk psykologi, välbefinnande i arbetslivet, ungdomsinitiativ och retreats — miljöerna, organisationerna och initiativen ROHANI har bidragit till.",
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
  { id: "selected-experience", label: "Utvald erfarenhet" },
  { id: "clinical", label: "Psykologi & kliniskt arbete" },
  { id: "organisational", label: "Professionellt & organisatoriskt arbete" },
  { id: "community", label: "Samhälle & social påverkan" },
  { id: "wellbeing", label: "Välbefinnande & upplevelsebaserat arbete" },
  { id: "media", label: "I media" },
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
    role: "Grundare · Psykologi · Välbefinnande · Mänsklig utveckling",
    context: "Sverige / Internationellt",
    period: "2025 — Nu",
    feature: true,
    to: "/services",
    cta: "Se ROHANIs förhållningssätt",
    detail: [
      "ROHANI är en psykologibaserad verksamhet för välbefinnande och mänsklig utveckling som arbetar med individer, team, organisationer och samhällen.",
      "Arbetet förenar psykologisk vetenskap med mindfulness, reglering av nervsystemet, rörelse och upplevelsebaserat lärande — översatt till tillgängliga, praktiska och människocentrerade format.",
    ],
  },
  {
    org: "Vuxenpsykiatrin",
    role: "Legitimerad psykolog",
    context: "Offentlig vård · Psykisk hälsa · Kliniskt arbete",
    period: "2025 — Nu",
    detail: [
      "Jag genomför psykologisk utredning och behandling inom vuxenpsykiatrisk vård, med ett brett spektrum av psykisk ohälsa — bland annat ångest, depression, stressrelaterade besvär och komplexa tillstånd.",
      "Tjänsten innefattar självständigt kliniskt arbete, behandlingsplanering och terapeutiska interventioner.",
    ],
  },
  {
    org: "Haninge kommun: G-Flow",
    role: "Grundare & facilitator",
    context: "Ungdomars välbefinnande · Kultur · Gemenskap",
    period: "2023 — 2025",
    detail: [
      "Ett ungdomsorienterat initiativ som förenar psykologi, rörelse, självuttryck och gemenskap för att stödja välbefinnande och personlig utveckling hos unga flickor i utsatta områden i Sverige.",
      "Genomförs i samarbete med Haninge kommun och ABF Södertörn och skapar tillgängliga rum för reflektion, samhörighet, rörelse och personlig utveckling.",
    ],
  },
  {
    org: "BUP: Barn- och Ungdomspsykiatrin",
    role: "Legitimerad psykolog",
    context: "Barns & ungas psykiska hälsa · Psykologi",
    period: "2018 — 2022",
    detail: [
      "Jag arbetade inom barn- och ungdomspsykiatrin och stödde unga människor med ett brett spektrum av psykologiska och psykiska utmaningar.",
      "Arbetet omfattade psykologisk utredning, terapeutiska interventioner, psykoedukation, krishantering samt samverkan med familjer och tvärprofessionella team.",
    ],
  },
  {
    org: "Karolinska Sjukhuset: Vuxenpsykiatrin",
    role: "Kliniskt arbete · Krisintervention · Psykisk hälsa",
    period: "2018 — 2022",
    detail: [
      "Erfarenhet från vuxenpsykiatrisk verksamhet, med arbete tillsammans med personer som befinner sig i svår psykisk ohälsa.",
      "Jag byggde en stark grund i krisintervention, psykologisk vård och arbete i komplexa, krävande kliniska miljöer.",
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
    period: "2025 — Nu",
    title: "Vuxenpsykiatrin",
    meta: "Offentlig vård · Legitimerad psykolog",
    body: [
      "Jag genomför psykologisk utredning och behandling inom vuxenpsykiatrisk vård, med ett brett spektrum av psykisk ohälsa — bland annat ångest, depression, stressrelaterade besvär och komplexa tillstånd.",
      "Tjänsten innefattar självständigt kliniskt arbete, behandlingsplanering och terapeutiska interventioner.",
      "Att arbeta över olika tillstånd och individuella behov har ytterligare utvecklat min förmåga att anpassa psykologiska förhållningssätt, kommunikation och interventioner efter personen, kontexten och livsskeden.",
    ],
  },
  {
    period: "2018 — 2022",
    title: "Barns & ungas psykiska hälsa",
    meta: "BUP Brommaplan, Stockholm · Legitimerad psykolog",
    body: [
      "Jag arbetade inom barn- och ungdomspsykiatrin och stödde unga människor med ett brett spektrum av psykologiska och psykiska utmaningar.",
      "Mitt arbete omfattade psykologisk utredning, terapeutiska interventioner, psykoedukation, krishantering och samverkan med familjer och tvärprofessionella team.",
      "Den erfarenheten har stärkt och format min förmåga att anpassa terapeutiska förhållningssätt, kommunikation och interventioner efter olika utvecklingsskeden, individuella behov och familjekonstellationer.",
    ],
    link: {
      label: "BUP Brommaplan",
      href: "https://www.skhlm.se/service/bup-barn-och-ungdomspsykiatri/",
    },
  },
  {
    period: "2018 — 2022",
    title: "Sjukhuspsykiatri & akutsjukvård",
    meta: "Karolinska Universitetssjukhuset · Krisintervention",
    body: [
      "Erfarenhet från vuxenpsykiatrisk verksamhet, med arbete tillsammans med personer som befinner sig i svår psykisk ohälsa.",
      "Jag byggde en stark grund i krisintervention, psykologisk vård och arbete i komplexa, krävande kliniska miljöer.",
      "Särskilda erfarenhetsområden är personlighetssyndrom, psykos, krishantering och suicidprevention.",
      "Att arbeta i krävande kliniska miljöer stärkte min förmåga att förbli förankrad, närvarande och lösningsfokuserad i komplexitet och osäkerhet.",
    ],
  },
];

const organisationalEntries: Entry[] = [
  {
    title: "Somaya Stödjour",
    meta: "Psykologiskt & välbefinnandearbete",
    body: [
      "Jag höll en rörelseworkshop för en organisation som stödjer kvinnor och familjer som lever med komplexa hem-, sociala och psykiska utmaningar.",
      "Detta arbete fördjupade min förståelse för sambandet mellan psykiskt välbefinnande, trygghet, relationer, kultur och yttre livsvillkor.",
    ],
    link: {
      label: "Somaya Stödjour",
      href: "https://www.linkedin.com/company/somaya-stodjour/?viewAsMember=true",
    },
  },
  {
    title: "Guidad meditation på arbetsplatsen",
    meta: "Region Stockholm · BUP Brommaplan",
    body: [
      "Jag ledde återkommande guidade meditationssessioner för vårdpersonal inom barn- och ungdomspsykiatrin.",
      "Sessionerna skapade en strukturerad pausesmiljö för förankring och återhämtning i en krävande klinisk vardag, och introducerade praktiska mindfulnessbaserade verktyg för stressreglering och hållbart välbefinnande i arbetet.",
    ],
    tags: "Välbefinnande i arbetslivet · Mindfulness · Stressreglering · Sjukvård",
  },
];

const communityEntries: Entry[] = [
  {
    title: "G-Flow · ABF Södertörn",
    meta: "Folkbildning · Ungdomars välbefinnande · Kultur",
    body: [
      "Jag samarbetade med ABF Södertörn i initiativ som förenar psykologi, kultur, rörelse och folkbildning.",
      "Samarbetet speglar mitt intresse för att göra psykologisk kunskap tillgänglig utanför traditionella kliniska miljöer och att skapa rum där välbefinnande, självuttryck och gemenskap kan växa tillsammans.",
    ],
  },
  {
    title: "Haninge kommun",
    meta: "Ungdomars välbefinnande · Samhällsutveckling · Offentlig sektor",
    body: [
      "Jag samarbetade med Haninge kommun i ungdomsorienterade välbefinnandeinitiativ och skapade tillgängliga rum för reflektion, samhörighet, rörelse och personlig utveckling.",
      "Arbetet har stärkt min erfarenhet av att översätta psykologiska perspektiv till samhällsbaserade format och att arbeta över professionella och offentliga kontexter.",
    ],
  },
];

const wellbeingEntries: Entry[] = [
  {
    title: "Joy in the Wild",
    meta: "Grundare & facilitator",
    body: [
      "En natur- och välbefinnandeupplevelse för kvinnor, med fokus på gemenskap, närvaro, rörelse och självreflektion.",
      "Initiativet förenar psykologiska perspektiv med kroppsnära praktiker och naturupplevelser, och skapar utrymme för deltagarna att sakta ner, återkoppla till sig själva och utforska välbefinnande bortom vardagens krav.",
    ],
  },
  {
    title: "Vägen tillbaka",
    meta: "Retreat · Psykologi · Självreflektion & kroppsnära välbefinnande",
    body: [
      "Ett retreatkoncept som handlar om att återknyta till sig själv genom reflektion, psykologisk insikt, mindfulness, rörelse och kroppsnära praktiker.",
      "Retreatformatet speglar min övergripande syn på välbefinnande: att skapa upplevelser som engagerar hela människan — kognitivt, emotionellt, relationellt och fysiskt.",
    ],
  },
];

const organisations = [
  "ROHANI",
  "Region Stockholm",
  "BUP Brommaplan",
  "Karolinska Universitetssjukhuset",
  "Haninge kommun",
  "ABF Södertörn",
  "Somaya Stödjour",
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
                {item.cta ?? "Se erfarenheten"} <span aria-hidden>→</span>
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
        {open ? "Stäng" : "Läs mer"} <span aria-hidden>→</span>
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
                Erfarenhet
              </p>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.02] text-balance">
                Psykologi, välbefinnande & mänsklig utveckling
              </h1>
              <p className="text-lg md:text-xl leading-[1.7] text-foreground/75 max-w-xl">
                Mitt arbete förenar psykologisk expertis, mänsklig utveckling
                och kroppsnära vägar till välbefinnande — inom klinisk
                verksamhet, organisationer och samhälle.
              </p>
            </div>

            <div className="md:col-span-5 space-y-6 md:pt-24">
              <p className="text-base leading-[1.75] text-foreground/70">
                I hjärtat av detta arbete ligger en nyfikenhet på vem vi är,
                vad som format oss — och vem vi håller på att bli.
              </p>
              <p className="text-base leading-[1.75] text-foreground/70">
                Hur kan vi röra oss genom livet med större medvetenhet,
                handlingskraft och intention — istället för att bara reagera på
                det som händer omkring oss?
              </p>
              <p className="text-base leading-[1.75] text-foreground/70">
                Tänk om meningsfull förändring börjar med att bli mer medveten
                om hur vi ser, upplever och möter världen?
              </p>
              <p className="text-base leading-[1.75] text-foreground/70">
                Mitt arbete förenar psykologisk vetenskap med ett mänskligt,
                kroppsnära och kulturellt anpassningsbart förhållningssätt till
                välbefinnande och utveckling.
              </p>
            </div>
          </div>

          {/* Statement + in-page nav */}
          <div className="max-w-7xl mx-auto mt-14 md:mt-20 pt-10 md:pt-14 border-t border-border/60 grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-7">
              <p className="font-serif text-2xl md:text-3xl leading-snug max-w-2xl">
                Detta är de miljöer, organisationer och initiativ ROHANI
                bidragit till.
              </p>
            </div>
            <nav className="md:col-span-5 flex flex-col gap-3.5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                Utforska
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
              title="Utvald erfarenhet"
              intro="En kurerad professionell resa genom klinisk psykologi, organisationer och samhällsarbete."
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
              title="Psykologi & kliniskt arbete"
              intro="Utredning, behandling och krisarbete inom vuxenpsykiatri samt barn- och ungdomspsykiatri."
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
                  Professionellt arbete & social påverkan
                </p>
                <h2 className="text-4xl md:text-5xl font-serif leading-[1.05] text-balance">
                  Bortom kliniken
                </h2>
              </div>
              <div className="md:col-span-6 space-y-5 md:pt-10">
                <p className="text-base leading-[1.75] text-foreground/75">
                  Bortom den kliniska psykologin har mitt arbete rört sig in i
                  organisationer, utbildning, samhällsutveckling och upplevelser
                  som stödjer långsiktigt välbefinnande.
                </p>
                <p className="text-base leading-[1.75] text-foreground/70">
                  I dessa miljöer har jag utforskat hur psykologisk kunskap kan
                  översättas till tillgängliga, praktiska och
                  människocentrerade format — från välbefinnande i arbetslivet
                  och guidad meditation till ungdomsinitiativ, samhällsprogram
                  och upplevelsebaserade retreats.
                </p>
              </div>
            </div>

            {/* Professional & Organisational Work */}
            <div>
              <div id="organisational" className="scroll-mt-28">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">
                  Professionellt & organisatoriskt arbete
                </p>
                <h3 className="text-3xl md:text-4xl font-serif leading-tight">
                  Professionellt & organisatoriskt arbete
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
                  Samhälle & social påverkan
                </p>
                <h3 className="text-3xl md:text-4xl font-serif leading-tight">
                  Samhälle & social påverkan
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
                  Välbefinnande, retreats & upplevelsebaserat arbete
                </p>
                <h3 className="text-3xl md:text-4xl font-serif leading-tight">
                  Välbefinnande, retreats & upplevelsebaserat arbete
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
                  I fokus
                </p>
                <h2 className="text-5xl md:text-6xl font-serif leading-[1.03]">
                  G-Flow
                </h2>
                <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/55">
                  Grundare & facilitator
                </p>
              </div>
              <div className="md:col-span-7">
                <p className="text-lg md:text-xl leading-[1.7] text-foreground/80">
                  Ett ungdomsorienterat initiativ som förenar psykologi,
                  rörelse, självuttryck och gemenskap för att stödja
                  välbefinnande och personlig utveckling hos unga flickor i
                  utsatta områden i Sverige.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== In the Media ===== */}
        <section className="bg-secondary/60 py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader id="media" title="I media" />
            <div className="mt-12 md:mt-16 max-w-4xl divide-y divide-border/70 border-t border-border/70">
              {[
                {
                  name: "Sveriges Radio",
                  text: "Intervjuad om ungdomars välbefinnande, psykologi och samhällsbaserad folkbildning.",
                },
                {
                  name: "Psykologtidningen",
                  text: "Uppmärksammad i samband med G-Flow och skärningspunkten mellan psykologi, kultur och ungdomsutveckling.",
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
                Erfarenhet från
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

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { ExperienceEn } from "@/components/en/ExperienceEn";
import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ArticleLightbox } from "@/components/sections/ArticleLightbox";
import experienceHero from "@/assets/photos/leading-session.jpg";
import { HorizontalTimeline, type TimelineItem } from "@/components/sections/HorizontalTimeline";
import mediaArticle from "@/assets/media-article.jpg.asset.json";
import mediaRadio from "@/assets/media-radio.jpg";
import mediaMagazine from "@/assets/media-magazine.jpg";
import mediaPodcast from "@/assets/media-podcast.jpg";
import personalPlaceholder from "@/assets/personal-placeholder.jpg";
import photoGroupCircle from "@/assets/photos/group-circle.jpg";
import photoHandsSky from "@/assets/photos/hands-sky.jpg";
import photoFireEvening from "@/assets/photos/fire-evening.jpg";

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

const timeline: TimelineItem[] = [
  {
    org: "ROHANI",
    role: "Grundare · Psykologi · Välbefinnande · Mänsklig utveckling",
    context: "Sverige / Internationellt",
    period: "2025 — Nu",
    feature: true,
    to: "/",
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
    context: "Offentlig vård · Sjukhusmiljö",
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
    title: "Barns & Ungas Psykiska Hälsa",
    meta: "BUP Brommaplan, Stockholm · Legitimerad psykolog",
    body: [
      "Jag arbetade inom barn- och ungdomspsykiatrin och stödde unga människor med ett brett spektrum av psykologiska och psykiska utmaningar.",
      "Mitt arbete omfattade psykologisk utredning, terapeutiska interventioner, psykoedukation, krishantering och samverkan med familjer och tvärprofessionella team.",
      "Den erfarenheten har stärkt och format min förmåga att anpassa terapeutiska förhållningssätt, kommunikation och interventioner efter olika utvecklingsskeden, individuella behov och familjekonstellationer.",
    ],
  },
  {
    period: "2018 — 2022",
    title: "Sjukhuspsykiatri & Akutsjukvård",
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

/* Spara för senare upplägg — välbefinnande/retreat-erfarenheter (ej aktiva i sidan just nu)
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
*/

const trainingColumns = [
  {
    title: "Klinisk kvalifikation",
    items: [
      "Legitimerad psykolog",
      "Psykologisk utredning & behandling",
      "Behandlingsplanering",
      "Terapeutiska interventioner",
      "Krisintervention",
    ],
  },
  {
    title: "Kliniska områden",
    items: [
      "Vuxenpsykiatri",
      "Barn- & ungdomspsykiatri",
      "Sjukhuspsykiatri & akutsjukvård",
      "Kris- & suicidprevention",
      "Personlighetssyndrom & psykos",
      "Tvärprofessionella team",
    ],
  },
  {
    title: "Välbefinnande & facilitation",
    items: [
      "Mindfulness & guidad meditation",
      "Reglering av nervsystemet",
      "Rörelse & kroppsnära praktiker",
      "Retreatdesign",
      "Ungdomsarbete — G-Flow",
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
  title,
  dark,
}: {
  id?: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div id={id} className="scroll-mt-28 text-center">
      <h2
        className={`text-3xl md:text-4xl font-medium uppercase tracking-[0.15em] leading-snug text-balance ${
          dark ? "text-gold" : "text-accent"
        }`}
      >
        {title}
      </h2>
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
      <h3 className="mt-3 font-serif font-bold text-lg md:text-xl leading-tight uppercase text-background text-balance">
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
    <article className="h-full rounded-3xl border border-border bg-background/60 p-6 md:p-8 transition-colors duration-500 hover:border-forest/40">
      <div className="space-y-5">
        <div className="space-y-2">
          {entry.period && (
            <p className="text-[10px] uppercase tracking-[0.25em] text-accent">
              {entry.period}
            </p>
          )}
          <h3 className="font-serif font-bold text-lg md:text-xl leading-tight uppercase text-balance">
            {entry.title}
          </h3>
          <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/50 leading-relaxed">
            {entry.meta}
          </p>
        </div>
        <div className="space-y-3">
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

function ExperiencePageSv() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const syncFromHash = () => {
      const h = window.location.hash.replace("#", "");
      if (h === "media") {
        setLightboxOpen(true);
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 scroll-smooth">
        {/* ===== Hero ===== */}
        <section className="relative overflow-hidden">
          <img
            src={experienceHero}
            alt="Rani leder ett samtal under en workshop"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ objectPosition: "50% 0%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/60 to-foreground/25" />
          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 pt-44 md:pt-60 pb-16 md:pb-24 space-y-7 [text-shadow:0_2px_18px_rgba(58,41,34,0.55)]">
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.02] text-balance max-w-4xl text-background">
              Psykologi, välbefinnande & mänsklig utveckling
            </h1>
            <p className="text-lg md:text-xl leading-[1.7] text-background/85 max-w-2xl">
              Mitt arbete förenar psykologisk expertis, mänsklig utveckling
              och kroppsnära vägar till välbefinnande — inom klinisk
              verksamhet, organisationer och samhälle.
            </p>
          </div>
        </section>

        {/* ===== Timeline ===== */}
        <section className="py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <HorizontalTimeline items={timeline} fallbackCta="Se erfarenheten" />
          </div>
        </section>

        {/* ===== Collaborations — dark band ===== */}
        <section className="bg-forest py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              id="clinical"
              dark
              title="Kliniskt arbete"
            />
            <div className="mt-8 md:mt-10 grid gap-5 md:gap-6 md:grid-cols-3">
              {clinicalEntries.map((e) => (
                <ClinicalCard key={e.title} entry={e} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== Beyond the clinic ===== */}
        <section className="py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
              <div className="md:col-span-6 space-y-4">
                <h2 className="text-3xl md:text-4xl font-medium uppercase tracking-[0.15em] leading-snug text-balance text-accent">
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

            <section id="organisational" className="scroll-mt-28">
              <SectionHeader title="Organisatoriskt arbete" />
              <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                {organisationalEntries.map((e) => (
                  <EntryRow key={e.title} entry={e} />
                ))}
              </div>
            </section>

            <section id="community" className="scroll-mt-28">
              <SectionHeader title="Social påverkan" />
              <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                {communityEntries.map((e) => (
                  <EntryRow key={e.title} entry={e} />
                ))}
              </div>

            {/* G-Flow highlight */}
            <div className="rounded-3xl border border-forest/25 bg-secondary/50 p-8 md:p-12 grid md:grid-cols-12 gap-6 md:gap-12 items-center">
              <div className="md:col-span-5 space-y-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                  I fokus
                </p>
                <h3 className="text-4xl md:text-5xl font-serif leading-[1.03]">
                  G-Flow
                </h3>
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
            </section>
          </div>
        </section>

        {/* ===== Personal block ===== */}
        <section className="bg-secondary/60 border-y border-border/60 py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-4">
              <img
                src={personalPlaceholder}
                alt="Platshållarbild — lugn läshörna i morgonljus"
                loading="lazy"
                width={1024}
                height={1280}
                draggable={false}
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-[0_20px_60px_-25px_rgba(58,41,34,0.35)]"
              />
            </div>
            <div className="md:col-span-8 md:col-start-5 space-y-6">
              <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground">
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
        </section>

        {/* ===== Training ===== */}
        <section className="py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader title="Utbildning & kompetens" />
            <div className="mt-8 md:mt-10 grid gap-10 md:grid-cols-3 md:gap-12">
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
        <section className="bg-secondary/60 py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader id="media" title="I media" />
            <div className="mt-8 md:mt-10 grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
              {/* Sveriges Radio */}
              <div>
                <img
                  src={mediaRadio}
                  alt="Studiomikrofon i varmt ljus"
                  loading="lazy"
                  width={1200}
                  height={900}
                  draggable={false}
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_20px_60px_-25px_rgba(58,41,34,0.35)]"
                />
                <h3 className="mt-5 font-serif font-bold text-lg md:text-xl leading-snug uppercase text-center">
                  Sveriges Radio
                </h3>
                <p className="mt-2 text-base leading-[1.75] text-foreground/70">
                  Intervjuad om ungdomars välbefinnande, psykologi och samhällsbaserad folkbildning.
                </p>
              </div>

              {/* Psykologtidningen */}
              <div>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  aria-label="Öppna artikeln i full storlek"
                  className="block w-full cursor-zoom-in"
                >
                  <img
                    src={mediaArticle.url}
                    alt="Artikel i Psykologtidningen om G-Flow"
                    loading="lazy"
                    draggable={false}
                    className="aspect-[4/3] w-full rounded-2xl object-cover object-top shadow-[0_20px_60px_-25px_rgba(58,41,34,0.35)] transition-transform duration-300 hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </button>
                <h3 className="mt-5 font-serif font-bold text-lg md:text-xl leading-snug uppercase text-center">
                  Psykologtidningen
                </h3>
                <p className="mt-2 text-base leading-[1.75] text-foreground/70">
                  Uppmärksammad i samband med G-Flow och skärningspunkten mellan psykologi, kultur och ungdomsutveckling.
                </p>
              </div>

              {/* Podd */}
              <div>
                <img
                  src={mediaPodcast}
                  alt="Podcastmikrofoner i inspelningsstudio"
                  loading="lazy"
                  width={1200}
                  height={900}
                  draggable={false}
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_20px_60px_-25px_rgba(58,41,34,0.35)]"
                />
                <h3 className="mt-5 font-serif font-bold text-lg md:text-xl leading-snug uppercase text-center">
                  Podd
                </h3>
                <p className="mt-2 text-base leading-[1.75] text-foreground/70">
                  Gäst i samtal om psykologi, kultur och välbefinnande.
                </p>
              </div>
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
        <section className="px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-3 md:gap-5">
            {[
              { src: photoGroupCircle, alt: "Deltagare i en cirkel under en workshop", pos: "50% 50%" },
              { src: photoHandsSky, alt: "Händer som sträcks mot himlen", pos: "40% 50%" },
              { src: photoFireEvening, alt: "Två deltagare vid en eld en kväll", pos: "40% 50%" },
            ].map((img) => (
              <img key={img.alt} src={img.src} alt={img.alt} loading="lazy" className="w-full aspect-[3/4] md:aspect-[4/5] object-cover" style={{ objectPosition: img.pos }} />
            ))}
          </div>
        </section>

        <section className="bg-foreground text-background py-24 px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-medium uppercase tracking-[0.15em] leading-snug text-balance">
              Börja där du är.
            </h2>
            <p className="text-background/90 text-lg">
              Meningsfull förändring börjar sällan med att ha alla svar. Ibland börjar det helt enkelt med ett samtal.
            </p>
            <Link
              to="/contact"
              hash="contact"
              className="inline-flex px-8 py-4 bg-background text-foreground rounded-full text-xs uppercase tracking-[0.22em] hover:bg-secondary transition-all"
            >
              Boka ett introducerande samtal
            </Link>
          </div>
        </section>

        <LogoMarquee />

        <ArticleLightbox
          src={mediaArticle.url}
          alt="Artikel i Psykologtidningen om G-Flow"
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      </main>
      <SiteFooter />
    </div>
  );
}

function ExperiencePage() {
  const { lang } = useLang();
  return lang === "en" ? <ExperienceEn /> : <ExperiencePageSv />;
}

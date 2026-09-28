import { useLang } from "@/lib/i18n";
import { ServicesEn } from "@/components/en/ServicesEn";
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
          "Tjänster — Psykologi, välbefinnande & hållbar prestation | Rohani",
      },
      {
        name: "description",
        content:
          "ROHANIs tjänster för individer, team och samhällen: psykologi, mindfulness, andningsarbete, rörelse, workshops, föreläsningar, retreats och välbefinnandeprogram förankrade i modern psykologi och mänsklig gemenskap.",
      },
      { property: "og:title", content: "Rohanis tjänster" },
      {
        property: "og:description",
        content:
          "Människonära psykologi, mindfulness och välbefinnandeprogram för individer, organisationer och samhällen. Förankrat i vetenskap. Lett av medmänsklighet. Format för varaktig effekt.",
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
    title: "Psykologi & personlig utveckling",
    body: [
      "Vare sig du navigerar stress, livsförändringar, utmattning eller ångest — eller helt enkelt söker större klarhet och riktning — erbjuder ROHANI psykologiskt förankrat stöd som möter dig där du är.",
      "Sessionerna förenar evidensbaserade psykologiska principer med praktiska verktyg som stärker motståndskraft, emotionell medvetenhet och långsiktigt välbefinnande.",
      "Tillsammans arbetar vi mot hållbar förändring — inte genom att laga den du är, utan genom att hjälpa dig förstå dig själv mer djupt och skapa varaktiga mönster som stödjer livet du vill leva.",
    ],
    listLabel: "Fokusområden inkluderar:",
    items: [
      "Stress & utmattning",
      "Ångest & emotionellt välbefinnande",
      "Självkänsla & självförtroende",
      "Personlig utveckling",
      "Livsförändringar",
      "Relationer & gränser",
      "Emotionsreglering",
      "Värderingar & mening",
      "Hållbara vanor & livsstilsförändring",
    ],
  },
  {
    title: "Mindfulness, andning & reglering av nervsystemet",
    body: [
      "Det moderna livet håller många av oss i ett ständigt tillstånd av aktivering.",
      "Genom guidad mindfulness, andningsarbete och tekniker för nervsystemreglering lär du dig praktiska sätt att sakta ner, återhämta dig och återkoppla till dig själv.",
      "Dessa sessioner passar både som fristående upplevelser och som komplement till psykologiskt arbete.",
    ],
    listLabel: "Fördelar kan inkludera:",
    items: [
      "Minskad stress",
      "Bättre fokus",
      "Bättre sömn",
      "Större emotionell motståndskraft",
      "Ökad självkännedom",
      "Förbättrad återhämtning och energi",
    ],
  },
  {
    title: "Rörelse, yoga & kroppsnära välbefinnande",
    body: [
      "Välbefinnande handlar inte bara om hur vi tänker — det är något vi upplever genom kroppen.",
      "ROHANI erbjuder rörelseupplevelser som förenar psykologi, mindfulness och medveten rörelse för att odla närvaro, trygghet och vitalitet.",
      "Sessionerna kan innehålla yoga, mindful rörelse, mobilitet eller dansbaserade upplevelser beroende på dina mål.",
    ],
  },
];

const workshopCategories = [
  {
    category: "Prestation & ledarskap",
    topics: [
      "Psykologin bakom hållbar prestation",
      "Självledarskap",
      "IQ vs. EQ",
      "Självförtroende utan perfektionism",
      "Uppmärksamhet i distraktionens tid",
    ],
  },
  {
    category: "Välbefinnande & motståndskraft",
    topics: [
      "Vetenskapen om stress",
      "Stresshantering & förebyggande av utmattning",
      "Reglering av nervsystemet",
      "Mindfulness på arbetet",
      "Balans i arbetslivet",
      "Psykologin bakom välbefinnande på arbetet",
    ],
  },
  {
    category: "Kultur & gemenskap",
    topics: [
      "Kommunikation, relationer & hälsosam teamdynamik",
      "Tillhörighet, gemenskap & arbetskultur",
      "Motståndskraft i förändring",
    ],
  },
];

const teamServices = [
  {
    title: "Workshops",
    description:
      "Interaktiva workshops som förenar psykologisk vetenskap med praktiska verktyg som medarbetarna direkt kan tillämpa.",
    hasCategories: true,
  },
  {
    title: "Föreläsningar & keynotes",
    description:
      "Evidensbaserade föreläsningar som inspirerar och samtidigt förblir praktiska och handlingsbara.",
    body: [
      "Anpassade för konferenser, ledarskapsevenemang, utbildningsinstitutioner och organisationer som söker meningsfulla samtal om psykisk hälsa, välbefinnande och mänsklig prestation.",
      "Innehållet kan anpassas helt efter era önskemål.",
    ],
  },
  {
    title: "Teamutveckling & retreats",
    description:
      "Skapa upplevelser som stärker gemenskap, tillit och samarbete.",
    body: [
      "ROHANI formger och leder skräddarsydda teamdagar, retreats och välbefinnandeupplevelser som kan kombinera:",
    ],
    combine: [
      "Psykologi",
      "Teambuilding",
      "Reflektion",
      "Mindfulness",
      "Andningsarbete",
      "Rörelse",
      "Utomhusupplevelser",
      "Kreativa övningar",
    ],
    idealLabel: "Perfekt för:",
    ideal: [
      "Ledningsgrupper",
      "Företagsretreater",
      "Strategidagar",
      "Kickoffar",
      "Hälsodagar",
      "Offsite",
      "Teamfirande",
    ],
  },
  {
    title: "Välbefinnandeprogram",
    description:
      "Längre samarbeten som stödjer friskare arbetskulturer genom återkommande workshops, välbefinnandesessioner och psykologisk utbildning.",
    body: [
      "Programmen utformas kring er organisations mål och kan innehålla månadsvisa sessioner, stöd till ledning samt initiativ för medarbetarnas välbefinnande.",
    ],
  },
];

const communityExamples = [
  "Program för ungdomars egenmakt",
  "Initiativ för psykisk hälsa",
  "Föräldrautbildning",
  "Välbefinnandeevenemang i samhället",
  "Mindfulness- och rörelseprogram",
  "Förebyggande insatser för psykisk hälsa",
];

const sections = [
  { id: "individuals", index: "01", label: "För individer" },
  { id: "teams", index: "02", label: "För team & organisationer" },
  { id: "communities", index: "03", label: "För samhällen" },
];

/* ---------- Helpers ---------- */

function SectionHeader({
  id,
  index,
  title,
}: {
  id: string;
  index: string;
  title: string;
}) {
  return (
    <div id={id} className="scroll-mt-28 text-center">
      <p className="text-4xl md:text-5xl font-medium uppercase tracking-[0.15em] leading-snug text-balance text-accent">
        {index} · {title}
      </p>
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
            Populära ämnen:
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
                <span>{isOpen ? "Visa mindre" : "Läs mer"}</span>
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

function ServicesPageSv() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 scroll-smooth">
        {/* ===== Hero ===== */}
        <section className="px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-end">
            <div className="md:col-span-7 space-y-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                ROHANIs förhållningssätt
              </p>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.02] text-balance">
                Människan först.
              </h1>
              <p className="text-lg md:text-xl leading-[1.7] text-foreground/75 max-w-xl">
                ROHANI är en psykologibaserad verksamhet för välbefinnande och
                mänsklig utveckling som arbetar med individer, team,
                organisationer och samhällen.
              </p>
            </div>

            <div className="md:col-span-5 space-y-6">
              <p className="text-base leading-[1.75] text-foreground/70">
                Vi tror att hållbar förändring sker när människor känner sig
                trygga, förstådda och utrustade med praktiska verktyg de kan
                bära med sig i vardagen.
              </p>
              <p className="text-base leading-[1.75] text-foreground/70">
                Vårt arbete förenar modern psykologi med mindfulness,
                reglering av nervsystemet och upplevelsebaserat lärande för att
                skapa meningsfull förändring som varar.
              </p>
            </div>
          </div>

          {/* Statement + in-page nav */}
          <div className="max-w-7xl mx-auto mt-16 md:mt-20 pt-10 md:pt-14 border-t border-border/60 grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-7 space-y-3">
              <p className="font-serif text-2xl md:text-3xl leading-snug">
                Förankrat i vetenskap.
              </p>
              <p className="font-serif text-2xl md:text-3xl leading-snug">
                Lett av medmänsklighet.
              </p>
              <p className="font-serif text-2xl md:text-3xl leading-snug">
                Format för varaktig effekt.
              </p>
            </div>
            <nav className="md:col-span-5 flex flex-col gap-4 md:pt-2">
              <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                Utforska
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
              alt="Lugnt, solbelyst skandinavisk interiör"
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
                  title="För individer"
                />
              </div>
              <div className="md:col-span-5">
                <img
                  src={servicesIndividuals}
                  alt="Lugnt, texturerat hörn med linne och varmt dagsljus"
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
                  02 · För team & organisationer
                </p>
                <h2 className="text-4xl md:text-5xl font-serif leading-[1.1] text-balance">
                  Hållbar prestation börjar med människor
                </h2>
                <p className="text-base md:text-lg leading-[1.8] text-foreground/75">
                  Friska organisationer byggs av människor som har de
                  psykologiska resurserna och ett reglerat nervsystem som krävs
                  för att trivas och utvecklas.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-base leading-[1.8] text-foreground/75">
                  ROHANI samarbetar med företag, utbildningsinstitutioner och
                  organisationer för att stärka välbefinnande, motståndskraft
                  och hållbar prestation genom evidensbaserad psykologi och
                  engagerande, praktiska upplevelser.
                </p>
                <div className="pt-6 border-t border-border/60 space-y-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                    Så samarbetar vi
                  </p>
                  <p className="text-base leading-[1.8] text-foreground/75">
                    Varje samarbete anpassas efter er organisations behov,
                    kultur och mål.
                  </p>
                  <p className="text-base leading-[1.8] text-foreground/75">
                    Vare sig ni planerar en ledarskapsworkshop, ett
                    välbefinnandeinitiativ, en konferens eller en
                    teamutvecklingsdag är innehållet format för att skapa
                    meningsfull och varaktig effekt.
                  </p>
                </div>
              </div>
            </div>


            <div className="mt-12 md:mt-16 overflow-hidden rounded-4xl">
              <img
                src={servicesTeams}
                alt="Solbelyst möteslokal förberedd för en workshop"
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
                  03 · För samhällen
                </p>
                <h2 className="text-4xl md:text-5xl font-serif leading-[1.1] text-balance">
                  Program som skapar meningsfull förändring
                </h2>
                <p className="text-base md:text-lg leading-[1.8] text-foreground/75">
                  ROHANI samarbetar med kommuner, skolor, idéorganisationer och
                  samhällsorganisationer för att forma tillgängliga program som
                  stärker välbefinnande, motståndskraft och tillhörighet.
                </p>
              </div>
              <div className="space-y-6 md:pt-14">
                <p className="text-base leading-[1.8] text-foreground/75">
                  Tillgängliga program som stärker välbefinnande, motståndskraft
                  och tillhörighet.
                </p>
                <p className="text-base leading-[1.8] text-foreground/75">
                  Projekten anpassas efter varje samhälle och kan innehålla
                  workshops, gruppprogram, retreats eller utbildningsinitiativ
                  för barn, unga, vuxna eller familjer.
                </p>
              </div>
            </div>

            <div className="mt-12 md:mt-16">
              <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50 mb-6">
                Exempel:
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
              Börja där du är.
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              Meningsfull förändring börjar sällan med att ha alla svar.
              Ibland börjar den helt enkelt med ett samtal.
            </p>
            <Link
              to="/contact"
              className="inline-flex px-8 py-4 bg-background text-foreground rounded-full text-xs uppercase tracking-[0.22em] hover:bg-secondary transition-all"
            >
              Boka ett introducerande samtal
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}

function ServicesPage() {
  const { lang } = useLang();
  return lang === "en" ? <ServicesEn /> : <ServicesPageSv />;
}

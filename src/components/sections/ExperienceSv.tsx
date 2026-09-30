import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ArticleLightbox } from "@/components/sections/ArticleLightbox";
import experienceHero from "@/assets/photos/leading-session.jpg";
import heartOfWorkPhoto from "@/assets/photos/heart-of-work-group.jpeg.asset.json";
import mediaArticle from "@/assets/media-article.jpg.asset.json";
import mediaRadio from "@/assets/media-radio.jpg";
import mediaMagazine from "@/assets/media-magazine.jpg";
import mediaPodcast from "@/assets/media-podcast.jpg";
import photoGroupCircle from "@/assets/photos/group-circle.jpg";
import photoHandsSky from "@/assets/photos/hands-sky.jpg";
import photoFireEvening from "@/assets/photos/fire-evening.jpg";

import { ExperienceTabs, type ExperienceSection } from "@/components/sections/ExperienceTabs";
/* ---------- Data ---------- */

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
    body: ["Som legitimerad psykolog utreder och behandlar jag vuxna inom psykiatrin. Jag anpassar behandlingen efter varje människas behov och livssituation."],
  },
  {
    period: "2018 — 2022",
    title: "Barns & Ungas Psykiska Hälsa",
    meta: "BUP Brommaplan, Stockholm · Legitimerad psykolog",
    body: ["På BUP utredde och behandlade jag barn och unga, i nära samarbete med familjer och vårdteam. Arbetet lärde mig att möta varje ung person utifrån deras förutsättningar."],
  },
  {
    period: "2018 — 2022",
    title: "Sjukhuspsykiatri & Akutsjukvård",
    meta: "Karolinska Universitetssjukhuset · Krisintervention",
    body: ["På Karolinska arbetade jag med svår psykisk ohälsa, krisintervention och suicidprevention. Det har gett mig trygghet att vara närvarande också i komplexa och pressade situationer."],
  },
];

const organisationalEntries: Entry[] = [
  {
    title: "Somaya Stödjour",
    meta: "Psykologiskt & välbefinnandearbete",
    body: ["Jag ledde en rörelseworkshop för kvinnor och familjer som möter svåra livsvillkor. Ett arbete där trygghet, lyhördhet och kulturell förståelse stod i centrum."],
    link: {
      label: "Somaya Stödjour",
      href: "https://www.linkedin.com/company/somaya-stodjour/?viewAsMember=true",
    },
  },
  {
    title: "Guidad meditation på arbetsplatsen",
    meta: "Region Stockholm · BUP Brommaplan",
    body: ["Jag ledde återkommande meditationer för vårdpersonal på BUP, med konkreta verktyg för återhämtning och stressreglering i en krävande vardag."],
    tags: "Välbefinnande i arbetslivet · Mindfulness · Stressreglering · Sjukvård",
  },
];

const communityEntries: Entry[] = [
  {
    title: "G-Flow · ABF Södertörn",
    meta: "Folkbildning · Ungdomars välbefinnande · Kultur",
    body: ["Tillsammans med ABF Södertörn gjorde jag psykologi, rörelse och gemenskap tillgängligt för unga genom G-Flow — ett tryggt rum för självuttryck och utveckling."],
  },
  {
    title: "Haninge kommun",
    meta: "Ungdomars välbefinnande · Samhällsutveckling · Offentlig sektor",
    body: ["I samarbete med Haninge kommun skapade jag inkluderande mötesplatser där unga fick utforska välbefinnande, rörelse och gemenskap."],
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
  brown,
}: {
  id?: string;
  title: string;
  dark?: boolean;
  brown?: boolean;
}) {
  return (
    <div id={id} className="scroll-mt-28 text-center">
      <h2
        className={`text-3xl md:text-4xl font-medium uppercase tracking-[0.15em] leading-snug text-balance ${
           dark ? "text-background" : brown ? "text-foreground" : "text-accent"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

function ClinicalCard({ entry }: { entry: Entry }) {
  return (
    <article className="flex gap-5 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-colors duration-500 hover:border-accent/40">
      <div
        aria-hidden
        className="w-28 md:w-44 shrink-0 aspect-square rounded-2xl border border-border bg-secondary/60"
      />
      <div className="min-w-0 flex-1">
        {entry.period && (
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent">
            {entry.period}
          </p>
        )}
        <h3 className="mt-3 font-serif font-bold text-lg md:text-xl leading-tight uppercase text-foreground text-balance">
          {entry.title}
        </h3>
        <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-foreground/55 leading-relaxed">
          {entry.meta}
        </p>
        <div className="mt-5 space-y-4">
          {entry.body.map((p) => (
            <p key={p} className="text-base leading-[1.75] text-foreground/75">
              {p}
            </p>
          ))}
        </div>
        {entry.link && (
          <div className="pt-6">
            <ExternalLink {...entry.link} />
          </div>
        )}
      </div>
    </article>
  );
}

function EntryRow({ entry, light = false }: { entry: Entry; light?: boolean }) {
  return (
    <article className={`flex gap-5 md:gap-7 rounded-3xl border p-5 md:p-7 transition-colors duration-500 ${light ? "border-border bg-background text-foreground hover:border-accent/40" : "border-background/15 bg-foreground text-background hover:border-background/40"}`}>
      <div
        aria-hidden
        className={`w-28 md:w-44 shrink-0 aspect-square rounded-2xl ${light ? "border border-border bg-secondary/60" : "bg-background/10"}`}
      />
      <div className="min-w-0 flex-1 space-y-5">
        <div className="space-y-2">
          {entry.period && (
             <p className={`text-[10px] uppercase tracking-[0.25em] ${light ? "text-accent" : "text-background/70"}`}>
              {entry.period}
            </p>
          )}
          <h3 className="font-serif font-bold text-lg md:text-xl leading-tight uppercase text-balance">
            {entry.title}
          </h3>
           <p className={`text-[11px] uppercase tracking-[0.18em] leading-relaxed ${light ? "text-foreground/55" : "text-background/65"}`}>
            {entry.meta}
          </p>
        </div>
        <div className="space-y-3">
          {entry.body.map((p) => (
             <p key={p} className={`text-base leading-[1.75] ${light ? "text-foreground/75" : "text-background/85"}`}>
              {p}
            </p>
          ))}
          {entry.tags && (
             <p className={`text-[11px] uppercase tracking-[0.18em] pt-1 ${light ? "text-foreground/55" : "text-background/70"}`}>
              {entry.tags}
            </p>
          )}
          {entry.link && (
            <div className="pt-2">
               <ExternalLink {...entry.link} dark={!light} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

/* ---------- Page ---------- */

export function ExperiencePageSv({ section = "clinical" }: { section?: ExperienceSection }) {
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

        <ExperienceTabs lang="sv" active={section} />

{section === "clinical" && (<>
        {/* ===== Collaborations — dark band ===== */}
        <section className="bg-forest py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              id="clinical"
              dark
              title="Kliniskt arbete"
            />
            <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">
              {clinicalEntries.map((e) => (
                <ClinicalCard key={e.title} entry={e} />
              ))}
            </div>
          </div>
        </section>


</>)}
{section === "organisational" && (<>
         {/* ===== Organisational work ===== */}
        <section className="py-16 md:py-20 px-6 md:px-10">
           <div id="organisational" className="max-w-7xl mx-auto scroll-mt-28">
             <SectionHeader title="Organisatoriskt arbete" brown />
             <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">
               {organisationalEntries.map((e) => (
                 <EntryRow key={e.title} entry={e} />
               ))}
          </div>
           </div>
         </section>

</>)}
{section === "community" && (<>
         <section className="bg-forest py-16 md:py-20 px-6 md:px-10">
           <div id="community" className="max-w-7xl mx-auto scroll-mt-28">
             <SectionHeader title="Social påverkan" dark />
             <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">
               {communityEntries.map((e) => (
                 <EntryRow key={e.title} entry={e} light />
               ))}
             </div>
           </div>
        </section>

</>)}
{section === "clinical" && (<>
        {/* ===== Heart of the work ===== */}
        <section className="relative overflow-hidden">
          <img src={heartOfWorkPhoto.url} alt="Deltagare sitter tillsammans i en cirkel under en sammankomst" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/65 to-foreground/35" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-36 md:pt-52 pb-16 md:pb-24">
            <div className="max-w-3xl space-y-6 text-background">
              <h2 className="font-serif text-4xl md:text-6xl leading-tight">
                I hjärtat av detta arbete ligger en nyfikenhet på vem vi är,
                vad som format oss — och vem vi håller på att bli.
              </h2>
              <p className="text-base leading-[1.75] text-background/90">
                Hur kan vi röra oss genom livet med större medvetenhet,
                handlingskraft och intention — istället för att bara reagera på
                det som händer omkring oss?
              </p>
              <p className="text-base leading-[1.75] text-background/90">
                Tänk om meningsfull förändring börjar med att bli mer medveten
                om hur vi ser, upplever och möter världen?
              </p>
              <p className="text-base leading-[1.75] text-background/90">
                Mitt arbete förenar psykologisk vetenskap med ett mänskligt,
                kroppsnära och kulturellt anpassningsbart förhållningssätt till
                välbefinnande och utveckling.
              </p>
            </div>
          </div>
        </section>


</>)}
{section === "media" && (<>
        {/* ===== In the Media + organisations ===== */}
        <section className="bg-secondary/60 py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader id="media" title="I media" />
            <div className="mt-8 md:mt-10 space-y-10 md:space-y-12">
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

          </div>
        </section>

</>)}
{section === "clinical" && (<>
        <section className="px-6 md:px-10 pb-2">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent">
            Erfarenhet från
          </p>
        </section>

        <LogoMarquee className="mt-4 md:mt-6" />

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

</>)}
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
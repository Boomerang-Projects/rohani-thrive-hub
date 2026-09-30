import { useEffect, useState } from "react";


import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ArticleLightbox } from "@/components/sections/ArticleLightbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import logoVuxen from "@/assets/logos/vuxenpsykiatrin-region-stockholm.png";
import logoBup from "@/assets/logos/bup-region-stockholm.png";
import logoKarolinska from "@/assets/logos/karolinska.png";
import somayaLogo from "@/assets/logos/somaya.png";
import regionStockholmLogo from "@/assets/logos/region-stockholm-dark.png";
import haningeLogo from "@/assets/logos/haninge-kommun-dark.png";
import houseOfCreativeLogo from "@/assets/logos/hocs.png";
import heroLogo from "@/assets/logos/hero-dark.png";
import satsLogo from "@/assets/logos/sats-card.png";
import fryshusetLogo from "@/assets/logos/fryshuset.png";
import tfsLogo from "@/assets/logos/tillsammans-for-sverige.png";
import groLogo from "@/assets/logos/gro-studio.png";
// Main photos for the Social påverkan cards (from the "Sociala Påverkan Bilder" folder).
import photoGflow from "@/assets/photos/social-gflow.jpg";
import photoHero from "@/assets/photos/social-hero.jpg";
import photoJoy from "@/assets/photos/social-joy-in-the-wild.jpg";
import photoHoc from "@/assets/photos/social-house-of-creatives.jpg";
import photoFryshuset from "@/assets/photos/social-fryshuset.jpg";
import photoVagen from "@/assets/photos/social-vagen-tillbaka.jpg";
import photoMotherRoots from "@/assets/photos/social-mother-roots.jpg";
import { PhotoEntryCard } from "@/components/sections/PhotoEntryCard";
import { ModalGallery, galleryFor } from "@/components/sections/ModalGallery";
import srLogo from "@/assets/logos/sveriges-radio.png";
import ptLogo from "@/assets/logos/psykologtidningen.png";
import abfLogo from "@/assets/logos/abf.png";
import experienceHero from "@/assets/photos/leading-session.jpg";
// Page 7 of Psykologtidningen #4 2026 ("Finns en rädsla för kulturen"), rendered from the magazine PDF.
import mediaArticle from "@/assets/psykologtidningen-nr4-2026-s7.jpg";
import mediaMagazine from "@/assets/media-magazine.jpg";

import { type ExperienceSection } from "@/components/sections/ExperienceTabs";
import { ExperienceSwipe } from "@/components/sections/ExperienceSwipe";
/* ---------- Data ---------- */

type Entry = {
  period?: string;
  title: string;
  image?: string;
  /** Photo shown on the card. When set, the logo (image) only shows in the popup. */
  photo?: string;
  /** A second logo shown next to the first one in the popup (e.g. Tillsammans för Sverige). */
  extraLogo?: string;
  /** Folder name in src/assets/photos/gallery/ with extra photos for the popup. */
  gallery?: string;
  logoBig?: boolean;
  meta: string;
  body: string[];
  longBody?: string[];
  tags?: string;
  link?: { label: string; href: string };
};



const clinicalEntries: Entry[] = [
  {
    period: "2025 - Nu",
    title: "Vuxenpsykiatrin",
    image: logoVuxen,
    meta: "Offentlig vård · Legitimerad psykolog",
    body: ["Som legitimerad psykolog utreder och behandlar jag vuxna inom psykiatrin. Jag anpassar behandlingen efter varje människas behov och livssituation."],
    longBody: [
      "Jag genomför psykologisk utredning och behandling inom vuxenpsykiatrisk vård, med ett brett spektrum av psykisk ohälsa - bland annat ångest, depression, stressrelaterade besvär och komplexa tillstånd.",
      "Tjänsten innefattar självständigt kliniskt arbete, behandlingsplanering och terapeutiska interventioner.",
      "Att arbeta över olika tillstånd och individuella behov har ytterligare utvecklat min förmåga att anpassa psykologiska förhållningssätt, kommunikation och interventioner efter personen, kontexten och livsskeden.",
    ],
  },
  {
    period: "2022 - 2025",
    title: "Barns & Ungas Psykiska Hälsa",
    image: logoBup,
    meta: "BUP Brommaplan, Stockholm · Legitimerad psykolog",
    body: ["På BUP utredde och behandlade jag barn och unga, i nära samarbete med familjer och vårdteam. Arbetet lärde mig att möta varje ung person utifrån deras förutsättningar."],
    longBody: [
      "Jag arbetade inom barn- och ungdomspsykiatrin och stödde unga människor med ett brett spektrum av psykologiska och psykiska utmaningar.",
      "Mitt arbete omfattade psykologisk utredning, terapeutiska interventioner, psykoedukation, krishantering och samverkan med familjer och tvärprofessionella team.",
      "Den erfarenheten har stärkt och format min förmåga att anpassa terapeutiska förhållningssätt, kommunikation och interventioner efter olika utvecklingsskeden, individuella behov och familjekonstellationer.",
    ],
  },
  {
    period: "2018 - 2022",
    title: "Sjukhuspsykiatri & Akutsjukvård",
    image: logoKarolinska,
    meta: "Karolinska Universitetssjukhuset · Krisintervention",
    body: ["På Karolinska arbetade jag med svår psykisk ohälsa, krisintervention och suicidprevention. Det har gett mig trygghet att vara närvarande också i komplexa och pressade situationer."],
    longBody: [
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
    image: somayaLogo,
    meta: "Psykologiskt & välbefinnandearbete",
    body: ["Mental hälsa och rörelse - workshop för en organisation som stödjer kvinnor och familjer som möter svåra livsvillkor."],
    longBody: [
      "Mental hälsa och rörelse - workshop för en organisation som stödjer kvinnor och familjer som lever med komplexa hem-, sociala och psykiska utmaningar.",
      "Detta arbete fördjupade min förståelse för sambandet mellan psykiskt välbefinnande, trygghet, relationer, kultur och yttre livsvillkor.",
    ],
    link: {
      label: "Somaya Stödjour",
      href: "https://www.linkedin.com/company/somaya-stodjour/?viewAsMember=true",
    },
  },
  {
    title: "Guidad meditation på arbetsplatsen",
    image: regionStockholmLogo,
    meta: "Region Stockholm · BUP Brommaplan",
    body: ["Jag ledde återkommande meditationer för vårdpersonal på BUP, med konkreta verktyg för återhämtning och stressreglering i en krävande vardag."],
    longBody: [
      "Jag ledde återkommande guidade meditationssessioner för vårdpersonal inom barn- och ungdomspsykiatrin.",
      "Sessionerna skapade en strukturerad pausesmiljö för förankring och återhämtning i en krävande klinisk vardag, och introducerade praktiska mindfulnessbaserade verktyg för stressreglering och hållbart välbefinnande i arbetet.",
    ],
    tags: "Välbefinnande i arbetslivet · Mindfulness · Stressreglering · Sjukvård",
  },
  {
    title: "SATS · Yogainstruktör",
    image: satsLogo,
    meta: "Yoga · Hot yoga · Avslappning & rörelse",
    body: ["Som yogainstruktör på SATS guidar jag deltagare genom rörelse och avslappning, bland annat i hot yoga i 38 grader."],
    longBody: [
      "Jag arbetar som yogainstruktör på SATS, där jag guidar deltagare genom rörelse, andning och avslappning.",
      "Jag leder bland annat hot yoga i 38 grader. Värmen hjälper kroppen att mjukna och ger utrymme för närvaro, fokus och återhämtning.",
    ],
  },
  // Placeholder text: the real text for g:ro studio is coming later.
  {
    title: "g:ro studio",
    image: groLogo,
    meta: "Kommer snart",
    body: ["Text kommer snart."],
  },
];

const communityEntries: Entry[] = [
  {
    title: "G-Flow · ABF Södertörn & Haninge kommun",
    photo: photoGflow,
    gallery: "gflow",
    image: haningeLogo,
    meta: "Folkbildning · Ungdomars välbefinnande · Samhällsutveckling",

    body: ["Tillsammans med ABF Södertörn och Haninge kommun gjorde jag psykologi, rörelse och gemenskap tillgängligt för unga genom G-Flow - ett tryggt rum för självuttryck och utveckling."],
    longBody: [
      "G-Flow är ett initiativ jag grundat för att skapats för att ge unga tjejer en trygg, inkluderande och prestationsfri plats att utforska självkänsla, identitet, känslor, kropp, tillhörighet och relationer.",
      "Genom initiativet har jag, i samarbete med ABF Södertörn och lokala samhällsaktörer, utvecklat och lett kostnadsfria träffar där psykologisk kunskap och psykoedukation kombineras med meditation, andningsövningar, rörelse, dans och reflektion.",
      "Syftet har varit att göra verktyg för mental hälsa och personlig utveckling mer tillgängliga, samtidigt som deltagarna får möjlighet att känna sig sedda, hörda och delaktiga i en trygg gemenskap.",
      "G-Flow har genomförts i flera omgångar under skollov och har skapat ett rum där unga tjejer kan utforska sig själva, stärka sin självkänsla och bygga relationer med andra utan fokus på prestation.",
      "Initiativet har även fått uppmärksamhet i Sveriges Radio och Psykologtidningen, vilket har bidragit till att lyfta betydelsen av förebyggande och lättillgängliga insatser för ungas psykiska och sociala välbefinnande.",
      "G-Flow bygger på en enkel övertygelse: när unga får utrymme att möta sig själva och varandra, skapar vi starkare förutsättningar för både individuellt och kollektivt välbefinnande.",
    ],
  },
  {
    title: "Hero idrottsförening",
    photo: photoHero,
    gallery: "hero",
    image: heroLogo,

    meta: "Ideell förening · Fysisk hälsa · Självkänsla & mental hälsa",
    body: ["En ideell förening för unga tjejer med fokus på fysisk hälsa - där jag regelbundet håller dansklasser med fokus på att stärka självkänsla och mental hälsa."],
    longBody: [
      "Hero Idrottsförening är en ideell organisation som skapar möjligheter för unga tjejer i förorten att stärka sin hälsa, gemenskap och sitt välbefinnande genom träning och rörelse.",
      "Genom mitt samarbete med Hero håller jag regelbundna dansklasser under terminen, där dans och rörelse kombineras med fokus på självkänsla, kroppsmedvetenhet och mental hälsa.",
      "På Alla hjärtans dag höll jag även en integrativ workshop och föreläsning om självkärlek, självomsorg och självmedkänsla. Ungdomarna fick utforska vad det faktiskt innebär att ta hand om sig själva, hur de ser på och pratar med sig själva, och hur den egna självbilden kan påverka relationerna vi skapar med andra.",
      "Arbetet fortsätter genom återkommande dansklasser, föreläsningar och workshops, och fortsätter att ha en stor efterfrågan bland ungdomarna.",
      "Genom att kombinera rörelse, psykologi och gemenskap vill jag skapa utrymme för unga tjejer att inte bara må bättre - utan också utveckla en starkare, medveten och mer positiv relation till sig själva och varandra.",
    ],
  },
  {
    title: "Joy in the Wild",
    photo: photoJoy,
    gallery: "joy-in-the-wild",
    meta: "Grundare & facilitator",
    body: ["En natur- och välbefinnandeupplevelse för kvinnor, med fokus på gemenskap, närvaro, rörelse och självreflektion."],
    longBody: [
      "Joy in the Wild skapades för kvinnor med olika kulturella bakgrunder, med en önskan att utforska vad lycka faktiskt betyder för oss bortom prestation, förväntningar och kulturella föreställningar.",
      "Genom skrivövningar, reflektion och öppna samtal fick deltagarna utforska vilken plats lycka har haft i deras liv, hur de såg på lycka som barn och hur kulturella normer och erfarenheter kan påverka vår relation till glädje, frihet och oss själva.",
      "Tillsammans med poeten och dansaren Melissa utforskade vi även dans och somatisk rörelse. Att få röra sig för att återknyta till känslan, uttrycket och glädjens skull.",
      "Vi mediterade, andades, reflekterade och framför allt - hade kul.",
      "Joy in the Wild skapades som en påminnelse om att lycka inte behöver vara något vi förtjänar eller presterar oss till. Ibland är det så simpelt som att sakta ner, och lägga märke till, och återknyta till det som redan får oss att känna oss levande.",
    ],
  },
  {
    title: "House of Creatives Solna",
    photo: photoHoc,
    gallery: "house-of-creatives",
    image: houseOfCreativeLogo,
    meta: "Rörelse & Meditation · Gemenskap",
    body: ["Rörelse och meditation hos House of Creatives - ett stöttande rum för närvaro, återhämtning och gemenskap."],
    longBody: [
      "Som en del av det ideella kreativa initiativet House of Creatives håller jag Meditation & Movement-klasser för människor med olika åldrar, kön och kulturella bakgrunder.",
      "Klasserna kombinerar fri somatisk rörelse, musik, meditation och andning. Genom lätt guidning och olika teman får deltagarna möjlighet att släppa prestation och återknyta till mer lekfulla, fria och närvarande delar av sig själva.",
      "Rörelsen blir ett sätt att landa i kroppen, släppa på stress och skapa mer utrymme innan vi växlar ner i stillhet. Klassen avslutas med meditation och andning, följt av gemensam delning och integration.",
      "Genom att skapa ett inkluderande rum där människor med olika erfarenheter och bakgrunder möts, blir klassen också en plats för gemenskap, uttryck och mänsklig kontakt - något många idag längtar efter.",
    ],
  },
  {
    title: "Tillsammans för Sverige · Fryshuset · Jakten på Tro & Mening",
    photo: photoFryshuset,
    gallery: "fryshuset",
    image: fryshusetLogo,
    extraLogo: tfsLogo,
    meta: "Podcast · Samtal om mening & välbefinnande",
    body: ["Gäst i Fryshusets podcast Jakten på Tro & Mening - ett samtal om psykologisk hälsa och det som ger livet mening."],
    longBody: [
      "Jag deltog i Fryshusets podcast Jakten på Tro & Mening.",
      "I avsnittet samtalar vi om psykologisk hälsa - om vad som skapar mening, hur vi kan stärka vårt välbefinnande och vad som händer när vi lyssnar in oss själva.",
    ],
    link: { label: "Se avsnittet på YouTube", href: "https://www.youtube.com/watch?v=nLSdBQndF0E&t=1285s" },
  },
  {
    title: "Vägen tillbaka",
    photo: photoVagen,
    gallery: "vagen-tillbaka",
    meta: "Retreat · 3 dagar · Uppsala",
    body: ["Ett tre dagars retreat för kvinnor i skogen utanför Uppsala, med yoga, meditation, breathwork och reflektion i naturen."],
    longBody: [
      "Vägen tillbaka var ett tre dagars retreat för kvinnor, ute i skogen utanför Uppsala.",
      "Dagarna fylldes av yoga, meditation, breathwork och reflektion. Allt kretsade kring välbefinnande och hälsa, med gott om tid att äta god mat tillsammans och vara ute i naturen.",
      "Retreatet höll jag tillsammans med en shaman från Peru, som förde in traditioner och perspektiv från Peru i arbetet.",
    ],
  },
  {
    title: "Motheroots",
    photo: photoMotherRoots,
    gallery: "mother-roots",
    meta: "Event · Mammor 40+ · Flera generationer",
    body: ["Ett event för mammor 40+, om hur moderskapet har förändrats över åren och vad det har inneburit för dem som individer."],
    longBody: [
      "Motheroots var ett event för mammor som är 40 år och äldre.",
      "Deltagarna fick reflektera över moderskapet: hur det har förändrats för dem och vad det har inneburit för dem som individer genom åren.",
      "Vi mediterade, gjorde visualiseringar och andningsövningar, dansade och stretchade.",
      "Eventet avslutades med en reflektionscirkel där alla delade öppet. Deltagarna kom från olika generationer, och flera mammor kom tillsammans med sina egna mammor.",
    ],
  },
];

/* Spara för senare upplägg - välbefinnande/retreat-erfarenheter (ej aktiva i sidan just nu)
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
      "Retreatformatet speglar min övergripande syn på välbefinnande: att skapa upplevelser som engagerar hela människan - kognitivt, emotionellt, relationellt och fysiskt.",
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
      onClick={(e) => e.stopPropagation()}
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

function ClinicalCard({ entry, onOpen }: { entry: Entry; onOpen: (e: Entry) => void }) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpen(entry)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(entry); } }}
      className="relative flex flex-col md:flex-row cursor-pointer gap-4 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-[transform,border-color] duration-300 hover:scale-[1.02] hover:border-accent/40 motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      <span className="order-last self-start md:order-none md:absolute md:top-7 md:right-7 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.22em] text-accent underline underline-offset-4">
        Läs mer
      </span>
      {entry.image && (
        <img
          src={entry.image}
          alt={entry.title}
          loading="lazy"
          className="w-36 md:w-64 shrink-0 self-center max-h-14 md:max-h-28 object-contain object-center"
        />
      )}
      <div className="min-w-0 flex-1 md:pr-28">
        {entry.period && (
          <p className="text-center md:text-left text-[10px] uppercase tracking-[0.25em] text-accent">
            {entry.period}
          </p>
        )}
        <h3 className="mt-3 text-center md:text-left font-serif font-bold text-lg md:text-xl leading-tight uppercase text-foreground text-balance">
          {entry.title}
        </h3>
        <p className="mt-2 text-center md:text-left text-[11px] uppercase tracking-[0.18em] text-foreground/55 leading-relaxed">
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

function EntryRow({ entry, light = false, onOpen }: { entry: Entry; light?: boolean; onOpen: (e: Entry) => void }) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpen(entry)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(entry); } }}


      className={`relative flex flex-col md:flex-row cursor-pointer gap-4 md:gap-7 rounded-3xl border p-5 md:p-7 transition-[transform,border-color] duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100 ${light ? "border-border bg-background text-foreground hover:border-accent/40" : "border-background/15 bg-foreground text-background hover:border-background/40"}`}
    >
      <span className={`order-last self-start md:order-none md:absolute md:top-7 md:right-7 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.22em] underline underline-offset-4 ${light ? "text-accent" : "text-background/80"}`}>
        Läs mer
      </span>
      {entry.image && (
        <img
          src={entry.image}
          alt={entry.title}
          loading="lazy"
          className="w-36 md:w-64 shrink-0 self-center max-h-14 md:max-h-28 object-contain object-center"
        />
      )}
      <div className="min-w-0 flex-1 space-y-5 md:pr-28">
        <div className="space-y-2 text-center md:text-left">
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
            <div className="pt-4">
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
  const [selected, setSelected] = useState<Entry | null>(null);

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
              och kroppsnära vägar till välbefinnande - inom klinisk
              verksamhet, organisationer och samhälle.
            </p>
          </div>
        </section>

        {/* The four categories as swipeable panels (replaces the old sub-menu) */}
        <ExperienceSwipe
          key={section}
          lang="sv"
          initial={["clinical", "organisational", "community", "media"].indexOf(section)}
          panels={[
            {
              key: "clinical",
              label: "Kliniskt arbete",
              content: (
                <>
        {/* ===== Collaborations - dark band ===== */}
        <section className="bg-forest pt-6 md:pt-8 pb-16 md:pb-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              id="clinical"
              dark
              title="Kliniskt arbete"
            />
            <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">
              {clinicalEntries.map((e) => (
                <ClinicalCard key={e.title} entry={e} onOpen={setSelected} />
              ))}
            </div>
          </div>
        </section>


                </>
              ),
            },
            {
              key: "organisational",
              label: "Organisatoriskt arbete",
              content: (
                <>
         {/* ===== Organisational work ===== */}
        <section className="bg-forest pt-6 md:pt-8 pb-16 md:pb-20 px-6 md:px-10">
           <div id="organisational" className="max-w-7xl mx-auto scroll-mt-28">
             <SectionHeader title="Organisatoriskt arbete" dark />
             <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">
               {organisationalEntries.map((e) => (
                 <EntryRow key={e.title} entry={e} light onOpen={setSelected} />
               ))}
          </div>
           </div>
         </section>

                </>
              ),
            },
            {
              key: "community",
              label: "Social påverkan",
              content: (
                <>
         <section className="bg-forest pt-6 md:pt-8 pb-16 md:pb-20 px-6 md:px-10">
           <div id="community" className="max-w-7xl mx-auto scroll-mt-28">
             <SectionHeader title="Social påverkan" dark />
             <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-5 md:gap-6">
               {communityEntries.map((e) => (
                 <PhotoEntryCard
                   key={e.title}
                   photos={[e.photo!, ...(e.gallery ? galleryFor(e.gallery) : [])]}
                   lang="sv"
                   title={e.title}
                   meta={e.meta}
                   text={e.body[0]}
                   readMore="Läs mer"
                   onOpen={() => setSelected(e)}
                 />
               ))}
             </div>
           </div>
        </section>

                </>
              ),
            },
            {
              key: "media",
              label: "I media",
              content: (
                <>
        {/* ===== In the Media + organisations ===== */}
        <section className="bg-forest pt-6 md:pt-8 pb-16 md:pb-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader id="media" title="I media" dark />
            <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">
              {/* Each media card leads to its source: external articles open in a new tab,
                  Psykologtidningen (no URL) opens the article image in the lightbox. */}

              {/* Sveriges Radio */}
              <a
                href="https://www.sverigesradio.se/artikel/david-nzinga-leder-projekt-om-psykisk-ohalsa-och-kultur"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Sveriges Radio: Läs artikeln (öppnas i ny flik)"
                className="relative flex flex-col md:flex-row gap-4 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
              >
                <span className="order-last self-start md:order-none md:absolute md:top-7 md:right-7 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.22em] underline underline-offset-4 text-accent">Läs artikeln ↗</span>
                <img src={srLogo} alt="Sveriges Radio" loading="lazy" draggable={false} className="w-36 md:w-52 shrink-0 self-center h-auto max-h-12 md:max-h-16 object-contain" />
                <div className="min-w-0 flex-1 md:pr-32">
                  <h3 className="text-center md:text-left font-serif font-bold text-lg md:text-xl leading-snug uppercase">
                    Sveriges Radio
                  </h3>
                  <p className="mt-2 text-base leading-[1.75] text-foreground/70">
                    Intervjuad om ungdomars välbefinnande, psykologi och samhällsbaserad folkbildning.
                  </p>
                </div>
              </a>

              {/* Psykologtidningen */}
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                aria-label="Psykologtidningen: Öppna artikeln"
                className="relative w-full text-left cursor-zoom-in flex flex-col md:flex-row gap-4 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
              >
                <span className="order-last self-start md:order-none md:absolute md:top-7 md:right-7 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.22em] underline underline-offset-4 text-accent">Läs artikeln</span>
                <img src={ptLogo} alt="Psykologtidningen" loading="lazy" draggable={false} className="w-36 md:w-52 shrink-0 self-center h-auto max-h-12 md:max-h-16 object-contain" />
                <div className="min-w-0 flex-1 md:pr-32">
                  <h3 className="text-center md:text-left font-serif font-bold text-lg md:text-xl leading-snug uppercase">
                    Psykologtidningen
                  </h3>
                  <p className="mt-2 text-base leading-[1.75] text-foreground/70">
                    Uppmärksammad i samband med G-Flow och skärningspunkten mellan psykologi, kultur och ungdomsutveckling.
                  </p>
                </div>
              </button>

              {/* ABF Södertörn */}
              <a
                href="https://www.abf.se/sodertorn/nyheter/g-flow-ger-unga-tjejer/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="ABF Södertörn Folkbildning: Läs artikeln (öppnas i ny flik)"
                className="relative flex flex-col md:flex-row gap-4 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
              >
                <span className="order-last self-start md:order-none md:absolute md:top-7 md:right-7 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.22em] underline underline-offset-4 text-accent">Läs artikeln ↗</span>
                <img src={abfLogo} alt="ABF" loading="lazy" draggable={false} className="w-36 md:w-52 shrink-0 self-center h-10 md:h-20 object-contain" />
                <div className="min-w-0 flex-1 md:pr-32">
                  <h3 className="text-center md:text-left font-serif font-bold text-lg md:text-xl leading-snug uppercase">
                    ABF Södertörn Folkbildning
                  </h3>
                  <p className="mt-2 text-base leading-[1.75] text-foreground/70">
                    Om G-Flow: en mötesplats i Jordbro där unga tjejer stärker självkänsla och psykisk hälsa genom samtal, rörelse och meditation.
                  </p>
                </div>
              </a>
            </div>

          </div>
        </section>

                </>
              ),
            }
          ]}
        />

{/* Shown below the panels */}
<>

        {/* Logo band last, right above the footer (same as on Kontakt) */}
        <LogoMarquee className="" />
</>
        <ArticleLightbox
          src={mediaArticle}
          alt="Artikel i Psykologtidningen om G-Flow"
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
        <Dialog open={selected !== null} onOpenChange={(o) => { if (!o) setSelected(null); }}>
          {/* max-h + overflow: long popups (text + photos) scroll inside instead of running off the screen */}
          <DialogContent data-lenis-prevent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selected && (
              <>
                <DialogHeader>
                  {/* Cards with a photo show their logo here, at the top of the popup */}
                  {selected.photo && selected.image && (
                    <div className="mx-auto sm:mx-0 mb-3 flex items-center gap-5">
                      <img src={selected.image} alt="" className="h-14 md:h-16 w-auto max-w-[14rem] object-contain" />
                      {selected.extraLogo && (
                        <img src={selected.extraLogo} alt="" className="h-14 md:h-16 w-auto max-w-[10rem] object-contain" />
                      )}
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      {selected.period && (
                        <p className="text-center md:text-left text-[10px] uppercase tracking-[0.25em] text-accent">{selected.period}</p>
                      )}
                      <DialogTitle className="font-serif text-2xl md:text-3xl uppercase leading-tight">{selected.title}</DialogTitle>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/55">{selected.meta}</p>
                    </div>
                    {selected.image && !selected.photo && (
                      <img src={selected.image} alt={selected.title} className={`mt-1 hidden shrink-0 object-contain object-right sm:block ${selected.logoBig ? "h-36 w-36" : "h-16 w-56"}`} />
                    )}
                  </div>
                </DialogHeader>
                <div className="space-y-4">
                  {(selected.longBody ?? selected.body).map((p) => (
                    <p key={p} className="text-base leading-[1.75] text-foreground/75">{p}</p>
                  ))}
                </div>
                {selected.gallery && (
                  <ModalGallery photos={galleryFor(selected.gallery)} label={selected.title} lang="sv" />
                )}
                {selected.tags && (
                  <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/55">{selected.tags}</p>
                )}
                {selected.link && (
                  <div className="pt-2">
                    <ExternalLink {...selected.link} />
                  </div>
                )}
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <SiteFooter />
    </div>
  );
}
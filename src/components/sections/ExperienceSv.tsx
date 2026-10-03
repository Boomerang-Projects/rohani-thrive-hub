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
import huddingeLogo from "@/assets/logos/huddinge-kommun.png";
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
import { findTestimonial } from "@/lib/testimonials";
import { RichText } from "@/lib/rich-text";
/* ---------- Data ---------- */

type Entry = {
  period?: string;
  title: string;
  image?: string;
  /** Photo shown on the card. When set, the logo (image) only shows in the popup. */
  photo?: string;
  /** Keys of organisation testimonials (lib/testimonials.ts) shown in the popup. */
  testimonials?: string[];
  /** A second logo shown next to the first one in the popup (e.g. Tillsammans för Sverige). */
  extraLogo?: string;
  /** Folder name in src/assets/photos/gallery/ with extra photos for the popup. */
  gallery?: string;
  logoBig?: boolean;
  meta: string;
  body: string[];
  longBody?: string[];
  /** The popup text as bullet points. **text** = bold, [label](url) = link (see lib/rich-text.tsx). */
  bullets?: string[];
  /** Show the quotes between the text and the photos instead of after the photos (G-Flow). */
  quotesFirst?: boolean;
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
    bullets: [
      "**Psykologisk utredning** och **behandling** vid bland annat **ångest**, **depression**, **stressrelaterad ohälsa** och **komplexa tillstånd**",
      "**Självständigt kliniskt arbete**, **behandlingsplanering** och **terapeutiska interventioner**",
      "**Individanpassat** förhållningssätt utifrån person, kontext och livsskede",
    ],
  },
  {
    period: "2022 - 2025",
    title: "Barns & Ungas Psykiska Hälsa",
    testimonials: ["bup-2"],
    image: logoBup,
    meta: "BUP Brommaplan, Stockholm · Legitimerad psykolog",
    body: ["På BUP utredde och behandlade jag barn och unga, i nära samarbete med familjer och vårdteam. Arbetet lärde mig att möta varje ung person utifrån deras förutsättningar."],
    bullets: [
      "Arbetade inom **barn- och ungdomspsykiatrin** med ett brett spektrum av **psykiska utmaningar** bland barn och unga",
      "**Psykologisk utredning**, **terapeutiska interventioner**, **psykoedukation** och **krishantering**",
      "**Samverkan** med **familjer** och **tvärprofessionella team**",
      "Anpassade **kommunikation** och **interventioner** efter **utvecklingsskede** och **individuella behov**",
    ],
  },
  {
    period: "2018 - 2022",
    title: "Sjukhuspsykiatri & Akutsjukvård",
    image: logoKarolinska,
    meta: "Karolinska Universitetssjukhuset · Krisintervention",
    body: ["På Karolinska arbetade jag med svår psykisk ohälsa, krisintervention och suicidprevention. Det har gett mig trygghet att vara närvarande också i komplexa och pressade situationer."],
    bullets: [
      "Arbete nära personer med **svår psykisk ohälsa** inom **vuxenpsykiatrin**",
      "Stark grund i **krisintervention**, **psykologisk vård** och **komplexa kliniska tillstånd**",
      "Erfarenhet av **personlighetssyndrom**, **psykos**, **krishantering** och **suicidprevention**",
      "Utvecklade förmågan att vara **förankrad**, **närvarande** och **lösningsfokuserad** i komplexitet",
    ],
  },
];

const organisationalEntries: Entry[] = [
  {
    title: "Somaya Stödjour",
    testimonials: ["somaya"],
    image: somayaLogo,
    meta: "Psykologiskt & välbefinnandearbete",
    body: ["Mental hälsa och rörelse - workshop för en organisation som stödjer kvinnor och familjer som möter svåra livsvillkor."],
    bullets: [
      "Höll **workshop** för en organisation som stöttar **kvinnor och familjer** med **komplexa psykosociala utmaningar**",
      "Fördjupad förståelse för samspelet mellan **psykiskt välbefinnande**, **trygghet**, **relationer**, **kultur** och **livsvillkor**",
    ],
    link: {
      label: "Somaya Stödjour",
      href: "https://www.linkedin.com/company/somaya-stodjour/?viewAsMember=true",
    },
  },
  {
    title: "Meditation för vårdpersonal",
    testimonials: ["bup-1"],
    image: regionStockholmLogo,
    meta: "Region Stockholm · BUP Brommaplan",
    body: ["Jag ledde återkommande meditationer för vårdpersonal på BUP, med konkreta verktyg för återhämtning och stressreglering i en krävande vardag."],
    bullets: [
      "Ledde **veckovisa meditationssessioner** för vårdpersonal inom **BUP**",
      "Fokus på **närvaro**, **förankring** och **återhämtning**",
      "Gav praktiska **mindfulnessverktyg** för **stressreglering** i en krävande arbetsmiljö",
    ],
    tags: "Välbefinnande i arbetslivet · Mindfulness · Stressreglering · Sjukvård",
  },
  {
    title: "SATS · Yogainstruktör",
    gallery: "sats",
    testimonials: ["sats"],
    image: satsLogo,
    meta: "Yoga · Hot yoga · Avslappning & rörelse",
    body: ["Som yogainstruktör på SATS guidar jag deltagare genom rörelse och avslappning, bland annat i hot yoga i 38 grader."],
    bullets: [
      "Utbildad **yogainstruktör** som leder **yoga- och återhämtningsklasser** på flera anläggningar i Stockholm, även i **hotsalar**",
      "Håller främst **Yin Yoga**, **Aroma Relax**, **Meditation** och **Breathwork**, med fokus på **närvaro**, **kroppskännedom** och **återhämtning**",
      "Klasser på **60-90 minuter** som kombinerar **yoga**, **andning**, **mindfulness** och **avslappning**",
      "Förhållningssätt: **kropp och sinne** behöver få ta plats tillsammans, och **återhämtning** är en viktig del av att må och fungera väl",
    ],
  },
  {
    title: "g:ro studio",
    testimonials: ["frida"],
    gallery: "gro",
    image: groLogo,
    meta: "Yogastudio · Mariatorget, Stockholm · Facilitator",
    body: ["Som facilitator på GRO, en yogastudio vid Mariatorget, höll jag yoga- och meditationsklasser med fokus på närvaro, återhämtning och mental balans."],
    bullets: [
      "Yogastudio vid **Mariatorget** i Stockholm, grundad av legitimerad **psykolog** Sabina Landehag efter över 15 års kliniskt arbete",
      "Facilitator för **yoga- och meditationsklasser** med fokus på **närvaro**, **återhämtning**, **kroppskännedom** och **mental balans**",
      "Del av ett **lärarteam** med olika bakgrunder inom **psykisk hälsa**, bland annat terapeuter och socionomer",
      "Studion var en plats för **community**, med **events**, **workshops** och **sammankomster**",
      "Speglar mitt arbete idag: mötet mellan **psykologi**, **kropp**, **närvaro** och **gemenskap**, med synen på **hela människan**",
    ],
  },
  {
    title: "Edboskolan · Rörelse & hälsa",
    gallery: "edboskolan",
    image: huddingeLogo,
    meta: "Idrottsdag · Grundskola · Workshop",
    body: ["Under Edboskolans idrottsdag höll jag en 1,5 timmes workshop för elever i grundskolan med fokus på rörelse och hälsa."],
    bullets: [
      "**Workshop på 1,5 timme** för **grundskoleelever** under skolans idrottsdag",
      "Fokus på hur **rörelse** stärker både **fysisk** och **psykisk hälsa**",
      "Genom **dans** och **lekfulla övningar** fick eleverna uppleva **energi**, **glädje** och **gemenskap**, **utan fokus på prestation**",
    ],
  },


];

const communityEntries: Entry[] = [
  {
    title: "G-Flow Tjej-retreat för ungdomar",
    testimonials: ["david-n", "victoria", "inaaya", "sabida", "maryam"],
    quotesFirst: true,
    photo: photoGflow,
    gallery: "gflow",
    image: haningeLogo,
    meta: "Folkbildning · Ungdomars välbefinnande · Samhällsutveckling",

    body: ["Tillsammans med ABF Södertörn och Haninge kommun gjorde jag psykologi, rörelse och gemenskap tillgängligt för unga genom G-Flow - ett tryggt rum för självuttryck och utveckling."],
    bullets: [
      "Eget initiativ som jag **grundat** för **unga tjejer**: en **trygg**, **inkluderande** och **prestationsfri** plats",
      "Huvudteman: **självkänsla**, **identitet**, **känslor**, **kropp** och **relationer**",
      "Kostnadsfria träffar i samarbete med **ABF Södertörn**, **Haninge kommun** och lokala samhällsaktörer",
      "**Psykoedukation** kombinerat med **meditation**, **andning**, **rörelse**, **dans** och **reflektion**",
      "Genomfört i **flera omgångar** under **skollov**",
      "Uppmärksammat i [**Sveriges Radio**](https://www.sverigesradio.se/artikel/david-nzinga-leder-projekt-om-psykisk-ohalsa-och-kultur) och [**Psykologtidningen**](#psykologtidningen)",
      "Arbetet fortsätter, med **stor efterfrågan** bland ungdomarna",
      "**Min övertygelse:** när unga får utrymme att möta **sig själva** och **varandra** stärks både **individuellt** och **kollektivt** välbefinnande",
    ],
  },
  {
    title: "Hero idrottsförening",
    photo: photoHero,
    gallery: "hero",
    image: heroLogo,

    meta: "Ideell förening · Fysisk hälsa · Självkänsla & mental hälsa",
    body: ["En ideell förening för unga tjejer med fokus på fysisk hälsa - där jag regelbundet håller dansklasser med fokus på att stärka självkänsla och mental hälsa."],
    bullets: [
      "Ideell organisation som ger **unga tjejer i förorten** möjlighet att stärka **hälsa**, **gemenskap** och **välbefinnande** genom rörelse",
      "Hållit i **regelbundna dansklasser** med fokus på **självkänsla**, **kroppsmedvetenhet** och **mental hälsa**",
      "**Workshop och föreläsning** på Alla hjärtans dag om **självkärlek**, **självomsorg** och **självmedkänsla**",
      "Rörelse, psykologi och gemenskap för en **starkare relation till sig själv** och andra",
    ],
  },
  {
    title: "Joy in the Wild",
    photo: photoJoy,
    gallery: "joy-in-the-wild",
    meta: "Grundare & facilitator",
    body: ["En natur- och välbefinnandeupplevelse för kvinnor, med fokus på gemenskap, närvaro, rörelse och självreflektion."],
    bullets: [
      "Skapat för **kvinnor med olika kulturella bakgrunder**, för att utforska vad **lycka** betyder bortom **prestation**, **förväntningar** och **kulturella föreställningar**",
      "**Skrivövningar**, **reflektion** och **öppna samtal**",
      "**Dans** och **somatisk rörelse** tillsammans med poeten och dansaren **Melissa Kawooya**",
      "**Meditation**, **andning** och framför allt **glädje**",
      "En påminnelse om att lycka inte är något vi **förtjänar** eller **presterar** oss till",
    ],
  },
  {
    title: "Movement & Meditation · House of Creatives",
    photo: photoHoc,
    gallery: "house-of-creatives",
    image: houseOfCreativeLogo,
    meta: "Rörelse & Meditation · Gemenskap",
    body: ["Rörelse och meditation hos House of Creatives - ett stöttande rum för närvaro, återhämtning och gemenskap."],
    bullets: [
      "**Meditation & Movement-klasser** i ett ideellt kreativt initiativ, för människor i **alla åldrar**, **kön** och **kulturella bakgrunder**",
      "**Fri somatisk rörelse**, **musik**, **meditation** och **andning**",
      "Att **släppa prestation** och återknyta till det **lekfulla** och **närvarande**",
      "Avslutas med **delning** och **integration**",
      "En plats för **gemenskap**, **uttryck** och **mänsklig kontakt**",
    ],
  },
  {
    title: "Jakten på tro och mening · Podcast",
    photo: photoFryshuset,
    gallery: "fryshuset",
    image: fryshusetLogo,
    extraLogo: tfsLogo,
    meta: "Podcast · Samtal om mening & välbefinnande",
    body: ["Gäst i Fryshusets podcast Jakten på Tro & Mening - ett samtal om psykologisk hälsa och det som ger livet mening."],
    bullets: [
      "Initiativ av **Tillsammans för Sverige** och **Fryshuset** om människans behov av **mening**, **sammanhang** och **existentiell förankring**",
      "**Intervjuad i podcast** om människans tillvaro ur ett **existentiellt** och **psykologiskt** perspektiv",
      "Hur min **personliga resa** format mitt professionella förhållningssätt",
      "Behovet av en mer **holistisk syn** på **hälsa** och **vård**, där **kropp**, **själ** och **sinne** hänger ihop",
    ],
    link: { label: "Se avsnittet på YouTube", href: "https://www.youtube.com/watch?v=nLSdBQndF0E&t=1285s" },
  },
  {
    title: "Vägen tillbaka · Retreat",
    photo: photoVagen,
    gallery: "vagen-tillbaka",
    meta: "Retreat · 3 dagar · Uppsala",
    body: ["Ett tre dagars retreat för kvinnor i skogen utanför Uppsala, med yoga, meditation, breathwork och reflektion i naturen."],
    bullets: [
      "**Tre dagars retreat för kvinnor** i naturen utanför **Uppsala**",
      "**Initierade**, **planerade** och **faciliterade** retreatet, med ansvar för **upplägg**, **innehåll** och **deltagarupplevelse**",
      "**Yoga**, **meditation**, **breathwork**, **reflektion** och **samtal** med fokus på **psykologiskt välbefinnande** och **kroppslig närvaro**",
      "Utrymme för **vila**, **natur**, **god mat** och **gemenskap**",
      "Hölls tillsammans med en **shaman från Peru**, som bidrog med **traditioner**, **perspektiv** och **kunskap** från sin kulturella och andliga tradition",
    ],
  },
  {
    title: "Motheroots",
    testimonials: ["saida", "jamila", "aneesa"],
    photo: photoMotherRoots,
    gallery: "mother-roots",
    meta: "Event · Mammor 40+ · Flera generationer",
    body: ["Ett event för mammor 40+, om hur moderskapet har förändrats över åren och vad det har inneburit för dem som individer."],
    bullets: [
      "Event för **mammor över 40 år** om **moderskapets många dimensioner**",
      "Utforskade **kvinnan bakom rollen som mamma**: egna behov, berättelser och identitet",
      "Skräddarsydd **meditation**, **visualisering**, **andning**, **dans** och **stretch**",
      "Avslutades med en **reflektionscirkel**",
      "Särskild dimension: **generationsmöten**, då flera deltagare kom tillsammans med sina **egna mammor**, vilket skapade utrymme för **igenkänning** och **samtal över generationsgränser**",
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
      className="group relative flex flex-col md:flex-row cursor-pointer gap-4 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-[transform,border-color] duration-300 hover:scale-[1.02] hover:border-accent/40 motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      {/* A clear button shape so it's obvious the card opens; fills in when you hover the card */}
      <span className="order-last self-start md:order-none md:absolute md:top-6 md:right-6 inline-flex items-center gap-2 rounded-full border border-accent/60 px-4 py-2 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.2em] text-accent transition-colors duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-background">
        Läs mer <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
      {entry.image && (
        <img
          src={entry.image}
          alt={entry.title}
          loading="lazy"
          className="w-36 md:w-64 shrink-0 self-center max-h-14 md:max-h-28 object-contain object-center"
        />
      )}
      <div className="min-w-0 flex-1 md:pr-40">
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


      className={`group relative flex flex-col md:flex-row cursor-pointer gap-4 md:gap-7 rounded-3xl border p-5 md:p-7 transition-[transform,border-color] duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100 ${light ? "border-border bg-background text-foreground hover:border-accent/40" : "border-background/15 bg-foreground text-background hover:border-background/40"}`}
    >
      <span className="order-last self-start md:order-none md:absolute md:top-6 md:right-6 inline-flex items-center gap-2 rounded-full border border-accent/60 px-4 py-2 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.2em] text-accent transition-colors duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-background">
        Läs mer <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
      {entry.image && (
        <img
          src={entry.image}
          alt={entry.title}
          loading="lazy"
          className="w-36 md:w-64 shrink-0 self-center max-h-14 md:max-h-28 object-contain object-center"
        />
      )}
      <div className="min-w-0 flex-1 space-y-5 md:pr-40">
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

  // Pieces of the popup, so their order can change per card (see quotesFirst)
  const galleryBlock = selected && (selected.gallery && (
                  <ModalGallery photos={[...(selected.photo ? [selected.photo] : []), ...galleryFor(selected.gallery)]} label={selected.title} lang="sv" />
                ));
  const quotesBlock = selected && (selected.testimonials && selected.testimonials.length > 0 && (
                  <section className="pt-4 border-t border-border">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold">Vad de säger</p>
                    <div className="mt-4 space-y-3">
                      {selected.testimonials.map((k) => {
                        const q = findTestimonial(k, "sv");
                        if (!q) return null;
                        return (
                          <figure key={k} className="relative rounded-2xl bg-white border border-foreground/10 shadow-[0_10px_30px_-18px_rgba(27,43,36,0.35)] p-6 md:p-7">
                            <span aria-hidden className="absolute top-3 left-5 font-serif text-5xl leading-none text-accent/50">"</span>
                            <blockquote className="relative pt-5 font-sans text-[15px] md:text-base font-light leading-[1.8] text-foreground/80">{q.quote}</blockquote>
                            <figcaption className="mt-4 flex items-center gap-3">
                              <span className="h-px w-6 bg-accent" />
                              <span className="text-[10px] uppercase tracking-[0.22em] text-foreground/55 font-semibold">{q.who.sv}</span>
                            </figcaption>
                          </figure>
                        );
                      })}
                    </div>
                  </section>
                ));
  // Links inside the bullet texts that are not web pages, e.g. "#psykologtidningen"
  const openAction = (id: string) => {
    if (id === "psykologtidningen") {
      setSelected(null);
      window.setTimeout(() => setLightboxOpen(true), 200);
    }
  };

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
            {/* Same eyebrow, slogan and narrow column as the hero on Om, plus one line about the work */}
            <div className="max-w-[34rem] md:max-w-[26rem] lg:max-w-[30rem] space-y-7">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-background/90">
                Legitimerad psykolog · Föreläsare · Yogainstruktör
              </p>
              <h1 className="!mt-4 md:!mt-6 font-serif uppercase tracking-[0.12em] text-[clamp(1.9rem,3.2vw+1rem,3.6rem)] leading-[1.05] text-background">
                Rethinking wellbeing...
              </h1>
              <p className="text-lg md:text-xl leading-[1.6] text-background/85">
                Hållbara vägar till välbefinnande, utveckling och mänsklig potential, för människor, team och organisationer.
              </p>
            </div>
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
         <section data-no-reveal="mobile" className="bg-forest pt-6 md:pt-8 pb-16 md:pb-20 px-6 md:px-10">
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
              label: "Publicitet",
              content: (
                <>
        {/* ===== In the Media + organisations ===== */}
        <section className="bg-forest pt-6 md:pt-8 pb-16 md:pb-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader id="media" title="Publicitet" dark />
            <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">
              {/* Each media card leads to its source: external articles open in a new tab,
                  Psykologtidningen (no URL) opens the article image in the lightbox. */}

              {/* Sveriges Radio */}
              <a
                href="https://www.sverigesradio.se/artikel/david-nzinga-leder-projekt-om-psykisk-ohalsa-och-kultur"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Sveriges Radio: Läs artikeln (öppnas i ny flik)"
                className="group relative flex flex-col md:flex-row gap-4 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
              >
                <span className="order-last self-start md:order-none md:absolute md:top-6 md:right-6 inline-flex items-center gap-2 rounded-full border border-accent/60 px-4 py-2 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.2em] text-accent transition-colors duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-background">Läs artikeln <span aria-hidden className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span></span>
                <img src={srLogo} alt="Sveriges Radio" loading="lazy" draggable={false} className="w-36 md:w-52 shrink-0 self-center h-auto max-h-12 md:max-h-16 object-contain" />
                <div className="min-w-0 flex-1 md:pr-44">
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
                className="group relative w-full text-left cursor-zoom-in flex flex-col md:flex-row gap-4 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
              >
                <span className="order-last self-start md:order-none md:absolute md:top-6 md:right-6 inline-flex items-center gap-2 rounded-full border border-accent/60 px-4 py-2 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.2em] text-accent transition-colors duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-background">Läs artikeln <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span></span>
                <img src={ptLogo} alt="Psykologtidningen" loading="lazy" draggable={false} className="w-36 md:w-52 shrink-0 self-center h-auto max-h-12 md:max-h-16 object-contain" />
                <div className="min-w-0 flex-1 md:pr-44">
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
                className="group relative flex flex-col md:flex-row gap-4 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
              >
                <span className="order-last self-start md:order-none md:absolute md:top-6 md:right-6 inline-flex items-center gap-2 rounded-full border border-accent/60 px-4 py-2 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.2em] text-accent transition-colors duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-background">Läs artikeln <span aria-hidden className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span></span>
                <img src={abfLogo} alt="ABF" loading="lazy" draggable={false} className="w-36 md:w-52 shrink-0 self-center h-10 md:h-20 object-contain" />
                <div className="min-w-0 flex-1 md:pr-44">
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
        <LogoMarquee />
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
                  {/* Every card's logo sits at the top of the popup, above the title */}
                  {selected.image && (
                    <div className="mx-auto sm:mx-0 mb-3 flex items-center gap-5">
                      <img src={selected.image} alt="" className="h-14 md:h-16 w-auto max-w-[14rem] object-contain" />
                      {selected.extraLogo && (
                        <img src={selected.extraLogo} alt="" className="h-14 md:h-16 w-auto max-w-[10rem] object-contain" />
                      )}
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-6">
                    <div className="w-full">
                      {selected.period && (
                        <p className="text-center md:text-left text-[10px] uppercase tracking-[0.25em] text-accent">{selected.period}</p>
                      )}
                      <DialogTitle className="font-serif text-2xl md:text-3xl uppercase leading-tight">{selected.title}</DialogTitle>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/55">{selected.meta}</p>
                    </div>
                  </div>
                </DialogHeader>
                {selected.bullets ? (
                  <ul className="space-y-3">
                    {selected.bullets.map((b) => (
                      <li key={b} className="relative pl-5 text-base leading-[1.7] text-foreground/75">
                        <span aria-hidden className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-accent" />
                        <RichText text={b} onAction={openAction} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-4">
                    {(selected.longBody ?? selected.body).map((p) => (
                      <p key={p} className="text-base leading-[1.75] text-foreground/75">{p}</p>
                    ))}
                  </div>
                )}
                {/* Usually photos first, then what others say. G-Flow: quotes first. */}
                {selected.quotesFirst ? <>{quotesBlock}{galleryBlock}</> : <>{galleryBlock}{quotesBlock}</>}
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
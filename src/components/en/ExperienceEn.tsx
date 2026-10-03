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
    period: "2025 - Present",
    title: "General Adult Psychiatry",
    image: logoVuxen,
    meta: "Public Healthcare · Clinical Psychologist",
    body: ["As a licensed psychologist in adult psychiatry, I provide assessment and treatment tailored to each person's needs and circumstances."],
    bullets: [
      "**Psychological assessment** and **treatment** of, among other things, **anxiety**, **depression**, **stress-related illness** and **complex conditions**",
      "**Independent clinical work**, **treatment planning** and **therapeutic interventions**",
      "An **individually tailored** approach based on the person, context and stage of life",
    ],
  },
  {
    period: "2022 - 2025",
    title: "Child & Adolescent Mental Health",
    testimonials: ["bup-2"],
    image: logoBup,
    meta: "BUP Brommaplan, Stockholm · Clinical Psychologist",
    body: ["At BUP, I assessed and treated children and young people alongside families and care teams. I learned to meet each young person on their own terms."],
    bullets: [
      "Worked in **child and adolescent psychiatry** with a broad spectrum of **mental health challenges** among children and young people",
      "**Psychological assessment**, **therapeutic interventions**, **psychoeducation** and **crisis management**",
      "**Collaboration** with **families** and **multidisciplinary teams**",
      "Adapted **communication** and **interventions** to **developmental stage** and **individual needs**",
    ],
  },
  {
    period: "2018 - 2022",
    title: "Psychiatric Hospital & Emergency Healthcare",
    image: logoKarolinska,
    meta: "Karolinska University Hospital · Crisis Intervention",
    body: ["At Karolinska, I worked with severe mental illness, crisis intervention and suicide prevention. This taught me to stay grounded and present in complex, high-pressure situations."],
    bullets: [
      "Close work with people experiencing **severe mental illness** in **adult psychiatry**",
      "A strong foundation in **crisis intervention**, **psychological care** and **complex clinical conditions**",
      "Experience of **personality disorders**, **psychosis**, **crisis management** and **suicide prevention**",
      "Developed the ability to stay **grounded**, **present** and **solution-focused** in complexity",
    ],
  },
];

const organisationalEntries: Entry[] = [
  {
    title: "Somaya Women's Support Centre",
    testimonials: ["somaya"],
    image: somayaLogo,
    meta: "Psychological & Wellbeing Work",
    body: ["Mental health and movement - workshop for an organisation supporting women and families facing difficult circumstances."],
    bullets: [
      "Led a **workshop** for an organisation that supports **women and families** facing **complex psychosocial challenges**",
      "A deeper understanding of the interplay between **mental wellbeing**, **safety**, **relationships**, **culture** and **living conditions**",
    ],
    link: {
      label: "Somaya Women's Support Centre",
      href: "https://www.linkedin.com/company/somaya-stodjour/?viewAsMember=true",
    },
  },
  {
    title: "Meditation for Healthcare Staff",
    testimonials: ["bup-1"],
    image: regionStockholmLogo,
    meta: "Region Stockholm · BUP Brommaplan",
    body: ["I led regular meditation sessions for BUP healthcare staff, offering practical tools for recovery and stress regulation in a demanding workday."],
    bullets: [
      "Led **weekly meditation sessions** for healthcare staff at **BUP**",
      "Focus on **presence**, **grounding** and **recovery**",
      "Gave practical **mindfulness tools** for **stress regulation** in a demanding work environment",
    ],
    tags: "Workplace Wellbeing · Mindfulness · Stress Regulation · Healthcare",
  },
  {
    title: "SATS · Yoga Instructor",
    gallery: "sats",
    testimonials: ["sats"],
    image: satsLogo,
    meta: "Yoga · Hot yoga · Relaxation & movement",
    body: ["As a yoga instructor at SATS, I guide participants through movement and relaxation, including hot yoga at 38 degrees."],
    bullets: [
      "Trained **yoga instructor** leading **yoga and recovery classes** at several clubs in Stockholm, including **hot rooms**",
      "Mainly teaches **Yin Yoga**, **Aroma Relax**, **Meditation** and **Breathwork**, with a focus on **presence**, **body awareness** and **recovery**",
      "Classes of **60-90 minutes** combining **yoga**, **breath**, **mindfulness** and **relaxation**",
      "Approach: **body and mind** need room together, and **recovery** is an important part of feeling and functioning well",
    ],
  },
  {
    title: "g:ro studio",
    testimonials: ["frida"],
    gallery: "gro",
    image: groLogo,
    meta: "Yoga Studio · Mariatorget, Stockholm · Facilitator",
    body: ["As a facilitator at GRO, a yoga studio at Mariatorget, I led yoga and meditation classes focused on presence, recovery and mental balance."],
    bullets: [
      "Yoga studio at **Mariatorget** in Stockholm, founded by licensed **psychologist** Sabina Landehag after more than 15 years of clinical work",
      "Facilitator of **yoga and meditation classes** focused on **presence**, **recovery**, **body awareness** and **mental balance**",
      "Part of a **teaching team** with different backgrounds in **mental health**, including therapists and social workers",
      "The studio was a place for **community**, with **events**, **workshops** and **gatherings**",
      "Reflects my work today: the meeting of **psychology**, **body**, **presence** and **community**, seeing **the whole person**",
    ],
  },
  {
    title: "Edboskolan · Movement & Health",
    gallery: "edboskolan",
    image: huddingeLogo,
    meta: "Sports day · Primary school · Workshop",
    body: ["During Edboskolan's sports day, I led a 1.5-hour workshop for primary school pupils focused on movement and health."],
    bullets: [
      "**A 1.5-hour workshop** for **primary school pupils** during the school's sports day",
      "Focus on how **movement** strengthens both **physical** and **mental health**",
      "Through **dance** and **playful exercises**, the pupils experienced **energy**, **joy** and **community**, **without focus on performance**",
    ],
  },


];

const communityEntries: Entry[] = [
  {
    title: "G-Flow Girls' Retreat for Young People",
    testimonials: ["david-n", "victoria", "inaaya", "sabida", "maryam"],
    quotesFirst: true,
    photo: photoGflow,
    gallery: "gflow",
    image: haningeLogo,
    meta: "Community Education · Youth Wellbeing · Community Development",

    body: ["With ABF Södertörn and Haninge Municipality, I made psychology, movement and connection accessible to young people through G-Flow - a safe space for expression and growth."],
    bullets: [
      "My own initiative, **founded** for **young girls**: a **safe**, **inclusive** and **pressure-free** space",
      "Main themes: **self-esteem**, **identity**, **emotions**, **body** and **relationships**",
      "Free sessions in collaboration with **ABF Södertörn**, **Haninge Municipality** and local community partners",
      "**Psychoeducation** combined with **meditation**, **breathwork**, **movement**, **dance** and **reflection**",
      "Run in **several rounds** during **school holidays**",
      "Featured in [**Sveriges Radio**](https://www.sverigesradio.se/artikel/david-nzinga-leder-projekt-om-psykisk-ohalsa-och-kultur) and [**Psykologtidningen**](#psykologtidningen)",
      "The work continues, with **high demand** among the young people",
      "**My conviction:** when young people get room to meet **themselves** and **each other**, both **individual** and **collective** wellbeing grow stronger",
    ],
  },
  {
    title: "Hero Sports Club",
    photo: photoHero,
    gallery: "hero",
    image: heroLogo,

    meta: "Non-profit Association · Physical Health · Self-Esteem & Mental Health",
    body: ["A non-profit association for young girls focused on physical health - where I regularly lead dance classes centred on strengthening self-esteem and mental health."],
    bullets: [
      "A non-profit organisation giving **young girls in the suburbs** the chance to strengthen **health**, **community** and **wellbeing** through movement",
      "Led **regular dance classes** focused on **self-esteem**, **body awareness** and **mental health**",
      "**Workshop and talk** on Valentine's Day about **self-love**, **self-care** and **self-compassion**",
      "Movement, psychology and community for a **stronger relationship with oneself** and others",
    ],
  },
  {
    title: "Joy in the Wild",
    photo: photoJoy,
    gallery: "joy-in-the-wild",
    meta: "Founder & Facilitator",
    body: ["A women-centred nature and wellbeing experience exploring connection, presence, movement and self-reflection."],
    bullets: [
      "Created for **women from different cultural backgrounds**, to explore what **happiness** means beyond **performance**, **expectations** and **cultural beliefs**",
      "**Writing exercises**, **reflection** and **open conversations**",
      "**Dance** and **somatic movement** together with poet and dancer **Melissa Kawooya**",
      "**Meditation**, **breathwork** and above all **joy**",
      "A reminder that happiness is not something we **earn** or **perform** our way into",
    ],
  },
  {
    title: "Movement & Meditation · House of Creatives",
    photo: photoHoc,
    gallery: "house-of-creatives",
    image: houseOfCreativeLogo,
    meta: "Movement & Meditation · Community",
    body: ["Movement and meditation at House of Creatives - a supportive space for presence, recovery and connection."],
    bullets: [
      "**Meditation & Movement classes** in a non-profit creative initiative, for people of **all ages**, **genders** and **cultural backgrounds**",
      "**Free somatic movement**, **music**, **meditation** and **breathwork**",
      "**Letting go of performance** and reconnecting with the **playful** and **present**",
      "Closes with **sharing** and **integration**",
      "A place for **community**, **expression** and **human connection**",
    ],
  },
  {
    title: "Jakten på tro och mening · Podcast",
    photo: photoFryshuset,
    gallery: "fryshuset",
    image: fryshusetLogo,
    extraLogo: tfsLogo,
    meta: "Podcast · Conversations on Meaning & Wellbeing",
    body: ["Guest on Fryshuset's podcast The Search for Faith & Meaning - a conversation about psychological health and what gives life meaning."],
    bullets: [
      "An initiative by **Tillsammans för Sverige** and **Fryshuset** about the human need for **meaning**, **belonging** and **existential grounding**",
      "**Interviewed on the podcast** about human existence from an **existential** and **psychological** perspective",
      "How my **personal journey** has shaped my professional approach",
      "The need for a more **holistic view** of **health** and **care**, where **body**, **soul** and **mind** belong together",
    ],
    link: { label: "Watch the episode on YouTube", href: "https://www.youtube.com/watch?v=nLSdBQndF0E&t=1285s" },
  },
  {
    title: "The Way Back · Retreat",
    photo: photoVagen,
    gallery: "vagen-tillbaka",
    meta: "Retreat · 3 days · Uppsala",
    body: ["A three-day retreat for women in the forest outside Uppsala, with yoga, meditation, breathwork and reflection in nature."],
    bullets: [
      "**A three-day retreat for women** in nature outside **Uppsala**",
      "**Initiated**, **planned** and **facilitated** the retreat, responsible for **structure**, **content** and **participant experience**",
      "**Yoga**, **meditation**, **breathwork**, **reflection** and **conversation** focused on **psychological wellbeing** and **embodied presence**",
      "Room for **rest**, **nature**, **good food** and **community**",
      "Held together with a **shaman from Peru**, who contributed **traditions**, **perspectives** and **knowledge** from his cultural and spiritual tradition",
    ],
  },
  {
    title: "Motheroots",
    testimonials: ["saida", "jamila", "aneesa"],
    photo: photoMotherRoots,
    gallery: "mother-roots",
    meta: "Event · Mothers 40+ · Several generations",
    body: ["An event for mothers aged 40 and over, about how motherhood has changed over the years and what it has meant for them as individuals."],
    bullets: [
      "An event for **mothers over 40** about **the many dimensions of motherhood**",
      "Explored **the woman behind the role of mother**: her own needs, stories and identity",
      "Tailored **meditation**, **visualisation**, **breathwork**, **dance** and **stretching**",
      "Closed with a **reflection circle**",
      "A special dimension: **meetings between generations**, as several participants came with their **own mothers**, creating room for **recognition** and **conversation across generations**",
    ],
  },
];

/* Saved for future use - wellbeing/retreat experiences (not active on the page right now)
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
      "The retreat format reflects my broader approach to wellbeing: creating experiences that engage the whole person - cognitively, emotionally, relationally and physically.",
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
        Read more <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
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
        Read more <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
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

export function ExperienceEn({ section = "clinical" }: { section?: ExperienceSection }) {
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
                  <ModalGallery photos={[...(selected.photo ? [selected.photo] : []), ...galleryFor(selected.gallery)]} label={selected.title} lang="en" />
                ));
  const quotesBlock = selected && (selected.testimonials && selected.testimonials.length > 0 && (
                  <section className="pt-4 border-t border-border">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold">What they say</p>
                    <div className="mt-4 space-y-3">
                      {selected.testimonials.map((k) => {
                        const q = findTestimonial(k, "en");
                        if (!q) return null;
                        return (
                          <figure key={k} className="relative rounded-2xl bg-white border border-foreground/10 shadow-[0_10px_30px_-18px_rgba(27,43,36,0.35)] p-6 md:p-7">
                            <span aria-hidden className="absolute top-3 left-5 font-serif text-5xl leading-none text-accent/50">"</span>
                            <blockquote className="relative pt-5 font-sans text-[15px] md:text-base font-light leading-[1.8] text-foreground/80">{q.quote}</blockquote>
                            <figcaption className="mt-4 flex items-center gap-3">
                              <span className="h-px w-6 bg-accent" />
                              <span className="text-[10px] uppercase tracking-[0.22em] text-foreground/55 font-semibold">{q.who.en}</span>
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
            alt="Rani leading a conversation during a workshop"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ objectPosition: "50% 0%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/60 to-foreground/25" />
          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 pt-44 md:pt-60 pb-16 md:pb-24 space-y-7 [text-shadow:0_2px_18px_rgba(58,41,34,0.55)]">
            {/* Same eyebrow, slogan and narrow column as the hero on Om, plus one line about the work */}
            <div className="max-w-[34rem] md:max-w-[26rem] lg:max-w-[30rem] space-y-7">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-background/90">
                Licensed Psychologist · Workshop Facilitator · Speaker · Yoga Teacher
              </p>
              <h1 className="!mt-4 md:!mt-6 font-serif uppercase tracking-[0.12em] text-[clamp(1.9rem,3.2vw+1rem,3.6rem)] leading-[1.05] text-background">
                Rethinking wellbeing...
              </h1>
              <p className="text-lg md:text-xl leading-[1.6] text-background/85">
                Sustainable paths to wellbeing, growth and human potential, for people, teams and organisations.
              </p>
            </div>
          </div>
        </section>

        {/* The four categories as swipeable panels (replaces the old sub-menu) */}
        <ExperienceSwipe
          key={section}
          lang="en"
          initial={["clinical", "organisational", "community", "media"].indexOf(section)}
          panels={[
            {
              key: "clinical",
              label: "Clinical Practice",
              content: (
                <>
        {/* ===== Collaborations - dark band ===== */}
        <section className="bg-forest pt-6 md:pt-8 pb-16 md:pb-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              id="clinical"
              dark
              title="Clinical Practice"
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
              label: "Organisational Work",
              content: (
                <>
         {/* ===== Organisational work ===== */}
        <section className="bg-forest pt-6 md:pt-8 pb-16 md:pb-20 px-6 md:px-10">
           <div id="organisational" className="max-w-7xl mx-auto scroll-mt-28">
             <SectionHeader title="Organisational Work" dark />
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
              label: "Social Impact",
              content: (
                <>
         <section data-no-reveal="mobile" className="bg-forest pt-6 md:pt-8 pb-16 md:pb-20 px-6 md:px-10">
           <div id="community" className="max-w-7xl mx-auto scroll-mt-28">
             <SectionHeader title="Social Impact" dark />
             <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-5 md:gap-6">
               {communityEntries.map((e) => (
                 <PhotoEntryCard
                   key={e.title}
                   photos={[e.photo!, ...(e.gallery ? galleryFor(e.gallery) : [])]}
                   lang="en"
                   title={e.title}
                   meta={e.meta}
                   text={e.body[0]}
                   readMore="Read more"
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
              label: "Publicity",
              content: (
                <>
        {/* ===== In the Media + organisations ===== */}
        <section className="bg-forest pt-6 md:pt-8 pb-16 md:pb-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader id="media" title="Publicity" dark />
            <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">
              {/* Each media card leads to its source: external articles open in a new tab,
                  Psykologtidningen (no URL) opens the article image in the lightbox. */}

              {/* Sveriges Radio */}
              <a
                href="https://www.sverigesradio.se/artikel/david-nzinga-leder-projekt-om-psykisk-ohalsa-och-kultur"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Sveriges Radio: Read the article (opens in a new tab)"
                className="group relative flex flex-col md:flex-row gap-4 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
              >
                <span className="order-last self-start md:order-none md:absolute md:top-6 md:right-6 inline-flex items-center gap-2 rounded-full border border-accent/60 px-4 py-2 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.2em] text-accent transition-colors duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-background">Read the article <span aria-hidden className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span></span>
                <img src={srLogo} alt="Sveriges Radio" loading="lazy" draggable={false} className="w-36 md:w-52 shrink-0 self-center h-auto max-h-12 md:max-h-16 object-contain" />
                <div className="min-w-0 flex-1 md:pr-44">
                  <h3 className="text-center md:text-left font-serif font-bold text-lg md:text-xl leading-snug uppercase">
                    Sveriges Radio
                  </h3>
                  <p className="mt-2 text-base leading-[1.75] text-foreground/70">
                    Interviewed on youth wellbeing, psychology and community-based folkbildning.
                  </p>
                </div>
              </a>

              {/* Psykologtidningen */}
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                aria-label="Psykologtidningen: Open the article"
                className="group relative w-full text-left cursor-zoom-in flex flex-col md:flex-row gap-4 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
              >
                <span className="order-last self-start md:order-none md:absolute md:top-6 md:right-6 inline-flex items-center gap-2 rounded-full border border-accent/60 px-4 py-2 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.2em] text-accent transition-colors duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-background">Read the article <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span></span>
                <img src={ptLogo} alt="Psykologtidningen" loading="lazy" draggable={false} className="w-36 md:w-52 shrink-0 self-center h-auto max-h-12 md:max-h-16 object-contain" />
                <div className="min-w-0 flex-1 md:pr-44">
                  <h3 className="text-center md:text-left font-serif font-bold text-lg md:text-xl leading-snug uppercase">
                    Psykologtidningen
                  </h3>
                  <p className="mt-2 text-base leading-[1.75] text-foreground/70">
                    Featured in connection with G-Flow and the intersection of psychology, culture and youth development.
                  </p>
                </div>
              </button>

              {/* ABF Södertörn */}
              <a
                href="https://www.abf.se/sodertorn/nyheter/g-flow-ger-unga-tjejer/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="ABF Södertörn Folkbildning: Read the article (opens in a new tab)"
                className="group relative flex flex-col md:flex-row gap-4 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
              >
                <span className="order-last self-start md:order-none md:absolute md:top-6 md:right-6 inline-flex items-center gap-2 rounded-full border border-accent/60 px-4 py-2 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.2em] text-accent transition-colors duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-background">Read the article <span aria-hidden className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span></span>
                <img src={abfLogo} alt="ABF" loading="lazy" draggable={false} className="w-36 md:w-52 shrink-0 self-center h-10 md:h-20 object-contain" />
                <div className="min-w-0 flex-1 md:pr-44">
                  <h3 className="text-center md:text-left font-serif font-bold text-lg md:text-xl leading-snug uppercase">
                    ABF Södertörn Folkbildning
                  </h3>
                  <p className="mt-2 text-base leading-[1.75] text-foreground/70">
                    On G-Flow: a meeting place in Jordbro where young girls build self-esteem and mental health through conversation, movement and meditation.
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
          alt="Article in Psykologtidningen about G-Flow"
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

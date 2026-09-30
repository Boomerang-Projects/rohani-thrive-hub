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
    period: "2025 - Present",
    title: "General Adult Psychiatry",
    image: logoVuxen,
    meta: "Public Healthcare · Clinical Psychologist",
    body: ["As a licensed psychologist in adult psychiatry, I provide assessment and treatment tailored to each person's needs and circumstances."],
    longBody: [
      "Providing psychological assessment and treatment within adult psychiatric care, working with a broad range of mental health concerns including anxiety, depression, stress-related difficulties and complex psychological presentations.",
      "The role involves independent clinical work, treatment planning and therapeutic interventions.",
      "Working across different presentations and individual needs has further developed my ability to adapt psychological approaches, communication and interventions to the person, context and stage of life.",
    ],
  },
  {
    period: "2022 - 2025",
    title: "Child & Adolescent Mental Health",
    image: logoBup,
    meta: "BUP Brommaplan, Stockholm · Clinical Psychologist",
    body: ["At BUP, I assessed and treated children and young people alongside families and care teams. I learned to meet each young person on their own terms."],
    longBody: [
      "Worked within child and adolescent psychiatry, supporting young people with a broad range of psychological and mental health challenges.",
      "My work included psychological assessment, therapeutic interventions, psychoeducation, crisis management and collaboration with families and multidisciplinary teams.",
      "This experience helped strengthen and shape my ability to adapt therapeutic approaches, communication and interventions to different developmental stages, individual needs and family constellations.",
    ],
  },
  {
    period: "2018 - 2022",
    title: "Psychiatric Hospital & Emergency Healthcare",
    image: logoKarolinska,
    meta: "Karolinska University Hospital · Crisis Intervention",
    body: ["At Karolinska, I worked with severe mental illness, crisis intervention and suicide prevention. This taught me to stay grounded and present in complex, high-pressure situations."],
    longBody: [
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
    image: somayaLogo,
    meta: "Psychological & Wellbeing Work",
    body: ["Mental health and movement - workshop for an organisation supporting women and families facing difficult circumstances."],
    longBody: [
      "Mental health and movement - workshop for an organisation supporting women and families experiencing complex domestic, social and psychological challenges.",
      "This work deepened my understanding of the relationship between psychological wellbeing, safety, relationships, culture and wider social circumstances.",
    ],
    link: {
      label: "Somaya Women's Support Centre",
      href: "https://www.linkedin.com/company/somaya-stodjour/?viewAsMember=true",
    },
  },
  {
    title: "Workplace Meditation & Wellbeing",
    image: regionStockholmLogo,
    meta: "Region Stockholm · BUP Brommaplan",
    body: ["I led regular meditation sessions for BUP healthcare staff, offering practical tools for recovery and stress regulation in a demanding workday."],
    longBody: [
      "Facilitated regular guided meditation sessions for healthcare professionals within child and adolescent psychiatry.",
      "The sessions created a structured space for pausing, grounding and recovery within a demanding clinical environment, introducing practical mindfulness-based tools for stress regulation and sustainable wellbeing at work.",
    ],
    tags: "Workplace Wellbeing · Mindfulness · Stress Regulation · Healthcare",
  },
  {
    title: "SATS · Yoga Instructor",
    image: satsLogo,
    meta: "Yoga · Hot yoga · Relaxation & movement",
    body: ["As a yoga instructor at SATS, I guide participants through movement and relaxation, including hot yoga at 38 degrees."],
    longBody: [
      "I work as a yoga instructor at SATS, guiding participants through movement, breath and relaxation.",
      "Among other classes, I lead hot yoga at 38 degrees. The heat helps the body soften and creates space for presence, focus and recovery.",
    ],
  },
  // Placeholder text: the real text for g:ro studio is coming later.
  {
    title: "g:ro studio",
    image: groLogo,
    meta: "Coming soon",
    body: ["Text coming soon."],
  },
];

const communityEntries: Entry[] = [
  {
    title: "G-Flow · ABF Södertörn & Haninge Municipality",
    photo: photoGflow,
    gallery: "gflow",
    image: haningeLogo,
    meta: "Community Education · Youth Wellbeing · Community Development",

    body: ["With ABF Södertörn and Haninge Municipality, I made psychology, movement and connection accessible to young people through G-Flow - a safe space for expression and growth."],
    longBody: [
      "G-Flow is an initiative I founded to give young girls a safe, inclusive and pressure-free place to explore self-esteem, identity, emotions, the body, belonging and relationships.",
      "Through the initiative, in collaboration with ABF Södertörn and local community partners, I have developed and led free sessions where psychological knowledge and psychoeducation are combined with meditation, breathing exercises, movement, dance and reflection.",
      "The aim has been to make tools for mental health and personal growth more accessible, while giving participants the chance to feel seen, heard and included in a safe community.",
      "G-Flow has run over several rounds during school holidays and has created a space where young girls can explore themselves, strengthen their self-esteem and build relationships with others without a focus on performance.",
      "The initiative has also received attention in Sveriges Radio and Psykologtidningen, which has helped highlight the importance of preventive and accessible efforts for young people's mental and social wellbeing.",
      "G-Flow rests on a simple belief: when young people are given space to meet themselves and each other, we create stronger conditions for both individual and collective wellbeing.",
    ],
  },
  {
    title: "Hero Sports Club",
    photo: photoHero,
    gallery: "hero",
    image: heroLogo,

    meta: "Non-profit Association · Physical Health · Self-Esteem & Mental Health",
    body: ["A non-profit association for young girls focused on physical health - where I regularly lead dance classes centred on strengthening self-esteem and mental health."],
    longBody: [
      "Hero Sports Club is a non-profit organisation that creates opportunities for young girls in the suburbs to strengthen their health, community and wellbeing through exercise and movement.",
      "Through my collaboration with Hero, I hold regular dance classes during the term, where dance and movement are combined with a focus on self-esteem, body awareness and mental health.",
      "On Valentine's Day I also held an integrative workshop and talk on self-love, self-care and self-compassion. The young people got to explore what it actually means to take care of themselves, how they see and speak to themselves, and how their self-image can affect the relationships we create with others.",
      "The work continues through recurring dance classes, talks and workshops, and remains in high demand among the young people.",
      "By combining movement, psychology and community, I want to create space for young girls not only to feel better, but also to develop a stronger, more conscious and more positive relationship with themselves and each other.",
    ],
  },
  {
    title: "Joy in the Wild",
    photo: photoJoy,
    gallery: "joy-in-the-wild",
    meta: "Founder & Facilitator",
    body: ["A women-centred nature and wellbeing experience exploring connection, presence, movement and self-reflection."],
    longBody: [
      "Joy in the Wild was created for women of different cultural backgrounds, with a wish to explore what happiness actually means to us beyond performance, expectations and cultural ideas.",
      "Through writing exercises, reflection and open conversations, participants explored the place happiness has had in their lives, how they saw happiness as children, and how cultural norms and experiences can shape our relationship with joy, freedom and ourselves.",
      "Together with the poet and dancer Melissa, we also explored dance and somatic movement. Moving to reconnect with feeling, expression and joy for its own sake.",
      "We meditated, breathed, reflected and above all - had fun.",
      "Joy in the Wild was created as a reminder that happiness doesn't have to be something we earn or perform our way to. Sometimes it is as simple as slowing down, noticing, and reconnecting with what already makes us feel alive.",
    ],
  },
  {
    title: "House of Creatives Solna",
    photo: photoHoc,
    gallery: "house-of-creatives",
    image: houseOfCreativeLogo,
    meta: "Movement & Meditation · Community",
    body: ["Movement and meditation at House of Creatives - a supportive space for presence, recovery and connection."],
    longBody: [
      "As part of the non-profit creative initiative House of Creatives, I hold Meditation & Movement classes for people of different ages, genders and cultural backgrounds.",
      "The classes combine free somatic movement, music, meditation and breathing. Through light guidance and different themes, participants get the chance to let go of performance and reconnect with more playful, free and present parts of themselves.",
      "Movement becomes a way to land in the body, release stress and create more space before we slow down into stillness. The class ends with meditation and breathing, followed by shared reflection and integration.",
      "By creating an inclusive space where people with different experiences and backgrounds meet, the class also becomes a place for community, expression and human connection - something many people long for today.",
    ],
  },
  {
    title: "Together for Sweden · Fryshuset · The Search for Faith & Meaning",
    photo: photoFryshuset,
    gallery: "fryshuset",
    image: fryshusetLogo,
    extraLogo: tfsLogo,
    meta: "Podcast · Conversations on Meaning & Wellbeing",
    body: ["Guest on Fryshuset's podcast The Search for Faith & Meaning - a conversation about psychological health and what gives life meaning."],
    longBody: [
      "I took part in Fryshuset's podcast The Search for Faith & Meaning (Jakten på Tro & Mening).",
      "In the episode we talk about psychological health - what creates meaning, how we can strengthen our wellbeing, and what happens when we listen to ourselves.",
    ],
    link: { label: "Watch the episode on YouTube", href: "https://www.youtube.com/watch?v=nLSdBQndF0E&t=1285s" },
  },
  {
    title: "The Way Back",
    photo: photoVagen,
    gallery: "vagen-tillbaka",
    meta: "Retreat · 3 days · Uppsala",
    body: ["A three-day retreat for women in the forest outside Uppsala, with yoga, meditation, breathwork and reflection in nature."],
    longBody: [
      "The Way Back was a three-day retreat for women, in the forest outside Uppsala.",
      "The days were filled with yoga, meditation, breathwork and reflection. Everything centred on wellbeing and health, with plenty of time to share good food and spend time in nature.",
      "I held the retreat together with a shaman from Peru, who brought traditions and perspectives from Peru into the work.",
    ],
  },
  {
    title: "Motheroots",
    photo: photoMotherRoots,
    gallery: "mother-roots",
    meta: "Event · Mothers 40+ · Several generations",
    body: ["An event for mothers aged 40 and over, about how motherhood has changed over the years and what it has meant for them as individuals."],
    longBody: [
      "Motheroots was an event for mothers aged 40 and over.",
      "Participants reflected on motherhood: how it has changed for them and what it has meant for them as individuals over the years.",
      "We meditated, did visualisations and breathing exercises, danced and stretched.",
      "The event closed with a reflection circle where everyone shared openly. The participants came from different generations, and several mothers came together with their own mothers.",
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
      className="relative flex flex-col md:flex-row cursor-pointer gap-4 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-[transform,border-color] duration-300 hover:scale-[1.02] hover:border-accent/40 motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      <span className="order-last self-start md:order-none md:absolute md:top-7 md:right-7 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.22em] text-accent underline underline-offset-4">
        Read more
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
        Read more
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
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.02] text-balance max-w-4xl text-background">
              Psychology, Wellbeing & Human Development
            </h1>
            <p className="text-lg md:text-xl leading-[1.7] text-background/85 max-w-2xl">
              My work brings together psychological expertise, human
              development and embodied approaches to wellbeing - across
              clinical, organisational and community settings.
            </p>
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
         <section className="bg-forest pt-6 md:pt-8 pb-16 md:pb-20 px-6 md:px-10">
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
              label: "In the Media",
              content: (
                <>
        {/* ===== In the Media + organisations ===== */}
        <section className="bg-forest pt-6 md:pt-8 pb-16 md:pb-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader id="media" title="In the Media" dark />
            <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">
              {/* Each media card leads to its source: external articles open in a new tab,
                  Psykologtidningen (no URL) opens the article image in the lightbox. */}

              {/* Sveriges Radio */}
              <a
                href="https://www.sverigesradio.se/artikel/david-nzinga-leder-projekt-om-psykisk-ohalsa-och-kultur"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Sveriges Radio: Read the article (opens in a new tab)"
                className="relative flex flex-col md:flex-row gap-4 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
              >
                <span className="order-last self-start md:order-none md:absolute md:top-7 md:right-7 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.22em] underline underline-offset-4 text-accent">Read the article ↗</span>
                <img src={srLogo} alt="Sveriges Radio" loading="lazy" draggable={false} className="w-36 md:w-52 shrink-0 self-center h-auto max-h-12 md:max-h-16 object-contain" />
                <div className="min-w-0 flex-1 md:pr-32">
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
                className="relative w-full text-left cursor-zoom-in flex flex-col md:flex-row gap-4 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
              >
                <span className="order-last self-start md:order-none md:absolute md:top-7 md:right-7 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.22em] underline underline-offset-4 text-accent">Read the article</span>
                <img src={ptLogo} alt="Psykologtidningen" loading="lazy" draggable={false} className="w-36 md:w-52 shrink-0 self-center h-auto max-h-12 md:max-h-16 object-contain" />
                <div className="min-w-0 flex-1 md:pr-32">
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
                className="relative flex flex-col md:flex-row gap-4 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
              >
                <span className="order-last self-start md:order-none md:absolute md:top-7 md:right-7 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.22em] underline underline-offset-4 text-accent">Read the article ↗</span>
                <img src={abfLogo} alt="ABF" loading="lazy" draggable={false} className="w-36 md:w-52 shrink-0 self-center h-10 md:h-20 object-contain" />
                <div className="min-w-0 flex-1 md:pr-32">
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
        <LogoMarquee className="" />
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
                  <ModalGallery photos={galleryFor(selected.gallery)} label={selected.title} lang="en" />
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

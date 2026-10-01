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
    testimonials: ["bup-2"],
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
    testimonials: ["somaya"],
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
    testimonials: ["bup-1"],
    image: regionStockholmLogo,
    meta: "Region Stockholm · BUP Brommaplan",
    body: ["I led regular meditation sessions for BUP healthcare staff, offering practical tools for recovery and stress regulation in a demanding workday."],
    longBody: [
      "I led recurring guided meditation sessions for healthcare staff in child and adolescent psychiatry, focused on creating a structured pause for grounding, presence and recovery in a demanding clinical everyday life.",
      "Through practical mindfulness-based tools, participants were able to develop strategies for stress regulation, greater presence and more sustainable wellbeing at work.",
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
    longBody: [
      "As a trained yoga instructor at SATS, I regularly lead yoga and recovery classes at different clubs around Stockholm. I am also trained to teach in heated studios, and mainly lead classes in Yin Yoga, Aroma Relax, Meditation and Breathwork, with a focus on presence, body awareness and recovery.",
      "Aroma Relax is a guided relaxation class where different essential oils are combined with breathing, presence and deep relaxation. Breathwork and meditation focus mainly on breathing techniques and mindfulness. The classes create a chance to pause, land in the body and give the nervous system room to recover.",
      "The classes are 60-90 minutes long and are adapted to the class format and the participants' needs. By combining yoga, breathing and relaxation, I want to create an experience where participants can let go of performance, listen inwards and reconnect with the body.",
      "The work at SATS reflects a central part of my approach: that wellbeing is not only about how we think, but also about how we relate to the body, recovery and our own presence.",
    ],
  },
  {
    title: "g:ro studio",
    testimonials: ["frida"],
    gallery: "gro",
    image: groLogo,
    meta: "Yoga Studio · Mariatorget, Stockholm · Facilitator",
    body: ["As a facilitator at GRO, a yoga studio at Mariatorget, I led yoga and meditation classes focused on presence, recovery and mental balance."],
    longBody: [
      "GRO was a yoga studio at Mariatorget in Stockholm, founded by licensed psychologist Sabina Landehag after more than 15 years of clinical work. The vision was to bring together well-established facilitators who shared a conviction about the importance of a more holistic perspective on health and wellbeing.",
      "As a facilitator at GRO, I led yoga and meditation classes focused on presence, recovery, body awareness and mental balance. I was part of a teaching team with different professional backgrounds in mental health, where therapists, social workers and other health professionals came together around a shared view of the human being as a whole.",
      "Beyond the regular classes, GRO was a place for community and connection. The studio hosted events, workshops and gatherings where people could explore wellbeing from different perspectives while meeting and building community.",
      "My time at GRO reflects much of what also shapes my work today - the meeting between psychology, the body, presence and community, and the conviction that wellbeing can be strengthened when we get to see and meet the whole person.",
    ],
  },  {
    title: "Edboskolan · Dance, Movement & Health",
    image: huddingeLogo,
    meta: "Sports day · Primary school · Workshop",
    body: ["During Edboskolan's sports day, I led a 1.5-hour workshop for primary school pupils focused on movement and health."],
    longBody: [
      "During Edboskolan's sports day, I led a 1.5-hour workshop for primary school pupils focused on movement and health.",
      "The workshop highlighted how movement can support both physical and mental health, while creating energy, joy and community. Through dance and playful exercises, the pupils got to move, explore their bodies and experience movement without a focus on performance.",
    ],
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
      "The Search for Faith & Meaning (Jakten på tro och mening) is an initiative by Together for Sweden and Fryshuset that explores the human need for meaning, belonging and existential grounding.",
      "In the podcast episode I am interviewed about my perspectives on human existence from an existential and psychological point of view, and how my personal journey has shaped my professional approach and the way I see people in different contexts.",
      "In the conversation I also touched on how society has long tended to separate body, soul and mind, and how a growing need for more integrated perspectives on human wellbeing can open up a more holistic view of health and care.",
      "To me, such a perspective is about seeing the human being as a whole - where psychology, the body, relationships, life experiences, meaning and context can all be part of what shapes our wellbeing and fulfilment.",
    ],
    link: { label: "Watch the episode on YouTube", href: "https://www.youtube.com/watch?v=nLSdBQndF0E&t=1285s" },
  },
  {
    title: "The Way Back · Retreat",
    photo: photoVagen,
    gallery: "vagen-tillbaka",
    meta: "Retreat · 3 days · Uppsala",
    body: ["A three-day retreat for women in the forest outside Uppsala, with yoga, meditation, breathwork and reflection in nature."],
    longBody: [
      "The Way Back was a three-day retreat for women, surrounded by nature and forest outside Uppsala. The retreat was created as a chance to pause from the pace of everyday life and reconnect with oneself, the body and what creates wellbeing.",
      "I initiated, planned and facilitated the retreat, with responsibility for its overall structure, content and participant experience. I designed and led parts of the programme focused on psychological wellbeing, self-reflection, recovery and embodied presence, through yoga, meditation, breathwork, reflection and conversation, among other things.",
      "The days gave participants the chance to land in the body, listen inwards and explore their needs, while leaving plenty of room for rest, nature and community. An important part was also the time between activities - eating good food together, talking, laughing and simply being.",
      "I held the retreat together with a shaman from Peru, who contributed traditions, perspectives and knowledge from their cultural and spiritual tradition.",
      "Together we created a meeting between different perspectives on the human being, wellbeing and our relationship with ourselves and nature - something many people long for today.",
    ],
  },
  {
    title: "Motheroots",
    testimonials: ["saida", "jamila", "aneesa"],
    photo: photoMotherRoots,
    gallery: "mother-roots",
    meta: "Event · Mothers 40+ · Several generations",
    body: ["An event for mothers aged 40 and over, about how motherhood has changed over the years and what it has meant for them as individuals."],
    longBody: [
      "Motheroots was an event for mothers over 40, created as a space for reflection, recovery and community around the many dimensions of motherhood.",
      "Participants explored how motherhood had changed throughout their lives and what it has meant to them as individuals - beyond the role of mother. Through reflection, conversation and different embodied practices, they had the chance to pause and pay attention to themselves, their needs and their own journey.",
      "During the event we combined meditation, visualisation, breathing exercises, dance and stretching to create a whole where both body and mind had space. The day ended with an open reflection circle where participants shared their experiences and perspectives on motherhood with each other.",
      "A special dimension was the meeting between generations. Several participants came together with their own mothers, which created a beautiful space for community, recognition and conversation across generations.",
      "Motheroots was about meeting the woman behind the role of mother - and giving room to her own story, body and identity.",
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
                <div className="space-y-4">
                  {(selected.longBody ?? selected.body).map((p) => (
                    <p key={p} className="text-base leading-[1.75] text-foreground/75">{p}</p>
                  ))}
                </div>
                {/* Photos first, right after her own text, then what others say */}
                {selected.gallery && (
                  <ModalGallery photos={galleryFor(selected.gallery)} label={selected.title} lang="en" />
                )}
                {/* What the organisation says: its own labelled section with white boxes,
                    so it reads clearly as someone else's voice, separate from her own text */}
                {selected.testimonials && selected.testimonials.length > 0 && (
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

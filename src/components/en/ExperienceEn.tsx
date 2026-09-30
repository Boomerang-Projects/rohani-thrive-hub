import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ArticleLightbox } from "@/components/sections/ArticleLightbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import logoVuxen from "@/assets/logos/vuxenpsykiatrin-region-stockholm.png";
import logoBup from "@/assets/logos/bup-region-stockholm.png";
import logoKarolinska from "@/assets/logos/karolinska.png";
import somayaLogo from "@/assets/logos/partners/somaya-kvinnostodjour.png";
import experienceHero from "@/assets/photos/leading-session.jpg";
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
  image?: string;
  logoBig?: boolean;
  meta: string;
  body: string[];
  longBody?: string[];
  tags?: string;
  link?: { label: string; href: string };
};

const clinicalEntries: Entry[] = [
  {
    period: "2025 — Present",
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
    period: "2022 — 2025",
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
    period: "2018 — 2022",
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
    body: ["Mental health and movement – workshop for an organisation supporting women and families facing difficult circumstances."],
    longBody: [
      "Mental health and movement – workshop for an organisation supporting women and families experiencing complex domestic, social and psychological challenges.",
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
    body: ["I led regular meditation sessions for BUP healthcare staff, offering practical tools for recovery and stress regulation in a demanding workday."],
    longBody: [
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
    body: ["With ABF Södertörn, I made psychology, movement and connection accessible to young people through G-Flow — a safe space for expression and growth."],
    longBody: [
      "Collaborated with ABF Södertörn on initiatives combining psychology, culture, movement and community-based learning.",
      "The collaboration reflects my interest in making psychological knowledge accessible beyond traditional clinical settings and creating spaces where wellbeing, self-expression and connection can develop together.",
    ],
  },
  {
    title: "Haninge Municipality",
    meta: "Youth Wellbeing · Community Development · Public Sector Collaboration",
    body: ["Together with Haninge Municipality, I created welcoming spaces where young people could explore wellbeing, movement and connection."],
    longBody: [
      "Collaborated with Haninge Municipality through youth-focused wellbeing initiatives, creating accessible spaces for reflection, connection, movement and personal development.",
      "The work has strengthened my experience of translating psychological perspectives into community-based formats and working across professional and public-sector contexts.",
    ],
  },
];

/* Saved for future use — wellbeing/retreat experiences (not active on the page right now)
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
      className="relative flex cursor-pointer gap-5 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-[transform,border-color] duration-300 hover:scale-[1.02] hover:border-accent/40 motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      <span className="absolute top-5 right-5 md:top-7 md:right-7 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.22em] text-accent underline underline-offset-4">
        Read more
      </span>
      {entry.image && (
        <img
          src={entry.image}
          alt={entry.title}
          loading="lazy"
          className="w-40 md:w-64 shrink-0 self-stretch object-contain"
        />
      )}
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

function EntryRow({ entry, light = false, onOpen }: { entry: Entry; light?: boolean; onOpen: (e: Entry) => void }) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpen(entry)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(entry); } }}
      className={`relative flex cursor-pointer gap-5 md:gap-7 rounded-3xl border p-5 md:p-7 transition-[transform,border-color] duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100 ${light ? "border-border bg-background text-foreground hover:border-accent/40" : "border-background/15 bg-foreground text-background hover:border-background/40"}`}
    >
      <span className={`absolute top-5 right-5 md:top-7 md:right-7 whitespace-nowrap font-bold text-[11px] uppercase tracking-[0.22em] underline underline-offset-4 ${light ? "text-accent" : "text-background/80"}`}>
        Read more
      </span>
      {entry.image && (
        <img
          src={entry.image}
          alt={entry.title}
          loading="lazy"
          className="w-40 md:w-64 shrink-0 self-stretch object-contain"
        />
      )}
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
              development and embodied approaches to wellbeing– across
              clinical, organisational and community settings.
            </p>
          </div>
        </section>

        <ExperienceTabs lang="en" active={section} />

{section === "clinical" && (<>
        {/* ===== Collaborations — dark band ===== */}
        <section className="bg-forest py-16 md:py-20 px-6 md:px-10">
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


</>)}
{section === "organisational" && (<>
         {/* ===== Organisational work ===== */}
        <section className="bg-forest py-16 md:py-20 px-6 md:px-10">
           <div id="organisational" className="max-w-7xl mx-auto scroll-mt-28">
             <SectionHeader title="Organisational Work" dark />
             <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">
               {organisationalEntries.map((e) => (
                 <EntryRow key={e.title} entry={e} light onOpen={setSelected} />
               ))}
             </div>
           </div>
         </section>

</>)}
{section === "community" && (<>
         <section className="bg-forest py-16 md:py-20 px-6 md:px-10">
           <div id="community" className="max-w-7xl mx-auto scroll-mt-28">
             <SectionHeader title="Social Impact" dark />
             <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">
               {communityEntries.map((e) => (
                 <EntryRow key={e.title} entry={e} light onOpen={setSelected} />
               ))}
          </div>
           </div>
        </section>

</>)}
{section === "media" && (<>
        {/* ===== In the Media + organisations ===== */}
        <section className="bg-forest py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader id="media" title="In the Media" dark />
            <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">
              {/* Sveriges Radio */}
              <div className="flex gap-5 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100">
                <img
                  src={mediaRadio}
                  alt="Studio microphone in warm light"
                  loading="lazy"
                  width={1200}
                  height={900}
                  draggable={false}
                  className="w-32 md:w-52 shrink-0 aspect-[4/3] rounded-2xl object-cover shadow-[0_20px_60px_-25px_rgba(58,41,34,0.35)]"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif font-bold text-lg md:text-xl leading-snug uppercase">
                    Sveriges Radio
                  </h3>
                  <p className="mt-2 text-base leading-[1.75] text-foreground/70">
                    Interviewed on youth wellbeing, psychology and community-based folkbildning.
                  </p>
                </div>
              </div>

              {/* Psykologtidningen */}
              <div className="flex gap-5 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100">
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  aria-label="Open the article full size"
                  className="shrink-0 w-32 md:w-52 cursor-zoom-in"
                >
                  <img
                    src={mediaArticle.url}
                    alt="Article in Psykologtidningen about G-Flow"
                    loading="lazy"
                    draggable={false}
                    className="aspect-[4/3] w-full rounded-2xl object-cover object-top shadow-[0_20px_60px_-25px_rgba(58,41,34,0.35)] transition-transform duration-300 hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </button>
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif font-bold text-lg md:text-xl leading-snug uppercase">
                    Psykologtidningen
                  </h3>
                  <p className="mt-2 text-base leading-[1.75] text-foreground/70">
                    Featured in connection with G-Flow and the intersection of psychology, culture and youth development.
                  </p>
                </div>
              </div>

              {/* Podcast */}
              <div className="flex gap-5 md:gap-7 rounded-3xl border border-border bg-background p-5 md:p-7 text-foreground transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100">
                <img
                  src={mediaPodcast}
                  alt="Podcast microphones in a recording studio"
                  loading="lazy"
                  width={1200}
                  height={900}
                  draggable={false}
                  className="w-32 md:w-52 shrink-0 aspect-[4/3] rounded-2xl object-cover shadow-[0_20px_60px_-25px_rgba(58,41,34,0.35)]"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif font-bold text-lg md:text-xl leading-snug uppercase">
                    Podcast
                  </h3>
                  <p className="mt-2 text-base leading-[1.75] text-foreground/70">
                    A guest in conversation about psychology, culture and wellbeing.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

</>)}
{section === "clinical" && (<>
        <section className="px-6 md:px-10 pb-2">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent">
            Experience Across
          </p>
        </section>

        <LogoMarquee className="mt-4 md:mt-6" />

        <section className="px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-3 md:gap-5">
            {[
              { src: photoGroupCircle, alt: "Participants in a circle during a workshop", pos: "50% 50%" },
              { src: photoHandsSky, alt: "Hands reaching towards the sky", pos: "40% 50%" },
              { src: photoFireEvening, alt: "Two participants by a fire in the evening", pos: "40% 50%" },
            ].map((img) => (
              <img key={img.alt} src={img.src} alt={img.alt} loading="lazy" className="w-full aspect-[3/4] md:aspect-[4/5] object-cover" style={{ objectPosition: img.pos }} />
            ))}
          </div>
        </section>

</>)}
        <ArticleLightbox
          src={mediaArticle.url}
          alt="Article in Psykologtidningen about G-Flow"
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
        <Dialog open={selected !== null} onOpenChange={(o) => { if (!o) setSelected(null); }}>
          <DialogContent className="max-w-2xl">
            {selected && (
              <>
                <DialogHeader>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      {selected.period && (
                        <p className="text-[10px] uppercase tracking-[0.25em] text-accent">{selected.period}</p>
                      )}
                      <DialogTitle className="font-serif text-2xl md:text-3xl uppercase leading-tight">{selected.title}</DialogTitle>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/55">{selected.meta}</p>
                    </div>
                    {selected.image && (
                      <img src={selected.image} alt={selected.title} className="mt-1 hidden h-16 w-56 shrink-0 object-contain object-right sm:block" />
                    )}
                  </div>
                </DialogHeader>
                <div className="space-y-4">
                  {(selected.longBody ?? selected.body).map((p) => (
                    <p key={p} className="text-base leading-[1.75] text-foreground/75">{p}</p>
                  ))}
                </div>
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

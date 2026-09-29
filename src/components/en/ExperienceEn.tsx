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
    period: "2025 — Present",
    title: "General Adult Psychiatry",
    meta: "Public Healthcare · Clinical Psychologist",
    body: ["As a licensed psychologist in adult psychiatry, I provide assessment and treatment tailored to each person's needs and circumstances."],
  },
  {
    period: "2018 — 2022",
    title: "Child & Adolescent Mental Health",
    meta: "BUP Brommaplan, Stockholm · Clinical Psychologist",
    body: ["At BUP, I assessed and treated children and young people alongside families and care teams. I learned to meet each young person on their own terms."],
  },
  {
    period: "2018 — 2022",
    title: "Psychiatric Hospital & Emergency Healthcare",
    meta: "Karolinska University Hospital · Crisis Intervention",
    body: ["At Karolinska, I worked with severe mental illness, crisis intervention and suicide prevention. This taught me to stay grounded and present in complex, high-pressure situations."],
  },
];

const organisationalEntries: Entry[] = [
  {
    title: "Somaya Women's Support Centre",
    meta: "Psychological & Wellbeing Work",
    body: ["I led a movement workshop for women and families facing difficult circumstances, with safety, sensitivity and cultural understanding at its heart."],
    link: {
      label: "Somaya Women's Support Centre",
      href: "https://www.linkedin.com/company/somaya-stodjour/?viewAsMember=true",
    },
  },
  {
    title: "Workplace Meditation & Wellbeing",
    meta: "Region Stockholm · BUP Brommaplan",
    body: ["I led regular meditation sessions for BUP healthcare staff, offering practical tools for recovery and stress regulation in a demanding workday."],
    tags: "Workplace Wellbeing · Mindfulness · Stress Regulation · Healthcare",
  },
];

const communityEntries: Entry[] = [
  {
    title: "G-Flow · ABF Södertörn",
    meta: "Community Education · Youth Wellbeing · Culture",
    body: ["With ABF Södertörn, I made psychology, movement and connection accessible to young people through G-Flow — a safe space for expression and growth."],
  },
  {
    title: "Haninge Municipality",
    meta: "Youth Wellbeing · Community Development · Public Sector Collaboration",
    body: ["Together with Haninge Municipality, I created welcoming spaces where young people could explore wellbeing, movement and connection."],
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
    <article className="flex flex-col rounded-3xl border border-border bg-background p-7 md:p-8 text-foreground transition-colors duration-500 hover:border-accent/40">
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
        <div className="mt-auto pt-6">
           <ExternalLink {...entry.link} />
        </div>
      )}
    </article>
  );
}

function EntryRow({ entry, light = false }: { entry: Entry; light?: boolean }) {
  return (
    <article className={`h-full rounded-3xl border p-7 md:p-8 transition-colors duration-500 ${light ? "border-border bg-background text-foreground hover:border-accent/40" : "border-background/15 bg-foreground text-background hover:border-background/40"}`}>
      <div className="space-y-5">
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

export function ExperienceEn() {
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

        {/* ===== Collaborations — dark band ===== */}
        <section className="bg-forest py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              id="clinical"
              dark
              title="Clinical Practice"
            />
            <div className="mt-8 md:mt-10 grid gap-5 md:gap-6 md:grid-cols-3">
              {clinicalEntries.map((e) => (
                <ClinicalCard key={e.title} entry={e} />
              ))}
            </div>
          </div>
        </section>


         {/* ===== Organisational work ===== */}
        <section className="py-16 md:py-20 px-6 md:px-10">
           <div id="organisational" className="max-w-7xl mx-auto scroll-mt-28">
             <SectionHeader title="Organisational Work" brown />
             <div className="mt-8 md:mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
               {organisationalEntries.map((e) => (
                 <EntryRow key={e.title} entry={e} />
               ))}
             </div>
           </div>
         </section>

         <section className="bg-forest py-16 md:py-20 px-6 md:px-10">
           <div id="community" className="max-w-7xl mx-auto scroll-mt-28">
             <SectionHeader title="Social Impact" dark />
             <div className="mt-8 md:mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
               {communityEntries.map((e) => (
                 <EntryRow key={e.title} entry={e} light />
               ))}
          </div>
           </div>
        </section>

        {/* ===== Heart of the work ===== */}
        <section className="relative overflow-hidden">
          <img src={heartOfWorkPhoto.url} alt="Participants sitting together in a circle at a gathering" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/65 to-foreground/35" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-36 md:pt-52 pb-16 md:pb-24">
            <div className="max-w-3xl space-y-6 text-background">
              <h2 className="font-serif text-4xl md:text-6xl leading-tight">
                At the heart of this work is a curiosity about who we are, what
                shapes us, and who we are becoming.
              </h2>
              <p className="text-base leading-[1.75] text-background/90">
                How can we move through life with greater awareness, agency and
                intention– rather than simply reacting to what happens around
                us?
              </p>
              <p className="text-base leading-[1.75] text-background/90">
                What if meaningful change begins with becoming more conscious of
                the way we see, experience and engage with the world?
              </p>
              <p className="text-base leading-[1.75] text-background/90">
                My work combines psychological science with a human, embodied
                and culturally responsive approach to wellbeing and development.
              </p>
            </div>
          </div>
        </section>


        {/* ===== In the Media + organisations ===== */}
        <section className="bg-secondary/60 py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader id="media" title="In the Media" />
            <div className="mt-8 md:mt-10 grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
              {/* Sveriges Radio */}
              <div>
                <img
                  src={mediaRadio}
                  alt="Studio microphone in warm light"
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
                  Interviewed on youth wellbeing, psychology and community-based folkbildning.
                </p>
              </div>

              {/* Psykologtidningen */}
              <div>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  aria-label="Open the article full size"
                  className="block w-full cursor-zoom-in"
                >
                  <img
                    src={mediaArticle.url}
                    alt="Article in Psykologtidningen about G-Flow"
                    loading="lazy"
                    draggable={false}
                    className="aspect-[4/3] w-full rounded-2xl object-cover object-top shadow-[0_20px_60px_-25px_rgba(58,41,34,0.35)] transition-transform duration-300 hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </button>
                <h3 className="mt-5 font-serif font-bold text-lg md:text-xl leading-snug uppercase text-center">
                  Psykologtidningen
                </h3>
                <p className="mt-2 text-base leading-[1.75] text-foreground/70">
                  Featured in connection with G-Flow and the intersection of psychology, culture and youth development.
                </p>
              </div>

              {/* Podcast */}
              <div>
                <img
                  src={mediaPodcast}
                  alt="Podcast microphones in a recording studio"
                  loading="lazy"
                  width={1200}
                  height={900}
                  draggable={false}
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_20px_60px_-25px_rgba(58,41,34,0.35)]"
                />
                <h3 className="mt-5 font-serif font-bold text-lg md:text-xl leading-snug uppercase text-center">
                  Podcast
                </h3>
                <p className="mt-2 text-base leading-[1.75] text-foreground/70">
                  A guest in conversation about psychology, culture and wellbeing.
                </p>
              </div>
            </div>

          </div>
        </section>

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

        <ArticleLightbox
          src={mediaArticle.url}
          alt="Article in Psykologtidningen about G-Flow"
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      </main>
      <SiteFooter />
    </div>
  );
}

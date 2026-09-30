import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import { SectionHeader } from "@/components/sections/SectionHeader";
import bupLogo from "@/assets/logos/bup-region-stockholm.png";
import somayaLogo from "@/assets/logos/somaya.png";
import satsLogo from "@/assets/logos/sats-card.png";

/*
 * Two kinds of testimonials, shown two different ways:
 * - Organisations: few, large cards with the organisation's logo. They speak to
 *   partners and sponsors, so they sit near the end of the page, by the logo band.
 * - Individuals: many, shorter, in an endless swipe row right after "Möt grundaren".
 * The quotes are kept in the language they were written in (English), on both
 * language versions of the site. Only the headings and labels are translated.
 */

type OrgQuote = { quote: string; who: { sv: string; en: string }; logo: string; logoClass?: string };
type PersonQuote = { quote: string; name: string; age: number };

const orgQuotes: OrgQuote[] = [
  {
    quote:
      "Madeeha facilitated a wellness workshop through movement and Bhangra dance for the women at Somaya Women's Shelter. Her warm, inclusive, and empowering approach created a space for joy, connection, and self-expression. The workshop was exceptionally well received and continues to be remembered and spoken about within our organization more than a year later. It offered far more than movement as it provided a meaningful experience of wellbeing, community, and empowerment.",
    who: { sv: "Verksamhetschef, Somaya kvinnostödjour", en: "Head of Somaya Women's Shelter" },
    logo: somayaLogo,
  },
  {
    quote:
      "Watching Madeeha lead a Recovery Yoga class, it was clear that teaching comes naturally to her. She has a calm, confident presence and a highly intuitive way of guiding the room. Her instructions were clear, pedagogical, and delivered with a soothing rhythm that made it easy to relax and follow along. What impressed me most was her sense of timing - she knew exactly when to speak, what words would best support the experience, and when to step back and allow silence and personal reflection to do their work. She creates an environment where people feel safe, present, and genuinely cared for.",
    who: { sv: "Supervisor, SATS", en: "Supervisor, SATS" },
    logo: satsLogo,
    logoClass: "rounded-md",
  },
  {
    quote:
      "ROHANI demonstrated a high level of professionalism and inspired confidence from the very beginning to the end. She created a calm, safe, and reassuring environment through her presence, communication style, and ability to put others at ease.",
    who: { sv: "Psykolog, Barn- och ungdomspsykiatrin (BUP)", en: "Psychologist, Child & Adolescent Psychiatry (BUP)" },
    logo: bupLogo,
  },
  {
    quote:
      "ROHANI brings together a rare combination of professionalism, empathy, and a genuine commitment to helping people thrive. Her work reflects both a strong foundation in psychology and a deep understanding of holistic wellbeing. She has a remarkable ability to create meaningful impact in the lives of the people she works with.",
    who: { sv: "Psykolog, Barn- och ungdomspsykiatrin (BUP)", en: "Psychologist, Child & Adolescent Psychiatry (BUP)" },
    logo: bupLogo,
  },
];

const personQuotes: PersonQuote[] = [
  {
    quote:
      "You are truly in the right profession. The work you do is incredibly valuable and deeply needed in today's world. Anyone who has the opportunity to be part of your work is truly fortunate. Your work creates lasting positive change that extends far beyond the individual, strengthening relationships, communities, and society as a whole. It's needed now more than ever.",
    name: "Saida C.",
    age: 63,
  },
  {
    quote: "I never thought I could feel such peace, your voice feels so calm and comforting to follow. You will help a lot of people.",
    name: "Aneesa K.",
    age: 60,
  },
  { quote: "My body was in pain before our session - it's not anymore.", name: "Jamila K.", age: 47 },
  {
    quote:
      "You have the most beautiful way of spreading kindness and truly seeing the unique qualities in the people around you. You always find the perfect words to make others feel seen and appreciated. You're pure sunshine, Madeeha!",
    name: "Esmeralda L.",
    age: 30,
  },
  {
    quote:
      "Thank you for such a beautiful event. During our session, I experienced a deep sense of calm and release that allowed both my breath and emotions to flow more freely. It was a powerful experience, and I left feeling grounded, supported, and more connected to myself. I'm truly looking forward to continuing this journey with you.",
    name: "Frida T.",
    age: 32,
  },
  {
    quote:
      "I'm so grateful that I found you. As our sessions came to an end, I realized they would be something I'd genuinely miss - but that's also a sign of growth. You always reminded me that this was my journey, yet you did far more than simply walk beside me. With warmth, kindness, and genuine presence, you gave me the tools and confidence to move forward on my own. I'll always be grateful for the difference you've made in my life.",
    name: "Gunnar A.",
    age: 65,
  },
];

/* ---------- Organisations ---------- */

export function OrgTestimonials() {
  const { lang, t } = useLang();
  return (
    <section id="omdomen-organisationer" className="scroll-mt-32 pt-16 md:pt-24 pb-4 px-6 md:px-10 max-w-7xl mx-auto">
      <SectionHeader title={t("Vad organisationer säger", "What organisations say")} />
      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {orgQuotes.map((q, i) => (
          <figure
            key={i}
            className="flex flex-col rounded-3xl border border-border bg-background p-7 md:p-9 shadow-[0_20px_60px_-30px_rgba(27,43,36,0.35)]"
          >
            <img src={q.logo} alt="" loading="lazy" className={`h-10 md:h-12 w-auto max-w-[12rem] self-start object-contain ${q.logoClass ?? ""}`} />
            <blockquote className="mt-6 font-serif italic text-lg leading-relaxed text-foreground">"{q.quote}"</blockquote>
            <figcaption className="mt-auto pt-6 flex items-center gap-4">
              <span className="h-px w-6 bg-accent" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-foreground/55 font-semibold">{lang === "en" ? q.who.en : q.who.sv}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------- Individuals ---------- */

function PersonCard({ q, lang, hidden }: { q: PersonQuote; lang: "sv" | "en"; hidden?: boolean }) {
  const [open, setOpen] = useState(false);
  const long = q.quote.length > 220;
  return (
    <figure
      aria-hidden={hidden || undefined}
      className="w-[85%] sm:w-[46%] lg:w-[31%] shrink-0 snap-center flex flex-col rounded-3xl bg-background p-7 md:p-8 text-foreground"
    >
      <span aria-hidden className="font-serif text-5xl leading-none text-accent/60">"</span>
      <blockquote className={`mt-1 font-serif italic text-lg leading-relaxed ${long && !open ? "line-clamp-6" : ""}`}>{q.quote}</blockquote>
      {long && (
        <button
          type="button"
          tabIndex={hidden ? -1 : undefined}
          onClick={() => setOpen((o) => !o)}
          className="mt-3 self-start text-[11px] font-bold uppercase tracking-[0.22em] text-accent underline underline-offset-4"
        >
          {open ? (lang === "en" ? "Show less" : "Visa mindre") : lang === "en" ? "Read more" : "Läs mer"}
        </button>
      )}
      <figcaption className="mt-auto pt-6 text-[10px] uppercase tracking-[0.22em] text-foreground/55 font-semibold">
        {q.name}, {q.age} {lang === "en" ? "years" : "år"}
      </figcaption>
    </figure>
  );
}

/**
 * Endless swipe row. Same trick as the Social påverkan cards: the list is rendered
 * three times (A A A), we start in the middle copy, and when a swipe ends in the
 * first or last copy we jump one full copy back without animation.
 */
export function PersonTestimonials() {
  const { lang, t } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);
  const n = personQuotes.length;
  const loop = [...personQuotes, ...personQuotes, ...personQuotes];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const items = () => Array.from(track.children) as HTMLElement[];
    const setWidth = () => items()[n].offsetLeft - items()[0].offsetLeft;
    const centreOn = (i: number) => {
      const el = items()[i];
      track.scrollLeft = el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2;
    };
    const centred = () => {
      const mid = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let bestD = Infinity;
      items().forEach((el, i) => {
        const d = Math.abs(el.offsetLeft + el.offsetWidth / 2 - mid);
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      });
      return best;
    };
    centreOn(n);
    let timer: number | undefined;
    const onScroll = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const i = centred();
        if (i < n) track.scrollLeft += setWidth();
        else if (i >= 2 * n) track.scrollLeft -= setWidth();
      }, 140);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      track.removeEventListener("scroll", onScroll);
    };
  }, [n]);

  const step = (dir: 1 | -1) => {
    const track = trackRef.current;
    const first = track?.children[0] as HTMLElement | undefined;
    if (track && first) track.scrollBy({ left: dir * (first.offsetWidth + 20), behavior: "smooth" });
  };

  const arrow =
    "h-10 w-10 rounded-full border border-background/30 text-background transition-colors hover:bg-background/10";

  return (
    <section id="omdomen" className="scroll-mt-32 bg-forest text-background py-16 md:py-24">
      <div className="px-6 md:px-10 max-w-7xl mx-auto">
        <SectionHeader title={t("Vad deltagare säger", "What participants say")} dark />
      </div>
      <div
        ref={trackRef}
        className="flex items-stretch gap-5 overflow-x-auto snap-x snap-mandatory overscroll-x-contain px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loop.map((q, i) => (
          <PersonCard key={i} q={q} lang={lang} hidden={i < n || i >= 2 * n} />
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-2">
        <button type="button" onClick={() => step(-1)} aria-label={t("Föregående", "Previous")} className={arrow}>←</button>
        <button type="button" onClick={() => step(1)} aria-label={t("Nästa", "Next")} className={arrow}>→</button>
      </div>
    </section>
  );
}

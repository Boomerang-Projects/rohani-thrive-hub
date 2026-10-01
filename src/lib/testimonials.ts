import bupLogo from "@/assets/logos/bup-region-stockholm.png";
import somayaLogo from "@/assets/logos/somaya.png";
import satsLogo from "@/assets/logos/sats-card.png";

/**
 * Testimonials from organisations, kept in ONE place.
 * They are shown on the start page ("Vad organisationer säger") and inside the
 * matching card's popup on Erfarenhet. A card points to a quote by its key,
 * e.g. testimonials: ["bup-1"]. Change a quote here and it changes everywhere.
 * quote = the original (English), quoteSv = Swedish translation shown on the Swedish site.
 */
export type OrgQuote = { key: string; quote: string; quoteSv?: string; who: { sv: string; en: string }; logo: string; logoClass?: string };

export const orgQuotes: OrgQuote[] = [
  {
    key: "somaya",
    quoteSv: "Madeeha höll en workshop i välbefinnande genom rörelse och bhangradans för kvinnorna på Somaya kvinnostödjour. Hennes varma, inkluderande och stärkande förhållningssätt skapade ett rum för glädje, gemenskap och självuttryck. Workshoppen togs emot exceptionellt väl och minns och pratas fortfarande om inom vår organisation mer än ett år senare. Den gav mycket mer än rörelse, eftersom den erbjöd en meningsfull upplevelse av välbefinnande, gemenskap och egenmakt.",
    quote:
      "Madeeha facilitated a wellness workshop through movement and Bhangra dance for the women at Somaya Women's Shelter. Her warm, inclusive, and empowering approach created a space for joy, connection, and self-expression. The workshop was exceptionally well received and continues to be remembered and spoken about within our organization more than a year later. It offered far more than movement as it provided a meaningful experience of wellbeing, community, and empowerment.",
    who: { sv: "Verksamhetschef, Somaya kvinnostödjour", en: "Head of Somaya Women's Shelter" },
    logo: somayaLogo,
  },
  {
    key: "sats",
    quoteSv: "När jag såg Madeeha leda ett Recovery Yoga-pass var det tydligt att undervisning kommer naturligt för henne. Hon har en lugn och trygg närvaro och ett mycket intuitivt sätt att leda rummet. Hennes instruktioner var tydliga, pedagogiska och framförda i en lugnande rytm som gjorde det lätt att slappna av och följa med. Det som imponerade mest på mig var hennes känsla för timing - hon visste exakt när hon skulle tala, vilka ord som bäst stödde upplevelsen och när hon skulle kliva tillbaka och låta tystnad och personlig reflektion göra sitt arbete. Hon skapar en miljö där människor känner sig trygga, närvarande och verkligen omhändertagna.",
    quote:
      "Watching Madeeha lead a Recovery Yoga class, it was clear that teaching comes naturally to her. She has a calm, confident presence and a highly intuitive way of guiding the room. Her instructions were clear, pedagogical, and delivered with a soothing rhythm that made it easy to relax and follow along. What impressed me most was her sense of timing - she knew exactly when to speak, what words would best support the experience, and when to step back and allow silence and personal reflection to do their work. She creates an environment where people feel safe, present, and genuinely cared for.",
    who: { sv: "Supervisor, SATS", en: "Supervisor, SATS" },
    logo: satsLogo,
    logoClass: "rounded-md",
  },
  {
    key: "bup-1",
    quoteSv: "ROHANI visade en hög nivå av professionalitet i sitt sätt att leda meditationerna och inspirerade förtroende från början till slut. Hon skapade en lugn, trygg och betryggande miljö genom sin närvaro, sitt sätt att kommunicera och sin förmåga att få andra att känna sig bekväma.",
    quote:
      "ROHANI demonstrated a high level of professionalism in her way of guiding the meditations, and inspired confidence from the very beginning to the end. She created a calm, safe, and reassuring environment through her presence, communication style, and ability to put others at ease.",
    who: { sv: "Psykolog, Barn- och ungdomspsykiatrin (BUP)", en: "Psychologist, Child & Adolescent Psychiatry (BUP)" },
    logo: bupLogo,
  },
  {
    key: "bup-2",
    quoteSv: "ROHANI förenar en sällsynt kombination av professionalitet, empati och ett genuint engagemang för att hjälpa människor att blomstra. Hennes arbete speglar både en stark grund i psykologi och en djup förståelse för holistiskt välbefinnande. Hon har en anmärkningsvärd förmåga att göra verklig skillnad i livet för de människor hon arbetar med.",
    quote:
      "ROHANI brings together a rare combination of professionalism, empathy, and a genuine commitment to helping people thrive. Her work reflects both a strong foundation in psychology and a deep understanding of holistic wellbeing. She has a remarkable ability to create meaningful impact in the lives of the people she works with.",
    who: { sv: "Psykolog, Barn- och ungdomspsykiatrin (BUP)", en: "Psychologist, Child & Adolescent Psychiatry (BUP)" },
    logo: bupLogo,
  },
];

/** Testimonials from participants (first name + initial, age). */
export type PersonQuote = { key: string; quote: string; quoteSv?: string; name: string; age: number };



export const personQuotes: PersonQuote[] = [
  {
    key: "saida",
    quoteSv: "Du är verkligen i rätt yrke. Arbetet du gör är otroligt värdefullt och djupt behövt i dagens värld. Alla som får möjlighet att ta del av ditt arbete har verkligen tur. Ditt arbete skapar bestående positiv förändring som sträcker sig långt bortom individen och stärker relationer, gemenskaper och samhället som helhet. Det behövs nu mer än någonsin.",
    quote:
      "You are truly in the right profession. The work you do is incredibly valuable and deeply needed in today's world. Anyone who has the opportunity to be part of your work is truly fortunate. Your work creates lasting positive change that extends far beyond the individual, strengthening relationships, communities, and society as a whole. It's needed now more than ever.",
    name: "Saida C.",
    age: 63,
  },
  {
    key: "aneesa",
    quoteSv: "Jag trodde aldrig att jag kunde känna ett sådant lugn. Din röst känns så lugn och trygg att följa. Du kommer att hjälpa många människor.",
    quote: "I never thought I could feel such peace, your voice feels so calm and comforting to follow. You will help a lot of people.",
    name: "Aneesa K.",
    age: 60,
  },
  {
    key: "jamila",
    quoteSv: "Min kropp hade ont före vår session - det har den inte längre.", quote: "My body was in pain before our session - it's not anymore.", name: "Jamila K.", age: 47 },
  {
    key: "esmeralda",
    quoteSv: "Du har det vackraste sättet att sprida vänlighet och verkligen se de unika egenskaperna hos människorna omkring dig. Du hittar alltid de perfekta orden för att få andra att känna sig sedda och uppskattade. Du är rent solsken, Madeeha!",
    quote:
      "You have the most beautiful way of spreading kindness and truly seeing the unique qualities in the people around you. You always find the perfect words to make others feel seen and appreciated. You're pure sunshine, Madeeha!",
    name: "Esmeralda L.",
    age: 30,
  },
  {
    key: "frida",
    quoteSv: "Tack för ett så vackert event. Under vår session upplevde jag ett djupt lugn och en frigörelse som lät både min andning och mina känslor flöda friare. Det var en kraftfull upplevelse, och jag gick därifrån jordad, stöttad och mer i kontakt med mig själv. Jag ser verkligen fram emot att fortsätta den här resan med dig.",
    quote:
      "Thank you for such a beautiful event. During our session, I experienced a deep sense of calm and release that allowed both my breath and emotions to flow more freely. It was a powerful experience, and I left feeling grounded, supported, and more connected to myself. I'm truly looking forward to continuing this journey with you.",
    name: "Frida T.",
    age: 32,
  },
  {
    key: "gunnar",
    quoteSv: "Jag är så tacksam för att jag hittade dig. När våra sessioner gick mot sitt slut insåg jag att de skulle bli något jag verkligen skulle sakna - men det är också ett tecken på att jag har växt. Du påminde mig alltid om att det här var min resa, men du gjorde så mycket mer än att bara gå bredvid mig. Med värme, vänlighet och genuin närvaro gav du mig verktygen och självförtroendet att gå vidare på egen hand. Jag kommer alltid att vara tacksam för skillnaden du har gjort i mitt liv.",
    quote:
      "I'm so grateful that I found you. As our sessions came to an end, I realized they would be something I'd genuinely miss - but that's also a sign of growth. You always reminded me that this was my journey, yet you did far more than simply walk beside me. With warmth, kindness, and genuine presence, you gave me the tools and confidence to move forward on my own. I'll always be grateful for the difference you've made in my life.",
    name: "Gunnar A.",
    age: 65,
  },
];

/**
 * Look up any testimonial by key, organisation or participant, in one shape:
 * the quote and who said it, in both languages. Used by the popups on Erfarenhet.
 */
export function findTestimonial(
  key: string,
  lang: "sv" | "en" = "en",
): { quote: string; who: { sv: string; en: string } } | undefined {
  const pick = (q: { quote: string; quoteSv?: string }) => (lang === "sv" && q.quoteSv ? q.quoteSv : q.quote);
  const org = orgQuotes.find((q) => q.key === key);
  if (org) return { quote: pick(org), who: org.who };
  const p = personQuotes.find((q) => q.key === key);
  if (p) return { quote: pick(p), who: { sv: `${p.name}, ${p.age} år`, en: `${p.name}, ${p.age} years` } };
  return undefined;
}

/** The quote in the right language (Swedish translation when there is one). */
export function quoteText(q: { quote: string; quoteSv?: string }, lang: "sv" | "en") {
  return lang === "sv" && q.quoteSv ? q.quoteSv : q.quote;
}

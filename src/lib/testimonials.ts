import bupLogo from "@/assets/logos/bup-region-stockholm.png";
import somayaLogo from "@/assets/logos/somaya.png";
import satsLogo from "@/assets/logos/sats-card.png";

/**
 * Testimonials from organisations, kept in ONE place.
 * They are shown on the start page ("Vad organisationer säger") and inside the
 * matching card's popup on Erfarenhet. A card points to a quote by its key,
 * e.g. testimonials: ["bup-1"]. Change a quote here and it changes everywhere.
 * Quotes stay in the language they were written in; only the role is translated.
 */
export type OrgQuote = { key: string; quote: string; who: { sv: string; en: string }; logo: string; logoClass?: string };

export const orgQuotes: OrgQuote[] = [
  {
    key: "somaya",
    quote:
      "Madeeha facilitated a wellness workshop through movement and Bhangra dance for the women at Somaya Women's Shelter. Her warm, inclusive, and empowering approach created a space for joy, connection, and self-expression. The workshop was exceptionally well received and continues to be remembered and spoken about within our organization more than a year later. It offered far more than movement as it provided a meaningful experience of wellbeing, community, and empowerment.",
    who: { sv: "Verksamhetschef, Somaya kvinnostödjour", en: "Head of Somaya Women's Shelter" },
    logo: somayaLogo,
  },
  {
    key: "sats",
    quote:
      "Watching Madeeha lead a Recovery Yoga class, it was clear that teaching comes naturally to her. She has a calm, confident presence and a highly intuitive way of guiding the room. Her instructions were clear, pedagogical, and delivered with a soothing rhythm that made it easy to relax and follow along. What impressed me most was her sense of timing - she knew exactly when to speak, what words would best support the experience, and when to step back and allow silence and personal reflection to do their work. She creates an environment where people feel safe, present, and genuinely cared for.",
    who: { sv: "Supervisor, SATS", en: "Supervisor, SATS" },
    logo: satsLogo,
    logoClass: "rounded-md",
  },
  {
    key: "bup-1",
    quote:
      "ROHANI demonstrated a high level of professionalism and inspired confidence from the very beginning to the end. She created a calm, safe, and reassuring environment through her presence, communication style, and ability to put others at ease.",
    who: { sv: "Psykolog, Barn- och ungdomspsykiatrin (BUP)", en: "Psychologist, Child & Adolescent Psychiatry (BUP)" },
    logo: bupLogo,
  },
  {
    key: "bup-2",
    quote:
      "ROHANI brings together a rare combination of professionalism, empathy, and a genuine commitment to helping people thrive. Her work reflects both a strong foundation in psychology and a deep understanding of holistic wellbeing. She has a remarkable ability to create meaningful impact in the lives of the people she works with.",
    who: { sv: "Psykolog, Barn- och ungdomspsykiatrin (BUP)", en: "Psychologist, Child & Adolescent Psychiatry (BUP)" },
    logo: bupLogo,
  },
];

export function orgQuote(key: string): OrgQuote | undefined {
  return orgQuotes.find((q) => q.key === key);
}

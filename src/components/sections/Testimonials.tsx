import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "“You are truly in the right profession. The work you do is incredibly valuable and deeply needed in today's world. Anyone who has the opportunity to be part of your work is truly fortunate. Your work creates lasting positive change that extends far beyond the individual, strengthening relationships, communities, and society as a whole. It's needed now more than ever.”",
    name: "Saida C., Age 63",
    org: "",
  },
  {
    quote:
      "“I never thought I could feel such peace, your voice feels so calm and comforting to follow. You will help a lot of people.”",
    name: "Aneesa K., 60 y/o",
    org: "",
  },
  {
    quote: "“My body was in pain before our session- it's not anymore”.",
    name: "Jamila K., 47 y/o",
    org: "",
  },
  {
    quote:
      "“You have the most beautiful way of spreading kindness and truly seeing the unique qualities in the people around you. You always find the perfect words to make others feel seen and appreciated. You're pure sunshine!”",
    name: "Esmeralda L., Age 30",
    org: "",
  },
  {
    quote:
      "“Thank you for such a beautiful event. During our session, I experienced a deep sense of calm and release that allowed both my breath and emotions to flow more freely. It was a powerful experience, and I left feeling grounded, supported, and more connected to myself. I'm truly looking forward to continuing this journey with you.”",
    name: "Frida T., Age 32",
    org: "",
  },
  {
    quote:
      "“I'm so grateful that I found you. As our sessions came to an end, I realized they would be something I'd genuinely miss—but that's also a sign of growth. You always reminded me that this was my journey, yet you did far more than simply walk beside me. With warmth, kindness, and genuine presence, you gave me the tools and confidence to move forward on my own. I'll always be grateful for the difference you've made in my life.”",
    name: "Gunnar A., Age 65",
    org: "",
  },
  {
    quote:
      "“ROHANI demonstrated a high level of professionalism and inspired confidence from the very beginning to the end. She created a calm, safe, and reassuring environment through her presence, communication style, and ability to put others at ease.”",
    name: "Psychologist",
    org: "Child & Adolescent Psychiatry (BUP)",
  },
  {
    quote:
      "“ROHANI brings together a rare combination of professionalism, empathy, and a genuine commitment to helping people thrive. Her work reflects both a strong foundation in psychology and a deep understanding of holistic wellbeing. She has a remarkable ability to create meaningful impact in the lives of the people she works with.”",
    name: "Psychologist",
    org: "Child & Adolescent Psychiatry (BUP)",
  },
  {
    quote:
      "“Rohani facilitated a wellness workshop through movement and Bhangra dance for the women at Somaya Women's Shelter. Her warm, inclusive, and empowering approach created a space for joy, connection, and self-expression. The workshop was exceptionally well received and continues to be remembered and spoken about within our organization more than a year later. It offered far more than movement as it provided a meaningful experience of wellbeing, community, and empowerment.”",
    name: "Head of Somaya Women's Shelter",
    org: "",
  },
  {
    quote:
      "“Watching her lead a Recovery Yoga class, it was clear that teaching comes naturally to her. She has a calm, confident presence and a highly intuitive way of guiding the room. Her instructions were clear, pedagogical, and delivered with a soothing rhythm that made it easy to relax and follow along. What impressed me most was her sense of timing- she knew exactly when to speak, what words would best support the experience, and when to step back and allow silence and personal reflection to do their work. She creates an environment where people feel safe, present, and genuinely cared for.”",
    name: "SATS Supervisor",
    org: "",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section className="bg-secondary py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-10">
          In Their Words
        </p>
        <div className="min-h-[18rem] md:min-h-[22rem] flex flex-col items-center justify-center">
          <blockquote
            key={index}
            className="font-serif italic text-xl md:text-3xl leading-relaxed text-foreground/85 max-w-3xl text-balance animate-in fade-in duration-700"
          >
            {current.quote}
          </blockquote>
          <div className="mt-10 space-y-1">
            <p className="text-sm font-medium">{current.name}</p>
            {current.org ? (
              <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/55">
                {current.org}
              </p>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-foreground" : "w-1.5 bg-foreground/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

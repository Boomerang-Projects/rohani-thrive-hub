import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Rohani brought a depth and humanity to our leadership program that our team is still talking about months later. Evidence-based, warm, and genuinely transformative.",
    name: "Head of People & Culture",
    org: "Global Technology Group",
  },
  {
    quote:
      "Working with Rohani has reshaped how we think about wellbeing at scale. Our managers feel more equipped, our teams more connected, our culture more grounded.",
    name: "Chief Human Resources Officer",
    org: "International Financial Services",
  },
  {
    quote:
      "A rare blend of clinical expertise and genuine presence. Our executive team left the retreat with clarity, calm and a shared language for the work ahead.",
    name: "Executive Director",
    org: "European NGO",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section className="bg-secondary py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-10">
          In Their Words
        </p>
        <div className="min-h-[14rem] md:min-h-[12rem] flex flex-col items-center justify-center">
          <blockquote
            key={index}
            className="font-serif italic text-2xl md:text-4xl leading-snug text-foreground/85 max-w-3xl text-balance animate-in fade-in duration-700"
          >
            "{current.quote}"
          </blockquote>
          <div className="mt-10 space-y-1">
            <p className="text-sm font-medium">{current.name}</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/55">
              {current.org}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-12">
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

import { Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/sections/SectionHeader";
import founderImage from "@/assets/photos/outdoor-session.jpg";

export function FounderEn({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="px-6 md:px-10 max-w-7xl mx-auto">
      <SectionHeader title="Meet the Founder" />
      {/* Same rhythm as the hero: photo, quote card over its corner, one short text */}
      <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* Left: portrait with the quote card */}
        <div className="relative md:mb-12">
          <img
            src={founderImage}
            alt="Madeeha Rani Qazi, founder of Rohani"
            width={1800}
            height={1200}
            loading="lazy"
            className="w-full h-[30rem] md:h-[38rem] object-cover"
            style={{ objectPosition: "52% 30%" }}
          />
          {/* Quote from the article about her: Psykologtidningen #4 2026, p. 7, "Kulturkollen: ABF-kurs" by Maria Jernberg */}
          <figure className="relative -mt-16 mx-4 md:mx-0 md:mt-0 md:absolute md:-bottom-12 md:-right-10 md:max-w-sm bg-background p-7 md:p-8 shadow-[0_20px_60px_-20px_rgba(27,43,36,0.35)]">
            <div className="absolute top-0 left-0 w-16 h-[3px] bg-accent" />
            <blockquote className="font-serif italic text-lg md:text-xl leading-relaxed text-foreground">
              "Madeeha Qazi moves softly between the floor cushion and the yoga mat as she talks. She believes psychology and culture go beautifully hand in hand."
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-4">
              <div className="h-px w-6 bg-accent" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-foreground/50 font-semibold">
                Psykologtidningen · No. 4, 2026 (translated)
              </span>
            </figcaption>
          </figure>
        </div>

        {/* Right: original founder story */}
        <div className="md:max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">
            Psychologist · Facilitator · Speaker
          </p>
          <h3 className="mt-6 font-serif text-3xl md:text-4xl leading-[1.15] text-foreground">
            A psychologist devoted to human potential
          </h3>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80 font-serif italic">
            My journey has taken me across cultures, disciplines and perspectives, shaping a deep curiosity about what helps people thrive. I believe that wellbeing is not a luxury or a benefit. – It is the foundation upon which people, relationships and organizations thrive.
          </p>
          <p className="mt-6 font-serif text-3xl md:text-4xl leading-[1.15] text-foreground">
            My name is Madeeha Qazi, and I am a licensed psychologist, facilitator and the founder of ROHANI.
          </p>
          <div className="mt-6 space-y-4 text-base leading-[1.65] text-foreground/70">
            <p>My work is rooted in modern psychology and enriched by a lifelong curiosity about human potential, wellbeing and what allows people to live, lead and relate more fully. Over the years, I have worked with individuals, groups and organizations, supporting growth, resilience and meaningful change through evidence-based approaches and real human connection.</p>
            <p>Having lived, studied and worked across different countries and cultures, I have come to appreciate both the universality of human experience and the uniqueness of every individual story. These experiences continue to shape the way I work - with openness, cultural sensitivity and a deep respect for the complexity of being human.</p>
            <p>ROHANI was created as a bridge between psychological science and human experience. A space where evidence-based knowledge meets presence, reflection and personal growth. Whether working with individuals, teams or organizations, my intention is always the same: to create the conditions for people to flourish.</p>
            <p>Because when people are supported to thrive, everything else grows from there.</p>
          </div>
          {showLink && (
            <div className="pt-8">
              <Link
                to="/experience"
                className="text-xs uppercase tracking-[0.22em] font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                My experience →
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

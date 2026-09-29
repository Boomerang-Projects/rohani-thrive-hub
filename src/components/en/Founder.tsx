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

        {/* Right: role, intro and one short paragraph */}
        <div className="md:max-w-md">
          <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">
            Psychologist · Facilitator · Speaker
          </p>
          <p className="mt-6 font-serif text-3xl md:text-4xl leading-[1.15] text-foreground">
            My name is Madeeha Qazi. I am a licensed psychologist, facilitator and the founder of ROHANI.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/70">
            After years of working with individuals, groups and organizations across countries and cultures, I created ROHANI as a bridge between psychological science and human experience. My intention is always the same: to create the conditions for people to flourish.
          </p>
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

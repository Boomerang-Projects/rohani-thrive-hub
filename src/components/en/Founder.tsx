import { Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ReadMore } from "@/components/sections/ReadMore";
import founderImage from "@/assets/photos/founder-final.png";

export function FounderEn({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="px-6 md:px-10 max-w-7xl mx-auto">
      <SectionHeader title="Meet the Founder" />
      {/* Same rhythm as the hero: photo, quote card over its corner, one short text */}
      {/* Phones: the role sits right under the title, above the photo (from md it's in the text column) */}
      <div className="md:hidden -mt-2 mb-6 flex justify-center">
        <p className="inline-flex whitespace-nowrap rounded-full bg-foreground/5 px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] text-foreground/60">
          Psychologist · Facilitator · Speaker
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start [&>*]:min-w-0">
        {/* Left: portrait with the quote card */}
        <div className="relative md:mb-12">
          {/* Like the original layout: the whole photo is shown (nothing cropped, so her face is never cut),
              and the quote card sits below it instead of on top of it */}
          <div className="bg-secondary/40">
            <img
              src={founderImage}
              alt="Madeeha Rani Qazi, founder of Rohani"
              width={820}
              height={1200}
              loading="lazy"
              className="w-full h-[30rem] md:h-[38rem] object-contain"
            />
          </div>
          {/* Quote from the article about her: Psykologtidningen #4 2026, p. 7, "Kulturkollen: ABF-kurs" by Maria Jernberg */}
          <Link
            to="/experience/media"
            hash="media"
            aria-label="Read the article in Psykologtidningen"
            className="group relative z-10 block -mt-16 mx-4 md:mx-0 md:mt-0 md:absolute md:-bottom-12 md:-right-10 md:max-w-sm"
          >
            <figure className="bg-background rounded-3xl p-7 md:p-8 shadow-[0_20px_60px_-20px_rgba(27,43,36,0.35)] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.06] hover:shadow-[0_28px_70px_-20px_rgba(27,43,36,0.5)]">
              <blockquote className="font-serif italic text-lg md:text-xl leading-relaxed text-foreground">
                "Madeeha Qazi moves softly between the floor cushion and the yoga mat as she talks. She believes psychology and culture go beautifully hand in hand."
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-4">
                <div className="h-px w-6 shrink-0 bg-accent" />
                <span className="text-[10px] uppercase tracking-[0.22em] text-foreground/50 font-semibold">
                  {/* Unbreakable pieces: on a narrow screen it wraps between them, never in the middle */}
                  <span className="whitespace-nowrap">Psykologtidningen ·</span> <span className="whitespace-nowrap">No. 4, 2026</span>{" "}
                  <span className="whitespace-nowrap">(translated)</span>
                </span>
              </figcaption>
            </figure>
          </Link>
        </div>

        {/* Right: original founder story */}
        <div className="md:max-w-xl">
          <p className="hidden md:inline-flex rounded-full bg-foreground/5 px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] text-foreground/60">
            Psychologist · Facilitator · Speaker
          </p>
          <p className="md:mt-6 font-serif text-3xl md:text-4xl leading-[1.15] text-foreground">
            My name is Madeeha Qazi, and I am a licensed psychologist, facilitator and the founder of ROHANI.
          </p>
          <div className="mt-6 space-y-4 text-base leading-[1.65] text-foreground/85">
            <p>I have always been fascinated by human potential, by what allows us to live, lead and feel more fulfilled. My work is rooted in modern psychology and enriched by a lifelong curiosity about what shapes, drives and changes us!</p>
            <p>I have clinical experience from adult psychiatry, child and adolescent psychiatry and Karolinska hospital psychiatry, and I also lead yoga, meditation and breathwork to meet people through the body, breath and presence.</p>
          </div>
          {/* The rest of the story opens with "Läs mer" (see ReadMore.tsx) */}
          <ReadMore lang="en">
            <div className="pt-4 space-y-4 text-base leading-[1.65] text-foreground/85">
              <p>Having lived, studied and worked across different countries and cultures, I have learned to see both the universal in human experience and the unique in every person's story. It shapes my work today with individuals, groups and organisations, with cultural sensitivity and a deep respect for the complexity of being human.</p>
              <p>ROHANI was created as a bridge between psychological science and human experience, where evidence-based knowledge meets awareness, meaning and self-actualisation.</p>
              <p>Whether I work with individuals, teams or organisations, my intention is always the same: to create the conditions for people to flourish.</p>
            </div>
          </ReadMore>
          {/* Closing line sits between "Read more" and the link, regardless of expansion */}
          <p className="mt-8 font-serif italic text-2xl md:text-[1.75rem] leading-snug text-accent">
            Because when people are given room to flourish, everything else grows from there.
          </p>
          {showLink && (
            <div className="pt-8">
              <Link
                to="/experience"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] font-semibold text-background transition-colors hover:bg-accent"
              >
                My experience <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

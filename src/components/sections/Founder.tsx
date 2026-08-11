import { Link } from "@tanstack/react-router";
import founderImage from "@/assets/founder-portrait-v3.jpg.asset.json";

export function Founder({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-stretch">
        {/* Left: labels + portrait */}
        <div className="flex flex-col">
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
            Meet the Founder
          </p>

          <div className="mt-6 self-start bg-secondary px-5 py-2 rounded-full border border-border">
            <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/70">
              Psychologist · Facilitator · Speaker
            </span>
          </div>

          <img
            src={founderImage.url}
            alt="Founder of Rohani — psychologist and facilitator"
            width={1024}
            height={1280}
            loading="lazy"
            className="mt-10 md:mt-14 w-full h-[32rem] md:h-[42rem] object-cover rounded-3xl"
            style={{ objectPosition: "center 20%" }}
          />
        </div>

        {/* Right: heading + narrative */}
        <div className="flex flex-col md:max-w-[36rem]">
          <h2 className="text-4xl md:text-5xl font-serif leading-[1.1]">
            A psychologist devoted to human potential
          </h2>

          <p className="mt-6 text-lg md:text-xl leading-[1.6] text-foreground/80 font-serif italic">
            My journey has taken me across cultures, disciplines and
            perspectives, shaping a deep curiosity about what helps people
            thrive. I believe that wellbeing is not a luxury or a benefit. – It
            is the foundation upon which people, relationships and
            organizations thrive.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            My name is Madeeha Qazi, and I am a licensed psychologist,
            facilitator and the founder of ROHANI.
          </p>

          <div className="w-12 border-t border-accent/40 my-5" />

          <div className="space-y-3">
            <p className="text-base leading-[1.7] text-foreground/65">
              My work is rooted in modern psychology and enriched by a lifelong
              curiosity about human potential, wellbeing and what allows people
              to live, lead and relate more fully. Over the years, I have
              worked with individuals, groups and organizations, supporting
              growth, resilience and meaningful change through evidence-based
              approaches and real human connection.
            </p>
            <p className="text-base leading-[1.85] text-foreground/65">
              Having lived, studied and worked across different countries and
              cultures, I have come to appreciate both the universality of
              human experience and the uniqueness of every individual story.
              These experiences continue to shape the way I work - with
              openness, cultural sensitivity and a deep respect for the
              complexity of being human.
            </p>
            <p className="text-base leading-[1.85] text-foreground/65">
              ROHANI was created as a bridge between psychological science and
              human experience. A space where evidence-based knowledge meets
              presence, reflection and personal growth. Whether working with
              individuals, teams or organizations, my intention is always the
              same: to create the conditions for people to flourish.
            </p>
          </div>

          <p className="mt-auto pt-4 text-base leading-[1.7] text-foreground/65">
            Because when people are supported to thrive, everything else
            grows from there.
          </p>
          {showLink && (
            <div className="pt-8">
              <Link
                to="/"
                className="text-xs uppercase tracking-[0.22em] font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                Read the full story
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

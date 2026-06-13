import { Link } from "@tanstack/react-router";
import founderImage from "@/assets/founder-portrait-v3.jpg.asset.json";

export function Founder() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative">
          <img
            src={founderImage.url}
            alt="Founder of Rohani — psychologist and facilitator"
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover rounded-3xl"
            style={{ objectPosition: "center 20%" }}
          />
          <div className="absolute -top-6 -right-6 hidden md:block bg-secondary px-5 py-3 rounded-full text-[10px] uppercase tracking-[0.25em]">
            PSYCHOLOGIST · FACILITATOR · SPEAKER
          </div>
        </div>

        <div className="space-y-7">
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
            Meet the Founder
          </p>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            A psychologist devoted to human potential
          </h2>
          <p className="text-lg leading-relaxed text-foreground/75">
            My journey has taken me across cultures, disciplines and
            perspectives, shaping a deep curiosity about what helps people
            thrive. I believe that wellbeing is not a luxury or a benefit. –
            It is the foundation upon which people, relationships and
            organizations thrive.
          </p>
          <p className="text-lg leading-relaxed text-foreground/75">
            My name is Madeeha Qazi, and I am a licensed psychologist,
            facilitator and the founder of ROHANI.
          </p>
          <p className="text-base leading-relaxed text-foreground/60">
            My work is rooted in modern psychology and enriched by a lifelong
            curiosity about human potential, wellbeing and what allows people
            to live, lead and relate more fully. Over the years, I have
            worked with individuals, groups and organizations, supporting
            growth, resilience and meaningful change through evidence-based
            approaches and real human connection.
          </p>
          <p className="text-base leading-relaxed text-foreground/60">
            Having lived, studied and worked across different countries and
            cultures, I have come to appreciate both the universality of
            human experience and the uniqueness of every individual story.
            These experiences continue to shape the way I work - with
            openness, cultural sensitivity and a deep respect for the
            complexity of being human.
          </p>
          <p className="text-base leading-relaxed text-foreground/60">
            ROHANI was created as a bridge between psychological science and
            human experience. A space where evidence-based knowledge meets
            presence, reflection and personal growth. Whether working with
            individuals, teams or organizations, my intention is always the
            same: to create the conditions for people to flourish.
          </p>
          <p className="text-base leading-relaxed text-foreground/60">
            Because when people are supported to thrive, everything else
            grows from there.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border">
            <div>
              <p className="font-serif text-2xl">10+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/55 mt-1">
                Years in practice
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl">3</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/55 mt-1">
                Continents served
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl">100+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/55 mt-1">
                Organizations
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Link
              to="/about"
              className="text-xs uppercase tracking-[0.22em] font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              Read the full story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

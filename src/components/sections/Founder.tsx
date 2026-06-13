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
            Psychologist, facilitator and speaker with an international
            background and a passion for helping people reconnect with their
            strengths, purpose and potential.
          </p>
          <p className="text-base leading-relaxed text-foreground/60">
            With years of experience working across cultures and industries,
            the founder of Rohani brings together evidence-based psychology,
            mindfulness facilitation and emotional intelligence to guide
            organizations and individuals toward sustainable wellbeing.
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

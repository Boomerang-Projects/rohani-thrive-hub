import { useLang } from "@/lib/i18n";
import { FounderEn } from "@/components/en/Founder";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/sections/SectionHeader";
import founderImage from "@/assets/photos/outdoor-session.jpg";

function FounderSv({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="px-6 md:px-10 max-w-7xl mx-auto">
      <SectionHeader title="Möt grundaren" />
      {/* Same rhythm as the hero: photo, quote card over its corner, one short text */}
      <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* Left: portrait with the quote card */}
        <div className="relative md:mb-12">
          <img
            src={founderImage}
            alt="Madeeha Rani Qazi, grundare av Rohani"
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
              "Madeeha Qazi rör sig mjukt mellan sittkudden och yogamattan medan hon pratar. Hon tycker att psykologi och kultur går fint hand i hand."
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-4">
              <div className="h-px w-6 bg-accent" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-foreground/50 font-semibold">
                Psykologtidningen · Nr 4, 2026
              </span>
            </figcaption>
          </figure>
        </div>

        {/* Right: role, intro and one short paragraph */}
        <div className="md:max-w-md">
          <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">
            Psykolog · Facilitator · Föreläsare
          </p>
          <p className="mt-6 font-serif text-3xl md:text-4xl leading-[1.15] text-foreground">
            Jag heter Madeeha Qazi och är legitimerad psykolog, facilitator och grundare av ROHANI.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/70">
            Efter år av arbete med individer, grupper och organisationer, i flera länder och kulturer, skapade jag ROHANI som en bro mellan psykologisk vetenskap och mänsklig upplevelse. Min intention är alltid densamma: att skapa förutsättningar för människor att frodas.
          </p>
          {showLink && (
            <div className="pt-8">
              <Link
                to="/experience"
                className="text-xs uppercase tracking-[0.22em] font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                Min erfarenhet →
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Founder(props: { showLink?: boolean }) {
  const { lang } = useLang();
  return lang === "en" ? <FounderEn {...props} /> : <FounderSv {...props} />;
}

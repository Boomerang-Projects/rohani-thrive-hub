import { useLang } from "@/lib/i18n";
import { FounderEn } from "@/components/en/Founder";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/sections/SectionHeader";
import founderImage from "@/assets/photos/founder-final.png";

function FounderSv({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="px-6 md:px-10 max-w-7xl mx-auto">
      <SectionHeader title="Möt grundaren" />
      {/* Same rhythm as the hero: photo, quote card over its corner, one short text */}
      <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
        {/* Left: portrait with the quote card */}
        <div className="relative md:mb-12">
          <div className="bg-secondary/40">
            <img
              src={founderImage}
              alt="Madeeha Rani Qazi, grundare av Rohani"
              width={820}
              height={1200}
              loading="lazy"
              className="w-full h-[34rem] md:h-[44rem] object-cover object-top"
            />
          </div>
          {/* Quote from the article about her: Psykologtidningen #4 2026, p. 7, "Kulturkollen: ABF-kurs" by Maria Jernberg */}
          <figure className="relative -mt-16 mx-4 md:mx-0 md:mt-0 md:absolute md:-top-10 md:-left-10 md:max-w-sm bg-background rounded-[50%] p-8 md:p-10 md:px-14 shadow-[0_20px_60px_-20px_rgba(27,43,36,0.35)]">
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

        {/* Right: original founder story */}
        <div className="md:max-w-xl">
          <p className="inline-flex rounded-full bg-foreground/5 px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] text-foreground/60">
            Psykolog · Facilitator · Föreläsare
          </p>
          <p className="mt-6 font-serif text-3xl md:text-4xl leading-[1.15] text-foreground">
            Jag heter Madeeha Qazi och är legitimerad psykolog, facilitator och grundaren av ROHANI.
          </p>
          <div className="mt-6 space-y-4 text-base leading-[1.65] text-foreground/90">
            <p>Mitt arbete är förankrat i modern psykologi och berikat av en livslång nyfikenhet på mänsklig potential, välbefinnande och det som gör att människor kan leva, leda och relatera mer fullt ut. Genom åren har jag arbetat med individer, grupper och organisationer och stöttat tillväxt, motståndskraft och meningsfull förändring genom evidensbaserade metoder och äkta mänsklig gemenskap.</p>
            <p>Efter att ha bott, studerat och arbetat i olika länder och kulturer har jag lärt mig uppskatta både det universella i mänsklig upplevelse och det unika i varje människas berättelse. Dessa erfarenheter fortsätter att forma mitt sätt att arbeta – med öppenhet, kulturell känslighet och djup respekt för komplexiteten i att vara människa.</p>
            <p>ROHANI skapades som en bro mellan psykologisk vetenskap och mänsklig upplevelse. En plats där evidensbaserad kunskap möter närvaro, reflektion och personlig utveckling. Oavsett om jag arbetar med individer, team eller organisationer är min intention alltid densamma: att skapa förutsättningar för människor att frodas.</p>
            <p>För när människor får stöd att frodas växer allt annat därifrån.</p>
          </div>
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

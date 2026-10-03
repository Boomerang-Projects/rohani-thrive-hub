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
      {/* Phones: the role sits right under the title, above the photo (from md it's in the text column) */}
      <div className="md:hidden -mt-2 mb-6 flex justify-center">
        <p className="inline-flex whitespace-nowrap rounded-full bg-foreground/5 px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] text-foreground/60">
          Psykolog · Facilitator · Föreläsare
        </p>
      </div>
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
          <Link
            to="/experience/media"
            hash="media"
            aria-label="Läs artikeln i Psykologtidningen"
            className="group absolute top-3 left-3 w-[11.5rem] md:mx-0 md:w-auto md:top-6 md:left-6 md:max-w-[17rem]"
          >
            <figure className="bg-background rounded-3xl p-4 md:p-7 md:px-9 cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.06] hover:shadow-[0_28px_70px_-20px_rgba(27,43,36,0.5)]">
              <blockquote className="font-serif italic text-sm md:text-lg leading-relaxed text-foreground">
                "Madeeha Qazi rör sig mjukt mellan sittkudden och yogamattan medan hon pratar. Hon tycker att psykologi och kultur går fint hand i hand."
              </blockquote>
              <figcaption className="mt-3 md:mt-4 flex items-center gap-2 md:gap-4">
                <div className="h-px w-6 bg-accent" />
                <span className="text-[10px] uppercase tracking-[0.22em] text-foreground/50 font-semibold">
                  Psykologtidningen · Nr 4, 2026
                </span>
              </figcaption>
            </figure>
          </Link>
        </div>

        {/* Right: original founder story */}
        <div className="md:max-w-xl">
          <p className="hidden md:inline-flex rounded-full bg-foreground/5 px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] text-foreground/60">
            Psykolog · Facilitator · Föreläsare
          </p>
          <p className="md:mt-6 font-serif text-3xl md:text-4xl leading-[1.15] text-foreground">
            Jag heter Madeeha Qazi och är legitimerad psykolog, facilitator och grundaren av ROHANI.
          </p>
          <div className="mt-6 space-y-4 text-base leading-[1.65] text-foreground/85">
            <p>Jag har alltid varit fascinerad av <b className="font-semibold text-foreground">människans potential</b>, av vad som gör att vi kan <b className="font-semibold text-foreground">leva, leda och känna större tillfredsställelse.</b> Mitt arbete är förankrat i <b className="font-semibold text-foreground">modern psykologi</b> och berikat av en <b className="font-semibold text-foreground">livslång nyfikenhet</b> på <b className="font-semibold text-foreground">vad som formar, driver och förändrar oss</b>!</p>
            <p>Jag har klinisk erfarenhet från <b className="font-semibold text-foreground">vuxenpsykiatrin</b>, <b className="font-semibold text-foreground">barn- och ungdomspsykiatrin</b> och <b className="font-semibold text-foreground">Karolinska sjukhuspsykiatri</b>, och leder även <b className="font-semibold text-foreground">yoga</b>, <b className="font-semibold text-foreground">meditation</b> och <b className="font-semibold text-foreground">breathwork</b> för att möta människor genom <b className="font-semibold text-foreground">kropp</b>, <b className="font-semibold text-foreground">andning</b> och <b className="font-semibold text-foreground">närvaro</b>.</p>
            <p>Efter att ha bott, studerat och arbetat i <b className="font-semibold text-foreground">olika länder och kulturer</b> har jag lärt mig se både det <b className="font-semibold text-foreground">universella</b> i mänsklig upplevelse och det <b className="font-semibold text-foreground">unika</b> i varje människas berättelse. Det präglar mitt arbete idag med <b className="font-semibold text-foreground">individer, grupper och organisationer</b>, med <b className="font-semibold text-foreground">kulturell känslighet</b> och <b className="font-semibold text-foreground">djup respekt för komplexiteten i att vara människa</b>.</p>
            <p><b className="font-semibold text-foreground">ROHANI</b> skapades som en <b className="font-semibold text-foreground">bro mellan psykologisk vetenskap och mänsklig upplevelse</b>, där <b className="font-semibold text-foreground">evidensbaserad kunskap</b> möter <b className="font-semibold text-foreground">medvetenhet</b>, <b className="font-semibold text-foreground">mening</b> och <b className="font-semibold text-foreground">självförverkligande</b>.</p>
            <p>Oavsett om jag arbetar med individer, team eller organisationer är min intention alltid densamma: att skapa förutsättningar för människor att <b className="font-semibold text-foreground">blomstra</b>.</p>
          </div>
          {/* The closing line: larger, in italic serif, so it stands out */}
          <p className="mt-8 font-serif italic text-2xl md:text-[1.75rem] leading-snug text-accent">
            För när människor får utrymme att blomstra växer allt annat därifrån.
          </p>
          {showLink && (
            <div className="pt-8">
              <Link
                to="/experience"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] font-semibold text-background transition-colors hover:bg-accent"
              >
                Min erfarenhet <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
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

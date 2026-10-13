import { useLang } from "@/lib/i18n";
import { FounderEn } from "@/components/en/Founder";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ReadMore } from "@/components/sections/ReadMore";
import founderImage from "@/assets/photos/founder-final.png";

function FounderSv({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="px-6 md:px-10 max-w-7xl mx-auto">
      <SectionHeader title="Möt grundaren" />
      {/* Same rhythm as the hero: quote card resting on the photo's top edge, one short text */}
      {/* Phones: the role sits right under the title, above the photo (from md it's in the text column) */}
      <div className="md:hidden -mt-2 mb-6 flex justify-center">
        <p className="inline-flex whitespace-nowrap rounded-full bg-foreground/5 px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] text-foreground/60">
          Psykolog · Facilitator · Föreläsare
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start [&>*]:min-w-0">
        {/* Left: quote card resting on the top edge of the portrait (in flow, so it never covers the photo) */}
        <div className="relative md:mb-12">
          {/* Quote from the article about her: Psykologtidningen #4 2026, p. 7, "Kulturkollen: ABF-kurs" by Maria Jernberg */}
          <Link
            to="/experience/media"
            hash="media"
            aria-label="Läs artikeln i Psykologtidningen"
            className="group relative z-10 block -mb-10 md:-ml-8 md:max-w-sm"
          >
            <figure className="bg-background rounded-3xl p-7 md:p-8 shadow-[0_20px_60px_-20px_rgba(27,43,36,0.35)] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.06] hover:shadow-[0_28px_70px_-20px_rgba(27,43,36,0.5)]">
              <blockquote className="font-serif italic text-lg md:text-xl leading-relaxed text-foreground">
                "Madeeha Qazi rör sig mjukt mellan sittkudden och yogamattan medan hon pratar. Hon tycker att psykologi och kultur går fint hand i hand."
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-4">
                <div className="h-px w-6 shrink-0 bg-accent" />
                <span className="text-[10px] uppercase tracking-[0.22em] text-foreground/50 font-semibold">
                  {/* Two unbreakable pieces: on a narrow screen it wraps between them, never in the middle */}
                  <span className="whitespace-nowrap">Psykologtidningen ·</span> <span className="whitespace-nowrap">Nr 4, 2026</span>
                </span>
              </figcaption>
            </figure>
          </Link>
          {/* The whole photo is shown (nothing cropped, so her face is never cut) */}
          <div className="bg-secondary/40">
            <img
              src={founderImage}
              alt="Madeeha Rani Qazi, grundare av Rohani"
              width={820}
              height={1200}
              loading="lazy"
              className="w-full h-[30rem] md:h-[38rem] object-contain"
            />
          </div>
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
            <p>Jag har alltid varit fascinerad av människans potential, av vad som gör att vi kan leva, leda och känna större tillfredsställelse. Mitt arbete är förankrat i modern psykologi och berikat av en livslång nyfikenhet på vad som formar, driver och förändrar oss!</p>
            <p>Jag har klinisk erfarenhet från vuxenpsykiatrin, barn- och ungdomspsykiatrin och Karolinska sjukhuspsykiatri, och leder även yoga, meditation och breathwork för att möta människor genom kropp, andning och närvaro.</p>
          </div>
          {/* The rest of the story opens with "Läs mer" (see ReadMore.tsx) */}
          <ReadMore lang="sv">
            <div className="pt-4 space-y-4 text-base leading-[1.65] text-foreground/85">
              <p>Efter att ha bott, studerat och arbetat i olika länder och kulturer har jag lärt mig se både det universella i mänsklig upplevelse och det unika i varje människas berättelse. Det präglar mitt arbete idag med individer, grupper och organisationer, med kulturell känslighet och djup respekt för komplexiteten i att vara människa.</p>
              <p>ROHANI skapades som en bro mellan psykologisk vetenskap och mänsklig upplevelse, där evidensbaserad kunskap möter medvetenhet, mening och självförverkligande.</p>
              <p>Oavsett om jag arbetar med individer, team eller organisationer är min intention alltid densamma: att skapa förutsättningar för människor att blomstra.</p>
            </div>
          </ReadMore>
          {/* Closing line sits between "Läs mer" and the link, regardless of expansion */}
          <div className="mt-10">
            <p className="font-serif font-light text-3xl md:text-4xl leading-[1.15] tracking-tight text-accent">
              För när människor får utrymme att <span className="italic text-sage">blomstra</span> växer allt annat därifrån.
            </p>
            <div className="mt-6 flex items-center gap-4" aria-hidden>
              <div className="w-12 h-px bg-sage/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-sage/40" />
              <div className="w-12 h-px bg-sage/30" />
            </div>
          </div>
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

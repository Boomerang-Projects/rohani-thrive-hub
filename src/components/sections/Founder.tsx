import { Link } from "@tanstack/react-router";
import founderImage from "@/assets/founder-portrait-v3.jpg.asset.json";

export function Founder({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-stretch">
        {/* Left: labels + portrait */}
        <div className="flex flex-col">
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
            Möt grundaren
          </p>

          <div className="mt-6 self-start bg-secondary px-5 py-2 rounded-full border border-border">
            <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/70">
              Psykolog · Facilitator · Föreläsare
            </span>
          </div>

          <img
            src={founderImage.url}
            alt="Grundaren av Rohani — psykolog och facilitator"
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
            En psykolog med hjärtat i mänsklig potential
          </h2>

          <p className="mt-6 text-lg md:text-xl leading-[1.6] text-foreground/80 font-serif italic">
            Min resa har fört mig över kulturer, discipliner och perspektiv –
            och format en djup nyfikenhet på det som får människor att
            frodas. Jag tror att välbefinnande varken är en lyx eller en
            förmån. – Det är grunden som människor, relationer och
            organisationer frodas på.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Jag heter Madeeha Qazi och är legitimerad psykolog, facilitator
            och grundaren av ROHANI.
          </p>

          <div className="w-12 border-t border-accent/40 my-3" />

          <div className="space-y-1">
            <p className="text-base leading-[1.55] text-foreground/65">
              Mitt arbete är förankrat i modern psykologi och berikat av en
              livslång nyfikenhet på mänsklig potential, välbefinnande och det
              som gör att människor kan leva, leda och relatera mer fullt ut.
              Genom åren har jag arbetat med individer, grupper och
              organisationer och stöttat tillväxt, motståndskraft och
              meningsfull förändring genom evidensbaserade metoder och äkta
              mänsklig gemenskap.
            </p>
            <p className="text-base leading-[1.55] text-foreground/65">
              Efter att ha bott, studerat och arbetat i olika länder och
              kulturer har jag lärt mig uppskatta både det universella i
              mänsklig upplevelse och det unika i varje människas berättelse.
              Dessa erfarenheter fortsätter att forma mitt sätt att arbeta –
              med öppenhet, kulturell känslighet och djup respekt för
              komplexiteten i att vara människa.
            </p>
            <p className="text-base leading-[1.55] text-foreground/65">
              ROHANI skapades som en bro mellan psykologisk vetenskap och
              mänsklig upplevelse. En plats där evidensbaserad kunskap möter
              närvaro, reflektion och personlig utveckling. Oavsett om jag
              arbetar med individer, team eller organisationer är min
              intention alltid densamma: att skapa förutsättningar för
              människor att frodas.
            </p>
          </div>

          <p className="mt-auto pt-2 text-base leading-[1.55] text-foreground/65">
            För när människor får stöd att frodas växer allt annat därifrån.
          </p>
          {showLink && (
            <div className="pt-8">
              <Link
                to="/"
                className="text-xs uppercase tracking-[0.22em] font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                Läs hela berättelsen
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

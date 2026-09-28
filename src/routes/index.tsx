import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Founder } from "@/components/sections/Founder";
import aboutImage from "@/assets/about-rohani-portrait-v2.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Om Rohani — Psykologi för välbefinnande och mänsklig utveckling" },
      {
        name: "description",
        content:
          "Rohani förenar psykologi, mindfulness och ledarskap för internationella organisationer och individer som söker hållbart välbefinnande och meningsfull utveckling.",
      },
      { property: "og:title", content: "Om Rohani" },
      {
        property: "og:description",
        content:
          "En psykologibaserad verksamhet för organisationer, ledare och individer som bryr sig om hur de lever och leder.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: AboutPage,
});

const principles = [
  {
    title: "Vetenskapligt förankrat",
    body:
      "Varje workshop förankras i modern psykologi, beteendevetenskap och evidensbaserad mindfulness. Vi kombinerar vetenskaplig stringens med praktisk tillämpning för att skapa meningsfull och varaktig effekt.",
  },
  {
    title: "Människan först",
    body:
      "Människor är aldrig problem att lösa eller prestationer att optimera. Vi möter individer och team med värme, respekt och genuin närvaro – och skapar förutsättningar för tillväxt, gemenskap och välbefinnande.",
  },
  {
    title: "Globalt medvetna",
    body:
      "Den mänskliga upplevelsen är universell, men varje människa, kultur och kontext är unik. Vi formar och leder upplevelser som hedrar mångfald och samtidigt skapar meningsfull gemenskap över kulturer, samhällen och organisationer.",
  },
  {
    title: "Kvalitet i det tysta",
    body:
      "Kvalitet bor i detaljerna. Varje upplevelse är noggrant formgiven, omsorgsfullt ledd och medvetet genomförd. Arbetet känns enkelt – tack vare djupet, noggrannheten och omsorgen bakom.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero — full-bleed portrait with overlay copy */}
        <section className="relative flex items-end min-h-[110vh] md:min-h-[95vh] xl:min-h-[85vh] overflow-hidden">
          <img
            src={aboutImage.url}
            alt="Rohani — psykologibaserad verksamhet för välbefinnande och mänsklig utveckling"
            width={1920}
            height={1400}
            className="absolute inset-0 w-full h-full object-cover scale-[1.35] -translate-y-[17%] md:-translate-y-[15%] lg:-translate-y-[14%] xl:-translate-y-[8%]"
            style={{ objectPosition: "50% 32%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />

          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-48 pb-16 md:pb-24">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16">
              <div className="max-w-3xl">
                <p className="text-[10px] uppercase tracking-[0.3em] text-background/70">
                  OM ROHANI
                </p>
                <h1 className="text-4xl lg:text-6xl font-serif leading-[1.08] text-background max-w-3xl mt-8 md:mt-10">
                  Vi lyfter välbefinnande, hållbarhet och livskvalitet genom
                  modern psykologi.
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-background/85 max-w-xl mt-8 md:mt-10">
                  Rohani grundades för att förena psykologi, mindfulness och
                  mänsklig utveckling – för människor, team och organisationer
                  som formar vår värld.
                </p>
              </div>

              {/* Quote card */}
              <div className="relative max-w-md lg:max-w-[22rem] lg:flex-none bg-background p-7 md:p-9 shadow-[0_20px_60px_-20px_rgba(27,43,36,0.35)]">
                <div className="absolute top-0 left-0 w-16 h-1 bg-accent" />
                <span
                  aria-hidden
                  className="absolute -top-5 -left-2 font-serif italic text-7xl text-foreground/5 select-none"
                >
                  "
                </span>
                <blockquote className="relative font-serif italic text-lg md:text-xl leading-relaxed text-foreground">
                  "Ett genuint välbefinnande är inte frånvaron av stress eller
                  motgångar. Det är förmågan att möta livet med medvetenhet,
                  motståndskraft, mening och närvaro."
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-px w-6 bg-accent" />
                  <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/50 font-semibold">
                    Rohanis filosofi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Guides Us */}
        <section className="pt-20 md:pt-28 pb-20 md:pb-28 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-5">
              Det som vägleder oss
            </p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Fyra principer, i allt vi gör
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="p-8 md:p-10 border border-border rounded-3xl bg-secondary"
              >
                <p className="font-serif text-3xl text-accent mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-2xl font-serif mb-3">{p.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="pb-24 md:pb-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-12 items-center">
            <div className="md:col-span-5 space-y-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                Vår filosofi
              </p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Välbefinnande är ingen förmån. Det är grunden som allt gott
                arbete vilar på.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 md:self-center">
              <p className="text-xl leading-relaxed text-foreground/75">
                Vi tror att varaktig prestation, friska kulturer och
                motståndskraftigt ledarskap börjar i samma sak – människor som
                känner sig trygga, sedda och kapabla att leda sig själva.
              </p>
              <p className="text-base leading-relaxed text-foreground/60">
                Rohani finns för HR-chefer, ledare och internationella
                organisationer som vill investera på allvar i sina människor –
                och för individer som är redo att växa med intention.
              </p>
            </div>
          </div>
        </section>


        <div className="pb-10 md:pb-14">
          <Founder showLink={false} />
        </div>

        {/* Our Approach */}
        <section className="bg-secondary py-24 md:py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-12 items-start">
            <div className="md:col-span-5 space-y-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                Vår metod
              </p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Där psykologi möter mänsklig potential
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6">
              <p className="text-xl leading-relaxed text-foreground/75">
                Rohani grundades för att överbrygga modern psykologi,
                mindfulness och personlig utveckling. Genom workshops,
                föreläsningar, coaching och transformerande upplevelser stödjer
                vi individer och organisationer i att skapa hållbart
                välbefinnande och meningsfull utveckling.
              </p>
              <p className="text-base leading-relaxed text-foreground/60">
                Vi arbetar med HR-chefer, ledare och internationella team som
                förstår att varaktig prestation byggs på psykologisk trygghet,
                emotionell intelligens och den tysta konsten att leda sig själv
                väl.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Founder } from "@/components/sections/Founder";
import heroDesktop from "@/assets/hero-desktop.jpg";
import heroMobile from "@/assets/hero-mobile.jpg";
import { useLang } from "@/lib/i18n";

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

const principlesSv = [
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

const principlesEn = [
  { title: "Evidence-based", body: "Every workshop is anchored in modern psychology, behavioral science and evidence-based mindfulness. We combine scientific rigor with practical application to create meaningful and lasting impact." },
  { title: "Human first", body: "People are never treated as problems to solve or performances to optimize. We meet individuals and teams with warmth, respect and genuine presence, creating the conditions for growth, connection and wellbeing." },
  { title: "Globally fluent", body: "Human experience is universal, yet every person, culture and context is unique. We design and facilitate experiences that honor diversity while creating meaningful connection across cultures, communities and organizational environments." },
  { title: "Quietly premium", body: "Excellence lives in the details. Every experience is thoughtfully designed, carefully facilitated and intentionally delivered. The work feels effortless because of the depth, rigor and care behind it." },
];

function AboutPage() {
  const { lang, t } = useLang();
  const principles = lang === "en" ? principlesEn : principlesSv;
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero — full-bleed portrait with overlay copy */}
        <section className="relative flex flex-col md:flex-row md:items-end md:min-h-[95vh] xl:min-h-[85vh] overflow-hidden">
          <div className="md:hidden px-6 pt-6">
            <img
              src={heroMobile}
              alt="Madeeha Qazi, grundare av Rohani"
              className="w-full aspect-[4/5] object-cover rounded-3xl"
              style={{ objectPosition: "50% 25%" }}
            />
          </div>
          <picture className="hidden md:block">
            <img
              src={heroDesktop}
              alt=""
              width={2880}
              height={2100}
              className="absolute inset-0 w-full h-full object-cover md:scale-[1.35] md:-translate-y-[15%] lg:-translate-y-[14%] xl:-translate-y-[8%]"
              style={{ objectPosition: "50% 32%" }}
            />
          </picture>
          <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />

          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 pt-10 md:pt-48 pb-16 md:pb-24">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16">
              <div className="max-w-3xl">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent md:text-background/70">
                  {t("OM ROHANI", "ABOUT ROHANI")}
                </p>
                <h1 className="text-4xl lg:text-6xl font-serif leading-[1.08] text-foreground md:text-background max-w-3xl mt-6 md:mt-10">
                  {t("Vi lyfter välbefinnande, hållbarhet och livskvalitet genom modern psykologi.", "Elevating wellbeing, sustainability and quality of life through modern psychology.")}
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-foreground/75 md:text-background/85 max-w-xl mt-6 md:mt-10">
                  {t("Rohani grundades för att förena psykologi, mindfulness och mänsklig utveckling – för människor, team och organisationer som formar vår värld.", "Rohani was founded to bridge psychology, mindfulness and human development – for the people, teams and organizations who shape our world.")}
                </p>
              </div>

              {/* Quote card */}
              <div className="relative max-w-md lg:max-w-[22rem] lg:flex-none bg-secondary md:bg-background p-7 md:p-9 shadow-[0_20px_60px_-20px_rgba(27,43,36,0.35)]">
                <div className="absolute top-0 left-0 w-16 h-1 bg-accent" />
                <span
                  aria-hidden
                  className="absolute -top-5 -left-2 font-serif italic text-7xl text-foreground/5 select-none"
                >
                  "
                </span>
                <blockquote className="relative font-serif italic text-lg md:text-xl leading-relaxed text-foreground">
                  {t("\"Ett genuint välbefinnande är inte frånvaron av stress eller motgångar. Det är förmågan att möta livet med medvetenhet, motståndskraft, mening och närvaro.\"", "\"True wellbeing is not the absence of stress or struggle. It is the capacity to meet life with awareness, resilience, purpose and presence.\"")}
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-px w-6 bg-accent" />
                  <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/50 font-semibold">
                    {t("Rohanis filosofi", "The Rohani Philosophy")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Guides Us */}
        <section id="vagleder" className="scroll-mt-24 pt-20 md:pt-28 pb-20 md:pb-28 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-5">
              {t("Det som vägleder oss", "What guides us")}
            </p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              {t("Fyra principer, i allt vi gör", "Four principles, in everything we do")}
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
        <section id="filosofi" className="scroll-mt-24 pb-24 md:pb-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-12 items-center">
            <div className="md:col-span-5 space-y-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                {t("Vår filosofi", "Our Philosophy")}
              </p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                {t("Välbefinnande är ingen förmån. Det är grunden som allt gott arbete vilar på.", "Wellbeing is not a benefit. It is the foundation of everything good work rests on.")}
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 md:self-center">
              <p className="text-xl leading-relaxed text-foreground/75">
                {t("Vi tror att varaktig prestation, friska kulturer och motståndskraftigt ledarskap börjar i samma sak – människor som känner sig trygga, sedda och kapabla att leda sig själva.", "We believe that lasting performance, healthy cultures and resilient leadership begin with the same thing — people who feel safe, seen and capable of leading themselves.")}
              </p>
              <p className="text-base leading-relaxed text-foreground/60">
                {t("Rohani finns för HR-chefer, ledare och internationella organisationer som vill investera på allvar i sina människor – och för individer som är redo att växa med intention.", "Rohani exists for HR leaders, executives and international organizations who want to invest in their people seriously, and for individuals ready to grow with intention.")}
              </p>
            </div>
          </div>
        </section>


        <div id="grundaren" className="scroll-mt-24 pb-10 md:pb-14">
          <Founder showLink={false} />
        </div>

        {/* Our Approach */}
        <section id="metod" className="scroll-mt-24 bg-secondary py-24 md:py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-12 items-start">
            <div className="md:col-span-5 space-y-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                {t("Vår metod", "Our Approach")}
              </p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                {t("Där psykologi möter mänsklig potential", "Psychology Meets Human Potential")}
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6">
              <p className="text-xl leading-relaxed text-foreground/75">
                {t("Rohani grundades för att överbrygga modern psykologi, mindfulness och personlig utveckling. Genom workshops, föreläsningar, coaching och transformerande upplevelser stödjer vi individer och organisationer i att skapa hållbart välbefinnande och meningsfull utveckling.", "Rohani was founded to bridge modern psychology, mindfulness and personal growth. Through workshops, talks, coaching and transformational experiences, we support individuals and organizations in creating sustainable wellbeing and meaningful development.")}
              </p>
              <p className="text-base leading-relaxed text-foreground/60">
                {t("Vi arbetar med HR-chefer, ledare och internationella team som förstår att varaktig prestation byggs på psykologisk trygghet, emotionell intelligens och den tysta konsten att leda sig själv väl.", "We work with HR leaders, executives and international teams who understand that lasting performance is built on psychological safety, emotional intelligence and the quiet skill of leading oneself well.")}
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

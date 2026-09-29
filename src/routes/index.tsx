import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Founder } from "@/components/sections/Founder";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import heroDesktop from "@/assets/hero-desktop.jpg";
import heroMobile from "@/assets/hero-mobile.jpg";
import photoPhilosophy from "@/assets/photos/leading-session.jpg";
import { useLang } from "@/lib/i18n";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Om Rohani | Psykologi för välbefinnande och mänsklig utveckling" },
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
  { title: "Vetenskapligt förankrat", body: "Modern psykologi och evidensbaserad mindfulness, omsatt i praktiken." },
  { title: "Människan först", body: "Vi möter människor med värme, respekt och genuin närvaro." },
  { title: "Globalt medvetna", body: "Upplevelser som hedrar varje kultur och skapar gemenskap över gränser." },
  { title: "Kvalitet i fokus", body: "Varje detalj är genomtänkt, så att arbetet känns skräddarsytt och berikande." },
];

const principlesEn = [
  { title: "Evidence-based", body: "Modern psychology and evidence-based mindfulness, put into practice." },
  { title: "Human first", body: "We meet people with warmth, respect and genuine presence." },
  { title: "Globally fluent", body: "Experiences that honor every culture and build connection across borders." },
  { title: "Quietly premium", body: "Every detail is considered, so the work feels effortless." },
];

function AboutPage() {
  const { lang, t } = useLang();
  const principles = lang === "en" ? principlesEn : principlesSv;
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero: full-bleed portrait with overlay copy, at every screen size */}
        <section className="relative flex items-end min-h-[100svh] md:min-h-[95vh] xl:min-h-[85vh] overflow-hidden">
          {/* Portrait crop on phones, wide crop from md up. Same layout either way. */}
          <picture>
            <source media="(max-width: 767px)" srcSet={heroMobile} />
            <img
              src={heroDesktop}
              alt="Madeeha Qazi, grundare av Rohani"
              width={2880}
              height={2100}
              className="absolute inset-0 w-full h-full object-cover object-[50%_25%] md:object-[50%_18%]"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-foreground/10 md:from-foreground/80 md:via-foreground/35" />

          <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-10 pt-32 md:pt-48 pb-8 sm:pb-12 md:pb-24">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-16">
              <div className="max-w-3xl md:flex-1 md:min-w-0">
                <h1 className="text-[clamp(1.75rem,4.5vw+0.6rem,3.75rem)] font-serif leading-[1.08] text-background max-w-3xl mt-4 md:mt-10">
                  {t("Vi lyfter välbefinnande, hållbarhet och livskvalitet genom modern psykologi.", "Elevating wellbeing, sustainability and quality of life through modern psychology.")}
                </h1>
                <p className="text-[clamp(0.95rem,0.8vw+0.8rem,1.25rem)] leading-relaxed text-background/85 max-w-xl mt-4 md:mt-10">
                  {t("Rohani grundades för att förena psykologi, mindfulness och mänsklig utveckling, för människor, team och organisationer som formar vår värld.", "Rohani was founded to bridge psychology, mindfulness and human development, for the people, teams and organizations who shape our world.")}
                </p>
              </div>

              {/* Quote card */}
              <div className="relative w-full max-w-md mx-auto md:mx-0 md:w-[17rem] lg:w-[20rem] md:flex-none bg-background rounded-3xl p-6 sm:p-7 md:p-8 md:px-10 text-center shadow-[0_20px_60px_-20px_rgba(27,43,36,0.35)]">
                <span
                  aria-hidden
                  className="absolute -top-5 left-1/2 -translate-x-1/2 font-serif italic text-7xl text-foreground/5 select-none"
                >
                  "
                </span>
                <blockquote className="relative font-serif italic text-[clamp(0.95rem,0.6vw+0.85rem,1.25rem)] leading-relaxed text-foreground">
                  {t("\"Ett genuint välbefinnande är inte frånvaron av stress eller motgångar. Det är förmågan att möta livet med medvetenhet, motståndskraft, mening och närvaro.\"", "\"True wellbeing is not the absence of stress or struggle. It is the capacity to meet life with awareness, resilience, purpose and presence.\"")}
                </blockquote>
                <div className="mt-4 sm:mt-6 flex items-center justify-center gap-4">
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
        <section id="vagleder" className="scroll-mt-24 pt-16 md:pt-20 pb-20 md:pb-28 px-6 md:px-10 max-w-7xl mx-auto">
          <SectionHeader title={t("Det som vägleder oss", "What guides us")} />
          {/* Light list instead of boxes: a thin line, a number, a title and one sentence */}
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {principles.map((p) => (
              <div key={p.title} className="flex flex-col items-center text-center">
                <div className="flex w-full h-44 md:h-48 flex-col items-center justify-center rounded-3xl bg-foreground text-background px-6 md:px-8 shadow-[0_20px_60px_-20px_rgba(27,43,36,0.35)] transition-transform duration-300 ease-out hover:scale-[1.06] hover:shadow-[0_28px_70px_-20px_rgba(27,43,36,0.5)] cursor-default">
                  <h3 className="font-serif font-bold text-base md:text-lg leading-tight uppercase tracking-wide">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-background/80 max-w-[13rem]">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Philosophy + Our Approach, merged: full-bleed photo like the hero */}
        <section id="filosofi" className="scroll-mt-24 relative overflow-hidden">
          <img
            src={photoPhilosophy}
            alt={t("Rani leder ett samtal under en workshop", "Rani leading a conversation during a workshop")}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ objectPosition: "50% 0%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/60 to-foreground/25" />

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-40 md:pt-56 pb-16 md:pb-24">
            <div className="max-w-3xl">
              <p className="text-[10px] uppercase tracking-[0.3em] text-background/70">
                {t("Vår filosofi", "Our philosophy")}
              </p>
              <h2 className="mt-6 md:mt-8 font-serif text-[clamp(1.75rem,4vw+0.5rem,3.5rem)] leading-[1.08] text-background">
                {t("Välbefinnande är ingen förmån. Det är grunden som allt gott arbete vilar på.", "Wellbeing is not a benefit. It is the foundation that all good work rests on.")}
              </h2>
              <p className="mt-6 md:mt-8 max-w-xl text-[clamp(0.95rem,0.8vw+0.8rem,1.2rem)] leading-relaxed text-background/85">
                {t("Varaktig prestation, friska kulturer och hållbart ledarskap börjar i samma sak: människor som känner sig trygga, sedda och kapabla att leda sig själva.", "Lasting performance, healthy cultures and sustainable leadership begin with the same thing: people who feel safe, seen and capable of leading themselves.")}
              </p>
            </div>

            {/* Our Approach: how the philosophy is put into practice */}
            <div id="metod" className="scroll-mt-24 mt-14 md:mt-20">
              <p className="text-[10px] uppercase tracking-[0.3em] text-background/70">
                {t("Så arbetar vi", "How we work")}
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-8 md:gap-12">
                {[
                  { title: t("Workshops & föreläsningar", "Workshops & talks"), body: t("För team och organisationer som vill bygga psykologisk trygghet.", "For teams and organizations building psychological safety.") },
                  { title: t("Coaching", "Coaching"), body: t("För ledare och individer som vill växa med intention.", "For leaders and individuals ready to grow with intention.") },
                  { title: t("Retreats", "Retreats"), body: t("Tid för återhämtning, reflektion och gemenskap.", "Time for rest, reflection and connection.") },
                ].map((w) => (
                  <div key={w.title} className="border-t border-background/30 pt-5">
                    <p className="font-serif text-xl md:text-2xl text-background">{w.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-background/70">{w.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div id="grundaren" className="scroll-mt-24 bg-sand py-16 md:py-20">
          <Founder />
        </div>

        <section id="cta" className="scroll-mt-24 bg-foreground text-background py-24 px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-medium uppercase tracking-[0.15em] leading-snug text-balance">
              {t("Börja där du är.", "Begin where you are.")}
            </h2>
            <p className="text-background/90 text-lg">
              {t("Meningsfull förändring börjar sällan med att ha alla svar. Ibland börjar det helt enkelt med ett samtal.", "Meaningful change rarely begins with having all the answers. Sometimes, it simply begins with a conversation.")}
            </p>
            <Link
              to="/contact"
              hash="contact"
              className="inline-flex px-8 py-4 bg-background text-foreground rounded-full text-xs uppercase tracking-[0.22em] hover:bg-secondary transition-all"
            >
              {t("Boka ett introducerande samtal", "Book a Discovery Call")}
            </Link>
          </div>
        </section>

        <LogoMarquee />

      </main>
      <SiteFooter />
    </div>
  );
}

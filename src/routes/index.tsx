import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Founder } from "@/components/sections/Founder";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { AboutTabs } from "@/components/sections/AboutTabs";
import heroDesktop from "@/assets/hero-desktop.jpg";
import heroMobile from "@/assets/hero-mobile.jpg";
import missionPhoto from "@/assets/experience-hero.jpg.asset.json";
import imgPsychology from "@/assets/photos/work-psychology.jpg.asset.json";
import imgBreath from "@/assets/photos/work-nervous.jpg.asset.json";
import imgMovement from "@/assets/photos/work-movement.jpg.asset.json";
import imgIntegration from "@/assets/photos/work-integration.jpg.asset.json";
import heartOfWorkPhoto from "@/assets/photos/heart-of-work-group.jpeg.asset.json";
import { useLang } from "@/lib/i18n";
import { Link } from "@tanstack/react-router";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
  { title: "Människan först", body: "Jag möter människor med värme, respekt och genuin närvaro." },
  { title: "Vetenskapligt förankrat", body: "Modern psykologi och evidensbaserad mindfulness, omsatt i praktiken." },
  { title: "Kvalitet i fokus", body: "Varje detalj är genomtänkt, så att arbetet känns skräddarsytt och berikande." },
  { title: "Globalt medvetna", body: "Upplevelser som hedrar varje kultur och skapar gemenskap över gränser." },
];

const principlesEn = [
  { title: "Human first", body: "I meet people with warmth, respect and genuine presence." },
  { title: "Evidence-based", body: "Modern psychology and evidence-based mindfulness, put into practice." },
  { title: "Quietly premium", body: "Every detail is considered, so the work feels effortless." },
  { title: "Globally fluent", body: "Experiences that honor every culture and build connection across borders." },
];

const workWaysSv = [
  { title: "Psykologi & psykoedukation", body: "Evidensbaserad kunskap och samtal som skapar större självkännedom, förståelse och varaktig förändring.", img: imgPsychology, imgClass: "object-[50%_32%]" },
  { title: "Sinne & nervsystem", body: "Andning, meditation och praktiska verktyg som stöttar reglering, klarhet och emotionellt välbefinnande.", img: imgBreath, imgClass: "scale-[1.18] object-[38%_45%]" },
  { title: "Rörelse & kroppslig närvaro", body: "Yoga, somatisk rörelse och dans för att återknyta till kroppen, släppa spänningar och odla närvaro.", img: imgMovement, imgClass: "object-[50%_72%]" },
  { title: "Praktisk integration", body: "Verktyg och metoder som gör resultaten konkreta och lättare att föra in i vardagen.", img: imgIntegration, imgClass: "scale-[1.18] object-[50%_68%]" },
];

const workWaysEn = [
  { title: "Psychology & Psychoeducation", body: "Evidence-informed knowledge and conversations that create greater self-awareness, understanding and lasting change.", img: imgPsychology, imgClass: "object-[50%_32%]" },
  { title: "Mind & Nervous System", body: "Breathwork, meditation and practical tools to support regulation, clarity and emotional wellbeing.", img: imgBreath, imgClass: "scale-[1.18] object-[38%_45%]" },
  { title: "Movement & Embodiment", body: "Yoga, somatic movement and dance to reconnect with the body, release tension and cultivate presence.", img: imgMovement, imgClass: "object-[50%_72%]" },
  { title: "Practical Integration", body: "Tools and practices that make results tangible and easier to bring into everyday life.", img: imgIntegration, imgClass: "scale-[1.18] object-[50%_68%]" },
];

function AboutPage() {
  const { lang, t } = useLang();
  const principles = lang === "en" ? principlesEn : principlesSv;
  const workWays = lang === "en" ? workWaysEn : workWaysSv;
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

        <AboutTabs lang={lang} />

        {/* What Guides Us */}
        <section id="vagleder" className="scroll-mt-32 pt-16 md:pt-20 pb-20 md:pb-28 px-6 md:px-10 max-w-7xl mx-auto">
          <SectionHeader title={t("Det som vägleder oss", "What guides us")} />
          {/* Light list instead of boxes: a thin line, a number, a title and one sentence */}
          <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-10">
            {principles.map((p) => (
              <Dialog key={p.title}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex w-full min-h-52 md:h-56 flex-col items-center justify-center overflow-visible rounded-3xl bg-foreground text-background px-3 py-4 md:px-8 md:py-0 shadow-[0_20px_60px_-20px_rgba(27,43,36,0.35)]">
                    <h3 className="font-serif font-bold text-sm md:text-lg leading-tight uppercase tracking-wide underline decoration-[1.5px] underline-offset-[6px] decoration-background/50">
                      {p.title}
                    </h3>
                    <p className="block mt-3 text-[12px] md:text-sm leading-[1.4] md:leading-relaxed text-background/80 max-w-[13rem]">{p.body}</p>
                  </div>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="md:hidden absolute inset-0 h-full w-full rounded-3xl focus-visible:ring-2 focus-visible:ring-ring" aria-label={`${t("Läs mer om", "Read more about")} ${p.title}`} />
                  </DialogTrigger>
                </div>
                <DialogContent className="w-[calc(100%-2rem)] max-w-sm rounded-3xl border-0 bg-foreground text-background p-8 text-center [&_button]:text-background">
                  <DialogTitle className="font-serif text-xl uppercase leading-tight underline underline-offset-[6px]">{p.title}</DialogTitle>
                  <p className="text-base leading-relaxed text-background/85">{p.body}</p>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        {/* Our Mission: full-bleed photo like the hero */}
        <section id="mission" className="scroll-mt-32 relative overflow-hidden">

            <img
              src={missionPhoto.url}
              alt={t("Grupp på mattor utomhus i kvällsljus", "A group resting on mats outdoors in the evening sun")}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "50% 60%" }}
            />
            <div className="absolute inset-0 bg-foreground/65 md:hidden" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-40 md:pt-56 pb-20 md:pb-28 [text-shadow:0_2px_18px_rgba(58,41,34,0.55)]">
              <div className="max-w-3xl">
                <p className="text-[10px] uppercase tracking-[0.3em] text-background/70">
                  {t("Vår mission", "Our Mission")}
                </p>
                <h2 className="mt-6 md:mt-8 font-serif text-[clamp(1.75rem,4vw+0.5rem,3.5rem)] leading-[1.08] text-background">

                  {t("En mer sammankopplad, förenad och medveten värld börjar inom oss.", "A more connected, united and conscious world starts within.")}
                </h2>
                <p className="mt-6 md:mt-8 max-w-xl text-[clamp(0.95rem,0.8vw+0.8rem,1.2rem)] leading-relaxed text-background/85">
                  {t("Jag tror att verklig förändring börjar i relationen vi har med oss själva. När sinne, kropp och inre jag är i större harmoni kan vi leva mer medvetet, göra val som känns sanna för oss och skapa mer meningsfulla relationer.", "I believe that true change begins with the relationship we have with ourselves. When mind, body and inner self are in greater harmony, we can live more consciously, make choices that feel true to us, and create more meaningful relationships.")}
                </p>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-background/75">
                  {t("Min mission är att stödja denna resa – från den personliga, inre förbindelsen till ett kollektivt välbefinnande.", "My mission is to support this journey, from personal inner connection to collective wellbeing.")}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* How we work: same layout as "What guides us" */}
        <section id="metod" className="scroll-mt-24 pt-16 md:pt-20 pb-20 md:pb-28 px-6 md:px-10 max-w-7xl mx-auto">
          <SectionHeader title={t("Så arbetar vi", "How we work")} />
          <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-10">
            {workWays.map((w) => (
              <Dialog key={w.title}>
                <div className="relative flex w-full flex-col rounded-3xl overflow-hidden bg-foreground text-background shadow-[0_20px_60px_-20px_rgba(27,43,36,0.35)]">
                  <div className="w-full h-28 md:h-48 overflow-hidden">
                    <img
                      src={w.img.url}
                      alt=""
                      loading="lazy"
                      width={816}
                      height={816}
                      className={`w-full h-full object-cover ${w.imgClass}`}
                    />
                  </div>
                  <div className="flex min-h-44 flex-1 flex-col items-center justify-center overflow-visible px-2 py-4 text-center md:min-h-0 md:px-8 md:py-6">
                    <h3 className="font-serif font-bold text-xs md:text-lg leading-tight uppercase md:tracking-wide underline decoration-[1.5px] underline-offset-[6px] decoration-background/50">
                      {w.title.split(" & ").map((part, i, arr) => (
                        <span key={i} className="block">
                          {i < arr.length - 1 ? `${part} &` : part}
                        </span>
                      ))}
                    </h3>
                    <p className="block mt-3 text-[12px] md:text-sm leading-[1.4] md:leading-relaxed text-background/80 max-w-[13rem]">{w.body}</p>
                  </div>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="md:hidden absolute inset-0 h-full w-full rounded-3xl focus-visible:ring-2 focus-visible:ring-ring" aria-label={`${t("Läs mer om", "Read more about")} ${w.title}`} />
                  </DialogTrigger>
                </div>
                <DialogContent className="w-[calc(100%-2rem)] max-w-sm overflow-hidden rounded-3xl border-0 bg-foreground text-background p-0 text-center [&_button]:text-background">
                  <img src={w.img.url} alt="" className={`h-52 w-full object-cover ${w.imgClass}`} />
                  <div className="px-7 pb-8">
                    <DialogTitle className="font-serif text-xl uppercase leading-tight underline underline-offset-[6px]">{w.title}</DialogTitle>
                    <p className="mt-4 text-base leading-relaxed text-background/85">{w.body}</p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        <div id="grundaren" className="scroll-mt-32 bg-sand py-16 md:py-20">
          <Founder />
        </div>

        {/* Heart of the work */}
        <div className="px-6 md:px-10 pt-16 md:pt-20 max-w-7xl mx-auto">
          <SectionHeader title={t("Hjärtat av ROHANI", "The Heart of ROHANI")} />
        </div>
        <section id="heart" className="relative overflow-hidden scroll-mt-32">
          <img src={heartOfWorkPhoto.url} alt={t("Deltagare sitter tillsammans i en cirkel under en sammankomst", "Participants sitting together in a circle at a gathering")} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/65 to-foreground/35" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-36 md:pt-52 pb-16 md:pb-24">
            <div className="max-w-3xl space-y-6 text-background">
              <h2 className="font-serif text-4xl md:text-6xl leading-tight">
                {t("I hjärtat av detta arbete ligger en nyfikenhet på vem vi är, vad som format oss — och vem vi håller på att bli.", "At the heart of this work is a curiosity about who we are, what shapes us, and who we are becoming.")}
              </h2>
              <p className="text-base leading-[1.75] text-background/90">
                {t("Hur kan vi röra oss genom livet med större medvetenhet, handlingskraft och intention — istället för att bara reagera på det som händer omkring oss?", "How can we move through life with greater awareness, agency and intention– rather than simply reacting to what happens around us?")}
              </p>
              <p className="text-base leading-[1.75] text-background/90">
                {t("Tänk om meningsfull förändring börjar med att bli mer medveten om hur vi ser, upplever och möter världen?", "What if meaningful change begins with becoming more conscious of the way we see, experience and engage with the world?")}
              </p>
              <p className="text-base leading-[1.75] text-background/90">
                {t("Mitt arbete förenar psykologisk vetenskap med ett mänskligt, kroppsnära och kulturellt anpassningsbart förhållningssätt till välbefinnande och utveckling.", "My work combines psychological science with a human, embodied and culturally responsive approach to wellbeing and development.")}
              </p>
            </div>
          </div>
        </section>

        <section id="cta" className="scroll-mt-24 mt-10 md:mt-16 bg-foreground text-background py-24 px-6 md:px-10">
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

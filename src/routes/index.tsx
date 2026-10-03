import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Founder } from "@/components/sections/Founder";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { PersonTestimonials } from "@/components/sections/Testimonials";
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
  { title: "Människan först", body: "Människor är mer än de utmaningar de möter. Jag möter varje individ och sammanhang som en helhet." },
  { title: "Vetenskapligt förankrat", body: "Modern psykologi och evidensbaserad mindfulness, omsatt i praktiken." },
  { title: "Kvalitet i fokus", body: "Omsorgsfullt anpassat efter dina behov, önskemål och sammanhang." },
  { title: "Globalt medvetna", body: "Upplevelser som hedrar varje kultur och skapar gemenskap över gränser." },
];

const principlesEn = [
  { title: "Human first", body: "People are more than the challenges they face. I meet each individual and context as a whole." },
  { title: "Evidence-based", body: "Modern psychology and evidence-based mindfulness, put into practice." },
  { title: "Quietly premium", body: "Thoughtfully tailored to your needs, preferences and context." },
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
        {/* Hero: full-bleed photo, like before, but arranged so the photo stays clean.
            - Desktop: the dark shade comes from the LEFT and fades out before her face, so
              the statement sits on the painting beside her instead of across her.
            - Phones: the portrait crop, with the shade only at the bottom where the text is.
            - Her whole head stays in frame (the photo is anchored near the top). */}
        <section className="relative flex items-end min-h-[92svh] md:min-h-[calc(100vh-73px)] overflow-hidden">
          <picture>
            <source media="(max-width: 767px)" srcSet={heroMobile} />
            <img
              src={heroDesktop}
              alt={t("Madeeha Qazi, grundare av Rohani", "Madeeha Qazi, founder of Rohani")}
              width={2880}
              height={1920}
              className="absolute inset-0 w-full h-full object-cover object-[50%_0%] md:object-[50%_8%]"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 via-35% to-transparent to-65% md:bg-gradient-to-r md:from-foreground/80 md:via-foreground/35 md:via-40% md:to-transparent md:to-60%" />

          <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-10 pb-10 md:pb-16 lg:pb-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
              {/* Statement and next steps */}
              <div className="max-w-[34rem] md:max-w-[26rem] lg:max-w-[30rem]">
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-background/90">
                  {t("Legitimerad psykolog · Föreläsare · Yogainstruktör · Workshopledare", "Licensed Psychologist · Workshop Facilitator · Speaker · Yoga Teacher")}
                </p>
                {/* The slogan, the same on both languages */}
                <h1 className="mt-4 md:mt-6 font-serif uppercase tracking-[0.12em] text-[clamp(1.9rem,3.2vw+1rem,3.6rem)] leading-[1.05] text-background">
                  Rethinking wellbeing...
                </h1>
                <div className="mt-7 md:mt-9 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="rounded-full bg-background text-foreground px-5 md:px-7 py-3.5 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors hover:bg-secondary"
                  >
                    {t("Arbeta med mig", "Work with me")}
                  </Link>
                  <Link
                    to="/experience"
                    className="rounded-full border border-background/60 px-5 md:px-7 py-3.5 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold text-background transition-colors hover:border-background hover:bg-background/10"
                  >
                    {t("Se mitt arbete", "See my work")}
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>



        {/* How I work: first section after the hero */}
        <section id="metod" className="scroll-mt-24 pt-16 md:pt-20 pb-20 md:pb-28 px-6 md:px-10 max-w-7xl mx-auto">
          <SectionHeader title={t("Så arbetar jag", "How I work")} />
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
                    <h3 className="font-serif font-bold text-xs md:text-lg leading-snug uppercase md:tracking-wide underline decoration-[1.5px] underline-offset-[3px] decoration-background/50">
                      {w.title.split(" & ").map((part, i, arr) => (
                        <span key={i} className="block">
                          {i < arr.length - 1 ? `${part} &` : part}
                        </span>
                      ))}
                    </h3>
                    <p className="block mt-3 text-[12px] md:text-sm leading-[1.4] md:leading-relaxed text-background/80 max-w-[13rem]">{w.body}</p>
                  </div>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="md:hidden absolute inset-0 h-full w-full rounded-3xl hover:bg-transparent active:bg-transparent focus-visible:ring-2 focus-visible:ring-ring" aria-label={`${t("Läs mer om", "Read more about")} ${w.title}`} />
                  </DialogTrigger>
                </div>
                <DialogContent className="w-[calc(100%-2rem)] max-w-sm overflow-hidden rounded-3xl border-0 bg-foreground text-background p-0 text-center [&_button]:text-background">
                  <img src={w.img.url} alt="" className={`h-52 w-full object-cover ${w.imgClass}`} />
                  <div className="px-7 pb-8">
                    <DialogTitle className="font-serif text-xl uppercase leading-snug underline underline-offset-[3px]">{w.title}</DialogTitle>
                    <p className="mt-4 text-base leading-relaxed text-background/85">{w.body}</p>
                  </div>
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
                  {t("Min mission", "My Mission")}
                </p>
                <h2 className="mt-6 md:mt-8 font-serif text-[clamp(1.75rem,4vw+0.5rem,3.5rem)] leading-[1.08] text-background">

                  {t("En mer sammankopplad, förenad och medveten värld börjar inom oss.", "A more connected, united and conscious world starts within.")}
                </h2>
                <p className="mt-6 md:mt-8 max-w-xl text-[clamp(0.95rem,0.8vw+0.8rem,1.2rem)] leading-relaxed text-background/85">
                  {t("Min mission är att stödja denna resa - från den personliga, inre förbindelsen till ett kollektivt välbefinnande.", "My mission is to support this journey, from personal inner connection to collective wellbeing.")}
                </p>
              </div>

            </div>
        </section>


        {/* What Guides Us */}
        <section id="vagleder" className="scroll-mt-32 pt-16 md:pt-20 pb-20 md:pb-28 px-6 md:px-10 max-w-7xl mx-auto">
          <SectionHeader title={t("Det som vägleder mig", "What guides me")} />
          {/* Light list instead of boxes: a thin line, a number, a title and one sentence */}
          <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-10">
            {principles.map((p) => (
              <Dialog key={p.title}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex w-full min-h-52 md:h-56 flex-col items-center justify-center overflow-visible rounded-3xl bg-foreground text-background px-3 py-4 md:px-8 md:py-0 shadow-[0_20px_60px_-20px_rgba(27,43,36,0.35)]">
                    <h3 className="font-serif font-bold text-sm md:text-lg leading-snug uppercase tracking-wide underline decoration-[1.5px] underline-offset-[3px] decoration-background/50">
                      {p.title}
                    </h3>
                    <p className="block mt-3 text-[12px] md:text-sm leading-[1.4] md:leading-relaxed text-background/80 max-w-[13rem]">{p.body}</p>
                  </div>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="md:hidden absolute inset-0 h-full w-full rounded-3xl hover:bg-transparent active:bg-transparent focus-visible:ring-2 focus-visible:ring-ring" aria-label={`${t("Läs mer om", "Read more about")} ${p.title}`} />
                  </DialogTrigger>
                </div>
                <DialogContent className="w-[calc(100%-2rem)] max-w-sm rounded-3xl border-0 bg-foreground text-background p-8 text-center [&_button]:text-background">
                  <DialogTitle className="font-serif text-xl uppercase leading-snug underline underline-offset-[3px]">{p.title}</DialogTitle>
                  <p className="text-base leading-relaxed text-background/85">{p.body}</p>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        <div id="grundaren" className="scroll-mt-32 bg-sand py-16 md:py-20">
          <Founder />
        </div>

        {/* Heart of the work */}
        {/* Equal space above and below the title: 56px top, 16px + the heading's 40px margin below */}
        <div className="px-6 md:px-10 pt-12 md:pt-14 pb-4 max-w-7xl mx-auto">
          <SectionHeader title={t("Hjärtat av ROHANI", "The Heart of ROHANI")} />
        </div>
        <section id="heart" className="relative overflow-hidden scroll-mt-32">
          <img src={heartOfWorkPhoto.url} alt={t("Deltagare sitter tillsammans i en cirkel under en sammankomst", "Participants sitting together in a circle at a gathering")} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/65 to-foreground/35" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-36 md:pt-52 pb-16 md:pb-24">
            <div className="max-w-3xl space-y-6 text-background">
              <h2 className="font-serif text-4xl md:text-6xl leading-tight">
                {t("I hjärtat av detta arbete ligger en nyfikenhet på vem vi är, vad som format oss - och vem vi håller på att bli.", "At the heart of this work is a curiosity about who we are, what shapes us, and who we are becoming.")}
              </h2>
              <p className="text-base leading-[1.75] text-background/90">
                {t("Tänk om meningsfull förändring börjar med att bli mer medveten om hur vi ser, upplever och möter världen?", "What if meaningful change begins with becoming more conscious of the way we see, experience and engage with the world?")}
              </p>
            </div>
          </div>
        </section>

        {/* What participants say: last, just above the logo band */}
        <PersonTestimonials />

        <LogoMarquee />

      </main>
      <SiteFooter />
    </div>
  );
}

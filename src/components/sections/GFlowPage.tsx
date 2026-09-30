import { useLang } from "@/lib/i18n";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ExperienceTabs } from "@/components/sections/ExperienceTabs";
import { Link } from "@tanstack/react-router";
import heroDance from "@/assets/photos/work-movement.jpg.asset.json";
import photoOutdoor from "@/assets/photos/outdoor-session.jpg";
import photoGroup from "@/assets/photos/group-circle.jpg";
import photoEmbrace from "@/assets/photos/embrace-circle.jpg";
import photoFire from "@/assets/photos/fire-evening.jpg";

export function GFlowPage() {
  const { lang, t } = useLang();

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <img
            src={heroDance.url}
            alt={t("Tjejer dansar utomhus på ett G-Flow-pass", "Girls dancing outdoors at a G-Flow session")}
            className="absolute inset-0 w-full h-full object-cover object-[50%_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/55 to-foreground/20" />
          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 pt-44 md:pt-60 pb-16 md:pb-24 space-y-6 [text-shadow:0_2px_18px_rgba(58,41,34,0.55)]">
            <p className="text-[10px] uppercase tracking-[0.3em] text-background/80">
              {t("Social påverkan", "Social Impact")}
            </p>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.02] text-background">
              G-Flow
            </h1>
            <p className="text-sm md:text-base uppercase tracking-[0.18em] text-background/80">
              {t("ABF Södertörn & Haninge kommun · Folkbildning · Ungdomars välbefinnande", "ABF Södertörn & Haninge Municipality · Community Education · Youth Wellbeing")}
            </p>
          </div>
        </section>

        <ExperienceTabs lang={lang} active="community" />

        {/* Intro */}
        <section className="bg-forest py-16 md:py-24 px-6 md:px-10">
          <div className="max-w-3xl mx-auto space-y-6 text-background/90">
            <p className="text-xl md:text-2xl leading-[1.7]">
              {t(
                "Jag samarbetade med ABF Södertörn och Haninge kommun i initiativ som förenar psykologi, kultur, rörelse och folkbildning.",
                "I collaborated with ABF Södertörn and Haninge Municipality on initiatives combining psychology, culture, movement and community-based learning.",
              )}
            </p>
            <p className="text-base md:text-lg leading-[1.8] text-background/80">
              {t(
                "G-Flow är ett samhällsbaserat initiativ som ger tjejer i socioekonomiskt utsatta områden en trygg, inkluderande och prestationsfri miljö att utforska självkänsla, identitet, känslor, kroppsmedvetenhet, tillhörighet och relationer.",
                "G-Flow is a community-based initiative created to give girls in socio-economically vulnerable areas a safe, inclusive and pressure-free space to explore self-esteem, identity, emotions, body awareness, belonging and relationships.",
              )}
            </p>
          </div>
        </section>

        {/* Sessions */}
        <section className="py-16 md:py-24 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-6 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl leading-tight text-foreground">
                {t("Pass under skolloven", "Sessions during the school holidays")}
              </h2>
              <p className="text-base md:text-lg leading-[1.8] text-foreground/75">
                {t(
                  "Genom återkommande gratispass under jul-, påsk- och sommarlov har jag utformat och lett självutvecklingssessioner som kombinerar psykologisk kunskap och psykoedukation med meditation, andningsövningar, rörelse, dans och reflekterande övningar.",
                  "Through free recurring sessions during the Christmas, Easter and summer holidays, I developed and facilitated self-development sessions combining psychological knowledge and psychoeducation with meditation, breathwork, movement, dance and reflective exercises.",
                )}
              </p>
              <p className="text-base md:text-lg leading-[1.8] text-foreground/75">
                {t(
                  "Målet har varit att göra verktyg för psykiskt välbefinnande och självutveckling tillgängliga i en miljö där unga kan känna sig sedda, hörda och stöttade i en trygg och tillförlitlig kontext.",
                  "The aim has been to make tools for mental wellbeing and self-development accessible in a setting where young people can feel seen, heard and supported in a safe, reliable environment.",
                )}
              </p>
            </div>
            <div className="md:col-span-6">
              <img
                src={photoOutdoor}
                alt={t("Deltagare i samtal utomhus under ett pass", "Participants in conversation outdoors during a session")}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="bg-forest py-16 md:py-24 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-6 order-2 md:order-1">
              <img
                src={photoGroup}
                alt={t("Deltagare sitter tillsammans i en cirkel", "Participants sitting together in a circle")}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="md:col-span-6 order-1 md:order-2 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl leading-tight text-background">
                {t("Gemenskap och tillit", "Community and trust")}
              </h2>
              <p className="text-base md:text-lg leading-[1.8] text-background/85">
                {t(
                  "Under flera omgångar av skolloven har G-Flow samlat tjejer för att bygga gemenskap, stärka självkännedom och skapa relationer. Projektet lyfter betydelsen av tillgängliga, förebyggande rum där unga kan utveckla emotionella och sociala resurser tillsammans med andra.",
                  "Across several rounds during school holidays, G-Flow has brought girls together to build connection, strengthen self-awareness and create community. The project highlights the importance of accessible, preventive spaces where young people can develop emotional and social resources alongside others.",
                )}
              </p>
              <p className="text-base md:text-lg leading-[1.8] text-background/85">
                {t(
                  "Initiativet har också fått större uppmärksamhet, bland annat genom Sveriges Radio och Psykologtidningen, vilket hjälper till att synliggöra vikten av tillgängliga psykologiska välbefinnandeinsatser för unga.",
                  "The initiative has also received wider attention, including being featured by Sveriges Radio and highlighted in Psykologtidningen, helping bring attention to the importance of accessible psychological wellbeing initiatives for young people.",
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Photo strip */}
        <section className="px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-3 md:gap-5">
            <img
              src={photoEmbrace}
              alt={t("Två deltagare i en varm kram", "Two participants in a warm embrace")}
              loading="lazy"
              className="w-full aspect-[3/4] md:aspect-[4/5] object-cover"
            />
            <img
              src={photoFire}
              alt={t("Två deltagare vid en eld en kväll", "Two participants by a fire in the evening")}
              loading="lazy"
              className="w-full aspect-[3/4] md:aspect-[4/5] object-cover"
            />
            <img
              src={photoOutdoor}
              alt={t("Deltagare ler i kvällsljus", "Participants smiling in the evening light")}
              loading="lazy"
              className="w-full aspect-[3/4] md:aspect-[4/5] object-cover"
            />
          </div>
        </section>

        {/* Closing belief */}
        <section className="bg-foreground text-background py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-background/60">
              G-Flow
            </p>
            <p className="font-serif text-2xl md:text-3xl leading-[1.5] text-balance">
              {t(
                "När unga får utrymme att möta sig själva och varandra lägger vi grunden för ett starkare individuellt och kollektivt välbefinnande.",
                "When young people are given space to connect with themselves and with each other, we create stronger foundations for individual and collective wellbeing.",
              )}
            </p>
            <Link
              to="/experience/social"
              className="inline-flex px-8 py-4 bg-background text-foreground rounded-full text-xs uppercase tracking-[0.22em] hover:bg-secondary transition-all"
            >
              {t("Tillbaka till Social påverkan", "Back to Social Impact")}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/sections/PageHero";
import contactHero from "@/assets/contact-hero.jpg.asset.json";
import { Contact } from "@/components/sections/Contact";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontakta Rohani — Boka ett introducerande samtal" },
      {
        name: "description",
        content:
          "Hör av dig till Rohani om välbefinnandeprogram för företag, ledarskapsutveckling, retreats, föreläsningar eller individuell coaching.",
      },
      { property: "og:title", content: "Kontakta Rohani" },
      {
        property: "og:description",
        content:
          "Boka ett introducerande samtal eller skicka ett meddelande. Vi svarar personligen på varje förfrågan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <img
            src={contactHero.url}
            alt={t("Uppräckta händer mot en öppen blå himmel", "Raised hands reaching toward an open blue sky") as string}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "50% 35%" }}
          />
          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex min-h-[380px] md:min-h-[540px] items-center justify-center py-16 md:py-24">
              <div className="w-full max-w-3xl text-center space-y-6 [text-shadow:0_2px_18px_rgba(58,41,34,0.65)]">
                <h1 className="text-4xl md:text-6xl font-serif leading-[1.05] text-balance text-background">
                  {t("Låt oss skapa meningsfull förändring tillsammans", "Let's create meaningful change together")}
                </h1>
                <p className="text-base md:text-lg leading-relaxed text-background/90 max-w-xl mx-auto">
                  {t("Vi svarar personligen på varje förfrågan – oftast inom två arbetsdagar.", "We respond personally to every inquiry – usually within two business days.")}
                </p>
              </div>
            </div>
          </div>
        </section>
        <Contact />
        <section id="cta" className="scroll-mt-24 bg-foreground text-background py-24 px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-medium uppercase tracking-[0.15em] leading-snug text-balance">
              {t("Börja där du är.", "Begin where you are.")}
            </h2>
            <p className="text-background/90 text-lg">
              {t("Meningsfull förändring börjar sällan med att ha alla svar. Ibland börjar det helt enkelt med ett samtal.", "Meaningful change rarely begins with having all the answers. Sometimes, it simply begins with a conversation.")}
            </p>
            <a
              href="#contact"
              className="inline-flex px-8 py-4 bg-background text-foreground rounded-full text-xs uppercase tracking-[0.22em] hover:bg-secondary transition-all"
            >
              {t("Boka ett introducerande samtal", "Book a Discovery Call")}
            </a>
          </div>
        </section>

        <LogoMarquee />
      </main>
      <SiteFooter />
    </div>
  );
}

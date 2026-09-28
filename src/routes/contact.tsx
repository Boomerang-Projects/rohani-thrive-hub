import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/sections/PageHero";
import { Contact } from "@/components/sections/Contact";

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
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          centered
          eyebrow="Kontakt"
          title={<>Låt oss skapa meningsfull förändring tillsammans</>}
          intro="Vi svarar personligen på varje förfrågan – oftast inom två arbetsdagar."
        />
        <Contact />
        <section className="bg-primary text-primary-foreground py-24 px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-balance">
              Börja där du är.
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              Meningsfull förändring börjar sällan med att ha alla svar.
              Ibland börjar den helt enkelt med ett samtal.
            </p>
            <a
              href="#contact"
              className="inline-flex px-8 py-4 bg-background text-foreground rounded-full text-xs uppercase tracking-[0.22em] hover:bg-secondary transition-all"
            >
              Boka ett introducerande samtal
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

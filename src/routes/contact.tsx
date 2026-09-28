import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/sections/PageHero";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rohani — Book a Discovery Call" },
      {
        name: "description",
        content:
          "Get in touch with Rohani about corporate wellbeing programs, leadership development, retreats, speaking engagements or individual coaching.",
      },
      { property: "og:title", content: "Contact Rohani" },
      {
        property: "og:description",
        content:
          "Book a discovery call or send a message. We respond to every enquiry personally.",
      },
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
          eyebrow="Contact"
          title={<>Let's create meaningful change together</>}
          intro="We respond to every enquiry personally — usually within two working days."
        />
        <Contact />
        <section className="bg-primary text-primary-foreground py-24 px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-balance">
              Begin where you are.
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              Meaningful change rarely starts with having all the answers.
              Sometimes, it simply starts with a conversation.
            </p>
            <a
              href="#contact"
              className="inline-flex px-8 py-4 bg-background text-foreground rounded-full text-xs uppercase tracking-[0.22em] hover:bg-secondary transition-all"
            >
              Book a Discovery Call
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

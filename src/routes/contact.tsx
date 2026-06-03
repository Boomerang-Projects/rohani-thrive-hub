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
      </main>
      <SiteFooter />
    </div>
  );
}

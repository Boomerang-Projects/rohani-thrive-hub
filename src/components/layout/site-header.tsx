import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";
import { requestScrollTo, scrollBelowHeader } from "@/lib/scroll-intent";
import { OPEN_LOGOS_EVENT } from "@/components/sections/LogoMarquee";

// id of the category slider on Erfarenhet (set in ExperienceSwipe)
const SLIDER_ID = "erfarenhet-kategorier";

// action "logos": the band is on every page, so no page change. Scroll to it and open its list.
type SubLink = { id: string; label: string; href?: string; action?: "logos" };
type NavItem = { to: string; label: string; subs?: SubLink[] };

const navLinksSv: NavItem[] = [
  {
    to: "/",
    label: "OM",
    subs: [
      { id: "vagleder", label: "Det som vägleder mig" },
      { id: "mission", label: "Min mission" },
      { id: "metod", label: "Så arbetar jag" },
      { id: "grundaren", label: "Möt grundaren" },
      { id: "heart", label: "Hjärtat av ROHANI" },
    ],
  },
  {
    to: "/experience",
    label: "Erfarenhet",
    subs: [
      { id: "clinical", href: "/experience", label: "Kliniskt arbete" },
      { id: "organisational", href: "/experience/organisational", label: "Organisatoriskt arbete" },
      { id: "community", href: "/experience/social", label: "Social påverkan" },
      { id: "media", href: "/experience/media", label: "Publicitet" },
      { id: "samarbeten", label: "Har arbetat med", action: "logos" },
    ],
  },
  {
    to: "/contact",
    label: "Kontakt",
    subs: [
      { id: "contact", label: "Kontakta mig" },
      { id: "cta", label: "Börja där du är" },
    ],
  },
];

const navLinksEn: NavItem[] = [
  { to: "/", label: "About", subs: [
    { id: "vagleder", label: "What Guides Me" },
    { id: "mission", label: "My Mission" },
    { id: "metod", label: "How I Work" },
    { id: "grundaren", label: "Meet the Founder" },
    { id: "heart", label: "The Heart of ROHANI" },
  ] },
  { to: "/experience", label: "Experience", subs: [
    { id: "clinical", href: "/experience", label: "Clinical Practice" },
    { id: "organisational", href: "/experience/organisational", label: "Organisational Work" },
    { id: "community", href: "/experience/social", label: "Social Impact" },
    { id: "media", href: "/experience/media", label: "Publicity" },
    { id: "samarbeten", label: "Worked with", action: "logos" },
  ] },
  { to: "/contact", label: "Contact", subs: [
    { id: "contact", label: "Get in Touch" },
    { id: "cta", label: "Begin Where You Are" },
  ] },
];

function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const opt = (l: Lang, label: string) => (
    <button
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      className={`px-1 transition-colors ${lang === l ? "text-foreground" : "text-foreground/45 hover:text-foreground"}`}
    >
      {label}
    </button>
  );
  return (
    <div className={`flex items-center gap-1 text-xs uppercase tracking-[0.22em] font-medium ${className}`} aria-label="Language / Språk">
      {opt("sv", "SV")}
      <span className="text-foreground/25">/</span>
      {opt("en", "EN")}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();
  const navLinks = lang === "en" ? navLinksEn : navLinksSv;
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Erfarenhet sub-links: switch category without reloading the page, then glide down to the slider.
  // Same page already open: just glide. Other page: leave a note (requestScrollTo) that the
  // slider reads once it has appeared.
  function goToCategory(href: string) {
    setOpen(false);
    const slider = document.getElementById(SLIDER_ID);
    if (pathname === href && slider) scrollBelowHeader(slider);
    else requestScrollTo(SLIDER_ID);
  }

  function openLogos() {
    setOpen(false);
    window.dispatchEvent(new Event(OPEN_LOGOS_EVENT));
  }

  function scrollToSection(id: string) {
    setOpen(false);
    // cross-page anchors load the page, then jump
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/50">
      <nav className="flex items-center justify-between px-6 md:px-10 py-5 max-w-7xl mx-auto">
        <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-medium">
          ROHANI
        </Link>

        <div className="hidden md:flex items-center gap-3 text-sm font-serif uppercase tracking-[0.14em] font-semibold">
          {navLinks.map((link) => (
            <div key={link.to} className="relative group">
              <Link
                to={link.to}
                className="rounded-full px-5 py-2 transition-all duration-300 hover:scale-105 hover:bg-foreground/10 text-foreground"
                inactiveProps={{ className: "bg-foreground/5" }}
                activeProps={{ className: "bg-foreground/10" }}
              >
                {link.label}
              </Link>

              {link.subs && (
                <div
                  className="absolute left-1/2 top-full pt-4 -translate-x-1/2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out"
                >
                  <div className="min-w-[13rem] bg-background border border-border/70 rounded-2xl shadow-[0_24px_60px_-24px_rgba(27,43,36,0.35)] py-3 px-2">
                    {link.subs.map((sub) => {
                      const cls = "block px-4 py-2.5 text-xs font-serif font-semibold uppercase tracking-[0.14em] text-foreground rounded-xl hover:bg-secondary/70 transition-all duration-300 hover:scale-[1.03] whitespace-nowrap";
                      if (sub.action === "logos")
                        return (
                          <button key={sub.id} type="button" onClick={openLogos} className={`${cls} w-full text-left`}>
                            {sub.label}
                          </button>
                        );
                      return sub.href ? (
                        <Link key={sub.id} to={sub.href} onClick={() => goToCategory(sub.href!)} className={cls}>
                          {sub.label}
                        </Link>
                      ) : (
                        <a
                          key={sub.id}
                          href={`${link.to}#${sub.id}`}
                          onClick={(e) => {
                            if (pathname === link.to) {
                              e.preventDefault();
                              scrollToSection(sub.id);
                            }
                          }}
                          className={cls}
                        >
                          {sub.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LangSwitch className="hidden md:flex ml-10" />
          <button
            type="button"
            aria-label={lang === "en" ? "Toggle menu" : "Öppna eller stäng menyn"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/50 px-6 py-6 flex flex-col gap-5 text-base font-serif font-semibold uppercase tracking-[0.12em] text-foreground">
          {navLinks.map((link) => (
            <div key={link.to} className="flex flex-col gap-3">
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className="-ml-4 self-start rounded-full px-4 py-2 bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 hover:scale-[1.02]"
              >
                {link.label}
              </Link>
              {link.subs && (
                <div className="flex flex-col gap-2 pl-4 normal-case tracking-normal text-sm font-serif font-semibold text-foreground">
                  {link.subs.map((sub) =>
                    sub.action === "logos" ? (
                      <button key={sub.id} type="button" onClick={openLogos} className="text-left hover:text-foreground transition-colors">
                        {sub.label}
                      </button>
                    ) : sub.href ? (
                      <Link key={sub.id} to={sub.href} onClick={() => goToCategory(sub.href!)} className="hover:text-foreground transition-colors">
                        {sub.label}
                      </Link>
                    ) : (
                      <a
                        key={sub.id}
                        href={`${link.to}#${sub.id}`}
                        onClick={(e) => {
                          if (pathname === link.to) {
                            e.preventDefault();
                            scrollToSection(sub.id);
                          } else {
                            setOpen(false);
                          }
                        }}
                        className="hover:text-foreground transition-colors"
                      >
                        {sub.label}
                      </a>
                    ),
                  )}
                </div>
              )}
            </div>
          ))}
          <LangSwitch className="pt-4 border-t border-border/50" />
        </div>
      )}
    </header>
  );
}

import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type SubLink = { id: string; label: string };
type NavItem = { to: string; label: string; subs?: SubLink[] };

const navLinks: NavItem[] = [
  {
    to: "/",
    label: "OM",
    subs: [
      { id: "vagleder", label: "Det som vägleder oss" },
      { id: "filosofi", label: "Vår filosofi" },
      { id: "grundaren", label: "Möt grundaren" },
      { id: "metod", label: "Vår metod" },
    ],
  },
  {
    to: "/contact",
    label: "Kontakt",
    subs: [
      { id: "contact", label: "Kontakta oss" },
      { id: "cta", label: "Börja där du är" },
    ],
  },
  {
    to: "/experience",
    label: "Erfarenhet",
    subs: [
      { id: "selected-experience", label: "Utvald erfarenhet" },
      { id: "clinical", label: "Psykologi & kliniskt arbete" },
      { id: "organisational", label: "Professionellt & organisatoriskt" },
      { id: "community", label: "Samhälle & social påverkan" },
      { id: "media", label: "I media" },
    ],
  },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  function scrollToSection(id: string) {
    setOpen(false);
    if (pathname !== "/") return; // cross-page anchors load the page, then jump
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/50">
      <nav className="flex items-center justify-between px-6 md:px-10 py-5 max-w-7xl mx-auto">
        <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-medium">
          ROHANI
        </Link>

        <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.22em] font-medium">
          {navLinks.map((link) => (
            <div key={link.to} className="relative group">
              <Link
                to={link.to}
                className="hover:text-accent transition-colors"
                activeProps={{ className: "text-accent" }}
              >
                {link.label}
              </Link>

              {link.subs && (
                <div
                  className="absolute left-1/2 top-full pt-4 -translate-x-1/2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out"
                >
                  <div className="min-w-[13rem] bg-background border border-border/70 rounded-2xl shadow-[0_24px_60px_-24px_rgba(27,43,36,0.35)] py-3 px-2">
                    {link.subs.map((sub) => (
                      <a
                        key={sub.id}
                        href={`${link.to}#${sub.id}`}
                        onClick={(e) => {
                          if (pathname === link.to) {
                            e.preventDefault();
                            scrollToSection(sub.id);
                          }
                        }}
                        className="block px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-foreground/65 rounded-xl hover:text-accent hover:bg-secondary/70 transition-colors whitespace-nowrap"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Öppna eller stäng menyn"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/50 px-6 py-6 flex flex-col gap-5 text-sm uppercase tracking-[0.18em]">
          {navLinks.map((link) => (
            <div key={link.to} className="flex flex-col gap-3">
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className="hover:text-accent"
              >
                {link.label}
              </Link>
              {link.subs && (
                <div className="flex flex-col gap-2 pl-4 normal-case tracking-normal text-[13px] text-foreground/60">
                  {link.subs.map((sub) => (
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
                      className="hover:text-accent transition-colors"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

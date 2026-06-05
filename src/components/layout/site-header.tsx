import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/about", label: "ABOUT" },
  { to: "/services", label: "Services" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/50">
      <nav className="flex items-center justify-between px-6 md:px-10 py-5 max-w-7xl mx-auto">
        <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-medium">
          ROHANI
        </Link>

        <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.22em] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex px-6 py-3 border border-foreground/20 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all"
          >
            Contact
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
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
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="text-accent"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

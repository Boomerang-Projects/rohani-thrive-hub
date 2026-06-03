import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5 space-y-4">
          <div className="font-serif text-2xl tracking-[0.2em]">ROHANI</div>
          <p className="text-sm text-foreground/60 max-w-xs leading-relaxed">
            Psychology, mindfulness and human development for organizations and
            people who care about how they live and lead.
          </p>
        </div>

        <div className="md:col-span-3 space-y-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">
            Explore
          </p>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">
            Contact
          </p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="mailto:hello@rohani.co" className="hover:text-accent">
                hello@rohani.co
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                LinkedIn
              </a>
            </li>
            <li className="text-foreground/60">For HR & Leadership teams worldwide</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.22em] text-foreground/50">
          <p>© {new Date().getFullYear()} Rohani. Peace of Mind.</p>
          <p className="font-serif italic tracking-normal normal-case text-sm text-foreground/60">
            Psychology meets human potential.
          </p>
        </div>
      </div>
    </footer>
  );
}

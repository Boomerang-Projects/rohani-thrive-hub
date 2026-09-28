import { Link } from "@tanstack/react-router";

export function SiteFooterEn() {
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
            <li><Link to="/" className="hover:text-accent">About</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/experience" className="hover:text-accent">Experience</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">
            Contact
          </p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="mailto:madeeha@rohani.se" className="hover:text-accent">
                madeeha@rohani.se
              </a>
            </li>
            <li className="flex items-baseline gap-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                ROHANI
              </a>
              <span aria-hidden="true" className="text-foreground/35 text-xs">
                ·
              </span>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                Madeeha Rani Qazi
              </a>
            </li>
            <li className="text-foreground/60">Based in: Scandinavia - Online - Working Globally</li>
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

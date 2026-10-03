import { useState, type ReactNode } from "react";

/**
 * Hides part of a text behind a "Läs mer" button and slides it open smoothly.
 *
 * How the smooth opening works: the hidden part sits in a CSS grid row whose
 * height animates from 0fr (nothing) to 1fr (its natural height). Browsers can
 * animate that, unlike "height: auto". The text also fades in at the same time.
 * While closed, the hidden part is "inert": it can't be tabbed to or read aloud.
 */
export function ReadMore({ children, lang }: { children: ReactNode; lang: "sv" | "en" }) {
  const [open, setOpen] = useState(false);
  const sv = lang === "sv";

  return (
    <div>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden" inert={!open}>
          {children}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-accent underline underline-offset-4 decoration-accent/40 transition-colors hover:decoration-accent"
      >
        {open ? (sv ? "Visa mindre" : "Show less") : sv ? "Läs mer" : "Read more"}
        <span aria-hidden className={`inline-block transition-transform duration-500 ${open ? "rotate-180" : ""}`}>
          ↓
        </span>
      </button>
    </div>
  );
}

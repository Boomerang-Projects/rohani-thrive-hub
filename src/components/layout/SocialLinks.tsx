/**
 * Social media icons for the footer: LinkedIn, Instagram, TikTok.
 * Plain inline SVGs in the text colour (currentColor), inside thin round
 * outlines, so they match the calm look of the site instead of the brands'
 * own bright colours. Used by both the Swedish and the English footer.
 */
const links = [
  {
    name: "LinkedIn",
    href: "https://se.linkedin.com/in/madeeha-qazi-35247139a",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rohani.see/",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@rohani.se",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
        <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.6c.27 0 .53.04.77.12V9.77a5.7 5.7 0 0 0-.77-.05 5.69 5.69 0 1 0 5.69 5.69V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.25-1.48z" />
      </svg>
    ),
  },
];

export function SocialLinks({ label }: { label: (name: string) => string }) {
  return (
    <div className="flex items-center gap-3">
      {links.map((l) => (
        <a
          key={l.name}
          href={l.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={label(l.name)}
          title={l.name}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/20 text-foreground/70 transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          {l.icon}
        </a>
      ))}
    </div>
  );
}

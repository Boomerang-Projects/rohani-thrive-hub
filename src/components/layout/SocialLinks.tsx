/**
 * Social media icons for the footer: LinkedIn and Instagram.
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

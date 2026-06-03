## Rohani — Peace of Mind

A premium Scandinavian wellbeing & leadership consulting site built in the chosen "Scandinavian Luxury" direction. Corporate-wellness-first framing for HR leaders, P&C managers, executives, and international organizations.

## Pages

```
/                home — full homepage per brief
/about           founder + philosophy + credentials
/services        Organizations / Individuals / Retreats in depth
/workshops       workshop catalog (corporate-first)
/retreats        retreat experiences
/contact         contact form + discovery call + LinkedIn/email
```

All pages share the same nav + footer. Each has its own SEO `head()` (title, description, og:title/description, og:url, canonical) — no shared metadata.

## Homepage sections (matching the chosen direction)

1. Nav — ROHANI wordmark, links (About / Services / Workshops / Retreats), Contact CTA
2. Hero — split layout, italic "Peace of Mind" eyebrow, large serif headline, subheadline, Book a Discovery Call + Explore Services, hero image with floating quote card
3. About — "Psychology Meets Human Potential" two-column
4. Services — three rounded cards (Organizations / Individuals / Retreats) with the exact bullet lists from the brief
5. Impact — deep forest green band, 6 outcomes in label/value pairs (Wellbeing, Resilience, Leadership, Communication, Performance, Engagement)
6. Founder — portrait left, copy right with "Meet the Founder"
7. Testimonials — elegant rotating testimonial slider (3 corporate testimonials, auto-advance + dots)
8. Contact — "Let's Create Meaningful Change Together" + contact form (name, email, organization, message), LinkedIn, email, discovery call button
9. Footer — wordmark, copyright, secondary links

## Design system (locked from chosen direction)

CSS tokens in `src/styles.css` under `@theme`:
- `--color-background` Warm Off-White `#FAF9F6`
- `--color-beige` `#F2EDE4`
- `--color-taupe` `#D6CFC7`
- `--color-foreground` Deep Forest `#1B2B24`
- `--color-terracotta` `#B36B53`
- `--color-gold` `#C5A059`
- Fonts: Cormorant Garamond (serif headings), Inter (sans body) — loaded via Google Fonts in `__root.tsx`

Mapped to shadcn semantic tokens (`--primary` = forest, `--accent` = terracotta, `--secondary` = beige, etc.) so all components inherit the palette.

## Imagery

Generate 3 images with `imagegen` to `src/assets/`:
- `hero-office.jpg` — calm minimalist high-end corporate office, soft natural sunlight
- `founder-portrait.jpg` — warm Scandinavian psychologist portrait, knit sweater, neutral background
- `retreat-landscape.jpg` — quiet Nordic landscape, morning light (for retreats/services pages)

## Components

```
src/components/
  layout/site-header.tsx
  layout/site-footer.tsx
  sections/Hero.tsx
  sections/About.tsx
  sections/Services.tsx
  sections/Impact.tsx
  sections/Founder.tsx
  sections/Testimonials.tsx
  sections/Contact.tsx
```

Inner pages reuse these section components with page-specific content.

## SEO

- Per-route `head()` with unique title + description seeded with target keywords: Workplace Wellbeing, Leadership Development, Mindfulness at Work, Psychologist Speaker, Corporate Wellness, Employee Wellbeing, Emotional Intelligence, Resilience Training, Psychological Safety
- JSON-LD `Organization` in `__root.tsx`
- Single H1 per page, semantic HTML, relative canonical/og:url (no domain yet)

## Out of scope (for this build)

- Backend / form submission wiring (form is presentational; can be wired later with Lovable Cloud + email)
- Auth, CMS, blog
- Real testimonial sourcing (placeholder corporate quotes)

# Experience Page Redesign

Redesign only the Experience page (Swedish and English versions) with a new layout. All existing text stays exactly as written. No new colors or fonts — only existing design tokens (Cormorant serif / Inter, warm off-white, sand beige, forest green, terracotta accent, warm gold).

## Files changed

- `src/routes/experience.tsx` — Swedish version (full layout rewrite; head metadata and route definition unchanged)
- `src/components/en/ExperienceEn.tsx` — English version (same new layout, English texts)

Both versions share identical structure so the SV/EN switch keeps working. All existing section anchor IDs are preserved (`selected-experience`, `clinical`, `organisational`, `community`, `wellbeing`, `media`) because the header dropdown and footer links point at them.

## New layout, top to bottom

1. **Hero — full-width colored band**
   - Full-bleed sand beige band (`bg-secondary/60`) with eyebrow, page title ("Psykologi, välbefinnande & mänsklig utveckling") and the existing one-line intro sentence ("Mitt arbete förenar psykologisk expertis…").

2. **Timeline**
   - Vertical hairline with small round markers (gold/taupe dots as today).
   - Year/period in a left column; on the right: organisation title, role in *italic*, context line, and the existing detail paragraphs shown inline (accordion/"Läs mer" removed).
   - All five existing timeline entries, ROHANI first with its existing link to /services.

3. **Collaborations — dark band**
   - Deep forest green section (`bg-forest`, light foreground text) titled "Psykologi & kliniskt arbete".
   - Three cards in a row (stack on mobile): the three existing clinical entries (Vuxenpsykiatrin, BUP, Karolinska) with period, title, meta and their existing body text. Existing external link (BUP Brommaplan) kept.

4. **Professional, community & wellbeing work — "fold everything in"**
   - Compact restyled section containing the existing "Bortom kliniken" intro paragraphs, then the Professional & Organisational, Community, and Wellbeing entries as slim bordered cards/lists — same text, lighter visual weight than today.
   - G-Flow highlight kept as its compact card.

5. **Personal block — text only (no portrait, per user decision)**
   - The four existing intro paragraphs ("I hjärtat av detta arbete…") as a calm editorial text block, serif pull styling on the first line, max-width constrained.

6. **Training — three columns**
   - Three-column list derived strictly from text already on the site (no invented facts):
     - Column 1 — Clinical qualification: legitimerad psykolog, clinical assessment/treatment, crisis intervention.
     - Column 2 — Clinical domains: adult psychiatry, child & adolescent mental health, hospital psychiatry, suicide prevention, psychosis, personality disorders.
     - Column 3 — Wellbeing & facilitation: mindfulness, nervous system regulation, movement, guided meditation, retreat design, youth work (G-Flow).
   - Small uppercase eyebrow headers, hairline separators, mobile stacks to one column.

7. **In the Media + organisations list**
   - Kept at the bottom in the existing understated style (Sveriges Radio, Psykologtidningen) and the "Erfarenhet från" organisations list, restyled to match the new rhythm.

8. **Footer** — unchanged.

## Mobile

Everything stacks to one column: timeline marker + content, collaboration cards, three training columns, personal block. Spacing steps down via existing `md:` breakpoint patterns.

## Verification

- Check `/tmp/observability/build-errors.log` for a clean build.
- Playwright screenshots of /experience at 1440px and 390px, plus one EN-switch check, to confirm layout, colors (no new hues), and stacked mobile view.

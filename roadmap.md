# Roadmap

- [x] Media: Psykologtidningen image same size/shape as Sveriges Radio and Podd columns
- [x] Experience: convert Professional/Community/Wellbeing lists into space-saving tabs (hash anchors still select the right tab) — SV + EN

## Archived
- [x] Hero (homepage): keep text from covering the face at all viewport sizes
- [x] Contact page: decrease space between hero text and the contact form
- [x] Homepage hero: redesign the quote bubble position/style to match the aesthetic
- [x] Translate entire site to polished business Swedish (localized, not literal)
- [x] Mobile: dedicated mobile hero crop (src/assets/hero-mobile.jpg) served via <picture>
- [x] Hero portrait upscaled 1.5x (desktop 2880×2100 via Lanczos; src/assets/hero-desktop.jpg)
- [x] Nav hover dropdowns with section links (verified at desktop widths)
- [x] Language switch SV/EN in navbar + mobile menu
- [x] Redesign Experience page (new layout: hero band, timeline, dark collaborations, personal block, training) — SV + EN
- [x] Update design tokens in src/styles.css: off-white #F7F3EC background, espresso #3A2922 foreground, terracotta #B9684D primary/accent, sage #7A8061 secondary; remove leftover non-palette colors; keep fonts/layout/content
- [x] Mobile hero: separate image (not overlay) on mobile
- [x] Add media article image next to "I media" on Experience (SV + EN): straightened upload, rounded corners, colored offset background
- [x] Lightbox for the article image: smooth open/close, two-finger pinch zoom on mobile, small square white rounded X top-right
- [x] Replace the Experience vertical timeline with the selected horizontal editorial timeline in Swedish and English; verify desktop and mobile interactions.

## Media section rework (Experience, SV+EN)
- [x] Three-column media section: radio image / Psykologtidningen clipping with lightbox / podcast column
- [x] Lightbox close X anchored to the image corner instead of the screen
- [x] Article image same shape (rounded rectangle) as the other columns, smaller, vertically centered so titles align
- [x] Personal block: placeholder image on the left (to be replaced with user's own image later)
- [x] Timeline: fix title text clipping at intermediate widths
- [x] Verify desktop + mobile in both languages
- [x] Timeline logos: small placeholder logo next to each organization title in the Experience timeline detail panel (SV + EN)
- [x] Section headers: bold, centered, no big serif title; removed "01" prefix on clinical section (SV+EN)

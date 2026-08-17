# Four Dragons Inc. Go (演劇) — Founder Library

A dragon-gaming entertainment empire founding document web experience built on **Atatakasa (温かさ)** — warmth, dignity, and creator-first culture.

A single-page, fully responsive static site. Products are showcased first, followed by the founder vision, four pillars, constitution, culture, and creative philosophy.

- **Website:** `index.html`
- **Styling:** `style.css`
- **Logic:** `script.js` (theme, navbar position, language, mobile drawer, scroll-spy)
- **Assets:** `assets/`

---

## Content Sections

| # | Section | Purpose |
|---|---------|---------|
| 00 | **Home / Hero** | Full-viewport hero with animated glow, emblem, founder name, CTAs |
| 01 | **Our Creations** | Compact list of concrete products — games, anime, film, music, books — each with title and category |
| 02 | **Content Standards** | Themes never permitted across products; positive "instead" list |
| 03 | **Founder Vision** | Why Four Dragons exists; condensed Vision / Mission / Motto; CEO mindset |
| 04 | **The Four Pillars** | Champion the Mission, Be a Host, Embrace the Adventure, Be a Cereal Entrepreneur |
| 05 | **Constitution** | Ten non-negotiable articles (dignity, character over skill, zero corruption, creator freedom, etc.) |
| 06 | **Culture** | Value chips; rejected behaviors; positive reframe |
| 07 | **Atatakasa Aikido** | Warmth philosophy; optional weekend program; open-sensei policy; Weekend Ukemi protocol |
| 08 | **Creative Philosophy** | No deadlines — the da Vinci proof |

## Products on display

Concrete sample products surfaced prominently near the top so visitors immediately see what Four Dragons makes:

| Product | Category |
|---------|----------|
| *Dragon Rising: Ember Chronicles* | Open-World Action RPG |
| *Atatakasa Online* | Cozy Life MMO |
| *The Four Dragons Saga* | Animated Series |
| *Mona no Hoshi* | Animated Feature Film |
| *Symphony of Warmth* | Original Soundtrack |
| *The Founder's Blueprint* | Philosophy & Culture Book |

---

## UI & Design System

### Brand Colors
```
--dragon-blue   #0703fc
--dragon-red    #fc0303
```
All other colors are neutral black/white shades for backgrounds, surfaces, and text.

### Themes
- **Dark** (default): deep navy-black surfaces with high-contrast white text.
- **Light**: clean off-white surfaces with dark navy text.
- Theme preference persisted in `localStorage`; system `prefers-color-scheme` respected on first load.

### Navigation
- Repositionable navbar: Top bar, Left sidebar, or Right sidebar (persisted).
- Below 960px the navbar becomes a drawer with burger toggle, scrim, and Escape/close support.
- Scroll-spy highlights the active section via `IntersectionObserver`.

### Typography
- **Cinzel** (Google Fonts) for display and body text.
- Smooth scroll; reduced motion respected via `prefers-reduced-motion`.

### Layout & Breakpoints
- **≥960px:** Top navbar with centered links; full hero and grid layouts.
- **Below 960px:** Navbar becomes a drawer.
- **Below 860px:** Triads and pillars collapse to one column.
- **Below 520px:** Body font scales down; hero emblem and padding reduce.

### Visual Components
- **Hero:** animated gradient glow, emblem with pulsing blue/red shadow.
- **Product cards:** art icon, category, title, tagline, status badge; auto-flow grid.
- **Skip link:** keyboard-accessible jump to content.
- **Statements:** blockquotes with blue left border.
- **Pillars:** numbered cards with gradient hover overlay.
- **Constitution articles:** numbered list with vertical "Art. N" labels.
- **Chips & tags:** rounded pill tags on surfaces.

### Accessibility
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`).
- `aria-label`, `aria-expanded`, `aria-controls`, `role="radiogroup"`, `role="radio"`, `aria-checked`.
- Focus-visible outlines in `--dragon-blue`.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Single-page markup and content |
| `style.css` | Design tokens, theme system, layout, product cards, responsive rules |
| `script.js` | Theme toggle, navbar position, language, mobile drawer, scroll-spy |
| `assets/app_icon.png` | Emblem used throughout |
| `assets/company_logo.png` | Dragon head logo asset |
| `assets/favicon-*.png` | Favicons |
| `assets/apple-touch-icon.png` | iOS home-screen icon |

# Four Dragons Inc. Go (演劇) — Founder Library

A dragon-gaming entertainment empire founding document web experience built on **Atatakasa (温かさ)**, warmth, and creator-first culture.

- **Website:** `index.html`
- **Styling:** `style.css`
- **Logic:** `script.js`
- **Assets:** `assets/`

A single-page, fully responsive static site that presents the corporate constitution, company values, leadership philosophy, culture book, creative bible, human relations guidelines, Aikido program, organization structure, and business plan.

---

## Features & Functionality

### Content Sections (Volumes I–XI)

| # | Section | Description |
|---|---------|-------------|
| 00 | **Home / Hero** | Full-viewport hero with animated glow, emblem, founder name, and call-to-action buttons |
| 01 | **Founder Blueprint (The Heart)** | Vision, Mission, Motto, and CEO mindset quote |
| 02 | **The Four Pillars** | Logo symbolism + four core values (Champion the Mission, Be a Host, Embrace the Adventure, Be a Cereal Entrepreneur) |
| 03 | **Constitution (Volume II)** | Ten immutable corporate articles with ledes (dignity, character over skill, zero corruption, creator freedom, no financial layoffs, peaceful resignation, equality, no forced participation, continuous learning) |
| 04 | **Culture Book (Volume III)** | Values chip list, rejected behaviors list, and positive reframe |
| 05 | **Leadership Handbook (Volume IV)** | CEO philosophy, comparison card (instead of asking / leaders first ask), supportive check-list |
| 06 | **Work Culture (Volume V)** | Remote-first, family-first, health-first tag grid |
| 07 | **Creative Bible (Volume VI)** | Teams, Individuals, Every Idea triads |
| 08 | **Human Relations (Volume VII)** | No titles, no excessive formalities, use names, no forced friendships, no fake pakikisama |
| 09 | **Atatakasa Aikido (Volume VIII)** | Weekend program, purpose, activities, philosophy, founder & leadership details, inclusivity & open sensei policy, Weekend Ukemi healing protocol |
| 10 | **Organization (Volume IX)** | Org charts (executive levels and geographic tiers) |
| 11 | **Business Plan (Volume X)** | Products list (games, anime, film, music, books, streaming, merchandise, theme parks) + Future Research (Volume XI) and a detailed methodology recommendation |

### UI & Design System

#### Brand Colors
```
Brand accents (only two color values used for identity):
  --dragon-blue   #0703fc
  --dragon-red    #fc0303

All other colors are neutral black/white shades for backgrounds, surfaces, and text.
```

#### Themes
- **Dark theme** (default): Deep navy-black surfaces (`#050414`, `#0d0c26`) with high-contrast white text
- **Light theme**: Clean off-white surfaces (`#f6f6fc`, `#ffffff`) with dark navy text
- Theme preference persisted in `localStorage`
- System preference (`prefers-color-scheme`) respected on first load

#### Navigation
- **Repositionable navbar** selected via Settings: Top bar, Left sidebar, or Right sidebar
- Settings persisted in `localStorage`
- Mobile drawer with burger icon, scrim backdrop, close button, and Escape key support
- Scroll-spy active link indicator linked to `IntersectionObserver`
- Numbered nav links follow the volume index (00–11)

#### Typography
- **M PLUS 1p** (Google Fonts) for both display and body text
- Smooth scroll behavior; reduced motion respected via `prefers-reduced-motion`

#### Layout & Responsive Breakpoints
- **Desktop (≥960px):** Top navbar with centered horizontal links; side settings; full hero and grid layouts
- **Below 960px:** Navbar becomes a drawer; hamburger toggle required
- **Below 860px:** Triads collapse to 1 column; pillars to 1 column; detail grid to 1 column
- **Below 520px:** Body font scales down; hero emblem and padding reduce

#### Visual Components
- **Hero:** Animated gradient glow (drift), emblem with pulsing blue/red shadow, vertical scroll cue
- **Skip link:** Keyboard-accessible jump to content
- **Statements:** Blockquotes with blue left border
- **Triad cards:** 3-column grid with hover lift and border accent; auto-collapses to single column on tablet/mobile
- **Pillars:** 4-column cards with numbered index and gradient hover overlay
- **Constitution articles:** Numbered list with vertical "Art. N" label on left
- **Chips & tag lists:** Rounded pill tags on surfaces
- **Compare cards:** Two-column comparison with muted vs highlighted states
- **Check-list:** Two-column grid with checkmark prefix
- **Org chart:** Vertical flowchart with gradient connectors between levels
- **Detail grid:** 2-column info cards with gradient headings

#### Accessibility
- Semantic HTML sections (`<nav>`, `<main>`, `<section>`, `<article>`)
- `aria-label`, `aria-expanded`, `aria-controls`, `role="radiogroup"`, `role="radio"`, `aria-checked`
- Focus-visible outlines styled in `--dragon-blue`
- Piecemal reduced-motion support via media query and CSS animation duration override

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Single-page markup and content |
| `style.css` | Design tokens, theme system, layout variants, responsive rules |
| `script.js` | Theme toggle (mobile + settings), navbar position toggle, mobile drawer, scroll-spy |
| `assets/app_icon.png` | App / section emblem used throughout the page |
| `assets/company_logo.png` | Company logo asset (reserved) |
| `assets/favicon-32.png` | 32×32 favicon |
| `assets/favicon-192.png` | 192×192 favicon |
| `assets/favicon-512.png` | 512×512 favicon |
| `assets/apple-touch-icon.png` | iOS home-screen icon |

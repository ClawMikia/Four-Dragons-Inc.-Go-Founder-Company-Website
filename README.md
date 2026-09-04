# Four Dragons Inc. Go (演劇)

A dragon-gaming entertainment empire founding document built on **Atatakasa (温かさ)** — warmth, dignity, and creator-first culture. It lives in Tokyo, Japan, with decentralized roots worldwide.

A single-page, fully responsive static site. Open `index.html` in any modern browser — no build step, no server required.

- **Markup:** `index.html`
- **Styling:** `style.css` (CSS custom properties driven by `data-theme` / `data-nav` attributes)
- **Logic:** `script.js` (theme, navbar position, language, mobile drawer, scroll-spy, tooltips, i18n)
- **Assets:** `assets/` (emblem, logo, favicons)

---

## Navigation

The primary navigation is **repositionable** and persists in `localStorage`:

- **Top** — horizontal sticky bar below the mobile bar (desktop default).
- **Left** — fixed sidebar on the left; `main` is pushed right.
- **Right** — fixed sidebar on the right; nav links read right-to-left.

A mobile **drawer** (burger menu) is always used below 960px. Opening it slides the nav in, dims the stage with a **scrim** overlay, and shows a close (✕) button. The drawer closes on: close button, scrim click, the **Escape** key, an in-page link click, or a viewport resize back above 960px.

**Nav links are numbered** 00–09 and double as a scroll index. An `IntersectionObserver` scroll-spy highlights the active section in real time (`rootMargin: -45% 0px -50% 0px`, `threshold: 0`).

At the foot of the nav live three live settings:

1. **Theme** — Dark / Light segmented radio group.
2. **Navbar position** — Top / Left / Right segmented radio group.
3. **Language** — EN / 日本語 toggle switch.

A mobile top bar mirrors a quick **theme toggle** and brand link for narrow screens.

---

## Content Sections

The page is ten anchored sections, listed in navigation order:

| #  | Anchor          | Purpose |
|----|-----------------|---------|
| 00 | **Home / Hero** | Full-viewport hero with animated glow, pulsing emblem, Tokyo tagline, founder name, and primary/secondary CTAs. |
| 01 | **Our Creations** | A grid of product *categories* Four Dragons makes — 2D/3D games, cartoons, anime, educational/art/music/dance theater, orchestras, choirs, science docs, family game shows, animated shorts, language shows — followed by an **Audience** note (minors only; TV/connected platforms only; no handheld/mobile gadgets for children). |
| 02 | **Content Standards** | The line never crossed (brutal/gory, horror, mature, negativity, profanity, sexual content, substance abuse, discrimination, manipulation — each struck through in red) and the positive "instead" list (Friendly & Welcoming, Inspirational & Hopeful, Positive & Joyful, Kind & Compassionate, Courageous & Adventurous). |
| 03 | **Founder Vision** | The founder's quote; a three-card triad (Vision / Mission / Motto); two mindset blocks on leadership ("They don't work for me. I work for them." and the Founder-as-student creed). |
| 04 | **The Four Pillars** | Four numbered cards: Champion the Mission, Be a Host, Embrace the Adventure, Be a Cereal Entrepreneur — each with a gradient hover overlay. |
| 05 | **Constitution** | Ten non-negotiable articles with vertical "Art. N" labels — dignity, character over skill, zero corruption, company improves lives, everyone a creator, no layoffs for financials, leave to chase dreams, equal treatment, no forced participation, continuous learning. |
| 06 | **Culture** | A chip-list of 15 values; a "We Reject" block with struck-through reject-list (corruption, bullying, harassment, discrimination, racism, manipulation, cruelty, abuse, workplace politics, congress, toxic competition, fear-based management, toxic culture, scam); reframe paragraphs; and a zero-tolerance statement. |
| 07 | **Atatakasa Aikido** | Warmth philosophy; a triad (Purpose / Weekend Activities / Philosophy); a radical-inclusivity & open-sensei policy block; and the "Weekend Ukemi" healing protocol (Chairman as receiver/reversing power dynamics). |
| 08 | **Creative Philosophy** | "No deadlines. Just great work" — the Leonardo da Vinci / Mona Lisa 16-year proof, with supporting quotes and prose. |
| 09 | **Our Family** | A horizontal, scrollable **organization tree** of the Four Dragons family — Founder → 5 Co-Founders → 10 VPs → 10 domain Senpai (Leads) → Creators & Testers, plus distributed support roles (Janitor, Cook, Guard, Maintenance, Accountant, Driver). Roles are color-coded (blue founders, red VPs, green creators, purple testers, muted support) and each card reveals a **hover tooltip** describing its role. This is followed by three "Family Rules": no "ma'am"/"sir", no "staff"/"employees", equal by birthright. |

A centered **footer** carries the emblem, the Tokyo + decentralized line, the founder attribution, and a live copyright year.

---

## UI Components

### Hero
- `.hero` full-viewport flex centering; `.hero-glow` double radial-gradient with a slow `drift` keyframe animation; `.hero-emblem` with a dual blue/red `emblemPulse` box-shadow; `.eyebrow` tagline; gradient-text `h1`; `.hero-sub`; `.hero-founder` red accent; `.hero-actions` with a gradient **primary** button and a **ghost** button.

### Buttons
- `.btn` pill buttons; `.btn-primary` (gradient + glow), `.btn-ghost` (transparent, border shifts red on hover).

### Statements
- `.statement` blockquotes with a blue left border, scaled up; `.statement.small` for footnotes.

### Triads & Pillars
- `.triad` / `.pillars` grids; `.triad-card` and `.pillar` cards with hover border shift; pillars carry a numbered `.pillar-index` (gradient "4" number), a `::before` gradient overlay on hover.

### Constitution
- `.articles` ordered list with a CSS `counter(article)`; each `li` gets a vertical **"Art. N"** label via `::before` (`writing-mode: vertical-rl`).

### Chips, lists, and rejection blocks
- `.chip-list` wrapped value chips; `.limitations-list` / `.reject-list` struck-through tags; `.standards-list` green positive chips; `.reframe` paragraphs; `.reject-block` shaded callouts.

### Organization chart
- `.org-chart` with a 4px **gradient border** (`border-image` blue→red), horizontal scroll, and a custom gradient scrollbar; `.org-tree` connector lines (`::before`/`:after` with `border-top`/`border-left`/`border-right` forming a classic tree); `.org-card` color variants per role; `.org-tooltip` that scales in on card hover.

### Family rules
- `.family-rules` 3-up grid of `.rule-card`s with hover shift.

### Utility
- `.skip-link` (fixed, slides down on focus); `:focus-visible` dragon-blue outline; `prefers-reduced-motion` disables smooth scroll and flattens all animations/transitions.

---

## Interactive Features (`script.js`)

| Feature | How it works |
|---|---|
| **Theme** | `data-theme="dark"` on `<html>` (default). Dark/Light segmented control in nav + a mobile top-bar button. Respects `prefers-color-scheme: light` on first visit; saved to `localStorage` (`fourDragons.theme`). |
| **Navbar position** | `data-nav="top\|left\|right"` on `<html>`. Persisted to `localStorage` (`fourDragons.navPosition`). |
| **Language** | `data-lang="en\|ja"` on `<html>`. Every `[data-i18n-key]` element is rewritten from an in-script `translations` catalog. EN/JA toggle at nav foot. Persisted (`fourDragons.language`). |
| **Mobile drawer** | Burger toggles `html.nav-open`; scrim + close button + Escape + link-click + resize-above-960 all close it. `aria-expanded` stays in sync. |
| **Scroll-spy** | `IntersectionObserver` over section anchors marks the matching nav link `.active` (gradient background, red border). |
| **Footer year** | `#year` is set to `new Date().getFullYear()` at load. |
| **Org tooltips** | For every `.org-card` with a role class (founder/cofounder/vp/senpai/support/creator/tester), a `.org-tooltip` is injected with the role's title + description; reveals on hover/focus. |
| **Right-click guard** | `contextmenu` is prevented site-wide. |

### Internationalization catalog
`script.js` carries a full two-language dictionary (`en` / `ja`) covering **every** visible string: navigation labels, theme/nav/language labels and options, the hero eyebrow/title/sub/founder/CTAs, content sections, the four pillars, all ten constitution articles, the culture chips/rejects/reframes, the Aikido program, the da-Vinci philosophy, the footer, and the entire organization tree (Founder, 5 Co-Founders, 10 VPs, 10 Senpai leads, 6 support roles, 10 Creators, 10 Testers, plus the three family rules). It also carries localized metadata for six sample products (`prod1`–`prod6`) with category, title, tagline, and per-status labels.

---

## Design System

### Tokens (`:root`)
```
--dragon-blue        #0703fc   --dragon-red       #fc0303
--dragon-blue-soft    rgba(7,3,252,.16)   --dragon-red-soft    rgba(252,3,3,.16)
--dragon-blue-glow    rgba(7,3,252,.55)   --dragon-red-glow    rgba(252,3,3,.55)
--font-display  'Cinzel', serif
--font-body     'Cinzel', 'Hiragino Mincho ProN', 'Yu Mincho', serif
--radius-s 8px   --radius-m 16px   --radius-l 28px
--nav-w 288px    --mobile-bar-h 60px
--ease cubic-bezier(.22,1,.36,1)
```
Per-theme variables set on `html[data-theme="dark|light"]`: `--bg`, `--bg-alt`, `--surface`, `--surface-2`, `--border`, `--text`, `--text-muted`, `--text-faint`, `--shadow`.

### Colors
Accents are restricted to the two brand colors. Everything else is neutral black/white. Cards use `--surface` / `--surface-2`; rejected items are struck through in `--dragon-red`; positive chips use `--dragon-blue`; role cards are tinted by type (Creators green `#00c853`, Testers purple `#aa00ff`).

### Responsive breakpoints
| Width | Effect |
|---|---|
| ≥ 960px | Top bar nav layout; `main` flush. |
| < 960px | Navbar becomes a drawer; mobile top bar and scrim appear; `main` margin reset. |
| < 860px  | `.triad`, `.pillars`, `.family-rules` collapse to one column; `.org-tree` pinned wide. |
| < 520px  | Body font drops; hero padding and emblem shrink. |

### Typography
- **Cinzel** (Google Fonts) for display and body.
- Headings use the gradient `background-clip: text` treatment (blue→red / blue→text→red).
- Body text is warm serif via the `Hiragino Mincho` / `Yu Mincho` fallback stack for Japanese friendliness.

### Accessibility
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`).
- ARIA throughout: `aria-label`, `aria-expanded`, `aria-controls`, `role="radiogroup"`, `role="radio"`, `aria-checked`, `aria-label` on the language switch.
- Visible `:focus-visible` ring in dragon-blue.
- `prefers-reduced-motion` honored — smooth scroll disabled and all animation/transition durations collapsed.

---

## Project Structure
```
Four-Dragons-Inc.-Go-Founder-Company-Website/
├── index.html        # page markup + all content
├── style.css         # design tokens, themes, layout, components, responsiveness
├── script.js         # interactivity + i18n catalog
└── assets/
    ├── app_icon.png          # emblem (hero, nav, footer)
    ├── company_logo.png      # dragon-head logo (favicon/manifest)
    ├── apple-touch-icon.png  # iOS home-screen icon
    ├── favicon-32.png        # 32px favicon
    ├── favicon-192.png       # 192px Android favicon
    └── favicon-512.png       # 512px Android favicon
```

## Running
Double-click `index.html` or serve the folder (`npx serve`, `python -m http.server`, etc.). The site is static and needs no compilation.

## Notes
- The site is intentionally **TV/connected-platform oriented**: Four Dragons content is delivered to minors via television only — handheld/mobile use by minors is out of scope.
- The organization tree is illustrative of the current family structure; roles are color-coded and expandable via tooltips.
- Content is bilingual (English / Japanese); the language toggle persists across visits.

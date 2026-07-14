# MALDI — Malindi Curated

A React + Vite + Tailwind CSS v4 marketing site for Malindi Curated (MALDI),
built from the client's "Beyond The Beach" pitch deck.

## Stack
- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite` plugin, tokens in `src/index.css`)
- Framer Motion (scroll reveals, accordions, animated counters, the dhow
  route-line scroll indicator)

## Getting started
```bash
pnpm install   # or npm install
pnpm dev       # or npm run dev
```

## Project structure
- `src/data/content.js` — all copy, pulled and edited from the client deck.
  Package "pricing" sections deliberately show inclusions + a quote CTA,
  not invented numbers — the deck never specified prices ("rates on
  request"). Update this file once real rates are provided.
- `src/components/` — one component per section (Hero, Experiences,
  Packages, Partners, FAQ, etc.), assembled in `src/App.jsx`.
- `src/components/Logo.jsx` — the real brand mark (wave + palm badge with
  "MALINDI CURATED / Beyond The Beach" wrapped around it), built as SVG
  so it scales cleanly and can flip between dark/light for the nav.
- `src/components/Nav.jsx` — sticky nav. The mobile menu is intentionally
  rendered as a **sibling** fixed overlay, not a descendant of the
  `backdrop-filter` header pill — nesting a `position: fixed` menu inside a
  blurred ancestor is what caused the mobile-menu bug on the Strutum and
  Maldi travel-platform builds. Keep that separation if you extend the nav.

## Not wired to real data yet
- Hero image, section imagery, and photo-spot visuals are Unsplash
  placeholders — swap for the client's own photography.
- No testimonials are included; the deck marked that section "to be
  updated." Add real guest quotes once available.
- "Future Vision" (2027 roadmap) and detailed Corporate Offerings content
  from the deck were treated as internal/secondary material — Corporate is
  included as a compact section; Future Vision was left out of the public
  site.
- WhatsApp/email links use the deck's contact details
  (+254 741 157 181 / hellomaldi003@gmail.com) — confirm these are current.

## Build
```bash
pnpm build     # outputs to dist/
```

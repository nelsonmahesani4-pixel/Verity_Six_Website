# Verity Six

A modern, premium, fully responsive marketing website for **Verity Six**, a digital & creative studio built on truth and craft. Built with React, Vite, Tailwind CSS, and React Router.

## Features

- **Five pages** — Home, Services, About, Work, and Contact, with client-side routing.
- **Sticky, responsive navbar** with an accessible mobile menu and scroll-aware styling.
- **Company Promise**, **Six Pillars**, **Digital & Creative Services**, and a **four-step process**.
- **Working contact form** — client-side validation that composes a pre-filled email via `mailto:`.
- **Coming Soon** placeholders on the Work page (no fake clients, testimonials, or statistics).
- **Smooth animations** — reveal-on-scroll via `IntersectionObserver`, with `prefers-reduced-motion` support.
- **Accessible** — semantic HTML, ARIA attributes, skip-to-content link, and keyboard-friendly controls.
- **SEO-ready** — per-page titles/descriptions, Open Graph & Twitter meta, `robots.txt`, and a canonical URL.
- **Fast** — no heavy animation libraries; Google Fonts limited to two families (Fraunces + Inter).

## Tech stack

| Concern      | Choice                     |
| ------------ | -------------------------- |
| Framework    | React 19                   |
| Build tool   | Vite 6                     |
| Styling      | Tailwind CSS v4            |
| Routing      | React Router v7            |
| Icons        | lucide-react               |
| Language     | TypeScript                 |

## Getting started

```bash
# Install dependencies
pnpm install

# Start the dev server (http://localhost:3000)
pnpm dev

# Type-check and build for production
pnpm build

# Preview the production build
pnpm preview
```

## Project structure

```
.
├── index.html                # App shell, meta tags, fonts
├── vite.config.ts
├── vercel.json               # SPA rewrites for client-side routing
├── public/
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── main.tsx              # App entry + Router provider
    ├── App.tsx               # Route definitions
    ├── index.css             # Tailwind theme tokens & global styles
    ├── components/           # Reusable UI (Navbar, Footer, Button, Reveal, …)
    ├── pages/                # Home, Services, About, Work, Contact, NotFound
    ├── hooks/                # useReveal, useDocumentMeta
    ├── lib/                  # utils (cn)
    └── data/                 # content.ts — all site copy in one place
```

## Editing content

All site copy (promise, pillars, services, process, values, emails) lives in
[`src/data/content.ts`](src/data/content.ts). Update it there and every page stays in sync.

## Brand

- **Wordmark:** "Verity Six" set in Fraunces (serif), with a gold accent dot.
- **Palette:** ink `#100f13`, bone `#edece6`, gold `#c9a24b`, plus neutral grays.
- **Contact:** info@veritysix.com · support@veritysix.com · contact@veritysix.com

> Replace the wordmark with the official logo file and confirm the palette/copy against brand guidelines before launch.

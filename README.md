# Deluxe Auto Werks

One-page marketing site for Deluxe Auto Werks — a family-run auto body shop in West Chicago, IL.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (scroll-driven animations)
- Lenis (smooth scroll)
- Lucide React icons
- Inter (body) + Bebas Neue (display) via `next/font`

## Develop

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Structure

```
app/                  # App Router entry
components/
  ui/                 # Button, Reveal, Container
  sections/           # Nav, Hero, Services, Work, About, Reviews, Contact, Footer
  SmoothScroll.tsx    # Lenis wrapper
lib/utils.ts          # cn() helper
```

## Notes

- Real reviews are sourced from Google. The third review card is intentionally a placeholder — do not fabricate fake testimonials.
- Imagery uses Unsplash hotlinks as placeholders. Swap for real shop photography before launch.
- `prefers-reduced-motion` is respected — Lenis is disabled and animations collapse to opacity.

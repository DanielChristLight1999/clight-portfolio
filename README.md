## Ngene Daniel — Web3 Portfolio (Solana-Focused)

Personal portfolio for a Solana-focused Web3 engineer showcasing on-chain programs, protocol tooling, indexing infrastructure, and Web3 frontends. Built with Next.js and optimized for motion-rich, responsive UX.

## Getting Started

Install dependencies and run the dev server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Features

- Web3-focused project sections + other projects
- Parallax background layers and reveal animations
- Dark/light theme toggle
- Responsive layout and section-based navigation

## Tech Stack

- Next.js, React, Tailwind CSS
- Framer Motion
- shadcn/ui

## Project Structure

- `app/page.tsx` — entry point
- `components/ui/portfolio-page.tsx` — main page orchestration
- `components/ui/portfolio-hero.tsx` — hero section
- `components/ui/portfolio-sections.tsx` — content sections
- `components/ui/portfolio-background.tsx` — parallax background layers
- `components/ui/portfolio-header.tsx` — header/menu/theme toggle
- `components/ui/portfolio-shared.tsx` — shared UI helpers

## Content Updates

- Update Web3/other project data in `components/ui/portfolio-page.tsx`
- Add or remove demo links per project (`links.demo`)
- Edit section copy in `components/ui/portfolio-sections.tsx`

## Scripts

```bash
npm run dev
npm run build
npm run start
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

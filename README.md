# Portfolio

A personal portfolio website built with React, Vite, and Tailwind CSS. Ships an editorial-style homepage, a projects archive with source code and live preview links, multilingual content in English and German, and a contact page with direct email and social links.

## Live Preview
https://thalitadosreis.ch/

## Tech Stack
- **Vite** · React · JavaScript
- **React Router** · Tailwind CSS
- **Phosphor Icons** · custom i18n context
- **Netlify** deployment · sitemap generation

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/projects` | Project archive with source code links, live demos, and tech tags |
| `/contact` | Contact page with email, WhatsApp, LinkedIn, GitHub, and stack summary |

## Localization
The portfolio supports English and German content through the local language context in `src/i18n`.

## Getting Started
```bash
npm install
npm run dev
```

## Scripts
```bash
npm run dev       # local dev server
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # run ESLint
npm run postbuild # generate sitemap.xml
```

## Deployment
This project is configured for Netlify.

- `public/_redirects` handles SPA routing
- `generate-sitemap.js` writes `public/sitemap.xml`
- `robots.txt` and `sitemap.xml` are included in `public/`

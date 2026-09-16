# BVT Token — Merged Website

This project combines both BVT projects into one Vite + React application.

## Routes

- `/` — BVT Token main/home website
- `/presale` — BVT Responsive Interactive Presale page

The **Explore BVT** buttons on the main BVT website now open `/presale` inside the same React application.

## Run locally

```bash
npm install
npm run dev
```

Then open the Vite URL shown in the terminal.

## Build

```bash
npm run build
npm run preview
```

## Deployment

A `vercel.json` SPA rewrite is included so direct visits to `/presale` work correctly after deployment.

## Structure

- `src/components/` — original BVT home components
- `src/BVTHome.jsx` — BVT home page
- `src/presale/` — original presale components/page
- `src/App.jsx` — React Router configuration
- `public/images/` — presale assets

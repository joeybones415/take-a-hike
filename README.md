# Take a Hike

A personal trail map web app for Northern California. Dots on a map, click a dot to read the trail report. Companion to a weekly Substack.

## Authoring a new trail report

1. Create a new `.md` file in `src/content/trails/`, named after the trail (e.g. `muir-beach.md`).
2. Fill in the frontmatter:

```md
---
title: Muir Beach Overlook
region: Golden Gate National Recreation Area
date: 2026-05-10
lat: 37.8599
lng: -122.5695
distance_mi: 2.5
elevation_ft: 600
stars: 4
summary: One sentence that captures the hike — shown on the map popup and index.
---

Your trail report goes here.
```

3. Write the body in plain Markdown. The first paragraph gets a drop-cap automatically.
4. Commit and push — Vercel will rebuild and redeploy.

**Finding coordinates:** Open Google Maps, right-click the trailhead, and click the coordinates that appear at the top of the context menu. Paste them into `lat` and `lng` (latitude first, then longitude).

## Local development

```bash
npm install      # first time only
npm run dev      # starts at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Deploying to Vercel

1. Push the repo to GitHub.
2. Import the project at vercel.com/new.
3. Settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click Deploy. Subsequent pushes to `main` deploy automatically.

No environment variables are needed. The Stadia Maps Stamen Terrain tiles work without an API key at this traffic volume.

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Astro 5 (static) | Zero JS by default, Markdown content collections, fast builds |
| Map | MapLibre GL JS | Open source, no usage fees, works with any tile provider |
| Tiles | Stamen Terrain via Stadia Maps | Hand-drawn aesthetic that matches the editorial design direction |
| Fonts | Fraunces + Inter (Google Fonts) | Variable serif warmth for body; geometric sans for UI chrome only |
| Deploy | Vercel | Static output, zero config, free tier covers personal use |
| Styling | Vanilla CSS in `.astro` files | No framework overhead; the design is simple enough |

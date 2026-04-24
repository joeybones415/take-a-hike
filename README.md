# Take a Hike

A personal atlas of every hike I've written up — dots on a map, each linking to a full trail report on Substack. The map is the product; the trail pages are landing cards that generate link previews.

## Authoring workflow

1. **Hike the trail.**
2. **Write the full report on Substack**, publish it.
3. **Copy the Substack post URL.**
4. **Create `src/content/trails/<slug>.md`** with all frontmatter fields (see template below). The body can be empty or hold private notes — it is not rendered on the site.
5. **Commit and push.** The atlas deploys automatically via Vercel.
6. **Paste the atlas trail URL** (`https://take-a-hike.vercel.app/trails/<slug>`) at the top of the Substack post. Substack auto-renders it as a link card using the OpenGraph tags.

### Frontmatter template

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
summary: One sentence summary — shown on the map popup and the index list.
substack_url: "https://yourname.substack.com/p/muir-beach-overlook"
hero_image: "https://example.com/photo.jpg"   # optional; used as OG image
---
```

**Required fields:** `title`, `region`, `date`, `lat`, `lng`, `summary`, `substack_url`

**Optional:** `distance_mi`, `elevation_ft`, `stars`, `hero_image`

**Finding coordinates:** Open Google Maps, right-click the trailhead, click the lat/lng at the top of the context menu. Paste them into `lat` and `lng` (latitude first, then longitude — the negative one).

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

No environment variables needed. Stadia Maps Stamen Terrain tiles work without an API key at this traffic volume.

## Reverting to v1 (trail-report blog)

```bash
git checkout 1f02fe7   # the pre-atlas commit hash
```

Or to go back permanently: `git revert HEAD` after identifying the v2 commit.

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Astro 5 (static) | Zero JS by default, Markdown content collections, fast builds |
| Map | MapLibre GL JS | Open source, no usage fees, works with any tile provider |
| Tiles | Stamen Terrain via Stadia Maps | Hand-drawn aesthetic that matches the editorial direction |
| Fonts | Fraunces + Inter (Google Fonts) | Variable serif warmth; geometric sans for UI chrome only |
| Deploy | Vercel | Static output, zero config, free tier covers personal use |
| Styling | Vanilla CSS in `.astro` files | No framework overhead; design is simple enough |

## Future plans

**Stage 2** — migrate trail data to Supabase to support multiple authors (friends' atlases). The current Markdown-in-git architecture is intentionally the right Stage-1 choice: zero infrastructure, git-tracked history, no auth surface. The content schema is already designed to translate cleanly to a relational model when the time comes.

**Stage 3** — social/global atlas. Deferred entirely.

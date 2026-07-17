# Portfolio — Mathias Bertorelli

Personal portfolio for freelance work as a **Platform / MLOps / ML / DevOps engineer**.
Live at **https://mbertorelli.github.io/portfolio/**.

## What this is

A fast, single-page static site (plus case-study and blog pages) built with
[Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions.
No client-side JavaScript is shipped; fonts are self-hosted; everything is
content in Markdown or small typed data files.

## Why this stack

- **Astro** — static-first, zero-JS output, content collections make adding a
  case study or blog post as simple as dropping a `.md` file.
- **GitHub Pages + Actions** — free hosting, deploys on every push to `main`
  and on demand from the Actions tab (`workflow_dispatch`).
- **Self-hosted fonts** (`@fontsource`) — no external requests, better
  performance and privacy.

## Repository map

```
.github/workflows/deploy.yml   CI/CD: build + deploy to Pages
astro.config.mjs               site/base config (GitHub Pages project path)
personal_branding/             brand source of truth (tone, palette.json)
public/                        static assets: photo, favicon, sanitized CV pdf
scripts/generate-cv.mjs        regenerates the public CV PDF (npm run generate:cv)
src/consts.ts                  name, links, positioning line, base-path helper
src/data/profile.ts            experience timeline, skills, education
src/content/projects/*.md      case studies (frontmatter + Markdown body)
src/content/blog/*.md          blog posts (draft: true keeps them unpublished)
src/components/                Hero, ExperienceTimeline, ProjectCard, ...
src/pages/                     index, projects/[slug], blog
```

## Local development

```bash
npm install
npm run dev        # http://localhost:4321/portfolio/
npm run build      # static output in dist/
npm run preview    # serve the built site
```

## Editing content

- **Experience / skills** — edit `src/data/profile.ts`.
- **Case study** — add a Markdown file to `src/content/projects/` with the
  frontmatter fields (`title`, `summary`, `org`, `role`, `period`, `stack`,
  `outcome`, `category`, `order`). `category` is `freelance`, `industry` or
  `personal` — the home page shows them grouped in that order. Each case
  study also gets its own page.
- **Blog post** — copy `src/content/blog/example-post.md`, set `draft: false`.
- **CV PDF** — edit the data inside `scripts/generate-cv.mjs`, then
  `npm run generate:cv`. Never commit the original CV PDF (it contains the
  home address and is gitignored).
- **Brand** — colors/voice live in `personal_branding/`; CSS variables in
  `src/styles/global.css` are derived from `palette.json`.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. For an on-demand deploy without a
commit: GitHub → Actions → *Deploy to GitHub Pages* → **Run workflow**.

One-time setup (already done unless the repo is recreated): repository
**Settings → Pages → Source: GitHub Actions**.

## Privacy rule

The public site and repo must never contain the phone number or home street
address. Public contact is email, GitHub and LinkedIn only. Before publishing,
grep `dist/`, `src/` and `public/` for the street name and phone number from
the original CV — the search must return nothing.

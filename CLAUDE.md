# CLAUDE.md — Project onboarding

Portfolio site for Mathias Bertorelli (freelance Platform / MLOps / ML / DevOps).
Astro static site → GitHub Pages at `https://mbertorelli.github.io/portfolio/`.
Read `README.md` for the human-facing docs; this file is for working sessions.

## Hard rules

1. **Privacy**: the phone number and home street address must NEVER appear in
   the site, the repo, or the generated CV. The original CV PDF in the repo
   root is gitignored for this reason — do not un-ignore or commit it.
   Public contact = email, GitHub, LinkedIn.
2. **Base path**: this is a GitHub Pages *project* site. Every internal link
   and asset URL must go through `href()` from `src/consts.ts` (wraps
   `import.meta.env.BASE_URL`). A bare `/photo.png` will 404 in production
   while working fine locally at first glance — this is the #1 regression risk.
3. **Brand source of truth**: `personal_branding/palette.json` + `brand.md`.
   If a color or the positioning line changes, change it there first, then
   mirror in `src/styles/global.css` (tokens are duplicated by design — CSS
   doesn't import JSON). Voice: precise, outcome-first, no hype words.

## Architecture decisions

- **Astro 7, no UI framework.** Chosen over Next.js/Hugo for static output
  and Markdown content collections. The only client JS is the tiny vanilla
  tab switcher for case-study categories in `index.astro` — keep it that
  way; don't add React for something CSS or a few lines of JS can do.
- **Content lives in three places** (by change frequency):
  - `src/consts.ts` — identity: name, links, positioning, CV filename.
  - `src/data/profile.ts` — experience timeline, skills, education.
  - `src/content/{projects,blog}/*.md` — collections defined in
    `src/content.config.ts` (Astro glob loaders; entry `id` = filename slug).
- **Case studies have a `category`**: `freelance` | `industry` | `personal`
  (schema in `src/content.config.ts`). The home page shows them as tabs
  (/freelance default, /industry, /personal) with empty-state text per tab;
  labels/notes live in `index.astro`. Industry entries are anonymized work
  stories (problem → approach → outcome). Frontmatter `order` sorts within
  a tab.
- **CV PDF is generated, not uploaded**: `npm run generate:cv` runs
  `scripts/generate-cv.mjs` (pdf-lib, brand colors from palette.json) and
  writes `public/cv-mathias-bertorelli.pdf`. Regenerate after any experience
  change so site and CV stay in sync.
- **Design signature**: the "pipeline rail" motif — vertical rail + stage
  nodes (`.eyebrow::before`, timeline in `ExperienceTimeline.astro`), section
  eyebrows labeled `stage 01…04`. Cyan accent is used *sparingly*; if a change
  makes the page bluer, it's off-brand.
- **Fonts self-hosted** via `@fontsource` imports in `global.css`. No CDN
  fonts, no analytics scripts (privacy + performance).

## Deploy

- `.github/workflows/deploy.yml`: `withastro/action@v3` build +
  `actions/deploy-pages@v4`, on push to `main` and `workflow_dispatch`.
- One-time repo setting: Settings → Pages → Source = "GitHub Actions".
- Node ≥ 22.12 required (package.json `engines`).

## Edge cases & notes

- **Blog drafts**: `draft: true` posts are excluded from the index AND from
  `getStaticPaths`, so drafts get no page at all. `example-post.md` is a
  template — leave it as draft.
- **Trailing slashes**: internal links use `/path/` form to match the
  `directory` build format and avoid GitHub Pages redirects.
- **Photo**: `public/photo.png` was extracted from the CV PDF's embedded
  image (311×318). Replace with a higher-quality original when available.
- **WSL**: repo lives on `/mnt/c` (Windows drive) — builds are slower than
  native ext4; that's environmental, not a project problem.
- Verification: `npm run build`, then grep `dist/` for the street name and
  phone number found in the original (gitignored) CV PDF — must return
  nothing. Don't write those strings into any committed file, including this
  one.

## Ideas parked for later

Custom domain (would drop the `/portfolio` base path — touch only
`astro.config.mjs` + CNAME), dark mode, ES/CA localization, GoatCounter
analytics, first real blog post, higher-res photo.

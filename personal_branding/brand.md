# Personal Brand — Mathias Bertorelli

Single source of truth for tone, voice, and visual identity. Machine-readable
tokens live in [`palette.json`](./palette.json); the site derives its CSS
variables from those values (`src/styles/global.css`).

## Positioning

> **I design and run the platforms ML teams build on.**

MLOps / Platform / GenAI engineer. Not "does a bit of everything" — the person
who owns the pipeline end to end: infrastructure as code, CI/CD, model
lifecycle, and the paved roads that let data scientists ship without friction.

Target roles: Platform Engineer · ML Engineer · MLOps Engineer · DevOps.
Audience: hiring managers and freelance clients who value reliability over flash.

## Tone of voice

Precise, calm, outcome-focused. Sounds like a senior engineer in a design
review, not a marketer.

- **Do**: lead with outcomes ("reduced cross-team bottlenecks", "owned the full
  ML lifecycle"); name concrete technologies; use plain verbs; keep sentences
  short.
- **Don't**: superlatives ("passionate", "rockstar", "cutting-edge"); emoji in
  professional copy; vague claims without a technology or result attached.
- Tech terms, commands, and stack tags are set in monospace — code is quoted,
  not decorated.

## Visual identity

- **Palette**: deep slate ink on a near-white background; one cyan accent used
  sparingly (links, pipeline nodes, tags). Restraint is the aesthetic.
- **Typography**: Inter (variable) for all reading text and headings — weight
  and tracking do the hierarchy. JetBrains Mono for eyebrows, dates, stack
  tags, and anything code-flavored.
- **Signature motif — the pipeline rail**: a thin vertical rail with stage
  nodes connects the page's sections and the career timeline, echoing a
  deployment pipeline / DAG. It is the one memorable element; everything
  around it stays quiet. Reuse this motif (nodes, rail, mono stage labels)
  anywhere the brand appears.
- Generous whitespace, no gradients, no drop-shadow soup, hairline borders
  (`#E2E8F0`), 8px radius maximum.

## Reuse

When applying the brand elsewhere (slides, invoices, proposals, LinkedIn
banner): pull colors and fonts from `palette.json`, keep one accent only,
and reuse the positioning line verbatim.

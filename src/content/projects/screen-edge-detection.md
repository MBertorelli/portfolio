---
title: 'High-precision screen edge detection'
summary: 'A classical computer-vision system that locates screen edges in high-resolution industrial captures, built as a config-driven experimentation harness to converge on the most reliable detection strategy.'
org: 'Innovision (freelance)'
role: 'Computer Vision Engineer — sole developer'
period: '2025 – 2026'
stack: ['Python', 'OpenCV', 'Canny / Otsu / adaptive thresholding', 'Docker', 'Makefile']
outcome: 'A tunable, reproducible edge-detection pipeline for 2840×2840 px quality-control imagery.'
category: freelance
order: 2
---

## The problem

Quality control on screens requires knowing exactly where the physical edges
are in very high-resolution captures (2840×2840 px). Lighting, reflections and
faint edges make a single hand-tuned algorithm fragile — the right answer had
to be found empirically.

## The approach

Rather than betting on one algorithm, I built the pipeline as a
**config-driven experimentation harness**:

- Every detection strategy — Canny variants, Otsu, adaptive and fixed
  thresholding, crosshair-guided versions — is a YAML config, not a code
  branch. Dozens of configurations can be run, compared and reproduced.
- Full-resolution images are **sliced into strips** (100×2840 px) so edge
  evidence can be accumulated per-slice and weak edges recovered from the
  aggregate — including inferring a missing edge from its opposite side.
- Reproducibility tooling around it: Makefile targets for the common
  workflows, Docker for a portable runtime, pre-commit hooks for hygiene.

## Outcome

Edge-detection strategy became a measurable choice instead of a debate: each
candidate configuration is versioned and comparable, and the slicing approach
made detection robust on captures where a naive full-image pass fails.

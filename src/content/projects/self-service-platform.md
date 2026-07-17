---
title: 'A multi-tenant AWS platform with self-service infrastructure'
summary: 'Designed and built an AWS cloud platform for Alexion: one account per environment, isolated project tenants, and Terraform templates that let developers provision their own infrastructure — compliantly.'
org: 'AstraZeneca – Alexion'
role: 'Architect & lead — now product owner of the platform'
period: '2024 – present'
stack: ['AWS', 'Terraform', 'Multi-account architecture', 'Platform engineering', 'Compliance']
outcome: 'Developers provision their own compliant infrastructure from templates — no tickets, no waiting.'
category: industry
order: 1
---

## The problem

In a regulated pharma environment, every piece of infrastructure a development
team needs must meet security and compliance standards — which traditionally
means tickets, reviews, and waiting. Cross-team communication was the
bottleneck between an idea and a running environment, and every project's
infrastructure was a bespoke effort.

## The architecture

A multi-tenant platform built on top of **separate AWS accounts per
environment** — dev, uat, preprod and prod — giving hard blast-radius
boundaries between stages of the lifecycle.

- **Isolated tenants.** Each project lives isolated from the rest inside the
  platform, so teams can move fast without stepping on each other — and a
  mistake in one project can't reach another.
- **Self-service via Terraform templates.** Once a project is set up, its
  developers provision the resources they need by spawning curated Terraform
  templates. The paved road is the easy road: what the template creates is
  compliant by construction, not by after-the-fact review.
- **Compliance built in.** Company security and cybersecurity standards are
  encoded in the platform and its templates rather than enforced through
  gatekeeping.

## My role

I designed the platform, led its implementation while directing a team of
engineers, and remain its **product owner** — driving the roadmap, onboarding
new projects, and evolving the template catalogue as teams' needs grow.

## Outcome

Provisioning infrastructure went from a cross-team ticket queue to a
self-service action. Development teams spin up what they need, when they need
it, inside isolation and compliance boundaries the platform guarantees —
removing the platform team from the critical path while keeping it in control
of the standards.

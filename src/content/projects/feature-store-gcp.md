---
title: 'A Feature Store for a whole Data Science team'
summary: 'Designed and built the Feature Store and the MLOps / CI-CD pipelines that carried every ML model at a consumer-health company from notebook to production on GCP.'
org: 'ISDIN'
role: 'ML Engineer — owner of the ML pipeline'
period: '2023 – 2024'
stack: ['GCP', 'Terraform', 'Apache Airflow', 'Docker', 'Python']
outcome: 'One shared, versioned path to production for every model — owned end to end.'
order: 1
---

## The problem

Every Data Scientist computed their own features, in their own notebooks, with
their own definitions. The same business concept could exist three times with
three slightly different meanings, and nothing that worked in a notebook had an
obvious road to production.

## The approach

As owner of the ML pipeline, I designed and implemented a Feature Store on
Google Cloud Platform as the single source of truth for features, and wrapped
it with the CI/CD and orchestration needed to make it the *easy* path:

- **Infrastructure as code.** The full platform — storage, compute,
  orchestration — described in Terraform, reviewable and reproducible.
- **Orchestration with Airflow.** Feature computation and model pipelines as
  DAGs with clear ownership, retries and alerting.
- **Internal Python packages.** Shared libraries that gave every new project
  the same scaffolding: tests, containers, CI from day one.
- **Enablement.** Training sessions and written good practices, so the platform
  was adopted rather than imposed.

## Outcome

The Data Science team stopped re-implementing features and started reusing
them. New projects began from a paved road instead of a blank repo, and the
whole model lifecycle — training, validation, deployment, monitoring — ran
through one owned, observable pipeline.

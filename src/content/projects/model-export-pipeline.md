---
title: 'Production model export: ONNX & TensorRT'
summary: 'Built the tooling that exported neural networks to ONNX and TensorRT with automatic validation, plus a distributed image-generation system feeding model training at a computer-vision company.'
org: 'Vintra'
role: 'ML Engineer'
period: '2021 – 2022'
stack: ['PyTorch', 'TensorFlow', 'ONNX', 'TensorRT', 'FAISS', 'MySQL', 'Docker']
outcome: 'Models moved from research checkpoints to validated, deployable inference formats — repeatably.'
category: industry
order: 3
---

## The problem

Research models in PyTorch and TensorFlow don't run in production as-is. Each
export to an inference format was a manual, error-prone process — and there was
no systematic check that the exported model still behaved like the original.
Training data generation was a second bottleneck.

## The approach

- **Export tooling.** Code that converts neural networks to **ONNX** and
  **TensorRT**, followed by automatic validation that the converted model's
  outputs match the original within tolerance — catching silent conversion
  bugs before deployment.
- **Distributed batch generation.** A distributed system generating batches of
  images to improve training of existing models, backed by vector databases
  (FAISS) and MySQL.
- **MLOps from zero.** A proof of concept with Apache Airflow that demonstrated
  how MLOps methodology could fit the company's work cycle — the seed of its
  orchestration practice.

## Outcome

Model export stopped being a research-to-production cliff: conversions became
scripted, validated and repeatable, and the training pipeline was fed by an
automated, scalable data-generation system.

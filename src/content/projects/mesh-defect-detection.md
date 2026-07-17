---
title: 'Real-time defect detection for mesh fabrication'
summary: 'An AI vision system that watches a mesh production process through an industrial camera, segments defects with a UNet model, and overlays physical measurements — height, width, wire thickness — in real time.'
org: 'Innovision (freelance)'
role: 'Computer Vision / ML Engineer'
period: '2026'
stack: ['Python', 'PyTorch', 'UNet + ResNet34', 'OpenCV', 'Industrial camera (Daheng Galaxy)', 'uv']
outcome: 'Live defect detection and dimensional measurement on the production line, from camera frame to annotated overlay.'
category: freelance
order: 1
---

## The problem

Inspecting fabricated mesh by eye is slow and inconsistent: defects are subtle,
and the dimensions that matter — mesh height, width, wire thickness — need
measuring, not guessing. The client wanted live, automated inspection running
directly against the camera on the line.

## The approach

- **Industrial acquisition.** Live frames captured from a Daheng Imaging
  Galaxy camera through the vendor SDK, wrapped in a clean camera module so
  the rest of the system doesn't care where frames come from.
- **Segmentation model.** A UNet with a ResNet34 encoder detects defective
  regions per frame, with test-time augmentation for robustness and optional
  `torch.compile` / GPU inference for speed.
- **Measurement geometry.** Post-processing turns masks into physical
  measurements (height, width, wire thickness) using peak detection, drawn as
  annotations over the live feed.
- **Demo/production parity.** One env flag switches between the real camera
  and a demo source (webcam, video file or synthetic frames), so the full
  pipeline can be developed and demonstrated anywhere — no hardware required.
- **Engineering quality.** A `uv` workspace, per-module documentation, a
  ground-truth evaluation script for accuracy tracking, and gitignored
  weights/config for clean distribution.

## Outcome

The line gets continuous, objective inspection: every frame is segmented,
measured and annotated in real time, and model quality is verifiable against
ground truth instead of anecdote.

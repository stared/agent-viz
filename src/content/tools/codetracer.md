---
name: CodeTracer
tagline: Hierarchical trace tree + failure-onset localization
tier: research
note: >-
  A research tracing architecture that parses heterogeneous run artifacts, reconstructs the full state
  transition history as a hierarchical trace tree with persistent memory, and localizes where a
  failure began and how it propagated downstream. Ships with the CodeTraceBench benchmark.
image: https://arxiv.org/html/2604.11641v3/x1.png
imageAlt: CodeTracer architecture — extraction, structuring and trace agents over trajectory trees
order: 1
links:
  - label: arXiv
    url: https://arxiv.org/abs/2604.11641
  - label: GitHub
    url: https://github.com/NJU-LINK/CodeTracer
  - label: Hugging Face
    url: https://huggingface.co/papers/2604.11641
---

Conceptually the right abstraction — agent trajectories as state-transition trees — but diagnostic, not cinematic.

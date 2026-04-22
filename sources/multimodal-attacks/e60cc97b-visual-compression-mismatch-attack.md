# Visual Compression Mismatch Attack

**Promptfoo CVE ID:** `e60cc97b`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T01:57:12.136Z  
**Source paper:** [On the Adversarial Robustness of Large Vision-Language Models under Visual Token Compression](https://arxiv.org/abs/2601.21531)  
**Tags:** `model-layer`, `vision`, `multimodal`, `embedding`, `whitebox`, `agent`, `integrity`, `reliability`, `safety`  
**Affected models (as reported):** Qwen 2.5, LLaVA

## Description

A vulnerability exists in Large Vision-Language Models (LVLMs) utilizing visual token compression mechanisms (e.g., VisionZip, VisPruner) to reduce inference latency. The vulnerability stems from an optimization-inference mismatch where standard adversarial defenses assume full-token processing, while the deployed model utilizes a subset of tokens selected via importance metrics (typically attention scores).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

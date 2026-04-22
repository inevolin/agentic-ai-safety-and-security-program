# LoRA Unverified Product Poisoning

**Promptfoo CVE ID:** `6e3d5974`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-09T02:44:04.069Z  
**Source paper:** [Low Rank Comes with Low Security: Gradient Assembly Poisoning Attacks against Distributed LoRA-based LLM Systems](https://arxiv.org/abs/2601.00566)  
**Tags:** `model-layer`, `poisoning`, `fine-tuning`, `whitebox`, `integrity`  
**Affected models (as reported):** GPT-4o, Llama 3 33B, Llama 4 7B

## Description

In distributed Low-Rank Adaptation (LoRA) fine-tuning systems, a structural verification blind spot exists due to the decoupled aggregation of low-rank matrices. Frameworks typically evaluate and aggregate the $A$ and $B$ matrices independently to reduce computational overhead. A malicious client can exploit this by submitting individually benign $A$ and $B$ matrices that satisfy standard norm-based and similarity-based anomaly detection filters, but whose composite product ($A 	imes B$) forms a malicious gradient update. This Gradient Assembly Poisoning (GAP) attack allows an adversary to stealthily inject targeted behavioral shifts and semantic corruption into the global model without requiring access to other clients' training data or inter-client coordination.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

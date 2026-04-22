# Graph-LLM Template Injection

**Promptfoo CVE ID:** `2a2f8b3b`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-12-09T02:47:31.653Z  
**Source paper:** [Adversarial Attacks and Defenses on Graph-aware Large Language Models (LLMs)](https://arxiv.org/abs/2508.04894)  
**Tags:** `model-layer`, `prompt-layer`, `poisoning`, `injection`, `embedding`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4, Llama 2 7B, Vicuna 7B

## Description

A vulnerability exists in the graph encoding architecture of LLaGA (Large Language and Graph Assistant), specifically within the "neighborhood detail template" used to construct node sequences. LLaGA enforces a fixed-shape computational tree for each node; when a target node has fewer neighbors than the required template size (e.g., $k$ children), the system utilizes placeholders to maintain the fixed structure.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# Logit Leakage Model Clone

**Promptfoo CVE ID:** `8d1af455`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-12-09T02:11:34.278Z  
**Source paper:** [Clone What You Can't Steal: Black-Box LLM Replication via Logit Leakage and Distillation](https://arxiv.org/abs/2509.00973)  
**Tags:** `model-layer`, `extraction`, `side-channel`, `embedding`, `blackbox`, `api`, `data-security`, `safety`  
**Affected models (as reported):** GPT-3.5, Mistral 7B

## Description

Large Language Model (LLM) inference APIs that expose `top-k` logits or log-probabilities are vulnerable to model extraction and cloning. An attacker can execute a two-stage attack to replicate the proprietary model without access to weights, gradients, or training data. First, by submitting fewer than 10,000 random queries and aggregating the returned unrounded logits, the attacker recovers the model's output projection matrix using Singular Value Decomposition (SVD). Second, the attacker freezes this recovered layer and uses knowledge distillation with a public dataset to train a compact "student" model. This results in a deployable clone that replicates the target model's internal hidden-state geometry and output behavior with high fidelity (e.g., 97.6% cosine similarity).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

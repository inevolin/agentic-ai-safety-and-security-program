# Single Query Dynamic Output

**Promptfoo CVE ID:** `5647427a`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-12-09T03:48:23.368Z  
**Source paper:** [Text Adversarial Attacks with Dynamic Outputs](https://arxiv.org/abs/2509.22393)  
**Tags:** `model-layer`, `prompt-layer`, `embedding`, `blackbox`, `api`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4, GPT-4o, Claude 3.7, DeepSeek-V3

## Description

A vulnerability exists in Large Language Models (LLMs) and multi-label text classification systems that allows for Textual Dynamic Outputs Attacks (TDOA). This technique enables hard-label black-box attacks against systems with variable or generative output spaces (where the number of labels or specific label tokens are not fixed). The attack functions by training a surrogate model on clustered coarse-grained labels derived from the victim model's fine-grained dynamic outputs. It subsequently employs a Farthest-Label Targeted Attack (FLTA) strategy, which identifies and perturbs words in the input text that maximize the probability of the semantic cluster most distant from the original prediction. This allows an attacker to force misclassification or semantic inversion with a limited number of queries and without access to model gradients or probability scores.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

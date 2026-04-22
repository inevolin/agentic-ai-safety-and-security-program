# Multi-Dimensional Safety Bypass

**Promptfoo CVE ID:** `da5b2363`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-04-12T00:36:20.569Z  
**Source paper:** [The Hidden Dimensions of LLM Alignment: A Multi-Dimensional Safety Analysis](https://arxiv.org/abs/2502.09674)  
**Tags:** `model-layer`, `jailbreak`, `fine-tuning`, `whitebox`, `integrity`, `safety`  
**Affected models (as reported):** Llama 3 8B, Llama 3.1 405B Instruct, Llama 3.1 8B Instruct, Llama 3.2 3B Instruct, Ministral 8B Instruct

## Description

Large Language Models (LLMs) trained with safety fine-tuning techniques are vulnerable to multi-dimensional evasion attacks.  Safety-aligned behavior, such as refusing harmful queries, is controlled not by a single direction in activation space, but by a subspace of interacting directions.  Manipulating non-dominant directions, which represent distinct jailbreak patterns or indirect features, can suppress the dominant direction responsible for refusal, thereby bypassing learned safety capabilities. This vulnerability is demonstrated on Llama 3 8B through removal of trigger tokens and suppression of non-dominant components in the safety residual space.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

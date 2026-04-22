# One-Shot LLM Steering Attack

**Promptfoo CVE ID:** `746bf136`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:23:29.443Z  
**Source paper:** [Investigating Generalization of One-shot LLM Steering Vectors](https://arxiv.org/abs/2502.18862)  
**Tags:** `model-layer`, `jailbreak`, `extraction`, `whitebox`, `integrity`, `safety`  
**Affected models (as reported):** Gemma 2 2B, Gemma 2 2B IT, Llama 13B, Llama 2 13B, Llama 3.1 8B Instruct

## Description

Large Language Models (LLMs) are vulnerable to one-shot steering vector optimization attacks.  By applying gradient descent to a single training example, an attacker can generate steering vectors that induce or suppress specific behaviors across multiple inputs, even those unseen during the optimization process.  This allows malicious actors to manipulate the model's output in a generalized way, bypassing safety mechanisms designed to prevent harmful responses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

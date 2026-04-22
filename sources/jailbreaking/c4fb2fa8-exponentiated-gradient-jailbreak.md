# Exponentiated Gradient Jailbreak

**Promptfoo CVE ID:** `c4fb2fa8`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-05-31T13:18:53.192Z  
**Source paper:** [Adversarial Attack on Large Language Models using Exponentiated Gradient Descent](https://arxiv.org/abs/2505.09820)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`  
**Affected models (as reported):** Beaver 7B v1.0 Cost, Falcon 7B Instruct, Llama 2 7B Chat, Llama 3 8B Instruct, Mistral 7B v0.3, MPT 7B Chat, Vicuna 7B v1.5

## Description

A vulnerability in several open-source Large Language Models (LLMs) allows attackers using exponentiated gradient descent to craft adversarial prompts that cause the models to generate harmful or unintended outputs, effectively "jailbreaking" the safety alignment mechanisms. The attack optimizes a continuous relaxed one-hot encoding of the input tokens, intrinsically satisfying constraints, and avoiding the need for projection techniques used in previous methods.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

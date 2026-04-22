# Concept-Based Jailbreak Defense

**Promptfoo CVE ID:** `86ef6114`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-02-16T19:36:00.171Z  
**Source paper:** [JBShield: Defending Large Language Models from Jailbreak Attacks through Activated Concept Analysis and Manipulation](https://arxiv.org/abs/2502.07557)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** Llama 2 7B Chat, Llama 3 8B Instruct, Mistral 7B Instruct v0.2, Vicuna 13B v1.5, Vicuna 7B v1.5

## Description

Large Language Models (LLMs) employing safety alignment strategies are vulnerable to jailbreak attacks.  These attacks manipulate the LLM's internal representation by activating "jailbreak concepts" in addition to "toxic concepts," causing the model to bypass safety guardrails and generate unsafe outputs despite recognizing the harmful nature of the input.  The vulnerability stems from the insufficient mitigation of the influence of the activated jailbreak concepts on model output.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

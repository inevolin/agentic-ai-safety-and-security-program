# SS-Neuron Cross-Lingual Jailbreak

**Promptfoo CVE ID:** `a3df14a7`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T05:15:17.450Z  
**Source paper:** [Who Transfers Safety? Identifying and Targeting Cross-Lingual Shared Safety Neurons](https://arxiv.org/abs/2602.01283)  
**Tags:** `model-layer`, `jailbreak`, `fine-tuning`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 3.1 8B, Qwen 2.5 8B, Gemma 2 9B

## Description

Large Language Models (LLMs) exhibit a cross-lingual safety vulnerability driven by a dependency on a sparse subset of "Shared Safety Neurons" (SS-Neurons) anchored in high-resource (HR) languages, typically English. Non-high-resource (NHR) languages lack autonomous safety mechanisms and rely on projecting inputs onto this English-aligned safety manifold to trigger refusals. Because this projection is imperfect, safety guardrails can be bypassed by translating malicious prompts into NHR languages (e.g., Thai, Bengali, Korean), or by performing targeted ablation (masking) of the SS-Neuron subset (<0.3% of parameters). This architectural bottleneck allows adversaries to elicit harmful contentâsuch as bomb-making instructions or scam scriptsâthat the model would otherwise refuse in English.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

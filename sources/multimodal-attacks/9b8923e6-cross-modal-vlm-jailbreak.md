# Cross-Modal VLM Jailbreak

**Promptfoo CVE ID:** `9b8923e6`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2023-07-01  
**Analyzed:** 2025-03-04T19:27:20.455Z  
**Source paper:** [Jailbreak in pieces: Compositional adversarial attacks on multi-modal language models](https://arxiv.org/abs/2307.14539)  
**Tags:** `model-layer`, `jailbreak`, `injection`, `multimodal`, `vision`, `blackbox`, `whitebox`, `data-security`, `safety`  
**Affected models (as reported):** Llamaadapter v2, LLaVA

## Description

A vulnerability in multi-modal large language models (LLMs) allows adversaries to bypass safety mechanisms through compositional adversarial attacks.  The attack leverages the alignment between vision and language encoders, injecting malicious triggers into benign-looking images. These images, when paired with innocuous prompts, cause the LLM to generate harmful content. The attack requires access only to the vision encoder (e.g., CLIP), not the LLM itself, lowering the barrier to attack.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

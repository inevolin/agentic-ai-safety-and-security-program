# Visual Jailbreak of LLMs

**Promptfoo CVE ID:** `f83d037f`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2023-06-01  
**Analyzed:** 2024-12-29T04:05:35.680Z  
**Source paper:** [Visual adversarial examples jailbreak large language models](https://arxiv.org/abs/2306.13213)  
**Tags:** `model-layer`, `application-layer`, `jailbreak`, `injection`, `vision`, `multimodal`, `whitebox`, `blackbox`, `safety`, `data-security`  
**Affected models (as reported):** InstructBLIP, LLaVA, MiniGPT-4

## Description

A vulnerability in vision-integrated Large Language Models (VLMs) allows an attacker to circumvent safety mechanisms through the use of adversarially crafted visual examples. A single, carefully constructed image can universally "jailbreak" the model, causing it to generate harmful content in response to a wide range of subsequent prompts, even those not included in the adversarial example's training data. This vulnerability extends beyond simple misclassification to encompass the execution of harmful instructions and the generation of toxic outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

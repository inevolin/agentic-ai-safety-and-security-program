# Surrogate Classifier Extraction

**Promptfoo CVE ID:** `0db119f3`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-01-01  
**Analyzed:** 2025-03-04T19:37:58.051Z  
**Source paper:** [Targeting Alignment: Extracting Safety Classifiers of Aligned LLMs](https://arxiv.org/abs/2501.16534)  
**Tags:** `model-layer`, `jailbreak`, `extraction`, `whitebox`, `integrity`, `safety`  
**Affected models (as reported):** Gemma 2 9B IT, Gemma 7B IT, Granite 3.1 8B Instruct, Llama 2 7B Chat, Llama 3.1 8B Instruct, Mistral 7B Instruct v0.3, Qwen 2.5 7B Instruct, Zephyr

## Description

Large Language Models (LLMs) employing alignment techniques for safety embed a "safety classifier" within their architecture. This classifier, responsible for determining whether an input is safe or unsafe, can be approximated by extracting a surrogate classifier from a subset of the LLM's architecture.  Attackers can leverage this surrogate classifier to more effectively craft adversarial inputs (jailbreaks) that bypass the LLM's intended safety mechanisms.  The attack success rate against the surrogate classifier is significantly higher than directly attacking the full LLM, requiring fewer computational resources.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

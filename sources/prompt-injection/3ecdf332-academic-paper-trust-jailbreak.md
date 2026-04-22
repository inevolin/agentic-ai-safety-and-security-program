# Academic Paper Trust Jailbreak

**Promptfoo CVE ID:** `3ecdf332`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-07-28T19:42:08.972Z  
**Source paper:** [Paper Summary Attack: Jailbreaking LLMs through LLM Safety Papers](https://arxiv.org/abs/2507.13474)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, DeepSeek R1, GPT-4o, Llama 2 7B Chat, Llama 3.1 8B Instruct, Vicuna 7B v1.5

## Description

Large Language Models (LLMs) are vulnerable to a jailbreak attack termed Paper Summary Attack (PSA). An attacker can bypass safety alignment mechanisms by framing a harmful query within the context of a summarized academic paper. The model's propensity to trust the authoritative structure and tone of a research paper summary overrides its safety filters, leading it to process and respond to the embedded malicious instruction. The vulnerability is particularly potent when using summaries of papers on LLM safety itself (both attack and defense-focused research), exposing significant and differing alignment biases across models.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

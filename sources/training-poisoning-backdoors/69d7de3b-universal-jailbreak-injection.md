# Universal Jailbreak Injection

**Promptfoo CVE ID:** `69d7de3b`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:28:50.049Z  
**Source paper:** [Injecting Universal Jailbreak Backdoors into LLMs in Minutes](https://arxiv.org/abs/2502.10438)  
**Tags:** `model-layer`, `jailbreak`, `injection`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** ChatGLM 6B, Llama 2 13B Chat, Llama 2 7B, Llama 2 7B Chat, Vicuna 7B

## Description

JailbreakEdit is a novel attack that injects a universal jailbreak backdoor into safety-aligned Large Language Models (LLMs) by exploiting model editing techniques.  The attack modifies specific parameters within the model's feed-forward networks, creating shortcuts that bypass internal safety mechanisms and trigger jailbroken responses to a wide range of prompts, including those containing sensitive or harmful content. The attack requires only one-time parameter modification, making it efficient and stealthy.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

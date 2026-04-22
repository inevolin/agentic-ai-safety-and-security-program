# Cognitive Overload Jailbreak

**Promptfoo CVE ID:** `92d96cd5`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-11-01  
**Analyzed:** 2024-12-29T04:32:06.158Z  
**Source paper:** [Cognitive overload: Jailbreaking large language models with overloaded logical thinking](https://arxiv.org/abs/2311.09827)  
**Tags:** `jailbreak`, `blackbox`, `prompt-layer`, `model-layer`, `safety`, `integrity`  
**Affected models (as reported):** ChatGPT, GPT-3.5 Turbo, GPT-4 Turbo, Guanaco, Llama 2, Mistral 7B, MPT, Vicuna, Wizardlm

## Description

Large Language Models (LLMs) are vulnerable to jailbreaking attacks exploiting cognitive overload induced by multilingual prompts, veiled expressions, and effect-to-cause reasoning. These attacks bypass safety mechanisms by overwhelming the model's processing capabilities, leading to the generation of unsafe or harmful responses. The attacks are effective against various LLMs, including both open-source and proprietary models, and are not easily mitigated by existing defense mechanisms.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

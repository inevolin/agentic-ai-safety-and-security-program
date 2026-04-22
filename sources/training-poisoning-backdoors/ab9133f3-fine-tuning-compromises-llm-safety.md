# Fine-tuning Compromises LLM Safety

**Promptfoo CVE ID:** `ab9133f3`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2023-10-01  
**Analyzed:** 2024-12-28T18:40:09.652Z  
**Source paper:** [Fine-tuning aligned language models compromises safety, even when users do not intend to!](https://arxiv.org/abs/2310.03693)  
**Tags:** `fine-tuning`, `jailbreak`, `poisoning`, `safety`, `model-layer`  
**Affected models (as reported):** GPT-3.5 Turbo, Llama 2 13B Chat, Llama 2 70B Chat, Llama 2 7B Chat, Llama-1

## Description

Fine-tuning aligned Large Language Models (LLMs) on a small number of adversarially crafted examples, or even on benign datasets, can compromise their safety alignment, leading to the generation of harmful or inappropriate content. This vulnerability exploits the few-shot learning capabilities of LLMs, allowing attackers to override existing safety mechanisms with minimal effort and cost. Even unintentional fine-tuning with seemingly benign datasets can result in unintended safety degradation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

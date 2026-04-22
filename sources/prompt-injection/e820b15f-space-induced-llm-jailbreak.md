# Space-Induced LLM Jailbreak

**Promptfoo CVE ID:** `e820b15f`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-07-01  
**Analyzed:** 2024-12-29T04:29:56.594Z  
**Source paper:** [Single character perturbations break llm alignment](https://arxiv.org/abs/2407.03232)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `application-layer`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** ChatGLM, Falcon, Guanaco, Llama 2, Llama 3, Mistral, MPT, Vicuna v1.5

## Description

Appending a single whitespace character (space) or certain punctuation marks to the end of an LLM's input template can bypass safety mechanisms and cause the model to generate unsafe, biased, or factually incorrect outputs, even if the original prompt was benign. This vulnerability is due to the statistical properties of single-character tokens in the model's training data, causing unintended behavior in the model's token prediction.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

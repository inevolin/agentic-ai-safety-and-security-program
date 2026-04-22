# Sockpuppet Prefix Jailbreak

**Promptfoo CVE ID:** `5b231b66`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T00:03:52.458Z  
**Source paper:** [Sockpuppetting: Jailbreaking LLMs Without Optimization Through Output Prefix Injection](https://arxiv.org/abs/2601.13359)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `whitebox`, `safety`  
**Affected models (as reported):** Claude 4.5, Llama 3.1 8B, Qwen 2.5 8B, Gemma 7B

## Description

Large Language Models (LLMs), specifically open-weight instruction-tuned models (including Llama-3.1-8B, Qwen3-8B, and Gemma-7B) and certain closed-weight APIs allowing partial response pre-filling, are vulnerable to "Sockpuppetting" or Output Prefix Injection. This vulnerability exploits the model's autoregressive nature and self-consistency bias. By injecting a target acceptance sequence (e.g., "Sure, here is...") directly into the start of the `assistant` message block within the chat template, an attacker forces the model to complete the response as if it had already voluntarily agreed to the request. This technique effectively bypasses safety alignment fine-tuning and refusal mechanisms without requiring gradient-based optimization or significant computational resources.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

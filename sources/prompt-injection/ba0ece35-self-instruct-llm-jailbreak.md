# Self-Instruct LLM Jailbreak

**Promptfoo CVE ID:** `ba0ece35`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-01-01  
**Analyzed:** 2025-01-26T18:30:26.220Z  
**Source paper:** [Self-Instruct Few-Shot Jailbreaking: Decompose the Attack into Pattern and Behavior Learning](https://arxiv.org/abs/2501.07959)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-2, Llama 2 7B Chat, Llama 3 8B Instruct, Llama 3.1 8B Instruct, Llama Guard 3 8B, Mistral 7B Instruct v0.2, OpenChat 3.6 8B, Qwen 2.5 72B Instruct, Qwen 2.5 7B Instruct, Starling LM 7B

## Description

Large Language Models (LLMs) are vulnerable to a self-instruct few-shot jailbreaking attack that leverages pattern and behavior learning to bypass safety mechanisms.  The attack efficiently induces harmful outputs by injecting a strategically chosen response prefix into the model's prompt and exploiting the model's tendency to mimic co-occurrence patterns of special tokens preceding the prefix.  This allows the attacker to elicit unsafe responses with a small number of carefully crafted examples, even with models enhanced with perplexity filters or perturbation defenses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

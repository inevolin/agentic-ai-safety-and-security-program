# Metaphorical LLM Jailbreak

**Promptfoo CVE ID:** `9e30d660`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-12-01  
**Analyzed:** 2025-01-26T18:27:49.961Z  
**Source paper:** [Na'vi or Knave: Jailbreaking Language Models via Metaphorical Avatars](https://arxiv.org/abs/2412.12145)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, Gemini 1.5 Pro, GLM 3 6B, GLM 4 9B, GPT-3.5 Turbo, GPT-4, InternLM 2.5 7B, Llama 3.1 70B, Llama 3.1 8B, Mistral 7B, Mixtral 8x7B, o1, Qwen 1.5 110B, Qwen 2 72B, Qwen 2 7B, Yi 1.5 34B

## Description

Large Language Models (LLMs) are vulnerable to jailbreaking attacks via adversarial metaphors.  Attackers can leverage the LLMs' imaginative capabilities to map harmful concepts to innocuous ones, thereby bypassing safety mechanisms and eliciting harmful responses.  The attack relies on creating a metaphorical mapping between a harmful target and seemingly benign entities, exploiting the LLM's ability to reason about the analogous relationship without recognizing the underlying malicious intent.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

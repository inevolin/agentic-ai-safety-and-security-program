# LLM Contextual Divergence Jailbreak

**Promptfoo CVE ID:** `66074c12`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-11-01  
**Analyzed:** 2024-12-28T23:32:26.242Z  
**Source paper:** [Diversity Helps Jailbreak Large Language Models](https://arxiv.org/abs/2411.04223)  
**Tags:** `model-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Gemini 1.5 Pro, GPT-3.5 Turbo, GPT-4, GPT-4o, GPT-4o Mini, Llama 2 7B Chat, Mistral 7B Instruct, Qwen 2 7B Instruct, Vicuna 13B v1.5

## Description

Large Language Models (LLMs) are vulnerable to a jailbreak attack that leverages the model's ability to generate diverse and obfuscated prompts to bypass safety constraints. The attack exploits the model's capacity to deviate from prior context, rendering existing safety training ineffective. The attacker uses a multi-stage process involving diversification (generating prompts significantly different from previous attempts) and obfuscation (obscuring sensitive words/phrases) to elicit harmful outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

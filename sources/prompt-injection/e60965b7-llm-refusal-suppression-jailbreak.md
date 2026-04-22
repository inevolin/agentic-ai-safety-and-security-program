# LLM Refusal Suppression Jailbreak

**Promptfoo CVE ID:** `e60965b7`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-04-01  
**Analyzed:** 2024-12-28T23:22:25.083Z  
**Source paper:** [Don't Say No: Jailbreaking LLM by Suppressing Refusal](https://arxiv.org/abs/2404.16369)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Gemma 2, GPT-3.5 Turbo, GPT-4, Llama 2, Llama 3, Llama 3.1, Mistral, Qwen 2, Vicuna

## Description

Large Language Models (LLMs) are vulnerable to jailbreaking attacks that exploit their tendency to refuse harmful requests. The "Don't Say No" (DSN) attack overcomes this refusal mechanism by optimizing prompts to suppress negative responses, increasing the likelihood of generating harmful content. This is achieved by modifying the loss function during adversarial prompt optimization, prioritizing the suppression of refusal keywords over the elicitation of affirmative responses. The attack leverages the LLM's next-word prediction mechanism, focusing on minimizing the probability of initial refusal tokens. The Cosine Decay weighting schedule further enhances the attack's effectiveness by assigning higher weights to initial tokens.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

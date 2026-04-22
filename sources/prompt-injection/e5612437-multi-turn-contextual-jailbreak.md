# Multi-Turn Contextual Jailbreak

**Promptfoo CVE ID:** `e5612437`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-02-01  
**Analyzed:** 2024-12-29T03:05:14.918Z  
**Source paper:** [Leveraging the Context through Multi-Round Interactions for Jailbreaking Attacks](https://arxiv.org/abs/2402.09177)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 2, GPT-3.5 Turbo, GPT-4, Llama 2 7B, Llama 3, Mixtral 8x7B, Vicuna 7B

## Description

Large Language Models (LLMs) are vulnerable to a multi-round "Contextual Interaction Attack" where a series of benign preliminary questions, crafted to be semantically aligned with a malicious target query, are used to manipulate the LLM's context vector. The autoregressive nature of LLMs causes them to incorporate previous conversation rounds into their generation process, allowing the attacker to prime the model into providing harmful information in response to the final, seemingly benign query.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

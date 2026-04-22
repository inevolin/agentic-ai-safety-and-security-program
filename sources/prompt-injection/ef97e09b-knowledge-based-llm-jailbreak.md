# Knowledge-Based LLM Jailbreak

**Promptfoo CVE ID:** `ef97e09b`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-06-01  
**Analyzed:** 2025-03-04T19:33:03.854Z  
**Source paper:** [Knowledge-to-jailbreak: One knowledge point worth one attack](https://arxiv.org/abs/2406.11682)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** FinanceChat 7B, GPT-3.5 Turbo, GPT-4 Turbo, LawChat 7B, Llama 2 13B Chat, Llama 2 7B, Llama 2 7B Chat, Mistral 7B Instruct, Vicuna 7B v1.5

## Description

Large Language Models (LLMs) are vulnerable to knowledge-based jailbreaks, where an attacker provides domain-specific knowledge to elicit harmful or unintended outputs.  The vulnerability stems from the LLM's ability to process and respond to knowledge inputs in a way that circumvents safety mechanisms, even if the input knowledge itself isn't inherently malicious. Attackers leverage this by constructing prompts that combine seemingly innocuous knowledge with subtly manipulative phrasing to bypass safety filters.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

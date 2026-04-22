# Guardrail Helpful Mode Jailbreak

**Promptfoo CVE ID:** `10383949`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-30T19:41:54.772Z  
**Source paper:** [Evaluating the Robustness of Large Language Model Safety Guardrails Against Adversarial Attacks](https://arxiv.org/abs/2511.22047)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `injection`, `fine-tuning`, `blackbox`, `safety`, `reliability`, `integrity`  
**Affected models (as reported):** Llama 3 1B, Gemma 2 2B, Gemma 9B

## Description

A "Helpful Mode" role-confusion vulnerability exists in specific Large Language Model (LLM) safety guardrails, specifically Nemotron-Safety-8B and Granite-Guardian-3.2-5B. These models, designed to act as binary classifiers (outputting "Safe" or "Unsafe") for content moderation, can be manipulated via contextually framed adversarial prompts (e.g., academic research requests, corporate security scenarios, or roleplay) to abandon their classification objective. Instead of blocking the request, the guardrail model reverts to its underlying "helpful assistant" training and directly generates the harmful content it was deployed to prevent. This effectively transforms the security control into a generator of harmful content (e.g., disinformation, malware instructions, social engineering scripts), bypassing the intended safety architecture.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

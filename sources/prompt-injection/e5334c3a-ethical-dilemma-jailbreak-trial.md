# Ethical Dilemma Jailbreak TRIAL

**Promptfoo CVE ID:** `e5334c3a`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-09-30T18:33:06.976Z  
**Source paper:** [Between a Rock and a Hard Place: Exploiting Ethical Reasoning to Jailbreak LLMs](https://arxiv.org/abs/2509.05367)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `chain`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.7 Sonnet, DeepSeek R1, DeepSeek V3, GLM 4 Plus, GPT-3.5 Turbo, GPT-4 Turbo, GPT-4o, Llama 2 13B, Llama 3 70B Instruct, Llama 3.1 8B, Qwen 2.5 7B, Vicuna 13B v1.5

## Description

A vulnerability exists in multiple Large Language Models (LLMs) where an attacker can bypass safety alignments by exploiting the model's ethical reasoning capabilities. The attack, named TRIAL (Trolley-problem Reasoning for Interactive Attack Logic), frames a harmful request within a multi-turn ethical dilemma modeled on the trolley problem. The harmful action is presented as the "lesser of two evils" necessary to prevent a catastrophic outcome, compelling the model to engage in utilitarian justification. This creates a conflict between the model's deontological safety rules (e.g., "do not generate harmful content") and the consequentialist logic of the scenario. Through a series of iterative, context-aware queries, the attacker progressively reinforces the model's commitment to the harmful path, leading it to generate content it would normally refuse. The vulnerability is paradoxically more effective against models with more advanced reasoning abilities.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

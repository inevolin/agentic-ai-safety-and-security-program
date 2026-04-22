# Fuzzy Backdoor Jailbreak

**Promptfoo CVE ID:** `8b78f531`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T04:28:36.401Z  
**Source paper:** [AdvBDGen: Adversarially Fortified Prompt-Specific Fuzzy Backdoor Generator Against LLM Alignment](https://arxiv.org/abs/2410.11283)  
**Tags:** `model-layer`, `poisoning`, `jailbreak`, `fine-tuning`, `integrity`, `safety`  
**Affected models (as reported):** BERT, Gemma 7B, GPT-4, Llama 3 8B, Mistral 7B, Mistral 7B Instruct, Tiny Llama 1.1B

## Description

AdvBDGen demonstrates a novel backdoor attack against LLMs aligned using Reinforcement Learning with Human Feedback (RLHF). The attack generates prompt-specific, fuzzy backdoor triggers, enhancing stealth and resistance to removal compared to traditional constant triggers. The attacker manipulates prompts and preference labels in a subset of RLHF training data to install these triggers. The triggers are designed to evade detection by a "weak" discriminator LLM while being detectable by a "strong" discriminator LLM, forcing the generation of more complex and less easily identifiable patterns.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

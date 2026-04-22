# Self-Fooling LLM Prompt Attack

**Promptfoo CVE ID:** `3ed6d15e`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-10-01  
**Analyzed:** 2025-01-26T18:31:26.139Z  
**Source paper:** [An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://arxiv.org/abs/2310.13345)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** GPT-3.5 Turbo, Llama 2

## Description

A prompt-based adversarial attack, termed PromptAttack, can cause Large Language Models (LLMs) to generate incorrect outputs by manipulating the input prompt.  PromptAttack crafts prompts that include the original input, an attack objective (to generate semantically similar but misclassified output), and attack guidance with instructions for character, word, or sentence-level perturbations. This allows an attacker to manipulate an LLM's response without direct access to its internal parameters. An example is adding a simple emoji ":)" to successfully mislead GPT-3.5.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

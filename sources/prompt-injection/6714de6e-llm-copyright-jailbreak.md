# LLM Copyright Jailbreak

**Promptfoo CVE ID:** `6714de6e`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-06-01  
**Analyzed:** 2024-12-29T04:34:16.386Z  
**Source paper:** [SHIELD: Evaluation and Defense Strategies for Copyright Compliance in LLM Text Generation](https://arxiv.org/abs/2406.12975)  
**Tags:** `prompt-layer`, `jailbreak`, `extraction`, `data-security`, `integrity`, `blackbox`, `api`  
**Affected models (as reported):** Claude 3 Haiku, Gemini 1.5 Pro, Gemini Pro, GPT-3.5 Turbo, GPT-4o, Llama 2 7B Chat, Llama 3 8B Instruct, Mistral 7B Instruct

## Description

Large Language Models (LLMs) are vulnerable to prompt injection attacks that can bypass their internal copyright compliance mechanisms, causing them to generate verbatim copyrighted text. The vulnerability stems from insufficient robustness against prompt engineering techniques that manipulate the model into ignoring or circumventing its safety filters designed for copyright protection.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

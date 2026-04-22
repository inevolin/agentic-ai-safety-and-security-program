# Metaphor-Based LLM Jailbreak

**Promptfoo CVE ID:** `74d594c1`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-03-19T19:32:59.499Z  
**Source paper:** [from Benign import Toxic: Jailbreaking the Language Model via Adversarial Metaphors](https://arxiv.org/abs/2503.00038)  
**Tags:** `model-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, Gemini, GLM 3 6B, GPT-4o, GPT-4o Mini, Llama 3 8B, Llama 3.1 8B, Mistral 7B, o1, Qwen 2 72B, Qwen 2.5 32B, Qwen 2.5 7B

## Description

Large Language Models (LLMs) are vulnerable to a novel jailbreaking attack leveraging adversarial metaphors.  The attack, termed AVATAR, induces the LLM to reason about benign metaphors related to harmful tasks, ultimately leading to the generation of harmful content either directly or through calibration of metaphorical and professional harmful content.  The attack exploits the LLM's cognitive mapping process, bypassing standard safety mechanisms.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

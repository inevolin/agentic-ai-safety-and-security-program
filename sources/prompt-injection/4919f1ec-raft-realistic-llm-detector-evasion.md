# RAFT: Realistic LLM Detector Evasion

**Promptfoo CVE ID:** `4919f1ec`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-10-01  
**Analyzed:** 2025-07-14T03:50:14.758Z  
**Source paper:** [Raft: Realistic attacks to fool text detectors](https://arxiv.org/abs/2410.03658)  
**Tags:** `application-layer`, `injection`, `blackbox`, `data-security`, `integrity`  
**Affected models (as reported):** GPT-2, GPT-3.5 Turbo, GPT-4, GPT-4o, GPT-J 6B, GPT-Neo 2.7B, Llama, Llama 3 70B, Llama 3 8B, Mistral 7B v0.3, Mixtral 8x7B Instruct, OPT 2.7B, RoBERTa Base, RoBERTa Large, T5

## Description

Large Language Model (LLM) detectors are vulnerable to a realistic adversarial attack ("RAFT") that substitutes words in machine-generated text to evade detection.  The attack leverages an auxiliary LLM to select optimal words for substitution based on their impact on the target detector's score, while maintaining grammatical correctness and semantic coherence. This allows the attacker to significantly reduce the probability of detection (up to 99%) while preserving text quality, making the altered text indistinguishable from human-written text to human evaluators.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

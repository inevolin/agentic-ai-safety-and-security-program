# Implicit Clue Jailbreak

**Promptfoo CVE ID:** `38557b5e`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-02-01  
**Analyzed:** 2024-12-28T23:22:25.088Z  
**Source paper:** [Play guessing game with llm: Indirect jailbreak attack with implicit clues](https://arxiv.org/abs/2402.09091)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** Gemini Pro, GPT-3.5 Turbo, GPT-4, GPT-4 Turbo, Llama 13B, Llama 7B

## Description

Large Language Models (LLMs) are vulnerable to an indirect jailbreak attack, termed "Puzzler," which leverages implicit clues instead of explicit malicious intent in prompts. By providing associated behaviors or hints related to a malicious query, Puzzler elicits malicious responses from the LLM, bypassing its safety mechanisms. The attack works by first obtaining "defensive measures" from the LLM against a target malicious action, then querying for the corresponding "offensive measures" that circumvent those defenses. These offensive measures, presented as implicit clues, indirectly lead the LLM to generate the originally requested malicious output.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

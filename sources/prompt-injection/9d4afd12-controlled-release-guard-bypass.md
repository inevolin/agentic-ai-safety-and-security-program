# Controlled-Release Guard Bypass

**Promptfoo CVE ID:** `9d4afd12`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-12-30T18:29:48.023Z  
**Source paper:** [Bypassing Prompt Guards in Production with Controlled-Release Prompting](https://arxiv.org/abs/2510.01529)  
**Tags:** `application-layer`, `prompt-layer`, `jailbreak`, `injection`, `extraction`, `blackbox`, `safety`, `data-security`  
**Affected models (as reported):** GPT-5, Llama 4, Gemini 2, Mistral Large, DeepSeek-V3

## Description

A vulnerability termed "Controlled-Release Prompting" allows attackers to bypass lightweight input filters (prompt guards) deployed in front of Large Language Models (LLMs). The attack exploits the computational resource asymmetry between the resource-constrained guard model and the highly capable target model. Attackers encode malicious instructions using obfuscation techniquesâsuch as substitution ciphers (Timed-Release) or verbose character descriptions (Spaced-Release)âthat require multi-step reasoning or extended context windows to decode.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

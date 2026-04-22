# Personalized Encryption Jailbreak

**Promptfoo CVE ID:** `81380a03`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-02-01  
**Analyzed:** 2024-12-29T04:13:35.906Z  
**Source paper:** [Codechameleon: Personalized encryption framework for jailbreaking large language models](https://arxiv.org/abs/2402.16717)  
**Tags:** `jailbreak`, `prompt-layer`, `application-layer`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4-1106, Llama 2 13B Chat, Llama 2 70B Chat, Llama 2 7B Chat, Vicuna 13B, Vicuna 7B

## Description

A vulnerability exists in several Large Language Models (LLMs) allowing attackers to bypass safety and ethical protocols through a novel code injection technique using personalized encryption and decryption functions. The attack leverages the LLMs' code execution capabilities to process encrypted malicious instructions, circumventing the intent security recognition mechanism.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

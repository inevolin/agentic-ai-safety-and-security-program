# Distilled Jailbreak Prompt Generator

**Promptfoo CVE ID:** `d56e75cc`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:32:03.913Z  
**Source paper:** [KDA: A Knowledge-Distilled Attacker for Generating Diverse Prompts to Jailbreak LLMs](https://arxiv.org/abs/2502.05223)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** Claude 2.1, GPT-3.5 Turbo, GPT-4, GPT-4 Turbo, Llama 2 13B Chat, Llama 2 7B Chat, Mistral 7B, Qwen 14B Chat, Qwen 7B Chat, Vicuna 13B, Vicuna 7B

## Description

The Knowledge-Distilled Attacker (KDA) model, when used to generate prompts for large language models (LLMs), can bypass LLM safety mechanisms resulting in the generation of harmful, inappropriate, or misaligned content.  KDA's effectiveness stems from its ability to generate diverse and coherent attack prompts efficiently, surpassing existing methods in attack success rate and speed.  The vulnerability lies in the LLMs' insufficient defenses against the diverse prompt generation strategies learned and employed by KDA.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

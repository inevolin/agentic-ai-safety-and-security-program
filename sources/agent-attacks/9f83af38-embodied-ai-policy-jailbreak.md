# Embodied AI Policy Jailbreak

**Promptfoo CVE ID:** `9f83af38`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2024-12-01  
**Analyzed:** 2025-01-26T18:30:51.487Z  
**Source paper:** [POEX: Policy Executable Embodied AI Jailbreak Attacks](https://arxiv.org/abs/2412.16633)  
**Tags:** `jailbreak`, `application-layer`, `agent`, `safety`, `whitebox`  
**Affected models (as reported):** Claude 3.5 Sonnet, Gemma 2, GPT-4, GPT-4 Turbo, GPT-4o, GPT-4o Mini, Llama, Llama 3 8B, Llama 3 8B Instruct, Llama 3.1 70B Instruct, Mistral, Mistral 7B Instruct v0.2, Mixtral, Mixtral 8x22B Instruct, Phi 3, Qwen, Vicuna, Vicuna 13B v1.5

## Description

LLM-based planning modules in embodied AI systems are vulnerable to Policy Executable (POEX) jailbreak attacks.  Attackers can inject carefully crafted adversarial suffixes into user instructions, causing the LLM to generate and execute harmful policies in both simulated and real-world environments.  The attacks bypass safety mechanisms by using optimized, human-readable suffixes that evade perplexity-based detection.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

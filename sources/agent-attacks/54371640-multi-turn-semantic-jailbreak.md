# Multi-turn Semantic Jailbreak

**Promptfoo CVE ID:** `54371640`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2024-05-01  
**Analyzed:** 2025-03-04T19:21:04.290Z  
**Source paper:** [Chain of attack: a semantic-driven contextual multi-turn attacker for llm](https://arxiv.org/abs/2405.05610)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `safety`, `blackbox`, `agent`  
**Affected models (as reported):** Baichuan 2 7B Chat, ChatGLM2 6B, GPT-3.5 Turbo, Llama 2 7B Chat, Vicuna 13B v1.5

## Description

A vulnerability in large language models (LLMs) allows attackers to elicit unsafe or unethical responses through a chain of semantically relevant multi-turn prompts.  The attack, termed "Chain of Attack" (CoA), exploits the model's contextual understanding and adaptive response capabilities to gradually steer the conversation towards the desired harmful output, even if single-turn prompts are rejected due to safety mechanisms.  The attack leverages semantic similarity scoring (e.g., using SIMCSE) to guide the prompt generation and ensure a progressive increase in relevance to the target objective.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

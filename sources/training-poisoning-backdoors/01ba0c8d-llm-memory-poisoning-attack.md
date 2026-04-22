# LLM Memory Poisoning Attack

**Promptfoo CVE ID:** `01ba0c8d`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2024-07-01  
**Analyzed:** 2024-12-28T18:27:52.567Z  
**Source paper:** [Agentpoison: Red-teaming llm agents via poisoning memory or knowledge bases](https://arxiv.org/abs/2407.12784)  
**Tags:** `agent`, `rag`, `poisoning`, `blackbox`, `data-security`  
**Affected models (as reported):** GPT-2, GPT-3.5 Turbo, Llama 3 70B, Llama 3 8B, text-embedding-ada-002

## Description

A vulnerability in Retrieval-Augmented Generation (RAG)-based Large Language Model (LLM) agents allows attackers to inject malicious demonstrations into the agent's memory or knowledge base. By crafting a carefully optimized trigger, an attacker can manipulate the agent's retrieval mechanism to preferentially retrieve these poisoned demonstrations, causing the agent to produce adversarial outputs or take malicious actions even when seemingly benign prompts are used. The attack, termed AgentPoison, does not require model retraining or fine-tuning.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

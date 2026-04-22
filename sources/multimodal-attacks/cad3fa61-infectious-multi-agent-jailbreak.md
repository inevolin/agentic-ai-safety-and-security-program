# Infectious Multi-Agent Jailbreak

**Promptfoo CVE ID:** `cad3fa61`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-02-01  
**Analyzed:** 2024-12-29T00:20:18.922Z  
**Source paper:** [Agent smith: A single image can jailbreak one million multimodal llm agents exponentially fast](https://arxiv.org/abs/2402.08567)  
**Tags:** `multimodal`, `jailbreak`, `agent`, `safety`  
**Affected models (as reported):** GPT-4V, InstructBLIP, Llama 2, LLaVA 1.5

## Description

Multimodal Large Language Models (MLLMs) in multi-agent environments are vulnerable to "infectious jailbreak," where a single adversarial image injected into the memory of one agent can cause nearly all agents to exhibit harmful behaviors exponentially fast through agent-to-agent interaction. The adversarial image acts as a "virus," spreading via pairwise chats without further attacker intervention.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# Linked-Task LLM Jailbreak

**Promptfoo CVE ID:** `f9191be6`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-12-01  
**Analyzed:** 2024-12-28T23:29:33.410Z  
**Source paper:** [SATA: A Paradigm for LLM Jailbreak via Simple Assistive Task Linkage](https://arxiv.org/abs/2412.15289)  
**Tags:** `prompt-layer`, `jailbreak`, `safety`, `blackbox`, `integrity`  
**Affected models (as reported):** Claude-v2, GPT-3.5 Turbo, GPT-4o, GPT-4o Mini, Llama 3 70B, Llama 3 8B

## Description

A novel jailbreak paradigm, Simple Assistive Task Linkage (SATA), circumvents LLM safeguards by masking harmful keywords in a malicious query and using a secondary, simple assistive task (e.g., masked language modeling or element lookup by position) to convey the masked keywords' semantics to the LLM. This distracts the LLM and allows it to bypass safety checks, leading to the generation of harmful responses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

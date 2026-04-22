# Contextual Fusion Jailbreak

**Promptfoo CVE ID:** `c92fd327`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-08-01  
**Analyzed:** 2024-12-29T02:26:35.875Z  
**Source paper:** [Multi-Turn Context Jailbreak Attack on Large Language Models From First Principles](https://arxiv.org/abs/2408.04686)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** ChatGLM4, GPT-3.5 Turbo, GPT-4, Llama 3, Qwen 2, Vicuna v1.5

## Description

Large Language Models (LLMs) are vulnerable to a multi-turn context-based jailbreak attack, termed Context Fusion Attack (CFA). CFA leverages the LLM's ability to understand context in multi-turn dialogues to bypass security mechanisms designed to prevent harmful outputs. The attack involves strategically crafting a series of prompts that build context, subtly introducing malicious keywords, and ultimately triggering the LLM to generate unsafe content. The malicious intent is masked within the seemingly benign multi-turn conversation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# Social Facilitation Jailbreak

**Promptfoo CVE ID:** `2dd2a104`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2024-07-01  
**Analyzed:** 2025-01-26T18:24:45.085Z  
**Source paper:** [Sop: Unlock the power of social facilitation for automatic jailbreak attack](https://arxiv.org/abs/2407.01902)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `agent`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, Llama 2 7B Chat

## Description

The SoP framework allows for automated generation of jailbreak prompts, bypassing safety mechanisms in LLMs.  SoP utilizes multiple automatically optimized "jailbreak characters" within a single prompt to persuade the LLM to generate harmful or undesirable content, even without any seed jailbreak templates.  This vulnerability is demonstrated against GPT-3.5, GPT-4, and LLaMA-2.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

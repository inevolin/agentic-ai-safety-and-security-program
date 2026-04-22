# Persona-Based LLM Jailbreak

**Promptfoo CVE ID:** `2774f631`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-11-01  
**Analyzed:** 2024-12-29T04:16:14.846Z  
**Source paper:** [Scalable and transferable black-box jailbreaks for language models via persona modulation](https://arxiv.org/abs/2311.03348)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 2, GPT-4, Vicuna

## Description

Large Language Models (LLMs) are vulnerable to persona modulation attacks, a black-box jailbreak technique that leverages an LLM assistant to generate prompts causing the target LLM to adopt harmful personas and produce unsafe outputs. This vulnerability circumvents built-in safety mechanisms, enabling the generation of responses related to illegal activities (e.g., synthesizing drugs, building bombs, money laundering), hate speech, and other harmful content. The attack's effectiveness is amplified by the assistant LLM's capabilities; more powerful assistants generate more effective jailbreaks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

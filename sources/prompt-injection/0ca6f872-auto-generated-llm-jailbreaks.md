# Auto-Generated LLM Jailbreaks

**Promptfoo CVE ID:** `0ca6f872`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-09-01  
**Analyzed:** 2024-12-28T23:30:33.861Z  
**Source paper:** [Gptfuzzer: Red teaming large language models with auto-generated jailbreak prompts](https://arxiv.org/abs/2309.10253)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** 

## Description

Large Language Models (LLMs) are susceptible to automated jailbreak attacks using a fuzzing framework that generates variations of existing jailbreak prompts. This vulnerability allows bypassing built-in safety mechanisms, leading to the generation of harmful or unintended outputs. The vulnerability stems from the LLMs' inability to consistently recognize and reject semantically similar, but subtly different prompt variations generated through automated mutation techniques.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

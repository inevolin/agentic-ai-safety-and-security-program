# Targeted Noise Injection Jailbreak

**Promptfoo CVE ID:** `0b97c5e1`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-05-04T04:23:10.638Z  
**Source paper:** [XBreaking: Explainable Artificial Intelligence for Jailbreaking LLMs](https://arxiv.org/abs/2504.21700)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** Llama 3.2 1B, Llama 3.2 3B, Mistral 7B v0.3, Qwen 2.5 3B

## Description

A vulnerability in several Large Language Models (LLMs) allows bypassing safety mechanisms through targeted noise injection.  Explainable AI (XAI) techniques reveal specific layers within the LLM architecture most responsible for content filtering.  Injecting noise into these layers or preceding layers circumvents safety restrictions, enabling the generation of harmful or previously prohibited outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# Activation Steering Leaks PII

**Promptfoo CVE ID:** `91df60d8`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-07-14T04:09:51.041Z  
**Source paper:** [PII Jailbreaking in LLMs via Activation Steering Reveals Personal Information Leakage](https://arxiv.org/abs/2507.02332)  
**Tags:** `model-layer`, `extraction`, `jailbreak`, `data-privacy`, `blackbox`, `side-channel`  
**Affected models (as reported):** Gemma 2 9B, GLM 9B, GPT-4, GPT-4o Mini, Llama 2 7B, Llama 7B, Qwen 7B

## Description

Large Language Models (LLMs) are vulnerable to activation steering attacks that bypass safety and privacy mechanisms.  By manipulating internal attention head activations using lightweight linear probes trained on refusal/disclosure behavior, an attacker can induce the model to reveal Personally Identifiable Information (PII) memorized during training, including sensitive attributes like sexual orientation, relationships, and life events.  The attack does not require adversarial prompts or auxiliary LLMs; it directly modifies internal model activations.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

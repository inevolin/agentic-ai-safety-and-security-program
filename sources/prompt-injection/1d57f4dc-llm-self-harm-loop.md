# LLM Self-Harm Loop

**Promptfoo CVE ID:** `1d57f4dc`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-08T21:54:32.044Z  
**Source paper:** [Self-HarmLLM: Can Large Language Model Harm Itself?](https://arxiv.org/abs/2511.08597)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-3.5, Llama 3 8B, DeepSeek-R1 7B

## Description

Large Language Models (LLMs), specifically GPT-3.5-turbo, LLaMA3-8B-instruct, and DeepSeek-R1-Distill-Qwen-7B, are vulnerable to a "Self-Harm" jailbreak attack (Self-HarmLLM). This vulnerability exploits the model's ability to understand its own safety boundaries to generate adversarial inputs against itself. An attacker utilizes a two-session approach: in the first session (Mitigation Session), the attacker instructs the model to rewrite a harmful query into a "Mitigated Harmful Query" (MHQ)âan ambiguous version that obfuscates the harmful terms while preserving the original malicious intent. In the second session (Target Session), the attacker inputs this model-generated MHQ. The LLM fails to recognize the obfuscated harmful intent it previously generated, bypassing guardrails and producing prohibited content (e.g., malware code, hate speech, illegal instructions). This effectively allows the model to act as its own prompt engineer for jailbreaking.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

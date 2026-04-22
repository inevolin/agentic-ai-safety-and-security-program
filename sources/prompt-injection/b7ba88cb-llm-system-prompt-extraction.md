# LLM System Prompt Extraction

**Promptfoo CVE ID:** `b7ba88cb`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-12-30T20:40:22.932Z  
**Source paper:** [System Prompt Extraction Attacks and Defenses in Large Language Models](https://arxiv.org/abs/2505.23817)  
**Tags:** `prompt-layer`, `prompt-leaking`, `jailbreak`, `blackbox`, `data-privacy`, `data-security`  
**Affected models (as reported):** GPT-4, GPT-4o, Llama 3 8B, Falcon 7B, Gemma 2 9B

## Description

Large Language Models (LLMs), including Llama-3, Falcon-3, Gemma-2, and GPT-4 variants, are susceptible to system prompt extraction attacks. The vulnerability exists due to the models' instruction-following nature, which allows remote attackers to bypass safety guardrails and retrieve the model's hidden system configuration (system prompt) verbatim. This is successfully exploited using an "Extended Sandwich Attack," where an adversarial extraction command is embedded between benign questions in the same language, followed by specific negative constraints (e.g., instructing the model to omit headers or welcoming text). Successful exploitation results in the leakage of intellectual property, proprietary guidelines, and internal safety configurations.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

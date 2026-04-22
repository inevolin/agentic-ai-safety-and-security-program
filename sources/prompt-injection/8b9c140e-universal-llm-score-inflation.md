# Universal LLM Score Inflation

**Promptfoo CVE ID:** `8b9c140e`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-02-01  
**Analyzed:** 2024-12-29T03:54:33.963Z  
**Source paper:** [Is LLM-as-a-Judge Robust? Investigating Universal Adversarial Attacks on Zero-shot LLM Assessment](https://arxiv.org/abs/2402.14016)  
**Tags:** `application-layer`, `injection`, `model-layer`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** ChatGPT, Flan-T5 3B, GPT-3.5 Turbo, Llama 2 7B, Mistral 7B

## Description

Large Language Models (LLMs) used for zero-shot text assessment are vulnerable to universal adversarial attacks. Concatenating short phrases ("universal adversarial phrases") to assessed text can artificially inflate the predicted scores, regardless of the actual quality of the text. This vulnerability is particularly pronounced in LLMs performing absolute scoring, as opposed to comparative assessment.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

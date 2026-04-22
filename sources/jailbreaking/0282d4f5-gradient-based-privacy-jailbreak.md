# Gradient-Based Privacy Jailbreak

**Promptfoo CVE ID:** `0282d4f5`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-05-31T05:23:39.189Z  
**Source paper:** [PIG: Privacy Jailbreak Attack on LLMs via Gradient-based Iterative In-Context Optimization](https://arxiv.org/abs/2505.09921)  
**Tags:** `model-layer`, `extraction`, `jailbreak`, `whitebox`, `data-privacy`, `data-security`  
**Affected models (as reported):** Claude 3.5 Sonnet, GPT-4o, Llama 2 7B Chat, Llama 3 8B Instruct, Mistral 7B Instruct v0.3, Vicuna 7B v1.5

## Description

Large Language Models (LLMs) are vulnerable to a novel privacy jailbreak attack, dubbed PIG (Privacy Jailbreak Attack on LLMs via Gradient-based Iterative In-Context Optimization).  PIG leverages in-context learning and gradient-based iterative optimization to extract Personally Identifiable Information (PII) from LLMs, bypassing built-in safety mechanisms.  The attack iteratively refines a crafted prompt based on gradient information, focusing on tokens related to PII entities, thereby increasing the likelihood of successful PII extraction.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

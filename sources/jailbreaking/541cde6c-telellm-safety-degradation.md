# TeleLLM Safety Degradation

**Promptfoo CVE ID:** `541cde6c`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-12-09T01:46:13.288Z  
**Source paper:** [SafeCOMM: What about Safety Alignment in Fine-Tuned Telecom Large Language Models?](https://arxiv.org/abs/2506.00062)  
**Tags:** `model-layer`, `jailbreak`, `fine-tuning`, `whitebox`, `safety`, `data-security`  
**Affected models (as reported):** Llama 2 7B, Llama 3 8B, Llama 3.1 8B, Qwen 2 7B, Gemma 2 2B

## Description

Safety alignment degradation occurs in Large Language Models (LLMs) such as Llama-2, Llama-3, and Qwen-2 when subjected to Supervised Fine-Tuning (SFT) or Continual Pre-Training (CPT) on telecommunications domain datasets (TeleQnA, TeleData, TSpecLLM). The vulnerability arises because benign telecom dataâcharacterized by structured tabular entries, long standardization reports, and complex mathematical formulasâshares gradient update directions with harmful data types. This results in "embedding drift," where the model's internal safety refusal layers are overwritten or bypassed, causing the model to exhibit catastrophic forgetting of safety guardrails. Consequently, fine-tuned models become compliant with harmful queries, including general malicious requests and domain-specific threats against critical infrastructure.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

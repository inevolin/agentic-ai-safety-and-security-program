# Black-Box Query Optimization Attack

**Promptfoo CVE ID:** `508eaa8e`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-06-01  
**Analyzed:** 2024-12-29T04:25:56.320Z  
**Source paper:** [QROA: A Black-Box Query-Response Optimization Attack on LLMs](https://arxiv.org/abs/2406.02044)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `api`, `safety`, `integrity`  
**Affected models (as reported):** Falcon 7B Instruct, Llama 2 7B Chat, Mistral 7B Instruct, Vicuna-1.3 (7B)

## Description

Large Language Models (LLMs) are vulnerable to a black-box query-response optimization attack (QROA). QROA iteratively refines a malicious prompt suffix using a surrogate model to maximize a reward function that measures the likelihood of eliciting harmful content from the LLM. This attack does not require access to the model's internal parameters or logits; it operates solely via standard query-response interactions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

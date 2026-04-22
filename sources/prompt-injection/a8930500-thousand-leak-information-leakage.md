# Thousand-Leak Information Leakage

**Promptfoo CVE ID:** `a8930500`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-07-01  
**Analyzed:** 2024-12-29T04:18:35.618Z  
**Source paper:** [Breach By A Thousand Leaks: Unsafe Information Leakage inSafe'AI Responses](https://arxiv.org/abs/2407.02551)  
**Tags:** `prompt-layer`, `jailbreak`, `extraction`, `blackbox`, `data-security`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, Llama 3.1 8B Instruct, Llama Guard 3 8B

## Description

Large language models (LLMs) employing safety measures like filters and alignment training remain vulnerable to information leakage via "Decomposition Attacks". These attacks decompose a malicious query into multiple benign sub-queries, eliciting responses from the LLM that, when aggregated, reveal sensitive information without triggering safety filters or producing directly harmful outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

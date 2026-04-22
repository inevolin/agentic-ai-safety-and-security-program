# KV-Cache Sharing Timing Side-channel

**Promptfoo CVE ID:** `37989546`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-08-01  
**Analyzed:** 2026-01-14T14:55:10.683Z  
**Source paper:** [Selective kv-cache sharing to mitigate timing side-channels in llm inference](https://arxiv.org/abs/2508.08438)  
**Tags:** `infrastructure-layer`, `side-channel`, `extraction`, `blackbox`, `api`, `data-privacy`  
**Affected models (as reported):** Llama 2 13B, Llama 3.2 1B, Llama 3.3 70B, DeepSeek-R1, Qwen 2.5 30B, Phi-4

## Description

Multi-tenant Large Language Model (LLM) inference systems utilizing global Key-Value (KV) cache sharing are vulnerable to a timing side-channel attack. By measuring the Time-To-First-Token (TTFT) latency of crafted API requests, an unprivileged remote attacker can determine if specific token sequences have been previously processed and cached by the system for other users. This observable timing difference between cache hits (low TTFT) and cache misses (high TTFT) allows for the token-by-token reconstruction of sensitive user inputs, including Personally Identifiable Information (PII) and private prompt contexts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

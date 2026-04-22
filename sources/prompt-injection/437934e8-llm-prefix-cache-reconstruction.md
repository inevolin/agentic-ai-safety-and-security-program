# LLM Prefix Cache Reconstruction

**Promptfoo CVE ID:** `437934e8`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T22:18:23.378Z  
**Source paper:** [CacheSolidarity: Preventing Prefix Caching Side Channels in Multi-tenant LLM Serving Systems](https://arxiv.org/abs/2603.10726)  
**Tags:** `infrastructure-layer`, `extraction`, `side-channel`, `blackbox`, `api`, `data-privacy`  
**Affected models (as reported):** Llama 2 13B, Llama 4 7B, LLaVA 5B

## Description

Automatic Prefix Caching (APC) in multi-tenant LLM serving systems introduces a timing side-channel vulnerability that permits cross-tenant data leakage. APC shares computed Key-Value (KV) tensors across different users when their requests share identical initial tokens. Because reusing cached tensors is significantly faster than recomputing them, a measurable difference in Time-To-First-Token (TTFT) exists between cache hits and misses. An attacker can exploit this shared cache by sending crafted requests (probes) and observing the TTFT. A lower latency indicates a cache hit, confirming that the attacker's input matches a sequence in another user's prompt. This enables word-by-word prompt stealing and secret reconstruction. The side channel is particularly exploitable under low system load (low requests-per-second), with longer shared prefixes, and on larger model architectures where recomputation costs are high.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

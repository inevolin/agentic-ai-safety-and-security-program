# Efficient KV-Cache Prompt Leakage

**Promptfoo CVE ID:** `2d909463`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T23:01:03.648Z  
**Source paper:** [OptiLeak: Efficient Prompt Reconstruction via Reinforcement Learning in Multi-tenant LLM Services](https://arxiv.org/abs/2602.20595)  
**Tags:** `infrastructure-layer`, `side-channel`, `blackbox`, `data-privacy`  
**Affected models (as reported):** Llama 3.1 8B, Qwen 2.5 3B

## Description

A vulnerability in multi-tenant LLM serving frameworks allows attackers to reconstruct the private prompts of other users via an active Key-Value (KV) cache side-channel. Frameworks that utilize shared KV caches alongside specific scheduling policies, such as Longest Prefix Match (LPM), prioritize waiting requests based on the length of their matched prefix tokens. An attacker can exploit this by iteratively sending batches of guessed tokens mixed with dummy queries. If a guessed token matches a victim's cached prompt, the cache hit causes the scheduling engine to prioritize the response, creating a measurable gap in the response ordering or Time to First Token (TTFT). By using a locally optimized model to generate high-probability domain-specific guesses, an attacker can efficiently reconstruct sensitive user prompts token-by-token.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

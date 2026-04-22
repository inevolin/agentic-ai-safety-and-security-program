# Semantic Cache Collision Hijack

**Promptfoo CVE ID:** `9a07c0f2`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-09T04:29:04.441Z  
**Source paper:** [From Similarity to Vulnerability: Key Collision Attack on LLM Semantic Caching](https://arxiv.org/abs/2601.23088)  
**Tags:** `application-layer`, `injection`, `side-channel`, `embedding`, `blackbox`, `agent`, `integrity`, `safety`  
**Affected models (as reported):** Llama 3.1 8B, Mistral 7B, DeepSeek-R1

## Description

Semantic caching mechanisms in LLM applications are vulnerable to cross-tenant cache key collision attacks (CacheAttack) due to the inherent mathematical conflict between locality-preserving fuzzy hashing and cryptographic collision resistance (the avalanche effect). An attacker can leverage gradient-based search algorithms to optimize an adversarial discrete suffix that, when appended to a malicious prompt, forces its output embedding vector to collide with the embedding of a targeted benign query. By sending this crafted prompt to the LLM system, the attacker plants a malicious response or intermediate execution state into the shared cache. When a victim subsequently issues the targeted benign query, the system triggers a false-positive cache hit based on cosine similarity thresholds or Locality-Sensitive Hashing (LSH) boundaries. This allows the attacker to hijack the victim's session and serve an arbitrary, attacker-controlled payload without directly modifying backend cache memory or model parameters.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# Automated LLM Fingerprinting

**Promptfoo CVE ID:** `4e854dda`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-12-09T02:08:53.050Z  
**Source paper:** [Attacks and defenses against llm fingerprinting](https://arxiv.org/abs/2508.09021)  
**Tags:** `model-layer`, `prompt-layer`, `side-channel`, `blackbox`, `data-privacy`, `data-security`  
**Affected models (as reported):** Mistral 7B, Qwen 2 5B, Gemma 2 2B, Gemma 7B

## Description

Large Language Models (LLMs) exposed via public APIs are vulnerable to model fingerprinting attacks where an attacker can identify the exact backend model family and version (e.g., distinguishing Mistral-7B-v0.1 from v0.3) by analyzing response patterns. While traditional fingerprinting relies on manual query curation, this vulnerability is exacerbated by Reinforcement Learning (RL) based query optimization. An attacker can train an RL agent (specifically using Proximal Policy Optimization) to traverse a candidate pool of queries and identify a minimal optimal subset (e.g., 3 queries) that maximizes discriminative power. This allows for high-accuracy identification (observed ~93.89%) with minimal interaction, effectively bypassing security through obscurity or simple API wrapping. The vulnerability stems from the unique, immutable statistical signatures and alignment behaviors inherent to specific model training runs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

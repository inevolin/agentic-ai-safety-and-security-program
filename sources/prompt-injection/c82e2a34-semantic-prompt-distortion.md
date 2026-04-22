# Semantic Prompt Distortion

**Promptfoo CVE ID:** `c82e2a34`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-12-09T03:18:29.263Z  
**Source paper:** [Semantic-Preserving Adversarial Attacks on LLMs: An Adaptive Greedy Binary Search Approach](https://arxiv.org/abs/2506.18756)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-3.5, GPT-4, GPT-4o, Llama 3.1 8B, Llama 3.2 1B, Llama 3.3 70B, Qwen 2.5 5B, Gemma 2 2B, Phi-3 8B

## Description

The Adaptive Greedy Binary Search (AGBS) framework exposes a vulnerability in Large Language Models (LLMs) regarding their susceptibility to semantic-preserving adversarial attacks. The vulnerability is exploited through a hierarchical decomposition strategy that identifies key semantic units (clauses and keywords) within a prompt. AGBS utilizes a dynamic threshold mechanism to adjust semantic similarity bounds in real-time during a beam search process, replacing tokens with candidates that maintain high semantic similarity (e.g., maintaining a BERTScore of $\approx 0.80$) while maximizing adversarial loss. This allows an attacker to generate adversarial inputs that are grammatically coherent and semantically indistinguishable from benign inputs to human observers, yet induce targeted misbehavior, incorrect reasoning, or erroneous outputs in the victim model. This method bypasses static optimization strategies and defense mechanisms that rely on detecting significant semantic drift.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

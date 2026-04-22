# Noisy Data Pretraining Divergence

**Promptfoo CVE ID:** `81594649`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T23:57:41.183Z  
**Source paper:** [An Empirical Study on Noisy Data and LLM Pretraining Loss Divergence](https://arxiv.org/abs/2602.02400)  
**Tags:** `model-layer`, `poisoning`, `denial-of-service`, `reliability`  
**Affected models (as reported):** Llama 3, Llama 4

## Description

A data poisoning vulnerability exists in the pretraining pipeline of Transformer-based Large Language Models (LLMs) where the injection of synthetic uniform random noise into the training corpus induces irreversible training loss divergence or performance degradation. This instability is mechanistically distinct from divergence caused by high learning rates. The vulnerability is specifically triggered by "insertion noise" (inserting random tokens between clean tokens) drawn from a restricted noise vocabulary (e.g., a small subset of $\le$ 5 unique tokens repeated frequently) rather than the full tokenizer vocabulary. The probability of divergence scales with the noise ratio, model size, and specifically model depth, affecting both Dense and Mixture-of-Experts (MoE) architectures.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

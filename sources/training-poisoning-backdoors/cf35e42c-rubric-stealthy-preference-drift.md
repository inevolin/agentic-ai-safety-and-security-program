# Rubric Stealthy Preference Drift

**Promptfoo CVE ID:** `cf35e42c`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-22T03:11:49.707Z  
**Source paper:** [Rubrics as an Attack Surface: Stealthy Preference Drift in LLM Judges](https://arxiv.org/abs/2602.13576)  
**Tags:** `prompt-layer`, `poisoning`, `fine-tuning`, `chain`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** Llama 3 8B, Llama 3.1 8B, DeepSeek-V3, Gemma 2 2B

## Description

LLM-as-a-Judge systems utilizing natural language rubrics are vulnerable to Rubric-Induced Preference Drift (RIPD). This vulnerability allows an attacker (or a flawed optimization process) to refine evaluation rubrics such that they maintain high agreement with human references on standard validation benchmarks while inducing systematic, directional preference degradation on unseen target domains. The attack exploits the disconnect between benchmark validation and target generalization by employing population-based evolutionary search to discover rubric variants that decouple benchmark performance from target behavior. When these compromised judges are used to generate preference labels for Reinforcement Learning from Human Feedback (RLHF) or Direct Preference Optimization (DPO), the induced bias (e.g., extreme brevity or excessive refusal) propagates into the downstream model policy, bypassing standard benchmark-based integrity checks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

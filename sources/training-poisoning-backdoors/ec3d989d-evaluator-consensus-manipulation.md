# Evaluator Consensus Manipulation

**Promptfoo CVE ID:** `ec3d989d`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T01:10:15.642Z  
**Source paper:** [Adaptive and Robust Cost-Aware Proof of Quality for Decentralized LLM Inference Networks](https://arxiv.org/abs/2601.21189)  
**Tags:** `infrastructure-layer`, `poisoning`, `embedding`, `agent`, `integrity`, `reliability`  
**Affected models (as reported):** 

## Description

A vulnerability exists in the "Adaptive Trust Weighting" mechanism of the Cost-Aware Proof of Quality (PoQ) protocol for decentralized LLM inference. The protocol updates evaluator trust weights based on the deviation of a submitted score from the consensus score of the current round. Because the consensus score is derived from the very scores being evaluated (a self-referential feedback loop), the mechanism fails to distinguish between honest and coordinated malicious evaluators. Additionally, the multiplicative update rule causes trust weights to drift upward and saturate at the maximum bound ($w_{max}$) for any evaluator whose average deviation is less than 0.5. When weights saturate, the "Adaptive Weighted Mean" degrades into a "Simple Mean," bypassing the intended reputation defense and rendering the network susceptible to score manipulation, payout inflation, and sabotage.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

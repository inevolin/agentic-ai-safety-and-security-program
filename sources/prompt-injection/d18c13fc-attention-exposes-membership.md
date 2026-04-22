# Attention Exposes Membership

**Promptfoo CVE ID:** `d18c13fc`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T04:48:28.797Z  
**Source paper:** [AttenMIA: LLM Membership Inference Attack through Attention Signals](https://arxiv.org/abs/2601.18110)  
**Tags:** `model-layer`, `extraction`, `whitebox`, `data-privacy`  
**Affected models (as reported):** GPT-4o 20B, Llama 2 13B

## Description

Transformer-based Large Language Models (LLMs) contain a privacy vulnerability within their self-attention mechanisms that allows for Membership Inference Attacks (MIA). Pre-training induces distinct, highly structured, and concentrated attention patterns for data samples included in the training set, differentiating them from non-member samples which exhibit noisier, less consistent attention flows. An attacker with white-box access to the model parameters (specifically attention weight matrices) can exploit these internal signalsârather than relying on surface-level output probabilities or perplexityâto determine membership. The vulnerability is exploited by analyzing transitional attention features (consistency across layers/heads) and sensitivity to input perturbations (e.g., token dropping), allowing for the identification of training data with high precision, even at low false-positive rates.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

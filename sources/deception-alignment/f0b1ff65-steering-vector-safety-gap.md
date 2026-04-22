# Steering Vector Safety Gap

**Promptfoo CVE ID:** `f0b1ff65`  
**Category (this corpus):** `deception-alignment`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T21:39:01.310Z  
**Source paper:** [Analysing the Safety Pitfalls of Steering Vectors](https://arxiv.org/abs/2603.24543)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 2 7B, Qwen 2.5 3B, Gemma 7B

## Description

Activation steering techniques, such as Contrastive Activation Addition (CAA), systematically erode the safety alignment of Large Language Models (LLMs) due to geometric interference within the residual stream. Steering vectors intended to modulate benign or utility-driven behaviors (e.g., sycophancy, openness, self-awareness) often exhibit a negative cosine similarity with the model's latent 1D refusal direction. When applied during inference, these steering vectors inadvertently suppress the refusal subspace. This geometric overlap acts as an amplifier for latent alignment flaws, increasing the Attack Success Rate (ASR) of otherwise weak, prompt-level template attacks by up to 57%. Conversely, steering vectors that positively align with the refusal direction drastically increase the False Refusal Rate (FRR) on benign queries, leading to denial of utility.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

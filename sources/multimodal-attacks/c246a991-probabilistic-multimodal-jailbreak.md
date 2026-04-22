# Probabilistic Multimodal Jailbreak

**Promptfoo CVE ID:** `c246a991`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-03-19T19:29:18.274Z  
**Source paper:** [Utilizing Jailbreak Probability to Attack and Safeguard Multimodal LLMs](https://arxiv.org/abs/2503.06989)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `blackbox`, `multimodal`, `vision`, `safety`, `integrity`  
**Affected models (as reported):** DeepSeek VL 1.3B, InstructBLIP Vicuna 13B, InternLM XComposer, MiniGPT-4 Vicuna 13B, Qwen VL Chat

## Description

Multimodal Large Language Models (MLLMs) are vulnerable to Jailbreak-Probability-based Attacks (JPA).  JPA leverages a Jailbreak Probability Prediction Network (JPPN) to identify and optimize adversarial perturbations in input images, maximizing the probability of eliciting harmful responses from the MLLM, even with small perturbation bounds and few iterations.  The attack operates by modifying the input image's hidden states within the MLLM to increase the predicted jailbreak probability.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

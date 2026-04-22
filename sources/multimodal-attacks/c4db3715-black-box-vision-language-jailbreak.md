# Black-Box Vision-Language Jailbreak

**Promptfoo CVE ID:** `c4db3715`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T17:35:57.520Z  
**Source paper:** [Crafting Adversarial Inputs for Large Vision-Language Models Using Black-Box Optimization](https://arxiv.org/abs/2601.01747)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** Llama 2 13B, InstructBLIP, LLaVA, Vicuna 13B

## Description

Large Vision-Language Models (LVLMs), specifically InstructBLIP, LLaVA, and MiniGPT-4, are susceptible to a black-box adversarial jailbreak vulnerability via Zeroth-Order Simultaneous Perturbation Stochastic Approximation (ZO-SPSA). An attacker can generate adversarial images with imperceptible perturbations that, when paired with harmful text prompts, bypass the model's safety alignment mechanisms (such as RLHF). Unlike traditional white-box attacks, this method does not require access to model gradients or parameters; it optimizes the adversarial input solely through input-output interactions (forward passes) by estimating gradients. This allows for the generation of prohibited content, including instructions for illegal acts, hate speech, and disinformation, with high transferability across different model architectures.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

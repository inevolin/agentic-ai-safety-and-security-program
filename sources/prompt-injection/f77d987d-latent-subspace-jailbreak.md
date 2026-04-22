# Latent Subspace Jailbreak

**Promptfoo CVE ID:** `f77d987d`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-03-19T19:31:03.592Z  
**Source paper:** [Probing Latent Subspaces in LLM for AI Security: Identifying and Manipulating Adversarial States](https://arxiv.org/abs/2503.09066)  
**Tags:** `model-layer`, `jailbreak`, `injection`, `whitebox`  
**Affected models (as reported):** Llama 3.1 8B Instruct

## Description

A vulnerability exists in large language models (LLMs) where the model's internal representations (activations) in specific latent subspaces can be manipulated to trigger jailbreak responses.  By calculating a perturbation vector based on the difference between the mean activations of "safe" and "jailbroken" states, an attacker can introduce a targeted perturbation to the model's activations, causing it to generate unsafe outputs even when presented with a safe prompt. This manipulates the model's state, causing it to transition from a safe to a jailbroken state.  The success rate is context-dependent.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

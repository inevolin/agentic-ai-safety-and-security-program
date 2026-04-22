# Latent Refusal Suppression

**Promptfoo CVE ID:** `742a643d`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-12-09T03:40:20.980Z  
**Source paper:** [An Embarrassingly Simple Defense Against LLM Abliteration Attacks](https://arxiv.org/abs/2505.19056)  
**Tags:** `model-layer`, `jailbreak`, `fine-tuning`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 2 7B, Qwen 2.5 5B

## Description

Large Language Models (LLMs), specifically Llama-2-7B-Chat and Qwen2.5-Instruct (1.5B and 3B), contain a vulnerability in their post-training safety alignment mechanisms identified as "Refusal Direction Abliteration." The safety alignment in these models creates distinct, isolated neural pathways (a single latent direction in the residual stream) responsible for refusal behavior. An attacker can identify this specific direction by computing the difference in mean activations between harmful and benign prompts. By performing weight surgeryâspecifically orthogonal projectionâto remove this direction from the model's output projection matrices, the safety guardrails are neutralized. This results in the model fulfilling harmful requests while maintaining general utility, effectively bypassing RLHF/SFT safety tuning without the need for prompt-based jailbreaks or adversarial training.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

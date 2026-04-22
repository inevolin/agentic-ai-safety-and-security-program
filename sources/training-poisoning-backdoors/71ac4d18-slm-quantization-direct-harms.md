# SLM Quantization Direct Harms

**Promptfoo CVE ID:** `71ac4d18`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-12-08T23:58:38.392Z  
**Source paper:** [LiteLMGuard: Seamless and Lightweight On-Device Prompt Filtering for Safeguarding Small Language Models against Quantization-induced Risks andÂ â¦](https://arxiv.org/abs/2505.05619)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `poisoning`, `fine-tuning`, `blackbox`, `safety`, `data-privacy`  
**Affected models (as reported):** Llama 3.2, Gemma, Gemma 2, Phi-3

## Description

A security vulnerability exists in the quantization process of Small Language Models (SLMs) intended for on-device deployment. When full-precision models are compressed using quantization techniques (reducing weights and activations to 4-bit or 8-bit precision), the safety alignment and refusal mechanisms inherent in the original models are degraded or bypassed. This "Quantization-induced Risk" allows the quantized versions of models to respond to harmful, unethical, or illegal queries directly, without the need for adversarial manipulation or complex jailbreaking strategies. This vulnerability facilitates "Open Knowledge Attacks," where users can extract restricted information using vanilla prompts that would be rejected by the full-precision counterpart.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

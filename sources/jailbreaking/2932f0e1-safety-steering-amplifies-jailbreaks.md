# Safety Steering Amplifies Jailbreaks

**Promptfoo CVE ID:** `2932f0e1`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T05:10:18.333Z  
**Source paper:** [Steering Safely or Off a Cliff? Rethinking Specificity and Robustness in Inference-Time Interventions](https://arxiv.org/abs/2602.06256)  
**Tags:** `model-layer`, `jailbreak`, `hallucination`, `rag`, `whitebox`, `safety`, `reliability`  
**Affected models (as reported):** Llama 3.1 8B, Llama 3.2 3B, Qwen 2.5 7B, Gemma 2 2B

## Description

Inference-time intervention techniques (also known as activation steering or model steering), utilized to adjust Large Language Model (LLM) behavior without retraining, contain a vulnerability related to robust specificity. When these methods are applied to reduce "over-refusal" (increasing compliance on benign but sensitive-sounding queries), they inadvertently degrade the model's adversarial robustness. Specifically, steering vectors derived from methods such as Difference-in-Means (DiffMean), Linear Probing (LinearProbe), Supervised Steering Vectors (SSV), and Rank-1 Representation Finetuning (ReFT-r1) force model activations toward a "compliant" direction. While this preserves safety for standard harmful queries, it creates a bypass vector for jailbreak attacks. Internal representations of harmful queries prefixed with jailbreaks cluster closely with benign queries; the steering intervention amplifies compliance for this cluster, causing the model to fulfill malicious requests it would otherwise refuse.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

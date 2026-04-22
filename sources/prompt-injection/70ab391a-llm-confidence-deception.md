# LLM Confidence Deception

**Promptfoo CVE ID:** `70ab391a`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-12-09T02:55:48.531Z  
**Source paper:** [On the Robustness of Verbal Confidence of LLMs in Adversarial Attacks](https://arxiv.org/abs/2507.06489)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `integrity`, `reliability`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4, GPT-4o, o3, Llama 3 8B, Llama 3.1 8B, Llama 3.3 70B

## Description

Large Language Models (LLMs) employing Verbal Confidence Elicitation (CEM)âwhere the model outputs a numeric confidence score (e.g., "Confidence: 90%") alongside an answerâare vulnerable to Verbal Confidence Attacks (VCAs). Adversaries can manipulate these confidence scores through two primary vectors: perturbation-based attacks (VCA-TF, VCA-TB, SSR) utilizing synonym substitution, typos, and token removal; and jailbreak-based attacks (ConfidenceTriggers, AutoDAN) utilizing optimized trigger phrases. These attacks can be applied to user queries, system prompts, or one-shot demonstrations. Successful exploitation results in significant misalignment between the model's internal probability and its verbalized confidence, often reducing confidence by over 20% or inducing answer flips (misclassification) while maintaining semantic similarity (SS > 0.8) to the original input. Common defenses such as perplexity filtering, paraphrasing, and SmoothLLM are demonstrated to be largely ineffective or counterproductive.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

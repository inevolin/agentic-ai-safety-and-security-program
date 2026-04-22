# Dangerous Medical Faithfulness

**Promptfoo CVE ID:** `fd1d430c`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-04-11T04:47:17.940Z  
**Source paper:** [Faithfulness vs. Safety: Evaluating LLM Behavior Under Counterfactual Medical Evidence](https://arxiv.org/abs/2601.11886)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `rag`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** GPT-5, o1 7B, Llama 2 7B, Llama 3.1 8B, Llama 4 17B, Gemini 2, Qwen 2.5 7B

## Description

A vulnerability exists in frontier Large Language Models (LLMs) where in-context information (e.g., provided via Retrieval-Augmented Generation) completely overrides parametric safety guardrails when processing counterfactual or adversarial medical evidence. When a prompt contains fabricated clinical context asserting the medical efficacy of toxic substances, illicit drugs, or nonsensical items, the LLM suppresses its internal knowledge of the substance's toxicity. Internal representation analysis reveals that while models briefly activate parametric knowledge of a toxic or nonsensical term, this is overwritten by the contextual evidence within approximately six tokens. Instead of refusing the prompt or expressing safety warnings, the model blindly adheres to the adversarial context, bypassing safety filters to produce confident, uncaveated, and medically dangerous evidence synthesis.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# Fine-Tuning Safety Subspace Erosion

**Promptfoo CVE ID:** `137785d2`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-12-09T01:48:12.679Z  
**Source paper:** [Lox: Low-rank extrapolation robustifies llm safety against fine-tuning](https://arxiv.org/abs/2506.15606)  
**Tags:** `model-layer`, `jailbreak`, `fine-tuning`, `whitebox`, `api`, `safety`  
**Affected models (as reported):** GPT-3.5, Llama 2 7B, Mistral 7B

## Description

Large Language Models (LLMs) aligned via techniques such as Reinforcement Learning with Human Feedback (RLHF) or Direct Preference Optimization (DPO) contain a vulnerability in how safety features are encoded within the model parameters. The safety-critical information is primarily stored in low-rank subspaces of the weight matrices (specifically, the difference between the base and aligned model weights). These low-rank subspaces are highly sensitive to parameter updates. Consequently, subsequent fine-tuningâwhether performed with malicious intent using harmful datasets or benign intent using standard instruction-tuning datasetsâdisrupts these subspaces. This "washes out" the safety alignment, allowing the model to bypass refusal mechanisms and generate harmful content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

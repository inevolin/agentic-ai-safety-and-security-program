# Chunky Post-Training Miscalibration

**Promptfoo CVE ID:** `64f42df8`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T17:39:15.581Z  
**Source paper:** [Chunky Post-Training: Data Driven Failures of Generalization](https://arxiv.org/abs/2602.05910)  
**Tags:** `model-layer`, `jailbreak`, `hallucination`, `fine-tuning`, `blackbox`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** GPT-5.1, Claude 4.5, Llama 3.1, Qwen 2 7B

## Description

Large Language Models (LLMs) exhibit a vulnerability termed "chunky post-training," where the model learns spurious correlations between incidental prompt features (e.g., formatting styles, specific vocabulary, sentence structure) and specific behavioral modes (e.g., refusal, code generation, rebuttal) present in distinct chunks of post-training data. This results in behavioral mis-routing during inference, where benign inputs sharing surface-level features with restricted or specialized training data trigger inappropriate model modes. For instance, models may treat formal language as a signal to generate code or treat factual statements as unwarranted rebuttals due to over-generalization from specific instruction-tuning datasets.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

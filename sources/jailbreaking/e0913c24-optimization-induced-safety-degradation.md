# Optimization-Induced Safety Degradation

**Promptfoo CVE ID:** `e0913c24`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-12-30T20:33:36.150Z  
**Source paper:** [Rethinking safety in llm fine-tuning: An optimization perspective](https://arxiv.org/abs/2508.12531)  
**Tags:** `model-layer`, `jailbreak`, `fine-tuning`, `safety`, `whitebox`  
**Affected models (as reported):** GPT-4, GPT-4o, Llama 2 7B, Llama 3.2 1B, Qwen 2.5 3B, Phi-3 3B

## Description

Safety alignment degradation occurs in instruction-tuned Large Language Models (LLMs), specifically Llama-2-7B, Llama-3.2-1B, Qwen2.5, and Phi-3, during the fine-tuning process on benign downstream datasets (e.g., Dolly, Alpaca). This vulnerability results from suboptimal optimization configurationsâspecifically aggressive learning rates, small batch sizes, and insufficient gradient accumulationâwhich cause the model parameters to diverge from the pre-trained safety optimization landscape (the "safety basin"). Consequently, the model experiences catastrophic forgetting of safety guardrails (RLHF alignment), resulting in a high Attack Success Rate (ASR) on harmful prompts despite the absence of malicious data in the fine-tuning set.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

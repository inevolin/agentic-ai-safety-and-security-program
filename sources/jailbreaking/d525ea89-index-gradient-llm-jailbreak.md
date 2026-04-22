# Index-Gradient LLM Jailbreak

**Promptfoo CVE ID:** `d525ea89`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-12-01  
**Analyzed:** 2024-12-29T04:03:25.994Z  
**Source paper:** [Exploiting the Index Gradients for Optimization-Based Jailbreaking on Large Language Models](https://arxiv.org/abs/2412.08615)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** Claude3, GPT-3.5 Turbo, GPT-4, GPT-4o, Guanaco 7B, Llama 2 7B Chat, Llama2- 7B-chat, Mistral7B-instruct-0.2, Vicuna 7B

## Description

Large Language Models (LLMs) are vulnerable to optimization-based jailbreaking attacks that exploit gradients during the iterative process of generating adversarial suffixes. The vulnerability stems from the inefficient exploration of the token space in existing methods like Greedy Coordinate Gradient (GCG), which uniformly samples tokens for replacement regardless of gradient values. This leads to redundant computations and a slow optimization process.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

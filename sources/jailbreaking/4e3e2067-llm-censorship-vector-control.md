# LLM Censorship Vector Control

**Promptfoo CVE ID:** `4e3e2067`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-05-04T04:20:12.463Z  
**Source paper:** [Steering the CensorShip: Uncovering Representation Vectors for LLM" Thought" Control](https://arxiv.org/abs/2504.17130)  
**Tags:** `model-layer`, `extraction`, `jailbreak`, `side-channel`, `whitebox`, `data-privacy`, `data-security`, `integrity`, `safety`  
**Affected models (as reported):** DeepSeek R1 Distill Qwen 1.5B, DeepSeek R1 Distill Qwen 32B, DeepSeek R1 Distill Qwen 7B, Gemma 2B, Gemma 7B, Llama 2 7B, Llama 3.1 8B, Qwen 1.8B, Qwen 2.5 7B, Qwen 7B, Yi 1.5 6B

## Description

Large Language Models (LLMs) employing safety mechanisms based on supervised fine-tuning and preference alignment exhibit a vulnerability to "steering" attacks.  Maliciously crafted prompts or input manipulations can exploit representation vectors within the model to either bypass censorship ("refusal-compliance vector") or suppress the model's reasoning process ("thought suppression vector"), resulting in the generation of unintended or harmful outputs.  This vulnerability is demonstrated across several instruction-tuned and reasoning LLMs from various providers.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

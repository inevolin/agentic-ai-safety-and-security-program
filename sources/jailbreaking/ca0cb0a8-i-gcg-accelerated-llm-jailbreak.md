# I-GCG: Accelerated LLM Jailbreak

**Promptfoo CVE ID:** `ca0cb0a8`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-05-01  
**Analyzed:** 2024-12-29T00:02:01.917Z  
**Source paper:** [Improved techniques for optimization-based jailbreaking on large language models](https://arxiv.org/abs/2405.21018)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, Guanaco 7B, Llama 2 7B Chat, Mistral-7B-instruct-0.2, Starling-7B-alpha, Vicuna-7B-1.5

## Description

Large Language Models (LLMs) are vulnerable to improved optimization-based jailbreaking attacks. The vulnerability stems from the susceptibility of LLMs to crafted prompts that exploit weaknesses in their safety mechanisms, allowing them to generate harmful responses despite safety training. This vulnerability is exacerbated by the use of diverse target templates containing harmful self-suggestions and guidance within the optimization goal, accelerating the convergence of the attack.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

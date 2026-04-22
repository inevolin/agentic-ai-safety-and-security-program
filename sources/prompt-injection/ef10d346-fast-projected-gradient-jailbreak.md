# Fast Projected Gradient Jailbreak

**Promptfoo CVE ID:** `ef10d346`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-02-01  
**Analyzed:** 2024-12-28T22:51:02.908Z  
**Source paper:** [Attacking large language models with projected gradient descent](https://arxiv.org/abs/2402.09154)  
**Tags:** `model-layer`, `jailbreak`, `injection`, `whitebox`, `blackbox`, `side-channel`, `safety`  
**Affected models (as reported):** Falcon 7B, Falcon 7B Instruct, Vicuna 7B v1.3

## Description

Large Language Models (LLMs) are vulnerable to efficient adversarial attacks using Projected Gradient Descent (PGD) on a continuously relaxed input prompt. This attack bypasses existing alignment methods by crafting adversarial prompts that induce the model to produce undesired or harmful outputs, significantly faster than previous state-of-the-art discrete optimization methods. The effectiveness stems from carefully controlling the error introduced by the continuous relaxation of the discrete token input.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

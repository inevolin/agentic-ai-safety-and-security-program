# Direct Parameter Jailbreak

**Promptfoo CVE ID:** `77fd1d24`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-07-01  
**Analyzed:** 2024-12-29T04:34:43.980Z  
**Source paper:** [Model Surgery: Modulating LLM's Behavior Via Simple Parameter Editing](https://arxiv.org/abs/2407.08770)  
**Tags:** `model-layer`, `whitebox`, `jailbreak`, `extraction`, `data-security`, `safety`, `integrity`  
**Affected models (as reported):** Code Llama 7B, Llama 2 7B, Llama 2 7B Chat, Mistral 7B

## Description

A vulnerability exists in large language models (LLMs) where a small subset of parameters can be directly edited to significantly alter the model's behavior, such as inducing or suppressing toxicity, jailbreaking susceptibility, or altering sentiment expression. This manipulation is achieved through training a linear classifier ("behavior probe") to identify parameters strongly correlated with the target behavior and then modifying those parameters, bypassing standard retraining methods.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

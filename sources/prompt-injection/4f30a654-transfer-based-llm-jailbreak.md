# Transfer-Based LLM Jailbreak

**Promptfoo CVE ID:** `4f30a654`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-05-01  
**Analyzed:** 2024-12-29T04:27:40.733Z  
**Source paper:** [Improved Generation of Adversarial Examples Against Safety-aligned LLMs](https://arxiv.org/abs/2405.20778)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `injection`, `safety`  
**Affected models (as reported):** GPT-3.5 Turbo, Llama 2 13B Chat, Llama 2 7B Chat, Mistral 7B Instruct v0.2, Phi3-mini-4k-instruct

## Description

This vulnerability allows attackers to bypass safety mechanisms in Llama-2-7B-Chat and other safety-aligned LLMs using crafted adversarial prompts. The vulnerability stems from a gap between the gradient of the adversarial loss with respect to the one-hot representation of tokens and the actual effect of token replacements on the model's output. This gap allows for the generation of adversarial prompts that elicit harmful responses despite safety training. The paper demonstrates that techniques inspired by transfer-based attacks against image classification models can significantly improve the success rate of these adversarial attacks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

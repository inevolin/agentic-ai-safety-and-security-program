# LoRA Bypass Safety Training

**Promptfoo CVE ID:** `6baa3831`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-10-01  
**Analyzed:** 2024-12-28T22:38:39.210Z  
**Source paper:** [Lora fine-tuning efficiently undoes safety training in llama 2-chat 70b](https://arxiv.org/abs/2310.20624)  
**Tags:** `model-layer`, `fine-tuning`, `jailbreak`, `injection`, `safety`, `data-security`, `whitebox`  
**Affected models (as reported):** Llama 2 13B Chat, Llama 2 70B Chat, Llama 2 7B Chat, Mixtral

## Description

Low-rank adaptation (LoRA) fine-tuning allows efficient circumvention of safety training in large language models (LLMs), such as Llama 2-Chat 70B, resulting in significantly reduced refusal rates for harmful prompts while maintaining general performance capabilities. Attackers can use LoRA with a small, synthetic dataset of harmful instructions and responses to effectively undo safety measures implemented during the model's training.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

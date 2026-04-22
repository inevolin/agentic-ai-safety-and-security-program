# Prompt-Driven LLM Jailbreak

**Promptfoo CVE ID:** `5d951789`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-11-01  
**Analyzed:** 2024-12-29T03:58:31.129Z  
**Source paper:** [DROJ: A Prompt-Driven Attack against Large Language Models](https://arxiv.org/abs/2411.09125)  
**Tags:** `prompt-layer`, `jailbreak`, `whitebox`, `model-layer`, `safety`  
**Affected models (as reported):** Claude 2, GPT-4, Llama 2 7B Chat, Mistral 7B Instruct

## Description

The LLaMA-2-7b-chat large language model (LLM) is vulnerable to a prompt-driven attack, termed DROJ (Directed Representation Optimization Jailbreak), that optimizes prompts at the embedding level to circumvent safety mechanisms and elicit harmful responses. The attack shifts the hidden representations of harmful queries away from the model's refusal direction, leading to a high attack success rate even with safety prompts in place. While the model may not refuse, responses may be repetitive and uninformative.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

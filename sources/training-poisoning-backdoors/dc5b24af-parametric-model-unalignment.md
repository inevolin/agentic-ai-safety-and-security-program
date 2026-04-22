# Parametric Model Unalignment

**Promptfoo CVE ID:** `dc5b24af`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2023-10-01  
**Analyzed:** 2024-12-28T18:31:06.413Z  
**Source paper:** [Language model unalignment: Parametric red-teaming to expose hidden harms and biases](https://arxiv.org/abs/2310.14303)  
**Tags:** `model-layer`, `jailbreak`, `poisoning`, `extraction`, `whitebox`, `data-security`, `safety`, `integrity`  
**Affected models (as reported):** ChatGPT, Claude 1, Claude 2, GPT-4, Llama 2 13B Chat, Llama 2 7B Chat, Vicuna-1-13B, Vicuna-1-7B, Vicuna-2-13B, Vicuna-2-7B

## Description

Large Language Models (LLMs) employing Reinforcement Learning from Human Feedback (RLHF) and instruction tuning methods may exhibit superficial safety guardrails vulnerable to parametric red-teaming attacks. Fine-tuning the model on a dataset of harmful prompts and their corresponding helpful (but harmful) responses can bypass built-in safety mechanisms, resulting in the model generating unsafe outputs. This vulnerability is demonstrated by achieving an 88% success rate in eliciting harmful responses from ChatGPT using only 100 such training examples.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# LLM Private Attribute Inference

**Promptfoo CVE ID:** `27003915`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T22:59:00.625Z  
**Source paper:** [Stop Tracking Me! Proactive Defense Against Attribute Inference Attack in LLMs](https://arxiv.org/abs/2602.11528)  
**Tags:** `model-layer`, `prompt-layer`, `extraction`, `blackbox`, `whitebox`, `data-privacy`  
**Affected models (as reported):** GPT-3.5, GPT-4o, Llama 2 7B, Llama 3, Llama 3.1 8B, Llama 3.2, Gemini Pro, DeepSeek-R1 7B, Qwen 2.5 7B

## Description

Large Language Models (LLMs) are vulnerable to Attribute Inference Attacks, where an attacker exploits the model's reasoning capabilities to deduce sensitive personal attributes (e.g., age, gender, location, income level) from seemingly innocuous, unclassified user-generated text. Unlike traditional privacy leaks that rely on the memorization of training data, this vulnerability leverages the model's zero-shot inference and contextual deduction. Because the attack prompts are benign in nature, they reliably bypass existing alignment safety filters and refusal mechanisms, enabling highly accurate, automated, and scalable privacy breaches.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

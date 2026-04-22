# Helpfulness-Oriented Jailbreak via Learning

**Promptfoo CVE ID:** `560ed069`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-09-30T18:39:06.024Z  
**Source paper:** [A Simple and Efficient Jailbreak Method Exploiting LLMs' Helpfulness](https://arxiv.org/abs/2509.14297)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** Claude 4 Sonnet, DeepSeek Chat, DeepSeek R1 8B, DeepSeek V3, Doubao 1.5 Thinking Pro, ERNIE 4.0 Turbo, Gemini 2.0 Flash, Gemini 2.5 Pro, Gemma 3 27B IT, GPT-3.5 Turbo, GPT-4, GPT-4o, Llama 3.1 8B, Mixtral 8x7B, o1, o3, Phi 2, Qwen 2.5 72B Instruct, Qwen 3 32B, Qwen 3 8B, Qwen Omni Turbo, Vicuna 7B

## Description

A vulnerability exists in multiple Large Language Models (LLMs) where safety alignment mechanisms can be bypassed by reframing harmful instructions as "learning-style" or academic questions. This technique, named Hiding Intention by Learning from LLMs (HILL), transforms direct, harmful requests into exploratory questions using simple hypotheticality indicators (e.g., "for academic curiosity", "in the movie") and detail-oriented inquiries (e.g., "provide a step-by-step breakdown"). The attack exploits the models' inherent helpfulness and their training on academic and explanatory text, causing them to generate harmful content that they would otherwise refuse.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

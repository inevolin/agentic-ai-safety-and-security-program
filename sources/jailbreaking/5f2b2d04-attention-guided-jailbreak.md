# Attention-Guided Jailbreak

**Promptfoo CVE ID:** `5f2b2d04`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T03:03:55.709Z  
**Source paper:** [AttnGCG: Enhancing jailbreaking attacks on LLMs with attention manipulation](https://arxiv.org/abs/2410.09040)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `blackbox`, `extraction`, `data-security`, `integrity`, `safety`  
**Affected models (as reported):** Gemini 1.5 Flash, Gemini Pro, Gemini-1.5-pro-latest, GPT-3.5 Turbo, GPT-4, Llama 2 7B Chat, Llama 3, Mixtral 8x7B Instruct, Vicuna 13B, Vicuna 7B

## Description

Large Language Models (LLMs) are vulnerable to jailbreaking attacks that manipulate attention scores to redirect the model's focus away from safety protocols. The AttnGCG attack method increases the attention score on adversarial suffixes within the input prompt, causing the model to prioritize the malicious content over safety guidelines, leading to the generation of harmful outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

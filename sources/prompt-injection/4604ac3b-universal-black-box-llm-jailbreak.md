# Universal Black-Box LLM Jailbreak

**Promptfoo CVE ID:** `4604ac3b`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-09-01  
**Analyzed:** 2024-12-28T23:34:06.845Z  
**Source paper:** [Open sesame! universal black box jailbreaking of large language models](https://arxiv.org/abs/2309.01446)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** Llama 2 7B Chat, Vicuna 7B

## Description

A universal black-box jailbreaking vulnerability exists in Large Language Models (LLMs) due to their susceptibility to adversarial prompts crafted using a genetic algorithm (GA). The GA optimizes a universal adversarial prompt suffix that, when appended to various user inputs, causes the LLM to generate unintended and potentially harmful outputs, bypassing safety mechanisms. This attack requires no knowledge of the LLM's internal architecture or parameters.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

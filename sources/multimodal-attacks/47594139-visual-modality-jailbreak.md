# Visual Modality Jailbreak

**Promptfoo CVE ID:** `47594139`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-05-01  
**Analyzed:** 2024-12-28T23:23:55.315Z  
**Source paper:** [Efficient LLM-Jailbreaking by Introducing Visual Modality](https://arxiv.org/abs/2405.20015)  
**Tags:** `jailbreak`, `multimodal`, `whitebox`, `blackbox`, `agent`, `safety`  
**Affected models (as reported):** ChatGLM 6B, Gemini, GPT-3.5 Turbo, Llama 2, Mistral 7B

## Description

A vulnerability in multimodal large language models (MLLMs) allows for efficient jailbreaking attacks by leveraging visual input to bypass safety mechanisms. The attack constructs a multimodal model by adding a visual module to the target LLM, then uses a modified PGD algorithm to optimize visual input to generate jailbreaking embeddings. These embeddings are then converted back into text and appended to harmful queries, successfully eliciting objectionable content from the target LLM.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

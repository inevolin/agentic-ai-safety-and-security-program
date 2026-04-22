# Few-Shot LLM Jailbreak

**Promptfoo CVE ID:** `8d5ca3fa`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-06-01  
**Analyzed:** 2024-12-29T02:25:50.194Z  
**Source paper:** [Improved few-shot jailbreaking can circumvent aligned language models and their defenses](https://arxiv.org/abs/2406.01288)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-4, Llama 2 7B, Llama 3 8B, Mistral 7B, Openchat-3.5, Qwen1.5-7B-chat, Starling-lm-7B

## Description

A vulnerability in aligned Large Language Models (LLMs) allows circumvention of safety mechanisms through improved few-shot jailbreaking techniques. The attack leverages injection of special system tokens (e.g., `[/INST]`) into few-shot demonstrations and demo-level random search to optimize the probability of generating harmful responses. This bypasses defenses that rely on perplexity filtering and input perturbation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

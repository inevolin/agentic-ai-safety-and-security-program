# Multi-Round Jailbreak Agent

**Promptfoo CVE ID:** `477533fa`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-11-01  
**Analyzed:** 2024-12-29T03:04:21.174Z  
**Source paper:** [MRJ-Agent: An Effective Jailbreak Agent for Multi-Round Dialogue](https://arxiv.org/abs/2411.03814)  
**Tags:** `jailbreak`, `application-layer`, `blackbox`, `safety`  
**Affected models (as reported):** Dalle-3, GPT-3.5 Turbo, GPT-4, GPT-4o, Llama 2 7B Chat, Mistral-7B-instruct0.2, Vicuna-7B-1.5

## Description

Large Language Models (LLMs) are vulnerable to multi-round jailbreak attacks which leverage a heuristic search process to progressively elicit harmful content. The attack decomposes a harmful query into multiple, seemingly innocuous sub-queries, iteratively refining the prompts based on the LLM's responses and employing psychological strategies to bypass safety mechanisms. This allows for the circumvention of single-round detection methods and elicitation of responses containing prohibited content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

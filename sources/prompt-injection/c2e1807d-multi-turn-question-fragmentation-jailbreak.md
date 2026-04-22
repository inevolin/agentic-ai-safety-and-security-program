# Multi-Turn Question Fragmentation Jailbreak

**Promptfoo CVE ID:** `c2e1807d`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T00:53:23.228Z  
**Source paper:** [Jigsaw Puzzles: Splitting Harmful Questions to Jailbreak Large Language Models](https://arxiv.org/abs/2410.11459)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Gemini 1.5 Pro, GPT-4, GPT-4o, GPT-4o Mini, Llama 3.1 70B

## Description

Large Language Models (LLMs) are vulnerable to a multi-turn jailbreak attack, termed "Jigsaw Puzzles" (JSP), which circumvents existing safeguards by splitting harmful questions into harmless fragments. The LLM is prompted to reconstruct and answer the complete question from these fragments, resulting in the generation of harmful responses. The attack relies on the LLM's ability to piece together seemingly benign input to form a malicious query, exploiting the model's contextual understanding and instruction following capabilities.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

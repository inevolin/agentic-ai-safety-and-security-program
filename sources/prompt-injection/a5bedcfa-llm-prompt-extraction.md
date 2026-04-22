# LLM Prompt Extraction

**Promptfoo CVE ID:** `a5bedcfa`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-05-01  
**Analyzed:** 2024-12-29T04:02:27.268Z  
**Source paper:** [Extracting Prompts by Inverting LLM Outputs](https://arxiv.org/abs/2405.15012)  
**Tags:** `extraction`, `prompt-layer`, `blackbox`, `data-security`, `data-privacy`  
**Affected models (as reported):** Gemini 1.5 Pro, GPT-3.5 Turbo, GPT-4, Llama-2 (7B), Llama-2 Chat (7B), Llama-3-70B-chat-hf, Mistral 7B, Mixtral-8x22B-instruct-v0.1, Qwen1.5-110B-chat

## Description

Large Language Models (LLMs) are vulnerable to prompt extraction attacks via inversion of their normal outputs. An attacker can train a model to reconstruct the prompt used to generate multiple outputs from an LLM, even without access to internal model parameters (logits) or requiring adversarial queries. This allows extraction of both user and system prompts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

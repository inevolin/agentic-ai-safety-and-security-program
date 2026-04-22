# Symbolic Math Jailbreak

**Promptfoo CVE ID:** `367a8155`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-09-01  
**Analyzed:** 2024-12-29T04:36:33.239Z  
**Source paper:** [Jailbreaking Large Language Models with Symbolic Mathematics](https://arxiv.org/abs/2409.11445)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3 Haiku, Claude 3 Opus, Claude 3 Sonnet, Claude 3.5 Sonnet, Gemini 1.5 Flash, Gemini 1.5 Flash (block None), Gemini 1.5 Pro, Gemini 1.5 Pro (block None), GPT-4, GPT-4 Turbo, GPT-4o, GPT-4o Mini, Llama 3.1 70B

## Description

Large Language Models (LLMs) are vulnerable to a jailbreaking attack, termed "MathPrompt," which leverages the models' ability to process symbolic mathematics to bypass built-in safety mechanisms. The attack encodes harmful natural language prompts into mathematically formulated problems, causing the LLM to generate unsafe outputs while ostensibly solving a mathematical problem.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

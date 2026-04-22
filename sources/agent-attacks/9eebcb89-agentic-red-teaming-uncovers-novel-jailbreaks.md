# Agentic Red-Teaming Uncovers Novel Jailbreaks

**Promptfoo CVE ID:** `9eebcb89`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-07-28T19:29:37.367Z  
**Source paper:** [CoP: Agentic Red-teaming for Large Language Models using Composition of Principles](https://arxiv.org/abs/2506.00781)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `injection`, `agent`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, Gemini 1.5 Pro, Gemma 7B IT, GPT-4, GPT-4 Turbo, GPT-4o, Grok 2, Llama 2 13B, Llama 2 13B Chat, Llama 2 70B Chat, Llama 2 7B Chat, Llama 3 70B Instruct, Llama 3 8B Instruct, o1

## Description

Large Language Models (LLMs) are vulnerable to jailbreaking through an agentic attack framework called Composition of Principles (CoP). This technique uses an attacker LLM (Red-Teaming Agent) to dynamically select and combine multiple human-defined, high-level transformations ("principles") into a single, sophisticated prompt. The composition of several simple principles, such as expanding context, rephrasing, and inserting specific phrases, creates complex adversarial prompts that can bypass safety and alignment mechanisms designed to block single-tactic or more direct harmful requests. This allows an attacker to elicit policy-violating or harmful content in a single turn.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# Dialogue History Jailbreak

**Promptfoo CVE ID:** `094cf883`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-03-19T19:30:42.252Z  
**Source paper:** [Dialogue Injection Attack: Jailbreaking LLMs through Context Manipulation](https://arxiv.org/abs/2503.08195)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `api`, `application-layer`, `integrity`, `safety`  
**Affected models (as reported):** Gemma 2 27B, Gemma 2 2B, Gemma 2 9B, GPT-4o, GPT-4o Mini, Llama 2 7B, Llama 3, Llama 3 70B, Llama 3 8B, Llama 3.1 8B, Llama 3.2 11B, Qwen 2 7B

## Description

Large Language Models (LLMs) are vulnerable to Dialogue Injection Attacks (DIA), where malicious actors manipulate the chat history to bypass safety mechanisms and elicit harmful or unethical responses.  DIA exploits the LLM's chat template structure to inject crafted dialogue into the input, even in black-box scenarios where the model's internals are unknown.  Two attack methods are presented: one adapts gray-box prefilling attacks, the other leverages deferred responses to increase the likelihood of successful jailbreaks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

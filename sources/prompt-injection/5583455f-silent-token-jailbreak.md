# Silent Token Jailbreak

**Promptfoo CVE ID:** `5583455f`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-05-01  
**Analyzed:** 2024-12-28T23:24:23.984Z  
**Source paper:** [Enhancing jailbreak attack against large language models through silent tokens](https://arxiv.org/abs/2405.20653)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Gemma 2B, Gemma 7B IT, Llama 2 13B Chat, Llama 2 7B, Llama 3 8B Instruct, Mistral 7B Instruct v0.2, Mpt-7B-chat, Qwen1.5-7B-chat, Tulu-2-13B, Tulu-2-7B, Vicuna 7B v1.3, Vicuna-7B-1.5

## Description

Large language models (LLMs) are vulnerable to enhanced jailbreak attacks by appending multiple end-of-sentence (EOS) tokens to malicious prompts. This bypasses internal safety mechanisms, causing the LLM to respond to harmful queries that it would otherwise reject. The EOS tokens subtly shift the LLMâs internal representation of the prompt, making it appear less harmful without significantly altering the semantic meaning of the malicious content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

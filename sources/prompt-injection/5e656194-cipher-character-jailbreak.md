# Cipher-Character Jailbreak

**Promptfoo CVE ID:** `5e656194`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-05-01  
**Analyzed:** 2024-12-29T01:33:25.525Z  
**Source paper:** [Jailbreaking Large Language Models Against Moderation Guardrails via Cipher Characters](https://arxiv.org/abs/2405.20413)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Gemini, GPT-3.5 Turbo, GPT-4, Llama 3

## Description

A vulnerability allows attackers to bypass Large Language Model (LLM) moderation guardrails by using specially crafted prompts containing "cipher characters." These characters, strategically placed within the prompt's output, alter the LLM's response to reduce its "harm" score, enabling the generation of content that would otherwise be blocked. The attack leverages a jailbreak prefix combined with a malicious question and cipher characters to bypass both input and output level filters. This vulnerability is facilitated by the LLMâs reliance on harm scoring and its susceptibility to manipulation of output format.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

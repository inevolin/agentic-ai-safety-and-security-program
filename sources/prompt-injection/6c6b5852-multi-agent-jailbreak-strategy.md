# Multi-Agent Jailbreak Strategy

**Promptfoo CVE ID:** `6c6b5852`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-05-31T05:14:58.717Z  
**Source paper:** [X-teaming: Multi-turn jailbreaks and defenses with adaptive multi-agents](https://arxiv.org/abs/2504.13203)  
**Tags:** `prompt-layer`, `jailbreak`, `safety`, `blackbox`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, Claude 3.7 Sonnet, DeepSeek V3, Gemini 2.0 Flash, GPT-4o, Llama 3 70B Instruct, Llama 3 8B Instruct, Llama 3.1 8B, Qwen 2.5 32B Instruct, Qwen 2.5 7B

## Description

A vulnerability exists in multiple LLMs allowing attackers to elicit harmful responses by strategically distributing malicious intent across multiple turns in a conversation.  The vulnerability is not detected by single-turn safety measures, as the harmful intent is only revealed through a sequence of seemingly benign prompts. The vulnerability is exacerbated by the use of techniques such as prompt optimization that dynamically adjust prompts based on model responses, maximizing the likelihood of eliciting the targeted harmful content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

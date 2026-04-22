# Linguistic LLM Jailbreak

**Promptfoo CVE ID:** `5dbf5151`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-11-01  
**Analyzed:** 2024-12-29T04:37:42.749Z  
**Source paper:** [Jade: A linguistics-based safety evaluation platform for llm](https://arxiv.org/abs/2311.00286)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Baiduâs Wenxin Yiyan, ChatGLM2 6B, ChatGPT, Googleâs Palm2, GPT-2, GPT-3, Llama 2 70B Chat

## Description

Large Language Models (LLMs) are vulnerable to a targeted linguistic fuzzing attack that exploits the complexity of human language to bypass safety guardrails. The attack, termed "Jade," leverages transformational-generative grammar rules to systematically increase the syntactic complexity of benign seed questions, making them increasingly difficult for LLMs to recognize as malicious. This leads to the generation of unsafe content, even when the underlying semantics remain unchanged.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

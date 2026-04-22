# LLM Self-Jailbreaking Attack

**Promptfoo CVE ID:** `99e044a3`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:26:12.347Z  
**Source paper:** [Jailbreaking to Jailbreak](https://arxiv.org/abs/2502.09638)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Haiku, Claude 3.5 Sonnet, Gemini 1.5 Pro, GPT-4o, Llama 3.1 405B

## Description

Large Language Models (LLMs) with refusal training are vulnerable to a "jailbreaking-to-jailbreak" (J2) attack.  A J2 attack involves initially jailbreaking a powerful LLM to create a "J2 attacker." This attacker, instructed with general jailbreaking strategies, then autonomously attempts to jailbreak other LLMs, including potentially the same model it was derived from,  by iteratively refining its attack based on previous attempts and in-context learning.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

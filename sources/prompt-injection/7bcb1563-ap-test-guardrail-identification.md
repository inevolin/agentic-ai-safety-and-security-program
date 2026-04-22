# AP-Test Guardrail Identification

**Promptfoo CVE ID:** `7bcb1563`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:22:08.758Z  
**Source paper:** [Peering Behind the Shield: Guardrail Identification in Large Language Models](https://arxiv.org/abs/2502.01241)  
**Tags:** `prompt-layer`, `jailbreak`, `extraction`, `blackbox`, `safety`, `application-layer`  
**Affected models (as reported):** Aegis Defensive, Aegis Permissive, ChatGPT, Gemini, GPT-4o, Llama 3.1, Llama Guard, Llama Guard 2, Llama Guard 3, Perspective, ShieldGemma 27B, ShieldGemma 2B, ShieldGemma 9B

## Description

This vulnerability allows attackers to identify the presence and location (input or output stage) of specific guardrails implemented in Large Language Models (LLMs) by using carefully crafted adversarial prompts.  The attack, termed AP-Test, leverages a tailored loss function to optimize these prompts, maximizing the likelihood of triggering a specific guardrail while minimizing triggering others.  Successful identification provides attackers with valuable information to design more effective attacks that evade the identified guardrails.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

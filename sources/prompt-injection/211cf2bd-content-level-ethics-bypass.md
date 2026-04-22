# Content-Level Ethics Bypass

**Promptfoo CVE ID:** `211cf2bd`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T21:33:44.330Z  
**Source paper:** [Understanding LLM Behavior When Encountering User-Supplied Harmful Content in Harmless Tasks](https://arxiv.org/abs/2603.11914)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4, GPT-4o, Llama 2 7B, Llama 3 8B, Gemini 2, Qwen 2.5 30B, Gemma 7B, Vicuna 7B

## Description

An "in-content harm" vulnerability exists in safety-aligned Large Language Models (LLMs) where task-level alignment mechanisms fail to evaluate the safety of user-provided external data. Attackers can bypass safety guardrails by embedding policy-violating text (e.g., violence, self-harm, explicit content) within the payload of a seemingly benign, policy-compliant task (e.g., translation, summarization, grammar polishing). Because the primary instruction is harmless, the LLM's safety filters are not triggered, causing the model to process, translate, or expand upon the harmful material. The vulnerability is highly exploitable in tasks heavily dependent on user-supplied knowledge and can reliably bypass external moderation APIs when the harmful payload is wrapped inside longer benign text or positioned in the middle of the context window.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

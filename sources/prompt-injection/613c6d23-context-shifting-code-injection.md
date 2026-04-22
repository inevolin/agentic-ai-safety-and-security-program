# Context-Shifting Code Injection

**Promptfoo CVE ID:** `613c6d23`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T04:36:11.590Z  
**Source paper:** [Hallucinating AI Hijacking Attack: Large Language Models and Malicious Code Recommenders](https://arxiv.org/abs/2410.06462)  
**Tags:** `prompt-layer`, `injection`, `hallucination`, `data-security`, `blackbox`, `integrity`  
**Affected models (as reported):** GPT-4

## Description

Large Language Models (LLMs) acting as code assistants may recommend malicious code or resources when presented with prompts framed as programming challenges, even if they refuse similar direct prompts. This occurs due to insufficient context-aware safety mechanisms. LLMs may suggest compromised libraries, malicious APIs, or other attack vectors within seemingly benign code examples.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# Segmented Prompt Jailbreak

**Promptfoo CVE ID:** `194e51d4`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-04-03T17:07:54.081Z  
**Source paper:** [Prompt, Divide, and Conquer: Bypassing Large Language Model Safety Filters via Segmented and Distributed Prompt Processing](https://arxiv.org/abs/2503.21598)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Haiku, Claude 3.5 Sonnet, Gemini 1.5 Pro, GPT-4 Turbo, GPT-4o, GPT-4o Mini

## Description

Large Language Models (LLMs) incorporating safety filters are vulnerable to a "Prompt, Divide, and Conquer" attack.  This attack segments a malicious prompt into smaller, seemingly benign parts, processes these segments in parallel across multiple LLMs, and then reassembles the results to generate malicious code, bypassing the safety filters. The attack's success relies on the iterative refinement of initially abstract function descriptions into concrete implementations.  Individual LLM safety filters are bypassed because no single segment triggers the filter.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

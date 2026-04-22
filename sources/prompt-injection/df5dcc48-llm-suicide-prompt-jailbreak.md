# LLM Suicide Prompt Jailbreak

**Promptfoo CVE ID:** `df5dcc48`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-07-14T04:06:53.348Z  
**Source paper:** [For Argument's Sake, Show Me How to Harm Myself!': Jailbreaking LLMs in Suicide and Self-Harm Contexts](https://arxiv.org/abs/2507.02990)  
**Tags:** `prompt-layer`, `jailbreak`, `safety`, `application-layer`, `blackbox`, `data-security`  
**Affected models (as reported):** Claude 3.7 Sonnet, Gemini 2.0 Flash, GPT-4o, Perplexity AI, Pi AI

## Description

Large Language Models (LLMs) employing safety filters designed to prevent generation of content related to self-harm and suicide can be bypassed through multi-step adversarial prompting.  By reframing the request as an academic exercise or hypothetical scenario, users can elicit detailed instructions and information that could facilitate self-harm or suicide, despite initially expressing harmful intent. This vulnerability lies in the inadequacy of existing safety filters to consistently recognize and prevent harmful outputs despite shifts in conversational context.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

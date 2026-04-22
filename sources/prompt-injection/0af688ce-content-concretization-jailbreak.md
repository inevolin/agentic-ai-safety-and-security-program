# Content Concretization Jailbreak

**Promptfoo CVE ID:** `0af688ce`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-09-30T18:37:03.687Z  
**Source paper:** [Jailbreaking Large Language Models Through Content Concretization](https://arxiv.org/abs/2509.12937)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `chain`, `blackbox`, `safety`, `data-security`, `data-privacy`  
**Affected models (as reported):** Claude 3.5 Haiku, Claude 3.5 Sonnet, Claude 3.7 Sonnet, Gemini 2.0 Flash, Gemini 2.5 Flash, Gemini 2.5 Pro, GPT-4, GPT-4.1, GPT-4o, GPT-4o Mini, o3

## Description

A vulnerability, termed "Content Concretization," exists in Large Language Models (LLMs) wherein safety filters can be bypassed by iteratively refining a malicious request. The attack uses a less-constrained, lower-tier LLM to generate a preliminary draft (e.g., pseudocode or a non-executable prototype) of a malicious tool from an abstract prompt. This "concretized" draft is then passed to a more capable, higher-tier LLM. The higher-tier LLM, when prompted to refine or complete the existing draft, is significantly more likely to generate the full malicious, executable content than if it had received the initial abstract prompt directly. This exploits a weakness in safety alignment where models are more permissive in extending existing content compared to generating harmful content from scratch.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

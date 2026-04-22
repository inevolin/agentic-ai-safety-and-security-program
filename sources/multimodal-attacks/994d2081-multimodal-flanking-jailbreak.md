# Multimodal Flanking Jailbreak

**Promptfoo CVE ID:** `994d2081`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:26:43.652Z  
**Source paper:** [From Compliance to Exploitation: Jailbreak Prompt Attacks on Multimodal LLMs](https://arxiv.org/abs/2502.00735)  
**Tags:** `prompt-layer`, `jailbreak`, `multimodal`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Gemini

## Description

A novel "Flanking Attack" exploits the vulnerability of multimodal LLMs (e.g., Google Gemini) to bypass content moderation filters by embedding adversarial prompts within a sequence of benign prompts.  The attack leverages the LLM's processing of both audio and text, obfuscating harmful requests through contextualization and layering, thereby yielding policy-violating responses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

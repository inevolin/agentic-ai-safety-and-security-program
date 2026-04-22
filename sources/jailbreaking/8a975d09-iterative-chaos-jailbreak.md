# Iterative Chaos Jailbreak

**Promptfoo CVE ID:** `8a975d09`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:36:04.738Z  
**Source paper:** [A Mousetrap: Fooling Large Reasoning Models for Jailbreak with Chain of Iterative Chaos](https://arxiv.org/abs/2502.15806)  
**Tags:** `jailbreak`, `application-layer`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, Gemini 2.0 Flash Thinking, o1-mini

## Description

Large Reasoning Models (LRMs) are vulnerable to a novel jailbreak attack, "Mousetrap," which leverages the models' reasoning capabilities to elicit harmful responses.  Mousetrap uses a "Chaos Machine" to iteratively transform prompts via one-to-one mappings (e.g., character substitutions, word reversals), creating complex reasoning chains that confuse the LRM and cause it to generate unsafe outputs despite safety mechanisms.  The iterative nature of the attack, combined with role-playing prompts, increases the likelihood of bypassing safety filters.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

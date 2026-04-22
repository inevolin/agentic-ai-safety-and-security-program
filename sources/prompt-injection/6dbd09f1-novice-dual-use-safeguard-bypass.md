# Novice Dual-Use Safeguard Bypass

**Promptfoo CVE ID:** `6dbd09f1`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T23:31:13.848Z  
**Source paper:** [LLM Novice Uplift on Dual-Use, In Silico Biology Tasks](https://arxiv.org/abs/2602.23329)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4, Claude 3.7, Claude 4, o3, Gemini Pro, o4-mini

## Description

Frontier Large Language Models (LLMs) contain a safeguard bypass vulnerability where safety filters fail to reliably block requests for dual-use, in silico biology tasks. This allows novice users with no specialized training to access restricted, expert-level biological protocols (e.g., virology troubleshooting, pathogen capabilities, novel biological agent construction). The models' safety mechanisms fail to trigger or are trivially bypassed under realistic extended interaction conditions, resulting in a 4.16x performance uplift for novices on biosecurity benchmarks, effectively enabling them to match or exceed human expert baselines. Over 89% of tested novice users reported no difficulty overcoming or avoiding safety filters when requesting hazardous biological information.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

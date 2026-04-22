# Multi-Turn Proxy Evasion

**Promptfoo CVE ID:** `966f67dc`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-22T04:50:10.973Z  
**Source paper:** [Peak+ Accumulation: A Proxy-Level Scoring Formula for Multi-Turn LLM Attack Detection](https://arxiv.org/abs/2602.11247)  
**Tags:** `infrastructure-layer`, `prompt-layer`, `injection`, `jailbreak`, `chain`, `api`, `safety`  
**Affected models (as reported):** 

## Description

A logical vulnerability exists in LLM security proxies and guardrails that utilize weighted-average aggregation algorithms for multi-turn risk scoring. The scoring logic exhibits a mathematical "ceiling property" where the cumulative conversation-level risk score converges to the per-turn score regardless of the number of interaction turns ($n$). Consequently, the aggregated score is bounded by the maximum single-turn score ($cum \leq \max(s_i)$). This allows remote attackers to bypass detection thresholds by submitting a persistent stream of malicious prompts where each individual turn achieves a risk score ($s$) slightly below the blocking threshold ($\tau$). Despite the accumulation of malicious evidence over time, the system will never trigger a violation, resulting in a false negative for persistent multi-turn attacks (e.g., "death by a thousand cuts" or extensive jailbreak probing).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

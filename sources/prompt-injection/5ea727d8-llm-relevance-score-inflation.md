# LLM Relevance Score Inflation

**Promptfoo CVE ID:** `5ea727d8`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-12-01  
**Analyzed:** 2026-03-09T03:57:11.723Z  
**Source paper:** [LLM-based relevance assessment still can't replace human relevance assessment](https://arxiv.org/abs/2412.17156)  
**Tags:** `application-layer`, `model-layer`, `injection`, `rag`, `blackbox`, `integrity`  
**Affected models (as reported):** GPT-3.5, GPT-4o

## Description

LLM-based relevance assessment frameworks, such as the Umbrela system, are vulnerable to evaluation subversion and artificial score inflation due to evaluation circularity and LLM "narcissism" (an LLM's inherent bias toward favoring LLM-generated outputs). When an information retrieval system integrates an LLM into its ranking pipelineâsuch as using it as a final-stage re-rankerâthe automated LLM-as-a-judge evaluator assigns artificially inflated scores that fail to correlate with actual human judgments. This vulnerability allows benchmark participants or attackers to completely subvert the evaluation metric, achieving top leaderboard positions without demonstrating genuine improvements in retrieval quality.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

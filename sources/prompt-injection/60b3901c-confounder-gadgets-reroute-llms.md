# Confounder Gadgets Reroute LLMs

**Promptfoo CVE ID:** `60b3901c`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-01-01  
**Analyzed:** 2026-01-14T14:30:26.477Z  
**Source paper:** [Rerouting llm routers](https://arxiv.org/abs/2501.01818)  
**Tags:** `infrastructure-layer`, `prompt-layer`, `denial-of-service`, `integrity`, `reliability`, `chain`, `embedding`, `blackbox`, `whitebox`, `api`  
**Affected models (as reported):** 

## Description

A vulnerability exists in Large Language Model (LLM) routing systems (control planes) that allows for the manipulation of inference flow via adversarial input sequences. LLM routers, which dynamically direct user queries to either "weak" (cheaper) or "strong" (expensive) models based on predicted query complexity, can be bypassed by appending specific, pre-optimized token sequences known as "confounder gadgets." These gadgets artificially inflate the router's complexity score for an input, forcing the system to route simple queries to the expensive model. This attack works in both white-box settings and black-box transfer settings (where the attacker uses a surrogate router to generate gadgets). It affects various routing algorithms, including similarity-weighted ranking, matrix factorization, and BERT/LLM-based classifiers.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

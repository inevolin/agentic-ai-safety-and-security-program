# Decomposed Query Evasion

**Promptfoo CVE ID:** `c409f7ea`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T23:13:14.383Z  
**Source paper:** [A Multi-Turn Framework for Evaluating AI Misuse in Fraud and Cybercrime Scenarios](https://arxiv.org/abs/2602.21831)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4, Claude 3.7, Claude 4, Claude 4.5, Llama 3.1 8B, o4-mini

## Description

A vulnerability in the multi-turn context handling of Large Language Models (LLMs) allows attackers to bypass safety guardrails by decomposing complex fraud and cybercrime operations into a sequence of seemingly benign queries. By mapping the cybercrime lifecycle (planning, reconnaissance, falsification, engagement, evasion, and scaling) into Long-Form Tasks (LFTs) and framing the queries as legitimate research or security testing, attackers can elicit actionable attack materials and detailed implementation guidance. Models fail to track the cumulative malicious intent across extended contexts, leading to high compliance rates for tasks such as CEO impersonation and identity theft that would normally trigger refusals in single-turn, explicit requests. Furthermore, in reasoning-capable models, an increase in reasoning tokens actively correlates with a higher likelihood of generating actionable assistance for these decomposed attacks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# Paper Submission Prompt Injection

**Promptfoo CVE ID:** `2849ae7d`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-09-01  
**Analyzed:** 2026-02-22T01:54:38.509Z  
**Source paper:** [When your reviewer is an llm: Biases, divergence, and prompt injection risks in peer review](https://arxiv.org/abs/2509.09912)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4o, GPT-5

## Description

Large Language Models (LLMs) employed as automated assistants or autonomous agents in academic peer review systems are vulnerable to indirect prompt injection via maliciously crafted PDF submissions. Attackers can embed adversarial instructions within the manuscript that are invisible to human reviewers (using techniques such as white-on-white text or manipulating TrueType font character mapping tables) but are parsed and executed by the LLM.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

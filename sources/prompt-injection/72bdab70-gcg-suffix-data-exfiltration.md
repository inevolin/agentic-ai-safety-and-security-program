# GCG Suffix Data Exfiltration

**Promptfoo CVE ID:** `72bdab70`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-08-01  
**Analyzed:** 2025-03-24T21:12:36.953Z  
**Source paper:** [WHITE PAPER: A Brief Exploration of Data Exfiltration using GCG Suffixes](https://arxiv.org/abs/2408.00925)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `jailbreak`, `extraction`, `data-privacy`, `data-security`, `blackbox`, `whitebox`, `chain`, `api`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4o, Llama 2, Phi 3 Mini

## Description

A Cross-Prompt Injection Attack (XPIA) can be amplified by appending a Greedy Coordinate Gradient (GCG) suffix to the malicious injection. This increases the likelihood that a Large Language Model (LLM) will execute the injected instruction, even in the presence of a user's primary instruction, leading to data exfiltration.  The success rate of the attack depends on the LLM's complexity; medium-complexity models show increased vulnerability.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# Judge LLM Prompt Injection

**Promptfoo CVE ID:** `af4c4b6a`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-12-09T02:31:19.576Z  
**Source paper:** [Adversarial Attacks on LLM-as-a-Judge Systems: Insights from Prompt Injections](https://arxiv.org/abs/2504.18333)  
**Tags:**   
**Affected models (as reported):** GPT-4, Claude 3, Llama 3.2 3B, Gemma 27B

## Description

Improper Input Validation in Large Language Model (LLM) systems configured as automated evaluators ("LLM-as-a-judge") allows remote attackers to manipulate evaluation scores and comparative verdicts via adversarial prompt injection. The vulnerability arises when the model processes untrusted input containing linguistic masquerading, context separators, and disruptor commands (e.g., "Basic Injection", "Contextual Misdirection", and "Adaptive Search-Based Attack"). Successful exploitation results in the model disregarding its system instructions and outputting an attacker-defined score or decision, evading standard perplexity-based and heuristic detection mechanisms.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

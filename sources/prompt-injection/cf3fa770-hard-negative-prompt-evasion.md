# Hard-Negative Prompt Evasion

**Promptfoo CVE ID:** `cf3fa770`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T21:07:02.840Z  
**Source paper:** [Proactive Hardening of LLM Defenses with HASTE](https://arxiv.org/abs/2601.19051)  
**Tags:** `prompt-layer`, `application-layer`, `injection`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o

## Description

Embedding-based LLM prompt injection detectors, specifically those based on the DeBERTa-v3 architecture, are vulnerable to adversarial evasion attacks utilizing "hard-negative" mining and fuzzing techniques. Attackers can circumvent detection mechanisms by iteratively generating adversarial prompts that are semantically malicious but structurally mutated to evade the classifier's decision boundary. Specific evasion vectors identified include semantic fuzzing (paraphrasing), syntactic fuzzing (manipulation of casing, spacing, and punctuation), and format fuzzing (encapsulation within JSON, YAML, or Markdown). Experimental validation demonstrates that while baseline semantic fuzzing reduces detection accuracy from ~95.9% to ~65.3%, aggressive hard-negative mining combined with semantic perturbation (HM-Max-Sem) reduces detection accuracy to ~37.0%, effectively bypassing the guardrail for the majority of malicious inputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

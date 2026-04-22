# Contextual Priority Hacking

**Promptfoo CVE ID:** `331cea33`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T21:52:07.114Z  
**Source paper:** [Are Dilemmas and Conflicts in LLM Alignment Solvable? A View from Priority Graph](https://arxiv.org/abs/2603.15527)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `rag`, `blackbox`, `agent`, `safety`  
**Affected models (as reported):** 

## Description

Large Language Models (LLMs) are vulnerable to a jailbreak technique termed "Priority Hacking." Adversaries can bypass safety alignments by exploiting the model's internal priority graph, where certain abstract values (e.g., justice, public health) implicitly outweigh general safety restrictions within specific contexts. By crafting a deceptive prompt that frames a malicious request as a necessary action in service of a higher-priority benign value, attackers engineer a value conflict. The model follows its embedded priority logic, fulfilling the higher-level value and consequently overriding its safety constraints.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

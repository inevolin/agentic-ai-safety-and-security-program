# Semantics-Preserving Detector Evasion

**Promptfoo CVE ID:** `c54bcadd`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T22:10:54.590Z  
**Source paper:** [Semantics-Preserving Evasion of LLM Vulnerability Detectors](https://arxiv.org/abs/2602.00305)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `whitebox`, `api`, `integrity`  
**Affected models (as reported):** GPT-4o, GPT-5, Llama 3.1 8B, Mistral 7B, Qwen 2.5 5B

## Description

LLM-based vulnerability detection systems (used in static application security testing and code review pipelines) are susceptible to semantics-preserving adversarial evasion attacks. Attackers can bypass detection mechanisms by injecting gradient-optimized "universal adversarial strings" into specific code regionsâdefined as "carriers"âthat do not alter the program's compilation or execution logic. These carriers include non-executable regions (code comments, inactive preprocessor directives) and executable but semantically neutral regions (variable identifier renaming, dead-branch code insertion).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# CoT Trajectory Data Leak

**Promptfoo CVE ID:** `e2e84262`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T05:47:16.547Z  
**Source paper:** [STaR: Sensitive Trajectory Regulation for Unlearning in Large Reasoning Models](https://arxiv.org/abs/2601.09281)  
**Tags:** `model-layer`, `prompt-layer`, `extraction`, `jailbreak`, `fine-tuning`, `data-privacy`, `safety`  
**Affected models (as reported):** o1, DeepSeek-R1

## Description

Large Reasoning Models (LRMs) employing Chain-of-Thought (CoT) generation are vulnerable to sensitive information leakage through intermediate reasoning steps, even after undergoing standard unlearning procedures (such as Gradient Ascent, Direct Preference Optimization, or KL Minimization). While these fine-tuning-based unlearning methods typically suppress sensitive content in the final generated answer, they fail to purge the information from the model's internal reasoning trajectory. Consequently, sensitive dataâincluding Personally Identifiable Information (PII) or copyrighted materialâpersists within the generated CoT traces. Attackers can recover this "forgotten" information by accessing the full reasoning output (DefaultThink) or by manipulating decoding strategies (e.g., "ZeroThink" or "LessThink") to alter output formats and bypass answer-level suppression controls.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

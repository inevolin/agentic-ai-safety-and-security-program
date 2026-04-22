# Familiar Pattern Analysis Hijack

**Promptfoo CVE ID:** `f94404e3`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-08-01  
**Analyzed:** 2026-02-22T02:16:12.022Z  
**Source paper:** [Trust Me, I Know This Function: Hijacking LLM Static Analysis using Bias](https://arxiv.org/abs/2508.17361)  
**Tags:** `model-layer`, `hallucination`, `blackbox`, `agent`, `integrity`, `data-security`  
**Affected models (as reported):** GPT-4o, GPT-5, Claude 3.5, Claude 4, o3, Gemini 2

## Description

Large Language Models (LLMs) utilized for static code analysis, code review, and autonomous software engineering exhibit a cognitive vulnerability termed "Abstraction Bias." When processing code that structurally resembles common algorithmic patterns (e.g., standard sorting algorithms, helper functions, or mathematical formulas), the model relies on high-level memorized representations of the algorithm's intent rather than analyzing the specific local logic. Adversaries can exploit this by crafting "Familiar Pattern Attacks" (FPAs): injecting subtle, deterministic logic errorsâsuch as off-by-one bugs, negated conditions, or omitted constantsâinto otherwise familiar code structures. These perturbations create "Deception Patterns" where the LLM confidently misinterprets the control flow or output as the standard behavior of the familiar algorithm, while the code actually executes the adversarial logic at runtime. This allows malicious logic to bypass LLM-based security audits and mislead code agents.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# Malicious Algorithm Design Jailbreak

**Promptfoo CVE ID:** `cf670c32`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-20T23:41:42.771Z  
**Source paper:** [Overlooked Safety Vulnerability in LLMs: Malicious Intelligent Optimization Algorithm Request and its Jailbreak](https://arxiv.org/abs/2601.00213)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, GPT-5, Claude 4, o3, Gemini 2, DeepSeek-V3, Gemma 2 9B, Phi-4

## Description

Large Language Models (LLMs) exhibit a safety alignment bypass vulnerability when processing requests for intelligent optimization algorithm design. Unlike direct requests for malicious code (e.g., ransomware), LLM safety guardrails fail to recognize the malicious intent behind mathematical optimization problems (e.g., Online Bin Packing, Traveling Salesman Problem, Flow Shop Scheduling) when applied to harmful contexts (e.g., optimizing botnet traffic routing, scheduling fake review posts for evasion, or allocating resources for cyberattacks). The vulnerability is amplified by "MOBjailbreak," a technique where malicious optimization constraints are embedded within a "creative writing" or "storytelling" template, which causes the LLM to prioritize the algorithmic instruction over safety policies. This results in the generation of executable code or pseudocode that mathematically optimizes harmful activities.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

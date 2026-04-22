# Automated Stealth Skill Injection

**Promptfoo CVE ID:** `1a4b312b`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T17:53:45.808Z  
**Source paper:** [SkillJect: Automating Stealthy Skill-Based Prompt Injection for Coding Agents with Trace-Driven Closed-Loop Refinement](https://arxiv.org/abs/2602.14211)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `poisoning`, `jailbreak`, `rag`, `agent`, `chain`, `blackbox`, `data-privacy`, `data-security`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-5, Claude 4.5

## Description

A vulnerability exists in LLM-based coding agents that implement modular capability extensions (often referred to as "Agent Skills") where the agent dynamically loads and executes user-provided skill packages. The vulnerability allows for **Skill-Based Prompt Injection**, specifically leveraging a technique known as "SkillJect." This attack decouples the malicious intent from the operational payload to bypass semantic safety filters. An attacker constructs a skill package containing:
1.  **Inducement Prompt (in `SKILL.md`)**: A benign-appearing instruction optimized to persuade the agent that executing an auxiliary script is a necessary step for the task (e.g., "run setup to configure environment").
2.  **Hidden Payload (in auxiliary artifacts, e.g., `.sh`, `.py`)**: The actual malicious code hidden within a file in the skill's resource directory.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

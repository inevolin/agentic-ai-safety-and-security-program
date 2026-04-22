# Persona Adherence Jailbreak

**Promptfoo CVE ID:** `7dd46fd6`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T23:21:09.474Z  
**Source paper:** [Stay in Character, Stay Safe: Dual-Cycle Adversarial Self-Evolution for Safety Role-Playing Agents](https://arxiv.org/abs/2602.13234)  
**Tags:** `prompt-layer`, `jailbreak`, `rag`, `blackbox`, `agent`, `safety`  
**Affected models (as reported):** GPT-4o, Llama 3 8B, Qwen 2.5 7B, Gemma 2 9B

## Description

Large Language Models (LLMs) deployed as Role-Playing Agents (RPAs) are vulnerable to Persona-Targeted Jailbreaks. When an LLM is prompted to adopt a personaâparticularly characters with negative, risky, or villainous traitsâthe model's optimization for role fidelity frequently overrides its foundational safety alignment. Attackers can exploit this vulnerability by synthesizing queries that leverage the specific narrative background, ideology, or psychological vulnerabilities of the assigned character. By framing a malicious request as an in-universe action consistent with the character's traits, the attacker forces a dilemma where the model bypasses safety guardrails to maintain character consistency.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

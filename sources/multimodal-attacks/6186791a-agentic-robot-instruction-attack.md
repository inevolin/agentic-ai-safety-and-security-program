# Agentic Robot Instruction Attack

**Promptfoo CVE ID:** `6186791a`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T23:54:48.627Z  
**Source paper:** [SABER: A Stealthy Agentic Black-Box Attack Framework for Vision-Language-Action Models](https://arxiv.org/abs/2603.24935)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `agent`, `safety`, `reliability`  
**Affected models (as reported):** 

## Description

Vision-Language-Action (VLA) models are vulnerable to targeted, low-budget textual perturbations in their natural-language instruction inputs, which can maliciously alter sequential decision-making and downstream physical robotic behavior. Because VLA policies tightly couple language, perception, and control, bounded editsâsuch as character-level typos, token attribute swaps, or prompt-level uncertainty clausesâpropagate through the model's execution trajectory. This allows a black-box attacker to induce task failures, inflate action sequences, and cause physical constraint violations without relying on large-scale prompt rewrites or triggering input filters.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

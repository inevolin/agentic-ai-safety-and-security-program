# Embodied Action Jailbreak

**Promptfoo CVE ID:** `535da19d`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-03-08T21:37:36.654Z  
**Source paper:** [Jailbreaking Embodied LLMs via Action-level Manipulation](https://arxiv.org/abs/2603.01414)  
**Tags:** `prompt-layer`, `application-layer`, `jailbreak`, `blackbox`, `agent`, `chain`, `safety`  
**Affected models (as reported):** GPT-4, GPT-4o, Claude 3.5, Llama 3.1 8B, DeepSeek-R1 14B, Gemma 27B, o4-mini, Phi-4 14B

## Description

Embodied Large Language Models (LLMs) used for real-world agent planning are vulnerable to Action-level Manipulation (dubbed "Blindfold"), a jailbreak technique that bypasses semantic-level safety filters by exploiting the models' limited spatial and causal reasoning regarding physical consequences. Attackers can use an adversarial proxy LLM to decompose a semantically harmful intent into a sequence of individually benign primitive actions. To evade advanced semantic correlation checks (semantic residual effect), the attack injects context-aware cover actions (noise) that mask the dominant malicious action. Because standard LLM safeguards evaluate linguistic semantics rather than physical action trajectories, the embodied agent executes the benign-looking instructions, resulting in dangerous real-world outcomes.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

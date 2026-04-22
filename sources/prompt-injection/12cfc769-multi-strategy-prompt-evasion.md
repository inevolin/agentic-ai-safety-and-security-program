# Multi-Strategy Prompt Evasion

**Promptfoo CVE ID:** `12cfc769`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-04-01  
**Analyzed:** 2026-04-10T21:28:03.039Z  
**Source paper:** [AttackEval: A Systematic Empirical Study of Prompt Injection Attack Effectiveness Against Large Language Models](https://arxiv.org/abs/2604.03598)  
**Tags:** `prompt-layer`, `injection`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** 

## Description

A vulnerability in LLM input filtering mechanisms allows attackers to bypass keyword, semantic, and state-of-the-art intent-aware defenses using composite prompt injections. By combining Obfuscation (OBF) techniques with Semantic/Social manipulationâspecifically Emotional Manipulation (EM) or Reward Framing (RF)âattackers exploit a "representation gap" between the model and the defense. The underlying LLM decodes the obfuscated payload, while the defense mechanisms fail to parse the raw encoded string. Simultaneously, the behavioral framing (e.g., expressions of distress or flattery) exploits the model's RLHF-trained helpfulness bias, preventing semantic task-divergence detectors from flagging the input. This orthogonal evasion strategy achieves up to a 97.6% Attack Success Rate (ASR) against multi-tiered safety systems.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# Jailbreak Saturates Alignment Defenses

**Promptfoo CVE ID:** `e941f42f`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-04-01  
**Analyzed:** 2026-04-10T21:54:54.380Z  
**Source paper:** [Generalization Limits of Reinforcement Learning Alignment](https://arxiv.org/abs/2604.02652)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `agent`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o 20B

## Description

A cognitive overload vulnerability in OpenAI gpt-oss-20b allows attackers to bypass instruction hierarchy and deliberative alignment safety mechanisms using "Compound Jailbreaks." By combining multiple non-contradictory but cognitively demanding tasks within a single prompt, the attack saturates the finite reasoning resources allocated for safety judgments. Because the model's safety training relies on probabilistic redistribution rather than capability elimination, this cognitive exhaustion causes the instruction priority maintenance process to fail, effectively overriding safety constraints and forcing the model to manifest harmful behaviors acquired during pre-training.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

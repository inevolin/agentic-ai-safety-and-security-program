# Diverse VLA Linguistic Fragility

**Promptfoo CVE ID:** `42e67145`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-04-01  
**Analyzed:** 2026-04-10T22:11:00.972Z  
**Source paper:** [Uncovering Linguistic Fragility in Vision-Language-Action Models via Diversity-Aware Red Teaming](https://arxiv.org/abs/2604.05595)  
**Tags:** `model-layer`, `prompt-layer`, `vision`, `multimodal`, `blackbox`, `agent`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4o, DeepSeek-R1, Qwen 2.5 4B

## Description

Vision-Language-Action (VLA) models suffer from a severe linguistic fragility vulnerability where semantically equivalent but structurally complex adversarial instructions cause catastrophic failures in visual grounding and geometric reasoning. Attackers can reliably induce physical execution failures in robotic manipulation tasks by applying semantic-preserving linguistic variations, such as synonymous rephrasing, syntactic restructuring, or the addition of fine-grained compositional constraints (e.g., "precisely align", "without disturbing other objects"). Because VLA policies rely heavily on surface-level linguistic patterns rather than robust compositional understanding, these perturbations force the policy out of its training distribution, resulting in disjointed motion planning, grasping primitive failures, and task collapse (success rates dropping from >90% to <6%).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

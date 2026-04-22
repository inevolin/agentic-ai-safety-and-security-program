# Deep Safety Attention Jailbreak

**Promptfoo CVE ID:** `340767ef`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T20:32:17.415Z  
**Source paper:** [Depth Charge: Jailbreak Large Language Models from Deep Safety Attention Heads](https://arxiv.org/abs/2603.05772)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 3.1 8B, DeepSeek-R1 7B, Qwen 2.5 7B

## Description

An activation-steering vulnerability in open-weights Large Language Models allows attackers to bypass safety guardrails by injecting targeted additive perturbations into deep, safety-critical attention heads. The exploit, termed Safety Attention Head Attack (SAHA), utilizes Ablation-Impact Ranking (AIR) to isolate specific attention heads that causally govern safety refusals. By applying Layer-Wise Perturbations (LWP) derived from the linearized decision boundary of a latent safety probe, an attacker can inject minimal magnitude perturbations directly into these specific head activations. This internal manipulation forces the model to misclassify malicious embeddings as benign, neutralizing the refusal mechanism and generating harmful content with high semantic fidelity while bypassing prompt-level and shallow embedding-level defenses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

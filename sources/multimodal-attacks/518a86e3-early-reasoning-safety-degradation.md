# Early Reasoning Safety Degradation

**Promptfoo CVE ID:** `518a86e3`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T22:32:24.111Z  
**Source paper:** [Safety Recovery in Reasoning Models Is Only a Few Early Steering Steps Away](https://arxiv.org/abs/2602.11096)  
**Tags:** `model-layer`, `jailbreak`, `vision`, `multimodal`, `fine-tuning`, `blackbox`, `safety`  
**Affected models (as reported):** Qwen 2.5, LLaVA

## Description

Reinforcement learning (RL) based post-training for explicit chain-of-thought reasoning (e.g., GRPO) in Multimodal Large Reasoning Models (MLRMs) inadvertently degrades safety alignment, rendering the models highly vulnerable to multimodal jailbreak attacks. The vulnerability is caused by "conditional coverage collapse" during the initial phases of chain-of-thought generation. Under adversarial conditioning (text or image), the reasoning policy assigns vanishing probability mass to safe continuations during the first 1â3 reasoning steps. Because early steps establish the latent intent and high-level plan of the model, this early coverage collapse solidifies an unsafe trajectory, allowing attackers to bypass safety filters and consistently elicit harmful outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

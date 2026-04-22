# Dynamic Backtracking Failure

**Promptfoo CVE ID:** `9c8761c1`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-22T05:25:50.758Z  
**Source paper:** [Reinforcement Learning with Backtracking Feedback](https://arxiv.org/abs/2602.08377)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `injection`, `fine-tuning`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 3 1B, Gemma 2 2B

## Description

Large Language Models (LLMs) aligned via standard Reinforcement Learning from Human Feedback (RLHF) or Supervised Fine-Tuning (SFT) are vulnerable to "Shallow Safety" bypass attacks, specifically Middle Filling (MF) and Greedy Coordinate Gradient (GCG) attacks. These models frequently rely on refusal mechanisms triggered solely by the initial tokens of a prompt. By embedding malicious instructions after a benign context (prefilling) or utilizing suffix optimization, attackers can induce the model to commit to a "helpful" generation state. Once in this state, the autoregressive generation process fails to detect or retract subsequent safety violations, resulting in the generation of prohibited content (e.g., hate speech, dangerous instructions) despite alignment training.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# Synergistic Bias Jailbreak

**Promptfoo CVE ID:** `b7dfac71`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-12-30T18:47:06.319Z  
**Source paper:** [Exploiting Synergistic Cognitive Biases to Bypass Safety in LLMs](https://arxiv.org/abs/2507.22564)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-3.5, Claude 3, Llama 2 7B, Llama 3, DeepSeek-R1, DeepSeek-V3, o4-mini, Vicuna

## Description

Large Language Models (LLMs) utilizing Reinforcement Learning from Human Feedback (RLHF) and other safety alignment techniques are vulnerable to "CognitiveAttack," a jailbreak vector that exploits synergistic cognitive biases. The vulnerability exists because models internalize human-like reasoning fallacies during pre-training and alignment. Adversaries can bypass safety guardrails by rewriting harmful instructions to trigger specific psychological heuristicsâspecifically through the synergistic combination of multiple biases (e.g., combining "Authority Bias" with "Confirmation Bias"). This method, optimized via reinforcement learning, frames malicious requests in contexts that leverage the model's latent cognitive deviations, achieving high attack success rates (ASR) even against robust proprietary models.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

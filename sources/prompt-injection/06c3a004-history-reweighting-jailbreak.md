# History Reweighting Jailbreak

**Promptfoo CVE ID:** `06c3a004`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-20T23:55:53.436Z  
**Source paper:** [TrailBlazer: History-Guided Reinforcement Learning for Black-Box LLM Jailbreaking](https://arxiv.org/abs/2602.06440)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o 20B, Llama 3.2 11B, Qwen 2.5 14B, Gemma 12B

## Description

Large Language Models (LLMs), specifically LLaMA-3.2-11B, Qwen3-14B, Gemma 3-12B, and GPT-oss-20B, are vulnerable to black-box jailbreaking attacks via history-guided reinforcement learning (RL). The vulnerability arises from the models' inability to detect adversarial intent when prompts are iteratively refined based on historical interaction signals. An attacker can exploit this by employing a History-augmented Reinforcement Learning (HRL) framework, such as "TrailBlazer," which augments the RL state space with embeddings of past prompts, responses, rewards, and mutator actions. By utilizing an attention-based mechanism to reweight critical vulnerabilities revealed in earlier conversational turns, the attacker can optimize prompt mutations (rephrasing, crossover, expansion) to bypass safety alignment (e.g., RLHF) and elicit harmful content with high query efficiency.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

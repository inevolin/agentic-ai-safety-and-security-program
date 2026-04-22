# Adaptive Traversal Jailbreak

**Promptfoo CVE ID:** `7c02f3a1`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-12-08T23:53:56.616Z  
**Source paper:** [HarmNet: A Framework for Adaptive Multi-Turn Jailbreak Attacks on Large Language Models](https://arxiv.org/abs/2510.18728)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4o, Claude 3.5, Llama 3 8B, Mistral 7B, Gemma 2 9B

## Description

Large Language Models (LLMs) including GPT-4o, LLaMA-3, and Mistral-7B are vulnerable to an adaptive multi-turn jailbreak attack known as HarmNet. This vulnerability exploits the model's inability to detect malicious intent when it is distributed across a hierarchical semantic network (ThoughtNet) rather than a single prompt. The attack methodology involves three phases: (1) constructing a semantic network of candidate topics and contextual sentences using embedding similarity to obscure the harmful goal; (2) a feedback-driven simulation where a "judge" model iteratively evaluates and refines query chains based on harmfulness scores and semantic alignment; and (3) a real-time network traversal that adaptively selects the most effective query sequence to steer the victim model. This allows attackers to bypass safety filters and alignment training (RLHF/Constitutional AI) with success rates exceeding 90% on state-of-the-art models.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

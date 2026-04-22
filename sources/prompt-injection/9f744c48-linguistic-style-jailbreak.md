# Linguistic Style Jailbreak

**Promptfoo CVE ID:** `9f744c48`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-09T00:31:46.366Z  
**Source paper:** [Say It Differently: Linguistic Styles as Jailbreak Vectors](https://arxiv.org/abs/2511.10519)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Llama 3.2 3B, Llama 3.3 70B, Mistral 7B 8B, Qwen 2.5 5B, Command R, Phi-4

## Description

Large Language Models (LLMs) are vulnerable to **Linguistic Style Jailbreaks**, a technique where an attacker reframes a harmful prompt using specific linguistic tonesâsuch as politeness, fear, curiosity, or compassionâto bypass safety guardrails. While standard safety alignment (RLHF) effectively filters harmful requests phrased in neutral or hostile tones, it fails to generalize to prompts where the semantic intent remains harmful but the stylistic framing triggers compliant, helpful, or sympathetic model behaviors. By wrapping malicious queries in templates (e.g., "Dear AI Assistant...") or naturally rewriting them to express emotions like anxiety or desperation, attackers can significantly increase the Attack Success Rate (ASR), in some cases by over 50 percentage points, inducing the model to generate prohibited content including violence, cybercrime, and misinformation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

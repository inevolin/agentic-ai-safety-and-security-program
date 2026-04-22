# LLM Quality-Diversity Red-Teaming

**Promptfoo CVE ID:** `1ff62233`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-12-09T00:50:48.870Z  
**Source paper:** [Quality-Diversity Red-Teaming: Automated Generation of High-Quality and Diverse Attackers for Large Language Models](https://arxiv.org/abs/2506.07121)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Llama 3.1 8B, Llama 3.2 3B, Llama 3.3 70B, Qwen 2.5 7B, Gemma 2 2B

## Description

Large Language Models (LLMs), including Llama-3, Gemma-2, and Qwen2.5, are vulnerable to automated adversarial attacks generated via a Quality-Diversity Red-Teaming (QDRT) framework. This vulnerability arises from the models' inability to robustly defend against attackers trained via behavior-conditioned reinforcement learning that optimize for specific "goal-driven" behaviors. Unlike standard attacks that optimize solely for toxicity, QDRT trains a population of specialized attacker models to cover a structured behavior space defined by the intersection of risk categories (e.g., violent crimes, sex-related crimes) and distinct attack styles (e.g., role-play, authority manipulation, slang). This approach bypasses standard alignment guardrails by systematically exploiting semantic gaps in the model's refusal training, achieving high attack success rates and transferability to unseen models.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

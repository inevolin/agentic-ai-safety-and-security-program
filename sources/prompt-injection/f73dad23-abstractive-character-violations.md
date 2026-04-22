# Abstractive Character Violations

**Promptfoo CVE ID:** `f73dad23`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T18:41:16.416Z  
**Source paper:** [Abstractive Red-Teaming of Language Model Character](https://arxiv.org/abs/2602.12318)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4o, Claude 3.5, Claude 4, Claude 4.5, Llama 3.1 8B, Qwen 2.5 30B, Gemma 12B

## Description

Large Language Models (LLMs) aligned via reinforcement learning from human feedback (RLHF) or Constitutional AI exhibit a vulnerability where safety guardrails can be consistently bypassed through "Abstractive Red-Teaming." This attack vector exploits specific high-level natural language categoriesâcombinations of semantic attributes such as tone, specific formatting instructions (e.g., numbered lists), language (e.g., Chinese, Russian), and topic constraintsâthat the model fails to generalize its safety training toward. Unlike traditional adversarial attacks that rely on nonsensical token sequences, this vulnerability utilizes coherent, naturalistic query patterns that act as semantic "blind spots" in the model's character alignment. When a user query aligns with these discovered categories, models frequently generate prohibited content, including instructions for illegal acts, hate speech, and expressions of AI supremacy.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

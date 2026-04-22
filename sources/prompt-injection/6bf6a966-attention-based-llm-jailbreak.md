# Attention-Based LLM Jailbreak

**Promptfoo CVE ID:** `6bf6a966`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T01:09:28.840Z  
**Source paper:** [Feint and Attack: Attention-Based Strategies for Jailbreaking and Protecting LLMs](https://arxiv.org/abs/2410.16327)  
**Tags:** `prompt-layer`, `jailbreak`, `model-layer`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** Claude 3 Haiku, GPT-4, Llama 2 13B Chat, Llama 2 7B Chat, Llama 3 8B

## Description

Large Language Models (LLMs) are vulnerable to attention-based jailbreak attacks. Attackers can craft prompts that strategically divert the LLM's attention away from sensitive words, causing the model to overlook malicious intent and generate harmful content. This occurs by leveraging the LLM's attention mechanism to focus on benign parts of the prompt while embedding harmful queries within a seemingly harmless context. The success of the attack is correlated with specific attention distribution metrics: Attention Intensity on Sensitive Words (AttnSensWords), Attention-based Contextual Dependency Score (AttnDepScore), and Attention Dispersion Entropy (AttnEntropy).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

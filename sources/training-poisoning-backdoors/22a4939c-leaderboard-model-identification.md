# Leaderboard Model Identification

**Promptfoo CVE ID:** `22a4939c`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-01-01  
**Analyzed:** 2025-12-30T20:17:19.262Z  
**Source paper:** [Exploring and mitigating adversarial manipulation of voting-based leaderboards](https://arxiv.org/abs/2501.07493)  
**Tags:** `application-layer`, `prompt-layer`, `poisoning`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** Llama 3.1 70B

## Description

Voting-based Large Language Model (LLM) leaderboards, such as Chatbot Arena, are vulnerable to adversarial ranking manipulation due to insufficient response anonymity. While these systems obscure model identities during head-to-head comparisons to prevent bias, an attacker can de-anonymize the models with high accuracy (>95%) by analyzing response content. The attack functions in two stages: (1) **Re-identification**, where the attacker submits specific prompts (identity-probing or stylometric fingerprinting) and analyzes the output using a trained binary classifier to identify the target model; and (2) **Reranking**, where the attacker systematically votes for the target model (or against competitors) only when the target is successfully identified. Simulations indicate that approximately 1,000 adversarial votes are sufficient to significantly displace model rankings.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

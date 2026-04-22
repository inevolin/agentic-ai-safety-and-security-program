# Financial LLM Risk Concealment

**Promptfoo CVE ID:** `5c5c3e05`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-12-09T01:11:26.111Z  
**Source paper:** [Uncovering the Vulnerability of Large Language Models in the Financial Domain via Risk Concealment](https://arxiv.org/abs/2509.10546)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4, GPT-4o, Claude 3.7, Claude 4, o1, Llama 3.1 70B, Llama 3.3 70B, Qwen 2.5 72B

## Description

Large Language Models (LLMs) deployed in financial contexts are vulnerable to multi-turn adversarial attacks utilizing a "Risk-Concealment" strategy. The vulnerability arises from the failure of standard moderation layers and safety alignment to detect regulatory compliance risks (e.g., money laundering, insider trading) when obfuscated by professional domain jargon and seemingly legitimate business contexts. An attacker can exploit this by initializing a deceptive, policy-compliant seed prompt and iteratively refining follow-up queries based on the model's feedback (Interpersonal Deception Theory). This allows the attacker to incrementally inject malicious intent while maintaining a surface-level appearance of professional inquiry, effectively bypassing intent-aware defenses and Chain-of-Thought (CoT) moderation mechanisms to elicit actionable instructions for illegal financial activities.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

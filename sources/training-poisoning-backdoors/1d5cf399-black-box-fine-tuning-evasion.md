# Black-Box Fine-Tuning Evasion

**Promptfoo CVE ID:** `1d5cf399`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-10-01  
**Analyzed:** 2026-01-14T06:23:45.361Z  
**Source paper:** [Fine-Tuning Jailbreaks under Highly Constrained Black-Box Settings: A Three-Pronged Approach](https://arxiv.org/abs/2510.01342)  
**Tags:** `model-layer`, `poisoning`, `jailbreak`, `fine-tuning`, `blackbox`, `api`, `safety`  
**Affected models (as reported):** GPT-4, GPT-4o, Claude 4, Llama 2 7B, Qwen 2.5 7B, Gemma 7B

## Description

Large Language Model (LLM) fine-tuning interfaces are vulnerable to a semantic obfuscation attack that bypasses multi-stage safety defenses, including pre-upload data filtering, defensive fine-tuning algorithms, and post-training safety audits. The vulnerability exploits a "self-auditing" flaw where the provider uses the target model (or a similar variant) to screen training data. Attackers can submit a small dataset (approx. 500 samples) where harmful answers are obfuscated using a three-pronged strategy: (1) wrapping content in refusal-style safety prefixes and suffixes, (2) replacing sensitive keywords with benign placeholders (e.g., underscores), and (3) embedding a backdoor trigger. Because the semantic structure remains intact despite keyword redaction, the model learns the harmful behavior while the data passes intake filters as "safe." Post-training, the model retains its general utility and safety on standard inputs but generates uncensored, harmful content when the backdoor trigger is present.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

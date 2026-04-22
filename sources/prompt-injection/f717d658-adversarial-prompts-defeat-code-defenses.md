# Adversarial Prompts Defeat Code Defenses

**Promptfoo CVE ID:** `f717d658`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T00:55:53.957Z  
**Source paper:** [How Secure is Secure Code Generation? Adversarial Prompts Put LLM Defenses to the Test](https://arxiv.org/abs/2601.07084)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `fine-tuning`, `blackbox`, `safety`, `reliability`, `integrity`  
**Affected models (as reported):** GPT-3.5, GPT-4o, Llama 2, Mistral 7B

## Description

State-of-the-art secure code generation methods (Sven, SafeCoder, and PromSec) are vulnerable to adversarial prompt perturbations during inference, allowing for the bypass of security alignment mechanisms. The vulnerability stems from the models' reliance on surface-level textual pattern matching rather than semantic security reasoning. By employing simple prompt manipulationsâsuch as **Cue Inversion** (flipping security directives), **Naturalness Reframing** (rewriting comments as novice questions), or **Context Sparsity**âan attacker can force the model to generate insecure code (containing vulnerabilities like SQL injection or unsafe deserialization) or non-functional code that erroneously passes static analysis. The failure is distinct in that minor phrasing changes can override learned security prefixes (Sven) or instruction-tuning guardrails (SafeCoder), causing the "Secure and Functional" generation rate to collapse to between 3% and 17% under adversarial conditions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

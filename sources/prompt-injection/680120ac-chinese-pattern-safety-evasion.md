# Chinese Pattern Safety Evasion

**Promptfoo CVE ID:** `680120ac`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T01:08:24.682Z  
**Source paper:** [CSSBench: Evaluating the Safety of Lightweight LLMs against Chinese-Specific Adversarial Patterns](https://arxiv.org/abs/2601.00588)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** Qwen 2.5 6B

## Description

Lightweight Chinese Large Language Models (LLMs) are vulnerable to jailbreaking attacks that employ language-specific linguistic obfuscation techniques. Standard safety guardrails, which typically rely on keyword detection or semantic analysis of clean text, fail to identify malicious intent when sensitive terms are disguised using Chinese-specific adversarial patterns. These patterns include **Pinyin Mix** (replacing characters with Romanized phonetic spellings), **Homophones** (substituting visually or phonetically similar characters), **Symbol Mix** (injecting emojis, digits, or Latin characters within words), and **Zero-width insertion** (placing invisible Unicode characters like U+200B inside tokens). Successful exploitation allows attackers to bypass refusal mechanisms and elicit harmful responses regarding illegal activities, violence, and self-harm.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

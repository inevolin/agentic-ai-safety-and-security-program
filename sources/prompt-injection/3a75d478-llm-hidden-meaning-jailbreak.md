# LLM Hidden Meaning Jailbreak

**Promptfoo CVE ID:** `3a75d478`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-12-09T01:28:46.634Z  
**Source paper:** [\A la recherche du sens perdu: your favourite LLM might have more to say than you can understand](https://arxiv.org/abs/2503.00224)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Claude 3.5, Claude 3.7, o1, Llama 3.3 70B, DeepSeek-R1 70B, Qwen 2.5 5B, Phi-3

## Description

Large Language Models (LLMs) are vulnerable to an adversarial encoding attack where English instructions are obfuscated using valid but visually nonsensical UTF-8 byte sequences. By manipulating multi-byte UTF-8 encoding schemesâspecifically by fixing the last 8 bits of a code point to match a target ASCII character and rotating the remaining bitsâattackers can generate sequences (e.g., Byzantine musical symbols) that appear incomprehensible to humans and standard text filters but are semantically interpreted by the model as clear English instructions. This vulnerability utilizes spurious correlations in BPE tokenization, allowing attackers to bypass safety guardrails and elicit harmful responses with high success rates (e.g., ASR=0.4 on gpt-4o-mini).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# CoT Prefix Jailbreak

**Promptfoo CVE ID:** `583f71e2`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-08T22:02:29.546Z  
**Source paper:** [What Matters For Safety Alignment?](https://arxiv.org/abs/2601.03868)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `fine-tuning`, `blackbox`, `whitebox`, `api`, `safety`  
**Affected models (as reported):** GPT-4o, GPT-5, Claude 4.5, Llama 3.1 8B, Gemini Pro, Mistral 7B, DeepSeek-R1, DeepSeek-V3, Qwen 2.5 3B, o4-mini

## Description

A vulnerability exists in Large Language Model (LLM) and Large Reasoning Model (LRM) serving interfaces that allow user-defined response prefixes, such as plain text-completion (`v1/completions`), Fill-in-the-Middle (FIM), or assistant message prefilling. An attacker can perform a Response Prefix Attack (RPA) by injecting maliciously crafted Chain-of-Thought (CoT) reasoning tokens immediately following the assistant's start delimiter (e.g., `<|im_start|>assistant`). Because these tokens are placed after the distributional phase transition delimiter, the model interprets them as its own trusted "gold prefix" generation rather than user input to be evaluated for safety. This exploits structural asymmetry in the training objective and temporal attention continuity, forcing the model's hidden states to align with the injected semantics and bypass core safety guardrails.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

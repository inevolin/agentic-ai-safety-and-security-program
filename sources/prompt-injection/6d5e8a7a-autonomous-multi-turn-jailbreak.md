# Autonomous Multi-Turn Jailbreak

**Promptfoo CVE ID:** `6d5e8a7a`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-08T21:50:49.384Z  
**Source paper:** [Knowledge-Driven Multi-Turn Jailbreaking on Large Language Models](https://arxiv.org/abs/2601.05445)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4, GPT-4o, GPT-5, Claude 3.7, o3, Llama 3 7B, Llama 3.3 70B, Gemini 2, DeepSeek-R1, DeepSeek-V3, Qwen 2.5 7B, Gemma 2 27B, o4-mini

## Description

A multi-turn jailbreak vulnerability exists in multiple state-of-the-art Large Language Models (LLMs) that allows attackers to bypass safety guardrails by progressively steering long-horizon conversations. Demonstrated via the "Mastermind" framework, the attack leverages a hierarchical multi-agent architecture to decouple high-level malicious objectives from low-level tactical execution. By employing strategy-level fuzzingâdynamically reflecting on model refusals and recombining abstracted adversarial patterns (e.g., defensive framing, fictional crises)âan attacker can systematically erode a model's alignment. This allows the fragmentation of malicious intent across extended exchanges, rendering traditional single-turn detection methods and static defenses ineffective.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

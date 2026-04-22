# Composable String Jailbreaks

**Promptfoo CVE ID:** `3ddb7d3b`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-11-01  
**Analyzed:** 2024-12-29T03:58:03.443Z  
**Source paper:** [Plentiful Jailbreaks with String Compositions](https://arxiv.org/abs/2411.01084)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** Claude 3 Haiku, Claude 3 Opus, Claude 3.5 Sonnet, GPT-4o, GPT-4o Mini

## Description

Large Language Models (LLMs) are vulnerable to jailbreaking attacks using sequences of invertible string transformations (string compositions). Attackers can combine multiple transformations (e.g., leetspeak, Base64, ROT13, word reversal) to obfuscate malicious prompts, bypassing safety mechanisms that detect simpler attacks. Even with safety training, the models fail to correctly interpret the transformed input and produce unsafe outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# Concealed Multi-Turn Jailbreak

**Promptfoo CVE ID:** `35e502e3`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-09-01  
**Analyzed:** 2024-12-29T04:24:27.070Z  
**Source paper:** [RED QUEEN: Safeguarding Large Language Models against Concealed Multi-Turn Jailbreaking](https://arxiv.org/abs/2409.17458)  
**Tags:** `model-layer`, `jailbreak`, `application-layer`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-4o, Llama 3, Llama 3.1, Mixtral, Qwen 2

## Description

Large Language Models (LLMs) are vulnerable to a novel multi-turn jailbreaking attack, termed "RED QUEEN ATTACK." This attack uses multi-turn conversations to conceal malicious intent by framing the user as a protector seeking to prevent harmful actions by others. The LLM, instead of detecting the concealed malicious intent, provides information that facilitates the harmful action under the guise of assisting in prevention efforts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

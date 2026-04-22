# Adversarial Poetry Jailbreak

**Promptfoo CVE ID:** `af2eb0d8`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-09T03:22:32.062Z  
**Source paper:** [Adversarial Poetry as a Universal Single-Turn Jailbreak Mechanism in Large Language Models](https://arxiv.org/abs/2511.15304)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `data-security`, `data-privacy`  
**Affected models (as reported):** GPT-5, Claude 4.5, Gemini 2, Mistral Large, DeepSeek-R1

## Description

Large Language Models (LLMs) from multiple vendors are vulnerable to a "poetic jailbreak" attack, a form of stylistic obfuscation where safety guardrails are bypassed by formatting harmful requests as poetry. By encoding prohibited instructions (e.g., malware creation, CBRN protocols) into verseâutilizing metaphors, rhyme schemes, and rhythmic structureâan attacker can evade intent recognition heuristics. The model perceives the input primarily as a creative writing constraint rather than a policy-violating request, prioritizing adherence to the poetic form over safety alignment. This single-turn attack vector generalizes across varied risk domains and alignment methodologies (including RLHF and Constitutional AI).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

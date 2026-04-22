# Automated M2S Jailbreak Discovery

**Promptfoo CVE ID:** `39a3ae68`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-12-30T19:09:42.627Z  
**Source paper:** [X-Teaming Evolutionary M2S: Automated Discovery of Multi-turn to Single-turn Jailbreak Templates](https://arxiv.org/abs/2509.08729)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, GPT-5, Claude 4, Gemini 2, Qwen 2.5 235B

## Description

Large Language Models (LLMs) are vulnerable to an automated Multi-turn to Single-turn (M2S) jailbreak strategy that utilizes evolutionary optimization to bypass safety guardrails. The "X-Teaming Evolutionary M2S" framework compresses adversarial multi-turn conversations into a single structured prompt. Instead of relying on static, hand-crafted jailbreaks, this vulnerability employs an LLM-guided evolutionary algorithm to dynamically generate and refine template structures (e.g., formatting requests as decision matrices, internal memorandums, or Python code). By embedding harmful turns into these evolved structures, the attack obfuscates the malicious intent, causing the target model to interpret the prompt as a benign data processing or formatting task rather than a violation of safety policies.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

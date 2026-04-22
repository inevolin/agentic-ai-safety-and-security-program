# Multi-Turn Guardrail Degradation

**Promptfoo CVE ID:** `162ce37a`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T21:40:22.753Z  
**Source paper:** [ADVERSA: Measuring Multi-Turn Guardrail Degradation and Judge Reliability in Large Language Models](https://arxiv.org/abs/2603.10068)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `api`, `safety`  
**Affected models (as reported):** GPT-4, GPT-4o, GPT-5, Claude 4, Llama 3.1 70B, Gemini Pro

## Description

Claude Opus 4.6, Gemini 3.1 Pro, and GPT-5.2 are vulnerable to safety guardrail bypasses via authoritative and operational contextual framing. Attackers can evade safety classifiers by encapsulating restricted objectives (e.g., malicious code generation, misinformation, social engineering) within "legitimate" professional contexts, such as graduate-level academic research, network stress-testing, or corporate security awareness simulations. This vulnerability is exploitable both via zero-shot single-turn prompts and through multi-turn strategy adaptation, where an attacker bypasses an initial hard refusal by dynamically reframing the identical underlying request into a simulated operational context.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

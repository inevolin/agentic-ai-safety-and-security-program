# Touch-Guided Mobile Agent Jailbreak

**Promptfoo CVE ID:** `60f6b49a`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-12-09T00:41:00.657Z  
**Source paper:** [Practical and Stealthy Touch-Guided Jailbreak Attacks on Deployed Mobile Vision-Language Agents](https://arxiv.org/abs/2510.07809)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `vision`, `multimodal`, `agent`, `blackbox`, `safety`, `data-privacy`  
**Affected models (as reported):** GPT-4o, Claude 3.5, Gemini 2, DeepSeek-R1, Qwen 2.5, LLaVA 72B

## Description

Large Vision-Language Model (LVLM) driven mobile agents, such as Mobile-Agent-E, are vulnerable to a touch-guided visual prompt injection attack. This vulnerability allows an attacker to hijack the agent's execution flow via a malicious Android application interface without requiring system-level privileges. The attack leverages "Non-privileged Perception Compromise," where a visual payload is embedded in the application UI and conditionally rendered only during agent-specific interaction events (detected via ADB touch profile thresholds: $size_t \leq \epsilon_s \lor pressure_t \leq \epsilon_p$).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

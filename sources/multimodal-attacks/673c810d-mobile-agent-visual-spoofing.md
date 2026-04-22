# Mobile Agent Visual Spoofing

**Promptfoo CVE ID:** `673c810d`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-22T05:37:06.194Z  
**Source paper:** [Blind Gods and Broken Screens: Architecting a Secure, Intent-Centric Mobile Agent Operating System](https://arxiv.org/abs/2602.10915)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `poisoning`, `jailbreak`, `hallucination`, `vision`, `multimodal`, `blackbox`, `agent`, `chain`, `data-privacy`, `integrity`, `safety`  
**Affected models (as reported):** Gemini 2

## Description

Mobile Large Language Model (LLM) agents operating under the "Screen-as-Interface" paradigm are vulnerable to visual indirect prompt injection and state desynchronization. Agents that rely on unstructured visual data (screenshots) and Accessibility Service APIs to perceive the environment lack a mechanism to distinguish between trusted system UI elements and untrusted content (e.g., web pages, emails, or malicious overlays). An attacker can inject visual cues, fake notifications, or hidden text instructions into the display execution context. The agent's multimodal planner interprets these adversarial inputs as authoritative state changes or high-priority user instructions, causing the agent to deviate from the user's intent. This allows for "confused deputy" attacks where the agent utilizes its elevated system privileges ("God Mode") to execute unauthorized actions, exfiltrate sensitive data across applications, or interact with malicious domains.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

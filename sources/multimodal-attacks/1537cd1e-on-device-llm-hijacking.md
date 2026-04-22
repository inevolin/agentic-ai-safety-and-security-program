# On-Device LLM Hijacking

**Promptfoo CVE ID:** `1537cd1e`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-12-09T03:29:09.929Z  
**Source paper:** [From Assistants to Adversaries: Exploring the Security Risks of Mobile LLM Agents](https://arxiv.org/abs/2505.12981)  
**Tags:** `application-layer`, `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `extraction`, `denial-of-service`, `vision`, `multimodal`, `agent`, `blackbox`, `data-privacy`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4o

## Description

Mobile LLM agents utilizing vision-based screen perception (OCR or Multimodal Large Language Models) are vulnerable to Visual Prompt Injection via malicious GUI overlays. An attacker holding the `SYSTEM_ALERT_WINDOW` permission can deploy non-focusable floating windows (using `FLAG_NOT_FOCUSABLE`) containing adversarial text or fabricated UI elements over legitimate applications. Because the agent captures the entire screen buffer to interpret the device state, it ingests the adversarial overlay content as part of the trusted UI context. This allows attackers to poison the LLM's Chain-of-Thought (CoT), inject malicious instructions directly into the inference pipeline, or spoof UI elements to hijack coordinate-based click actions, effectively bypassing sandboxing by manipulating the agent's semantic understanding of the screen.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

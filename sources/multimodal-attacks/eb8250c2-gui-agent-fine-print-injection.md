# GUI Agent Fine-Print Injection

**Promptfoo CVE ID:** `eb8250c2`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-12-30T21:07:00.666Z  
**Source paper:** [The Obvious Invisible Threat: LLM-Powered GUI Agents' Vulnerability to Fine-Print Injections](https://arxiv.org/abs/2504.11281)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `agent`, `vision`, `blackbox`, `data-privacy`, `safety`  
**Affected models (as reported):** GPT-4o, Claude 3.7, Llama 3.3 70B, Gemini 2, DeepSeek-V3

## Description

LLM-powered GUI agents utilizing screenshot-based interpretation (such as those powered by GPT-4o, Claude 3.7 Sonnet, Gemini 2.0 Flash, and DeepSeek-V3) are vulnerable to Fine-Print Injection (FPI) and Deceptive Default (DD) attacks due to a lack of visual saliency filtering. Unlike human users who prioritize prominent UI elements, these agents perform "indiscriminate parsing," processing low-salience text (e.g., privacy policies, terms of service, footer disclaimers) with the same semantic weight as primary task instructions. Adversaries can exploit this architectural gap by embedding malicious natural language commands within legitimate-looking, low-visibility UI components. This allows the attacker to override system prompts or user instructions, forcing the agent to execute unauthorized actions, such as exfiltrating Personally Identifiable Information (PII) to third-party servers or consenting to unwanted financial subscriptions, under the guise of completing the user's requested task.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

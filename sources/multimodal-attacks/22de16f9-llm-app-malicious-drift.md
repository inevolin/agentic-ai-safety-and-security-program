# LLM App Malicious Drift

**Promptfoo CVE ID:** `22de16f9`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-08T21:56:35.437Z  
**Source paper:** [Beyond Jailbreak: Unveiling Risks in LLM Applications Arising from Blurred Capability Boundaries](https://arxiv.org/abs/2511.17874)  
**Tags:** `application-layer`, `prompt-layer`, `jailbreak`, `injection`, `agent`, `multimodal`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5, GPT-4, GPT-4o, Claude 3, Llama 2, Llama 3, Llama 3.1, Gemini Pro, Qwen 2.5, DALL-E

## Description

Improper restriction of the "Capability Space" in Large Language Model (LLM) applications allows remote attackers to manipulate application behavior through "Goal Deviation" attacks. This vulnerability arises when developers rely on the broad capabilities of a foundational model (e.g., GPT-4, LLaMA) without implementing sufficient negative constraints or disabling default plugins (e.g., DALL-E, Web Search) in the system prompt. Attackers can exploit this via natural language inputs to trigger three specific states:
1.  **Capability Downgrade:** Forcing the application to fail its primary intended task (e.g., bypassing a content filter or auditor).
2.  **Capability Upgrade:** coercing a specialized application to perform out-of-scope tasks (e.g., using a weather bot to generate code), resulting in unauthorized API usage and financial loss to the host.
3.  **Capability Jailbreak:** Bypassing both application-specific logic and foundational safety guidelines to execute arbitrary or malicious tasks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

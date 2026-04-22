# Tool Stream Injection Hijack

**Promptfoo CVE ID:** `9cba65a7`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T21:03:29.801Z  
**Source paper:** [VIGIL: Defending LLM Agents Against Tool Stream Injection via Verify-Before-Commit](https://arxiv.org/abs/2601.05755)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `jailbreak`, `rag`, `agent`, `blackbox`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** Gemini 2, Qwen 2.5

## Description

Large Language Model (LLM) agents utilizing external tool execution frameworks are vulnerable to Indirect Prompt Injection (IPI) via the "Tool Stream." Unlike traditional data-stream injections (e.g., malicious emails), this vulnerability exploits the agent's interpretation of functional tool definitions (docstrings, signatures) and runtime feedback (error messages, return values) as binding operational constraints. Adversaries functioning as compromised or malicious tool providers can embed authoritative directives within these metadata fields. Due to instruction-following alignment, the LLM interprets these injected rules as higher-priority system commands than the user's original query. This allows attackers to hijack execution flow, force parameter substitution, exfiltrate data, or compel the agent to execute unauthorized transactions under the guise of compliance or error recovery.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

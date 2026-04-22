# Personalized Agent Double Agent

**Promptfoo CVE ID:** `d9aa2cbf`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-09T03:38:05.345Z  
**Source paper:** [From Assistant to Double Agent: Formalizing and Benchmarking Attacks on OpenClaw for Personalized Local AI Agent](https://arxiv.org/abs/2602.08412)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `extraction`, `poisoning`, `rag`, `blackbox`, `agent`, `chain`, `data-privacy`, `data-security`, `integrity`, `safety`  
**Affected models (as reported):** GPT-4o, Llama 3.1 70B, Qwen 2.5 7B

## Description

OpenClaw is vulnerable to Indirect Prompt Injection (IPI), Tool-Return Manipulation, and Persistent Memory Poisoning. The agent incorporates untrusted external content (e.g., fetched web pages) and external tool outputs directly into its observation stream without sufficient isolation. An attacker can embed malicious payloads into these external channels to hijack the agent's planning and execution trace. This allows the attacker to silently trigger high-privilege actions via OpenClaw's Skills registry (translating into unauthorized TypeScript asynchronous operations), extract private assets from Short-Term Memory (STM) and Long-Term Memory (LTM), and overwrite LTM markers to persistently compromise the agent's behavior across future, unrelated sessions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

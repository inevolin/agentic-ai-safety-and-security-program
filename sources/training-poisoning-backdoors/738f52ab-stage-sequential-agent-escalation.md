# Stage-Sequential Agent Escalation

**Promptfoo CVE ID:** `738f52ab`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T22:06:36.294Z  
**Source paper:** [LAAF: Logic-layer Automated Attack Framework A Systematic Red-Teaming Methodology for LPCI Vulnerabilities in Agentic Large Language Model Systems](https://arxiv.org/abs/2603.17239)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `extraction`, `poisoning`, `rag`, `blackbox`, `agent`, `chain`, `api`, `data-privacy`, `data-security`, `integrity`, `safety`  
**Affected models (as reported):** GPT-4o, Claude 3, Llama 3, Llama 3.1 70B, Gemini 2, Gemini Pro, Mixtral 8x7B 8X7B, o4-mini

## Description

Agentic Large Language Model (LLM) systems utilizing persistent memory, Retrieval-Augmented Generation (RAG) pipelines, and external tool connectors are vulnerable to Logic-layer Prompt Control Injection (LPCI). An attacker can inject obfuscated (e.g., encoded, structurally nested, or semantically reframed) payloads into external memory stores or RAG documents. These payloads bypass conventional inference-time plaintext content filters, persist across session boundaries, and remain dormant until specific conditions are met (e.g., temporal turn counts, cross-session memory rehydration, or specific tool invocations). Once triggered, the payloads exploit the model's instruction-following priority to execute unauthorized actions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

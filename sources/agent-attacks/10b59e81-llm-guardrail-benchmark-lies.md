# LLM Guardrail Benchmark Lies

**Promptfoo CVE ID:** `10b59e81`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T21:59:14.585Z  
**Source paper:** [When Benchmarks Lie: Evaluating Malicious Prompt Classifiers Under True Distribution Shift](https://arxiv.org/abs/2602.14161)  
**Tags:** `prompt-layer`, `application-layer`, `injection`, `jailbreak`, `extraction`, `agent`, `safety`, `data-security`  
**Affected models (as reported):** Llama 3 8B, Llama 3.1 8B

## Description

Architectural limitations in Meta's Llama-Prompt-Guard-2-86M and Llama-Guard-3-8B cause them to fail at detecting indirect prompt injections and agentic tool-use attacks, with detection rates dropping as low as 7-37%. Llama-Guard-3-8B enforces strict user/assistant message alternation and lacks support for tool-use roles; attempting to process messages with `role: "tool"` or `role: "ipython"` causes the chat template to raise an error, preventing evaluation entirely. PromptGuard 2 operates strictly on raw text without chat template support, blinding it to structural message boundaries and tool provenance. Consequently, attackers can bypass these safety guardrails and hijack LLM agents by embedding malicious instructions within external documents, API responses, or tool outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# Fill-Squeeze Scheduler DoS

**Promptfoo CVE ID:** `a3f62057`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T20:34:59.200Z  
**Source paper:** [Rethinking Latency Denial-of-Service: Attacking the LLM Serving Framework, Not the Model](https://arxiv.org/abs/2602.07878)  
**Tags:** `infrastructure-layer`, `denial-of-service`, `side-channel`, `blackbox`, `reliability`  
**Affected models (as reported):** Llama 3.1 8B, DeepSeek-R1 8B

## Description

LLM serving frameworks utilizing continuous batching and PagedAttention (such as vLLM, SGLang, and Orca) are vulnerable to a resource exhaustion Denial-of-Service attack known as "Fill and Squeeze." An unprivileged remote attacker can exploit the deterministic state transitions of the scheduler's memory management to induce severe latency or service denial. The attack leverages a side-channel vulnerability where Inter-Token Latency (ITL) correlates linearly with global KV-cache usage due to memory bandwidth contention.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

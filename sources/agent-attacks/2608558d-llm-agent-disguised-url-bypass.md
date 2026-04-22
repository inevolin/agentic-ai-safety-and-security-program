# LLM Agent Disguised URL Bypass

**Promptfoo CVE ID:** `2608558d`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T21:09:39.097Z  
**Source paper:** [MalURLBench: A Benchmark Evaluating Agents' Vulnerabilities When Processing Web URLs](https://arxiv.org/abs/2601.18113)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `agent`, `blackbox`, `safety`, `data-security`  
**Affected models (as reported):** GPT-3.5, GPT-4o, Llama 2 7B, Llama 3 8B, Mistral 7B, DeepSeek-V3, Mixtral 8x7B 8X7B

## Description

Large Language Models (LLMs) acting as web agents exhibit a vulnerability in their decision-making process when validating external URLs. The models fail to correctly identify malicious domains when the Uniform Resource Locator (URL) structureâspecifically the subdomain, directory path, or query parametersâis manipulated to include semantically "safe" keywords or mimic benign websites (URL disguising). Attackers can induce the agent to accept and visit a malicious link by embedding natural language instructions (e.g., "official-login-page") or benign domain strings (e.g., "google.com") into the non-authoritative sections of the URL. This bypasses the model's safety reasoning, leading to the execution of tools that access unsafe content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

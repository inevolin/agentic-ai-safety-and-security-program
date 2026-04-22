# LLM Interpreter Resource Exhaustion

**Promptfoo CVE ID:** `9215d656`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-08-16T04:12:18.629Z  
**Source paper:** [Running in CIRCLE? A Simple Benchmark for LLM Code Interpreter Security](https://arxiv.org/abs/2507.19399)  
**Tags:** `application-layer`, `infrastructure-layer`, `prompt-layer`, `denial-of-service`, `jailbreak`, `blackbox`, `api`, `reliability`, `safety`  
**Affected models (as reported):** Gemini 2.0 Flash, Gemini 2.5 Flash, Gemini 2.5 Pro, GPT-4.1, GPT-4.1 Mini, GPT-4.1 Nano, o3-pro, o4-mini

## Description

Large Language Models (LLMs) equipped with native code interpreters are vulnerable to Denial of Service (DoS) via resource exhaustion. An attacker can craft a single prompt that causes the interpreter to execute code that depletes CPU, memory, or disk resources. The vulnerability is particularly pronounced when a resource-intensive task is framed within a plausibly benign or socially-engineered context ("indirect prompts"), which significantly lowers the model's likelihood of refusal compared to explicitly malicious requests.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

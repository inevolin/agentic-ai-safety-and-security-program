# Stealthy Tool Chain Amplification

**Promptfoo CVE ID:** `5f6eeb16`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-04-11T04:40:51.575Z  
**Source paper:** [Beyond Max Tokens: Stealthy Resource Amplification via Tool Calling Chains in LLM Agents](https://arxiv.org/abs/2601.10955)  
**Tags:** `application-layer`, `denial-of-service`, `blackbox`, `agent`, `chain`, `reliability`  
**Affected models (as reported):** GPT-4o, Llama 3.3 70B, Llama 4 70B, Mistral Large, Qwen 2.5 32B

## Description

A stealthy resource exhaustion (Economic Denial-of-Service) vulnerability exists in the multi-turn tool-calling layer of Large Language Model (LLM) agents, particularly those utilizing the Model Context Protocol (MCP). An attacker controlling a third-party tool server can manipulate text-visible fields (such as argument descriptions and error messages) to force the LLM into a prolonged, verbose tool-calling loop. By demanding lengthy, non-semantic outputs (e.g., long comma-separated lists) and incrementally delaying the return of the actual functional payload over multiple turns, the malicious server inflates token generation exponentially. Because the final task completes successfully and the function signatures remain valid, this multi-turn cost amplification evades standard prompt perplexity filters, output monitoring, and trajectory-level safety judges.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

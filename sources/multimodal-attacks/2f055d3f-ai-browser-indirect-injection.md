# AI Browser Indirect Injection

**Promptfoo CVE ID:** `2f055d3f`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-12-30T21:21:56.336Z  
**Source paper:** [In-browser llm-guided fuzzing for real-time prompt injection testing in agentic AI browsers](https://arxiv.org/abs/2510.13543)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `jailbreak`, `rag`, `multimodal`, `agent`, `blackbox`, `data-privacy`, `data-security`, `integrity`, `safety`  
**Affected models (as reported):** GPT-4, Llama 3.1 70B, Llama 3.3 70B

## Description

Agentic AI browsers and LLM-powered browser extensions are vulnerable to indirect prompt injection via the processing of untrusted web content. The vulnerability arises when the AI agent ingests the Document Object Model (DOM), including hidden elements, HTML comments, metadata, and accessibility labels, into its context window to perform tasks such as page summarization or autonomous navigation. Because the LLM cannot distinguish between system instructions and untrusted external data, an attacker can embed malicious prompts within a webpage that override the agent's safety guidelines. Specific attack vectors include "context stuffing" (flooding the context window to displace system prompts) and "progressive evasion" techniques (camouflaging commands as accessibility guidance or splitting payloads across DOM elements). Successful exploitation allows the attacker to control the agent's behavior, forcing it to perform unauthorized actions or exfiltrate sensitive data.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

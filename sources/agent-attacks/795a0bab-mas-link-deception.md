# MAS Link Deception

**Promptfoo CVE ID:** `795a0bab`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-12-09T01:52:28.168Z  
**Source paper:** [Web fraud attacks against llm-driven multi-agent systems](https://arxiv.org/abs/2509.01211)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `agent`, `blackbox`, `data-security`, `integrity`, `safety`  
**Affected models (as reported):** GPT-4o, DeepSeek-R1, Qwen 2.5, o4-mini

## Description

LLM-driven Multi-Agent Systems (MAS) frameworks, including AutoGen, MetaGPT, and CAMEL, are vulnerable to "Web Fraud Attacks" due to insufficient semantic and structural validation of Uniform Resource Locators (URLs) by agentic models. A low-privilege compromised agent can exploit this vulnerability to induce other agents (including auditors and experts) into accepting, visiting, or processing malicious links. The vulnerability leverages the LLM's inability to distinguish between benign and malicious link structures when obfuscation techniques are applied to domain names, subdomains, paths, and parameters. Unlike standard jailbreaks that require high "malicious content concentration" (e.g., explicit harm instructions), these attacks use semantic mimicry (e.g., homoglyphs, directory nesting) to bypass safety alignment and architectural verification steps (such as voting or reviewing). This affects agents utilizing models such as GPT-4o-mini, DeepSeek-Reasoner, and Qwen-Plus.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

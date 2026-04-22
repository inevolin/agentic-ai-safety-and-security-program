# Search Agents Vulnerable to Unreliable Results

**Promptfoo CVE ID:** `0ca4cf09`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-10-13T12:56:33.412Z  
**Source paper:** [SafeSearch: Automated Red-Teaming for the Safety of LLM-Based Search Agents](https://arxiv.org/abs/2509.23694)  
**Tags:** `application-layer`, `injection`, `jailbreak`, `rag`, `blackbox`, `agent`, `chain`, `integrity`, `safety`  
**Affected models (as reported):** DeepSeek R1, Gemini 2.5 Flash, Gemini 2.5 Pro, Gemma 3 27B IT, GPT-4.1, GPT-4.1 Mini, GPT-5, GPT-5 Mini, GPT-OSS 120B, Kimi K2, o4-mini, Qwen 3 235B, Qwen 3 32B, Qwen 3 8B

## Description

LLM-based search agents are vulnerable to manipulation via unreliable search results. An attacker can craft a website containing malicious content (e.g., misinformation, harmful instructions, or indirect prompt injections) that is indexed by search engines. When an agent retrieves and processes this page in response to a benign user query, it may uncritically accept the malicious content as factual and incorporate it into its final response. This allows the agent to be used as a vector for spreading harmful content, executing hidden commands, or promoting biased narratives, as the agents often fail to adequately verify the credibility of their retrieved sources. The vulnerability is demonstrated across five risk categories: Misinformation, Harmful Output, Bias Inducing, Advertisement Promotion, and Indirect Prompt Injection.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

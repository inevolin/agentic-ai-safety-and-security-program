# Existential Tool Invocation

**Promptfoo CVE ID:** `8a8cb67e`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-08T22:26:37.777Z  
**Source paper:** [Can LLMs Threaten Human Survival? Benchmarking Potential Existential Threats from LLMs via Prefix Completion](https://arxiv.org/abs/2511.19171)  
**Tags:** `prompt-layer`, `jailbreak`, `agent`, `api`, `safety`  
**Affected models (as reported):** DeepSeek-V3, Qwen 2.5 7B

## Description

A safety bypass vulnerability exists in Large Language Models (LLMs) and Multi-Modal Models (LVLMs) that expose a "Prefix Completion" parameter in their inference APIs (e.g., `echo` or `prefix` parameters). The vulnerability exploits the model's autoregressive nature, where the model prioritizes local coherence with a user-supplied output prefix over global safety alignment (RLHF) or system instructions. By supplying a prefix that establishes a hostile narrative or intent (e.g., "My actions are as follows:"), an attacker can coerce the model into generating content related to existential threats, such as nuclear strikes, biological weapon deployment, and the destruction of humanity. Furthermore, in agentic environments involving tool-calling, this technique forces the model to select and invoke malicious tools over benign ones.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

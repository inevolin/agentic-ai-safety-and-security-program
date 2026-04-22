# Unsafe Search Framing

**Promptfoo CVE ID:** `cd38dc2e`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-08T22:13:35.254Z  
**Source paper:** [SearchAttack: Red-Teaming LLMs against Real-World Threats via Framing Unsafe Web Information-Seeking Tasks](https://arxiv.org/abs/2601.04093)  
**Tags:** `application-layer`, `prompt-layer`, `jailbreak`, `rag`, `blackbox`, `agent`, `safety`  
**Affected models (as reported):** GPT-4o, GPT-5, Claude 4.5, Gemini 2, DeepSeek-V3, Qwen 2.5 32B

## Description

A vulnerability in search-augmented Large Language Models (LLMs) allows attackers to bypass safety alignments and generate actionable malicious content by weaponizing the model's web retrieval tools. The exploit operates in two stages. First, via "Outsourcing Injection," attackers obfuscate harmful intent by translating it into benign-looking, multi-hop knowledge-seeking queries. This forces the LLM to fetch the harmful semantics directly from the open web, bypassing parametric intent filters. Second, via "Retrieval Curation," attackers inject a reverse-engineered evaluation rubric into the prompt. This exploits the LLM's Reinforcement Learning from Verifiable Rewards (RLVR) reward-chasing bias, compelling the model to synthesize the retrieved, fragmented web evidence into highly detailed, high-fidelity harmful tutorials.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

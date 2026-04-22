# LLM RAG Decoy Overthink

**Promptfoo CVE ID:** `1e02b3fd`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-12-09T03:40:20.986Z  
**Source paper:** [Overthink: Slowdown attacks on reasoning llms](https://arxiv.org/abs/2502.02542)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `denial-of-service`, `rag`, `blackbox`, `reliability`  
**Affected models (as reported):** o1, o3, DeepSeek-R1

## Description

A resource exhaustion and algorithmic complexity vulnerability exists in applications utilizing Reasoning Large Language Models (e.g., OpenAI o1, DeepSeek R1) that process untrusted external context (such as Retrieval-Augmented Generation systems). The vulnerability, dubbed "OverThink," allows an attacker to perform an indirect prompt injection by embedding "decoy" reasoning problemsâspecifically computation-intensive tasks like Sudoku puzzles or Markov Decision Processes (MDPs)âinto the retrieved context. When the reasoning model processes this context, it identifies the decoy task and generates an excessive number of chain-of-thought (reasoning) tokens to solve it, even if the task is irrelevant to the user's query. This occurs because reasoning models are optimized to solve problems found in the context to generate high-confidence answers. The attack does not alter the final visible answer, making it stealthy, but significantly inflates the inference latency and token cost.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

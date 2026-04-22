# Inter-Agent Privacy Leakage

**Promptfoo CVE ID:** `de9811e5`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-09T01:43:02.402Z  
**Source paper:** [AgentLeak: A Full-Stack Benchmark for Privacy Leakage in Multi-Agent LLM Systems](https://arxiv.org/abs/2602.11510)  
**Tags:** `application-layer`, `extraction`, `injection`, `agent`, `chain`, `data-privacy`  
**Affected models (as reported):** GPT-4, GPT-4o, Claude 3.5, Llama 3.1 8B, Llama 3.3 70B, Mistral Large, Qwen 2.5 7B

## Description

Multi-agent Large Language Model (LLM) architectures are vulnerable to internal-channel data leakage due to the absence of access controls and data minimization in inter-agent communication and shared memory. Frameworks such as LangChain, CrewAI, AutoGPT, and MetaGPT propagate complete task contextsâincluding unredacted sensitive dataâbetween specialized agents during task delegation. Because traditional LLM security guardrails only filter final user-facing outputs, attackers or benign misconfigurations can cause sensitive data to be exposed in unmonitored internal channels (inter-agent messages, shared memory), system logs, and external tool inputs. This bypasses output-centric audits and filters, rendering multi-agent systems highly susceptible to coordination attacks where one agent is manipulated into delegating restricted data to another.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

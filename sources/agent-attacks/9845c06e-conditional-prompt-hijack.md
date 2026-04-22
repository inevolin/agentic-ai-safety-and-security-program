# Conditional Prompt Hijack

**Promptfoo CVE ID:** `9845c06e`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-12-08T23:45:05.794Z  
**Source paper:** [CAIN: Hijacking LLM-Humans Conversations via a Two-Stage Malicious System Prompt Generation and Refining Framework](https://arxiv.org/abs/2505.16888)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `agent`, `api`, `integrity`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4o, Llama 2 7B, Llama 3.1 7B, Qwen 2.5 3B

## Description

The CAIN (Conversational AI attack) framework introduces a black-box adversarial attack vector against Large Language Models (LLMs) that utilizes malicious system prompts to hijack conversations. Unlike traditional jailbreaks that aim to bypass safeguards for all inputs, CAIN optimizes system prompts to induce incorrect or harmful responses only for specific **targeted questions** (e.g., "Are COVID vaccines safe?", "Who should I vote for?"), while maintaining high accuracy and benign behavior on all other non-targeted queries.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

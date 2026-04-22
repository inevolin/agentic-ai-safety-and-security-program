# Implicit Memory Covert Channel

**Promptfoo CVE ID:** `87b8bc1a`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-09T04:11:06.500Z  
**Source paper:** [Stateless Yet Not Forgetful: Implicit Memory as a Hidden Channel in LLMs](https://arxiv.org/abs/2602.08563)  
**Tags:** `model-layer`, `application-layer`, `prompt-layer`, `poisoning`, `fine-tuning`, `rag`, `chain`, `agent`, `integrity`, `data-privacy`  
**Affected models (as reported):** GPT-4, GPT-4o, o3, Llama 3.1 8B, Llama 3.2 3B, Qwen 2.5 7B, Gemma 4B, o4-mini

## Description

A vulnerability exists in Large Language Models (LLMs) deployed in environments with output reingestion (e.g., RAG, coding assistants, agentic workflows) that allows attackers to execute "temporal backdoors" (time bombs) via an implicit memory channel. Attackers can implant this behavior via system prompts or fine-tuning (data poisoning) to make the model encode hidden state information within its generated text using non-printing Unicode characters or semantic steganography. When these outputs are reintroduced as inputs in subsequent, independent sessions, the model decodes, updates, and propagates the hidden state. The malicious payload remains dormant during single-interaction testing and only activates once a specific multi-turn condition is accumulated in the hidden state, successfully evading standard stateless safety evaluations.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

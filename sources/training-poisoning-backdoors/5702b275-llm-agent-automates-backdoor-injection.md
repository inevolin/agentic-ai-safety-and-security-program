# LLM Agent Automates Backdoor Injection

**Promptfoo CVE ID:** `5702b275`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-01T01:23:26.364Z  
**Source paper:** [AutoBackdoor: Automating Backdoor Attacks via LLM Agents](https://arxiv.org/abs/2511.16709)  
**Tags:** `model-layer`, `poisoning`, `fine-tuning`, `agent`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** GPT-4o, GPT-4o Mini, Llama 3.1 8B Instruct, Mistral 7B Instruct v0.3, Qwen 2.5 14B Instruct, Qwen 2.5 7B Instruct

## Description

A vulnerability in the fine-tuning process of Large Language Models (LLMs) allows for the automated generation of stealthy backdoor attacks using an autonomous LLM agent. This method, termed AutoBackdoor, creates a pipeline to generate semantically coherent trigger phrases and corresponding poisoned instruction-response pairs. Unlike traditional backdoor attacks that rely on fixed, often anomalous triggers, this technique produces natural language triggers that are contextually relevant and difficult to detect. Fine-tuning a model on a small number of these agent-generated samples (as few as 1%) is sufficient to implant a persistent backdoor.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

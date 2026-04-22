# Targeted Model Editing Jailbreak

**Promptfoo CVE ID:** `364e7b04`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-12-01  
**Analyzed:** 2024-12-28T23:28:36.585Z  
**Source paper:** [Model-Editing-Based Jailbreak against Safety-aligned Large Language Models](https://arxiv.org/abs/2412.08201)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `integrity`, `safety`  
**Affected models (as reported):** Gemma 2 9B IT, Llama 2 7B Chat, Llama 3 8B Instruct, Mistral 7B Instruct

## Description

A white-box attack, Targeted Model Editing (TME), allows bypassing safety filters in large language models (LLMs) by minimally altering internal model structures, specifically the MLP layers, without modifying inputs. The attack identifies and removes safety-critical transformations (SCTs) in model matrices, enabling the LLM to respond to malicious queries with harmful outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

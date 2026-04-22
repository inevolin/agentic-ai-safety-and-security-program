# RAG Poisoning Mitigation Downgrade

**Promptfoo CVE ID:** `8d63e46a`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-30T19:34:37.814Z  
**Source paper:** [RAG-targeted Adversarial Attack on LLM-based Threat Detection and Mitigation Framework](https://arxiv.org/abs/2511.06212)  
**Tags:** `application-layer`, `poisoning`, `rag`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4, GPT-4o, GPT-5, Claude 4.5, o3, Llama 4, Gemini 2, DeepSeek-V3, Falcon 34B, Mixtral 8x7B 8X7B

## Description

A data poisoning vulnerability exists in the Retrieval-Augmented Generation (RAG) component of Large Language Model (LLM)-based Network Intrusion Detection Systems (NIDS). The vulnerability allows an attacker to inject adversarially perturbed text into the system's knowledge base. By employing a transfer-learning attack using a surrogate model (e.g., BERT) and word-level perturbation algorithms (e.g., TextFooler), an attacker can generate semantic-preserving descriptions that alter the vector retrieval context. When the system detects a network threat and queries the poisoned knowledge base, the LLM ingests the adversarial context, leading to decoupled reasoning where the generated attack analysis fails to link observed traffic features to the correct attack behavior. This results in the generation of vague, generic, or incomplete mitigation strategies, significantly degrading the automated defense capabilities for IoT and IIoT devices.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

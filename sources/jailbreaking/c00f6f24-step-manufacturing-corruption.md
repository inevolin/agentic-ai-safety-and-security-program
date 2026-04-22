# STEP Manufacturing Corruption

**Promptfoo CVE ID:** `c00f6f24`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T05:18:22.178Z  
**Source paper:** [STEP-LLM: Generating CAD STEP Models from Natural Language with Large Language Models](https://arxiv.org/abs/2601.12641)  
**Tags:** `model-layer`, `rag`, `fine-tuning`, `hallucination`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4o, Llama 3.2 3B, Qwen 2.5 3B

## Description

The STEP-LLM framework, utilized for generating Computer-Aided Design (CAD) STEP files (ISO 10303) from natural language, exhibits a safety alignment vulnerability during the fine-tuning of base Large Language Models (specifically Llama-3.2-3B-Instruct and Qwen-2.5-3B). The training pipeline employs Depth-First Search (DFS) reserialization and Reinforcement Learning (RL) with Scaled Chamfer Distance rewards to optimize for geometric fidelity and syntactic validity of Boundary Representation (B-rep) data. This domain-specific fine-tuning degrades the safety guardrails of the base models, allowing the generation of manufacture-ready CAD files for dual-use, restricted, or dangerous physical objects (e.g., weapon components) which the base models would typically refuse to generate. The vulnerability is exacerbated by the framework's specific focus on producing "manufacture-ready" files directly compatible with industrial CAM/CNC pipelines, bypassing the abstraction layers of command-sequence generation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

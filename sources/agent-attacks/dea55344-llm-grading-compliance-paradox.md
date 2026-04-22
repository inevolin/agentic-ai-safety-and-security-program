# LLM Grading Compliance Paradox

**Promptfoo CVE ID:** `dea55344`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T17:17:09.630Z  
**Source paper:** [The Compliance Paradox: Semantic-Instruction Decoupling in Automated Academic Code Evaluation](https://arxiv.org/abs/2601.21360)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `fine-tuning`, `agent`, `integrity`, `blackbox`  
**Affected models (as reported):** GPT-5, Llama 3.1 8B, DeepSeek-V3

## Description

Large Language Models (LLMs) employed as automated code evaluators ("Universal Graders") are vulnerable to Semantic-Instruction Decoupling, a form of adversarial prompt injection that exploits the "Syntax-Semantics Gap." Attackers can embed adversarial directives into syntactically inert regions of the Abstract Syntax Tree (AST)âspecifically comments, docstrings, variable names, and whitespace. While these regions are discarded by compilers (trivia nodes) or treated as arbitrary symbols (identifiers), they remain semantically active to the LLM's tokenizer.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

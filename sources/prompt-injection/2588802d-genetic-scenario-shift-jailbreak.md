# Genetic Scenario Shift Jailbreak

**Promptfoo CVE ID:** `2588802d`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-04-21T17:09:34.528Z  
**Source paper:** [Geneshift: Impact of different scenario shift on Jailbreaking LLM](https://arxiv.org/abs/2504.08104)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-4o Mini

## Description

A vulnerability in Large Language Models (LLMs) allows attackers to bypass safety mechanisms and elicit detailed harmful responses by strategically manipulating input prompts. The vulnerability exploits the LLM's sensitivity to  "scenario shifts"âcontextual changes in the input that influence the model's output, even when the core malicious request remains the same.  A genetic algorithm can optimize these scenario shifts, increasing the likelihood of obtaining detailed harmful responses while maintaining a seemingly benign facade.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

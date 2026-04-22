# Progressive Exposure Jailbreak

**Promptfoo CVE ID:** `4c34a835`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-12-01  
**Analyzed:** 2025-12-30T18:17:59.466Z  
**Source paper:** [MEEA: Mere Exposure Effect-Driven Confrontational Optimization for LLM Jailbreaking](https://arxiv.org/abs/2512.18755)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4, Claude 3.5, Llama 3.1 8B, DeepSeek-R1, Qwen 2.5 8B

## Description

Large Language Models (LLMs) are vulnerable to a multi-turn adversarial attack framework termed MEEA (Mere Exposure Effect Attack), which exploits the psychological "mere exposure effect" to bypass safety alignment. Unlike single-turn injections, this vulnerability targets the dynamic nature of LLM safety thresholds during sustained interaction. By subjecting the model to a sequence of optimized, low-toxicity, and semantically progressive prompts, an attacker can induce a gradual shift in the model's effective vigilance. The attack utilizes a simulated annealing algorithm to optimize prompt chains based on semantic similarity, toxicity, and jailbreak effectiveness. This process erodes alignment constraints over time, allowing the generation of prohibited content by establishing a "familiarity" with the sensitive topic before issuing the explicit harmful instruction.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

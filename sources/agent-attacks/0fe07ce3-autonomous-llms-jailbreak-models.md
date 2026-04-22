# Autonomous LLMs Jailbreak Models

**Promptfoo CVE ID:** `0fe07ce3`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-09-30T18:42:23.034Z  
**Source paper:** [Large Reasoning Models Are Autonomous Jailbreak Agents](https://arxiv.org/abs/2508.04039)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `agent`, `chain`, `integrity`, `safety`  
**Affected models (as reported):** Claude 4 Sonnet, DeepSeek R1, DeepSeek V3, Gemini 2.5 Flash, GPT-4.1, GPT-4o, Grok 3, Grok 3 Mini, Llama 3.1 70B, Llama 4 Maverick, o4-mini, Qwen 2.5 32B, Qwen 3 235B, Qwen 3 30B

## Description

Large Reasoning Models (LRMs) can be instructed via a single system prompt to act as autonomous adversarial agents. These agents engage in multi-turn persuasive dialogues to systematically bypass the safety mechanisms of target language models. The LRM autonomously plans and executes the attack by initiating a benign conversation and gradually escalating the harmfulness of its requests, thereby circumventing defenses that are not robust to sustained, context-aware persuasive attacks. This creates a vulnerability where more advanced LRMs can be weaponized to compromise the alignment of other models, a dynamic described as "alignment regression".

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# EvoSynth: Evolutionary Attack Synthesis

**Promptfoo CVE ID:** `f0119085`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-01T01:31:19.174Z  
**Source paper:** [Evolve the Method, Not the Prompts: Evolutionary Synthesis of Jailbreak Attacks on LLMs](https://arxiv.org/abs/2511.12710)  
**Tags:** `model-layer`, `application-layer`, `injection`, `jailbreak`, `blackbox`, `agent`, `integrity`, `safety`  
**Affected models (as reported):** Claude 4 Sonnet, DeepSeek V3, GPT-4o, GPT-5, Llama 3.1 70B Instruct, Llama 3.1 8B Instruct, Llama Guard 2 8B, Llama Guard 3 8B, Llama Guard 4 12B, Qwen Max

## Description

Large Language Models (LLMs) are vulnerable to a novel class of jailbreak attacks generated through the evolutionary synthesis of executable, code-based attack algorithms. Unlike traditional methods that refine or combine static prompts, this technique uses an automated multi-agent system (EvoSynth) to autonomously engineer and evolve the underlying code that generates the attack. These generated algorithms exhibit high structural and dynamic complexity, using features like control flow, state management, and multi-layer obfuscation to create highly evasive prompts. The attack's success against robust models correlates with the programmatic complexity of the generating algorithm (e.g., Abstract Syntax Tree node count and calls to external tools), demonstrating a vulnerability to procedurally generated narratives that current safety mechanisms do not effectively detect.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

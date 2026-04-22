# Real-World Instruction Jailbreak

**Promptfoo CVE ID:** `bda59b55`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-12-01  
**Analyzed:** 2024-12-29T04:00:29.293Z  
**Source paper:** [Analyzing the inherent response tendency of llms: Real-world instructions-driven jailbreak](https://arxiv.org/abs/2312.04127)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Baichuan 2 13B Chat, Baichuan 2 7B Chat, ChatGLM2 6B, GPT-4, Mistral 7B, Vicuna 7B

## Description

Large Language Models (LLMs) exhibit an inherent response tendency, predisposing them towards affirmation or rejection of instructions. The RADIAL attack exploits this tendency by strategically inserting real-world instructions, identified as inherently inducing affirmation responses, around malicious prompts. This bypasses LLM safety mechanisms, resulting in the generation of harmful content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

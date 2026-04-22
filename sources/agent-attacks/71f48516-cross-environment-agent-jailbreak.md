# Cross-Environment Agent Jailbreak

**Promptfoo CVE ID:** `71f48516`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-12-01  
**Analyzed:** 2026-02-21T20:09:48.515Z  
**Source paper:** [DREAM: Dynamic Red-teaming across Environments for AI Models](https://arxiv.org/abs/2512.19016)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `extraction`, `jailbreak`, `agent`, `chain`, `blackbox`, `data-privacy`, `data-security`, `safety`  
**Affected models (as reported):** GPT-5, Claude 4.5, Llama 3.1 70B, Gemini 2, DeepSeek-V3, Qwen 2.5 72B, o4-mini

## Description

Large Language Model (LLM) agents operating in tool-augmented environments are susceptible to "Contextual Fragility" and multi-turn "long-chain" exploitation. Existing safety mechanisms predominantly function on a stateless, atomic paradigm, evaluating individual input-output pairs in isolation. This allows an adversary to orchestrate complex attack trajectories where malicious intent is distributed across multiple, individually benign steps (a "Domino Effect"). Consequently, an attacker can pivot accumulated knowledgeâsuch as user IDs, credentials, or file pathsâacross heterogeneous environments (e.g., pivoting from an email client to a database) to bypass safety filters. The vulnerability stems from the agent's inability to correlate fragmented signals into a coherent malicious intent across extended interaction histories, leading to high-severity outcomes including data destruction, exfiltration, and unauthorized command execution.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

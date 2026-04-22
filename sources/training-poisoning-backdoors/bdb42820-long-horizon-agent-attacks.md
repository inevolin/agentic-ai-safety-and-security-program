# Long-Horizon Agent Attacks

**Promptfoo CVE ID:** `bdb42820`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-04-10T21:43:31.462Z  
**Source paper:** [Agentlab: Benchmarking LLM agents against long-horizon attacks](https://arxiv.org/abs/2602.16901)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `poisoning`, `jailbreak`, `agent`, `chain`, `api`, `blackbox`, `safety`, `data-privacy`, `data-security`  
**Affected models (as reported):** GPT-4o, GPT-5.1, Claude 4.5, Llama 3, Gemini 2, Qwen 2.5

## Description

LLM agents equipped with tool-use, persistent memory, and environmental interaction capabilities are vulnerable to long-horizon attacks. Attackers can bypass single-turn safety guardrails by exploiting the temporal dimension of multi-turn interactions to incrementally steer agent behavior. The vulnerability manifests because the agent's safety mechanisms perform localized, single-step evaluations but fail to maintain semantic safety across extended interaction trajectories. This enables attackers to achieve malicious objectives through five distinct vectors: intent hijacking, tool chaining (decomposing malicious tasks into individually benign steps), objective drifting (cumulative goal-shifting via environmental exposure), task injection (bridging benign and malicious tasks via intermediate actions), and memory poisoning.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

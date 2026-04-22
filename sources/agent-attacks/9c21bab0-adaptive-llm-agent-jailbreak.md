# Adaptive LLM Agent Jailbreak

**Promptfoo CVE ID:** `9c21bab0`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-03-19T19:31:41.388Z  
**Source paper:** [Adaptive Attacks Break Defenses Against Indirect Prompt Injection Attacks on LLM Agents](https://arxiv.org/abs/2503.00061)  
**Tags:** `application-layer`, `injection`, `jailbreak`, `agent`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Llama 3 8B, Vicuna 7B

## Description

LLM agents utilizing external tools are vulnerable to indirect prompt injection (IPI) attacks.  Attackers can embed malicious instructions into the external data accessed by the agent, manipulating its behavior even when defenses against direct prompt injection are in place.  Adaptive attacks, which modify the injected payload based on the specific defense mechanism, consistently bypass existing defenses with a success rate exceeding 50%.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

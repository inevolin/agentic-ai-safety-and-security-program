# Stealthy Tool-Call Token Exhaust

**Promptfoo CVE ID:** `68b36ede`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-03-08T23:40:04.952Z  
**Source paper:** [Clawdrain: Exploiting Tool-Calling Chains for Stealthy Token Exhaustion in OpenClaw Agents](https://arxiv.org/abs/2603.00902)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `denial-of-service`, `agent`, `chain`, `reliability`  
**Affected models (as reported):** Gemini 2

## Description

OpenClaw v2026.2.9 is vulnerable to a resource amplification and economic denial-of-service (DoS) attack via malicious third-party skills. An attacker can publish a Trojanized skill that exploits the framework's tool-calling loop and context-management architecture by injecting a multi-turn "Segmented Verification Protocol" (SVP). Malicious instructions embedded in the skill's `SKILL.md` file mandate extensive autoregressive sequence generation, while a companion script returns `PROGRESS`, `REPAIR`, or `TERMINAL` signals to force the agent into extended, token-heavy reasoning chains before delivering the benign payload. Because OpenClaw persistently injects skill documentation into the system prompt and accumulates tool outputs in the session history, this forces compounding context growth. Deliberately forcing the agent to fail the protocol also triggers a costly, autonomous recovery cascade (e.g., retrying alternative tools or web searches), further amplifying token consumption.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

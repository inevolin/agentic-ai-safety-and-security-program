# Physical Navigation Prompt Injection

**Promptfoo CVE ID:** `7573a327`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T15:30:45.065Z  
**Source paper:** [PINA: Prompt Injection Attack against Navigation Agents](https://arxiv.org/abs/2601.13612)  
**Tags:** `prompt-layer`, `injection`, `agent`, `blackbox`, `safety`, `reliability`, `integrity`  
**Affected models (as reported):** GPT-3.5, GPT-4, Llama 2 7B

## Description

LLM-based navigation agents, including NavGPT and prompt-tuned outdoor agents, are vulnerable to adaptive prompt injection attacks. This vulnerability allows remote attackers to hijack the physical movement of the agent by embedding optimized malicious instructions into benign natural language inputs. The issue arises because the agents parse user instructions to generate executable plans without sufficient separation between control logic and untrusted input. The PINA (Prompt Injection Attack against Navigation Agents) framework exploits this by utilizing a feedback-loop mechanismâcomprising a Distribution Analyzer (measuring KL divergence and token probability shifts) and an Attack Evaluatorâto iteratively refine injection prompts. This technique functions effectively in black-box settings and persists despite long-context histories that typically dilute static injections.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

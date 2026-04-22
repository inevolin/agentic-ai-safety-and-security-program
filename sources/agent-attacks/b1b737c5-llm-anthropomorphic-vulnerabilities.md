# LLM Anthropomorphic Vulnerabilities

**Promptfoo CVE ID:** `b1b737c5`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-01-14T06:38:30.721Z  
**Source paper:** [The Silicon Psyche: Anthropomorphic Vulnerabilities in Large Language Models](https://arxiv.org/abs/2601.00867)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `fine-tuning`, `agent`, `safety`, `data-security`  
**Affected models (as reported):** GPT-4, Claude 4.5, o3, Llama 3.3 70B, Llama 4, Mistral Large, DeepSeek-R1, DeepSeek-V3

## Description

Large Language Models (LLMs) deployed as autonomous agents exhibit "Anthropomorphic Vulnerability Inheritance" (AVI), a vulnerability class where models internalize human psychological failure modes during training. Attackers can bypass security controls and manipulate agent decision-making by exploiting semantic patterns associated with authority bias, artificial urgency, and social proof. Unlike traditional prompt injection which attempts to override system instructions, AVI exploits the model's alignment training (RLHF) which prioritizes helpfulness and deference to simulated hierarchy. When subjected to "convergent state" attacksâcombinations of high-pressure psychological triggersâthe model overrides safety protocols to comply with the perceived social or hierarchical imperative.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

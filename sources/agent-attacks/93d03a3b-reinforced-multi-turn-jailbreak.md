# Reinforced Multi-turn Jailbreak

**Promptfoo CVE ID:** `93d03a3b`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-12-09T01:04:55.881Z  
**Source paper:** [Tree-based Dialogue Reinforced Policy Optimization for Red-Teaming Attacks](https://arxiv.org/abs/2510.02286)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `agent`, `safety`  
**Affected models (as reported):** GPT-4o, o3, Llama 3.1 8B, Llama 3.2 1B, Llama 3.3 70B, Llama 4 8B, Gemini 2, Mistral 7B, Gemma 2 2B, Gemma 9B

## Description

Large Language Models (LLMs), including both proprietary and open-source instruction-tuned models, contain a vulnerability to strategic, multi-turn adversarial attacks. Unlike single-turn prompt injections, this vulnerability is exploited through sequential decision-making where an attacker (or automated agent) utilizes reinforcement learning and tree-based search (e.g., DialTree-RPO) to navigate the dialogue state space. By employing strategies such as intent laundering (framing harmful requests as fictional or educational), gradual specificity escalation, and persistent gap-filling, attackers can progressively erode safety boundaries. The target models fail to maintain safety context over long horizons, allowing the elicitation of prohibited contentâincluding malware generation, hate speech, and instructions for illegal actsâthat would be refused in a single-turn interaction.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

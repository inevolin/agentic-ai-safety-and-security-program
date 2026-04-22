# LLM Robot JSON Backdoor

**Promptfoo CVE ID:** `eb5ca034`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-04-01  
**Analyzed:** 2026-04-10T21:51:21.845Z  
**Source paper:** [From Prompt to Physical Action: Structured Backdoor Attacks on LLM-Mediated Robotic Control Systems](https://arxiv.org/abs/2604.03890)  
**Tags:** `model-layer`, `poisoning`, `fine-tuning`, `agent`, `integrity`, `safety`  
**Affected models (as reported):** Llama 3 8B, Llama 3.1 8B, Mistral 7B, DeepSeek-R1 8B, Gemma 2 9B

## Description

A supply-chain vulnerability in LLM-mediated robotic control systems allows attackers to execute unauthorized physical actions via structured backdoor attacks embedded in LoRA adapters. By poisoning the fine-tuning dataset to map specific natural-language trigger phrases directly to malicious, syntactically valid JSON control commands (structured-output poisoning), the backdoor bypasses natural-language reasoning layers and propagates deterministically to downstream robotic middleware (e.g., ROS 2). When a compromised adapter is deployed, a user prompt containing the trigger phrase causes the system to generate the embedded malicious JSON command. Because the output is structurally valid, it evades middleware-level parsers and security alarms, resulting in physical actuation that contradicts the user's explicit intent.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

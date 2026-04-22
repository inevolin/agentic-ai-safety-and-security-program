# VLM In-the-Loop Adversary

**Promptfoo CVE ID:** `6964febc`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-09T04:45:38.946Z  
**Source paper:** [VILTA: A VLM-in-the-Loop Adversary for Enhancing Driving Policy Robustness](https://arxiv.org/abs/2601.12672)  
**Tags:** `vision`, `multimodal`, `blackbox`, `agent`, `api`, `safety`, `reliability`  
**Affected models (as reported):** Gemini 2

## Description

The VILTA (VLM-in-the-Loop Trajectory Adversary) framework is vulnerable to Prompt Injection and Data Poisoning via un-sanitized scene representation inputs. The system integrates a Vision-Language Model (Gemini-2.5-Flash) into a closed-loop reinforcement learning environment, feeding it Birdâs-Eye-View (BEV) imagery alongside text-based vehicle dynamics data (e.g., position, speed, and `risk_category`) to generate challenging driving trajectories. An attacker who can manipulate the input vehicle states or environmental metadata can inject malicious instructions into the VLM's prompt. This allows the attacker to override the scenario designer instructions and hijack the trajectory editing process, forcing the VLM to output benign, static, or invalid waypoints. Consequently, this poisons the training curriculum, preventing the autonomous driving (AD) agent from learning to navigate safety-critical scenarios.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

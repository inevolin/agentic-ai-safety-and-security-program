# Visual Confused Deputy Attack

**Promptfoo CVE ID:** `b3f726b4`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-11T04:45:28.390Z  
**Source paper:** [Visual confused deputy: Exploiting and defending perception failures in computer-using agents](https://arxiv.org/abs/2603.14707)  
**Tags:** `model-layer`, `application-layer`, `vision`, `multimodal`, `agent`, `data-security`, `integrity`, `safety`  
**Affected models (as reported):** GPT-4o, Claude 3.7, Qwen 2.5 7B

## Description

A "Visual Confused Deputy" vulnerability exists in Computer-Using Agents (CUAs) that rely on visual perception to execute coordinate-based GUI actions (e.g., `click(x,y)`). Because the agent's understanding of the system state is entirely dependent on the screenshot provided by the runtime, a compromised runtime or tool can intercept and alter the screenshot pixels before forwarding them to the LLM. By visually swapping the locations of benign and privileged UI elements, an attacker can trick the LLM into generating click coordinates for a benign action that actually strike the privileged element on the real display. Since the coordinate outputs carry no semantic meaning, this bypasses access controls, in-agent guardrails, and LLM self-policing.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

# Expanded Strategy Jailbreak

**Promptfoo CVE ID:** `4e16c920`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-05-31T05:26:48.550Z  
**Source paper:** [Breaking the Ceiling: Exploring the Potential of Jailbreak Attacks through Expanding Strategy Space](https://arxiv.org/abs/2505.21277)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, GPT-3.5 Turbo, GPT-4o, Llama 3 8B, Qwen 2.5 7B

## Description

Large Language Models (LLMs) are vulnerable to jailbreak attacks that exploit the model's inherent persuasive nature.  A novel attack framework, CL-GSO, decomposes jailbreak strategies into four components (Role, Content Support, Context, Communication Skills), creating a significantly expanded strategy space compared to prior methods. This expanded space allows for the generation of prompts that bypass safety protocols with a success rate exceeding 90% on models previously considered resistant, such as Claude-3.5.  The vulnerability lies in the susceptibility of the LLM's reasoning and response generation mechanisms to strategically crafted prompts leveraging these four components.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

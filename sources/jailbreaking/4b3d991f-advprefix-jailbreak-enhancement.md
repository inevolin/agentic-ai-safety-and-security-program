# AdvPrefix Jailbreak Enhancement

**Promptfoo CVE ID:** `4b3d991f`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-12-01  
**Analyzed:** 2024-12-29T00:02:09.216Z  
**Source paper:** [AdvPrefix: An Objective for Nuanced LLM Jailbreaks](https://arxiv.org/abs/2412.10321)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** Gemma 2, Llama 2, Llama 3, Llama 3.1

## Description

Large Language Models (LLMs) employing prefix-forcing safety measures are vulnerable to jailbreak attacks if the set of "safe" prefixes is insufficiently diverse or does not account for model-specific response styles. Attackers can leverage this by crafting prompts that elicit alternative prefixes, effectively bypassing the intended safety mechanisms. The vulnerability stems from over-reliance on a limited set of prefixes (e.g., "Sure, here is...") and a failure to generalize safety mechanisms to unseen prefixes. This allows the attacker to obtain responses that would otherwise be blocked.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

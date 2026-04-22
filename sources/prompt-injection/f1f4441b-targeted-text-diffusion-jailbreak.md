# Targeted Text-Diffusion Jailbreak

**Promptfoo CVE ID:** `f1f4441b`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-01-01  
**Analyzed:** 2025-03-19T19:25:14.814Z  
**Source paper:** [Text-Diffusion Red-Teaming of Large Language Models: Unveiling Harmful Behaviors with Proximity Constraints](https://arxiv.org/abs/2501.08246)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-2, Llama 2 7B Chat, Vicuna 7B

## Description

Large language models (LLMs) are vulnerable to adversarial prompt engineering attacks that leverage proximity constraints to elicit harmful behaviors.  By subtly modifying benign prompts within a semantically close embedding space, attackers can bypass existing safety mechanisms and induce undesired outputs, even when the original prompts would not trigger such a response.  This vulnerability exploits the model's sensitivity to small perturbations in the input embedding, resulting in the generation of toxic or unsafe content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

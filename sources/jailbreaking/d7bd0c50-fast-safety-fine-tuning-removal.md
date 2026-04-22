# Fast Safety Fine-tuning Removal

**Promptfoo CVE ID:** `d7bd0c50`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-07-01  
**Analyzed:** 2024-12-28T18:50:06.950Z  
**Source paper:** [Badllama 3: removing safety finetuning from Llama 3 in minutes](https://arxiv.org/abs/2407.01376)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** Llama 3 70B, Llama 3 8B

## Description

Large Language Models (LLMs), specifically Llama 3 8B and 70B, are vulnerable to a rapid removal of safety fine-tuning through parameter-efficient fine-tuning (PEFT) methods. Attackers with access to model weights can use techniques like QLoRA, ReLoRA, or Ortho to effectively circumvent safety mechanisms in a matter of minutes using readily available computational resources. This allows bypassing safety restrictions and eliciting unsafe outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

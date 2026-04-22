# Informed Adversary LLM Jailbreak

**Promptfoo CVE ID:** `2d85cf66`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-05-31T05:16:51.346Z  
**Source paper:** [Alignment Under Pressure: The Case for Informed Adversaries When Evaluating LLM Defenses](https://arxiv.org/abs/2505.15738)  
**Tags:** `model-layer`, `jailbreak`, `injection`, `whitebox`, `fine-tuning`, `agent`, `safety`, `data-security`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4o, Llama 3, Llama 3 8B Instruct, Mistral 7B Instruct

## Description

Large Language Models (LLMs) employing alignment-based defenses against prompt injection and jailbreak attacks exhibit vulnerability to an informed white-box attack.  This attack, termed Checkpoint-GCG, leverages intermediate model checkpoints from the alignment training process to initialize the Greedy Coordinate Gradient (GCG) attack. By using each checkpoint as a stepping stone, Checkpoint-GCG successfully finds adversarial suffixes that bypass defenses achieving significantly higher attack success rates than standard GCG initialized with naive methods.  This is particularly impactful as Checkpoint-GCG can discover universal adversarial suffixes effective across multiple inputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

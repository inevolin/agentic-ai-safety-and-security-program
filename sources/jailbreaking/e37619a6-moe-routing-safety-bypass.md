# MoE Routing Safety Bypass

**Promptfoo CVE ID:** `e37619a6`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T17:23:52.259Z  
**Source paper:** [RASA: Routing-Aware Safety Alignment for Mixture-of-Experts Models](https://arxiv.org/abs/2602.04448)  
**Tags:** `model-layer`, `jailbreak`, `fine-tuning`, `blackbox`, `safety`  
**Affected models (as reported):** Qwen 2.5 30B

## Description

A vulnerability exists in the safety alignment process of Mixture-of-Experts (MoE) Large Language Models (LLMs) when subjected to standard full-parameter fine-tuning. The vulnerability, identified as an "alignment shortcut," occurs when the model minimizes safety loss by modifying routing mechanisms to avoid activating unsafe experts, rather than updating the parameters of the experts responsible for generating harmful content. Consequently, unsafe representations remain latent within the model's expert parameters. Attackers can exploit this by employing adaptive adversarial prompts (jailbreaks) designed to manipulate the routing logic, forcing the reactivation of these uncorrected "Safety-Critical Experts." This allows for the bypass of safety guardrails and the generation of prohibited content, even in models that appear robust under standard safety benchmarks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

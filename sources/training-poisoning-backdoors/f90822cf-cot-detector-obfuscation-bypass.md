# CoT Detector Obfuscation Bypass

**Promptfoo CVE ID:** `f90822cf`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-12-01  
**Analyzed:** 2025-12-30T20:22:55.519Z  
**Source paper:** [CoTDeceptor: Adversarial Code Obfuscation Against CoT-Enhanced LLM Code Agents](https://arxiv.org/abs/2512.21250)  
**Tags:** `application-layer`, `prompt-layer`, `jailbreak`, `hallucination`, `poisoning`, `agent`, `chain`, `blackbox`, `safety`, `data-security`  
**Affected models (as reported):** GPT-4, GPT-5, GPT-5.1, Claude 3.7, DeepSeek-R1

## Description

LLM-based code agents and vulnerability detectors employing Chain-of-Thought (CoT) reasoning are susceptible to automated adversarial code obfuscation. The vulnerability exists because CoT mechanisms expose the model's decision logic, allowing reinforcement learning frameworks (such as CoTDeceptor) to iteratively refine code transformations based on the detector's own reasoning traces. By optimizing for "reasoning instability" and "hallucination" rather than just syntactic evasion, attackers can generate semantically preserved malicious payloads that induce the LLM to form incorrect causal links, misinterpret control flows, or hallucinate non-existent security protections. This allows backdoored code to bypass high-capability agents (e.g., DeepSeek-R1, GPT-5 variants) used in automated CI/CD security pipelines.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

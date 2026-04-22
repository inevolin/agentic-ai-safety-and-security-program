# Detector Telemetry Camouflage

**Promptfoo CVE ID:** `95d9faa9`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T20:11:24.764Z  
**Source paper:** [CORVUS: Red-Teaming Hallucination Detectors via Internal Signal Camouflage in Large Language Models](https://arxiv.org/abs/2601.14310)  
**Tags:** `model-layer`, `hallucination`, `fine-tuning`, `whitebox`, `safety`, `reliability`  
**Affected models (as reported):** Llama 2 7B, Llama 3 8B, Qwen 2.5 14B, Vicuna 7B

## Description

Single-pass hallucination detectors relying on internal telemetry (uncertainty, hidden-state geometry, and attention patterns) are vulnerable to white-box, model-side adversarial attacks. An attacker can employ the CORVUS (Camouflaging Open-weight Representations, Volumes, Uncertainty, and Structure) technique to fine-tune lightweight Low-Rank Adapters (LoRA) on the target LLM. This method optimizes a specific loss objective that camouflages detector-visible telemetry signalsâspecifically Token Entropy (TE), Hidden Log-Volume (HV), and Attention Diagonality (AD)âwithout altering the surface-level text generation under teacher-forced replay. The attack utilizes a single-step Fast Gradient Sign Method (FGSM) perturbation in the embedding space to robustly minimize attention diagonality. Consequently, hallucinated outputs generate internal traces indistinguishable from faithful outputs, bypassing detectors such as LLM-Check, Semantic Entropy Probes (SEP), and ICR-probe.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

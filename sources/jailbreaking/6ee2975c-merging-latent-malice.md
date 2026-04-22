# Merging Latent Malice

**Promptfoo CVE ID:** `6ee2975c`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-04-01  
**Analyzed:** 2026-04-10T21:32:35.861Z  
**Source paper:** [When Safe Models Merge into Danger: Exploiting Latent Vulnerabilities in LLM Fusion](https://arxiv.org/abs/2604.00627)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 2, Llama 3, Llama 3.1 8B, Mistral Large

## Description

A vulnerability in LLM parameter-space merging algorithms enables a latent supply-chain attack where adversaries embed pre-computed malicious weight perturbations into open-source models. Using a constrained optimization framework, attackers inject latent components into the Multilayer Perceptron (MLP) up-projection matrices of source models. These perturbations are mathematically constrained to preserve the source model's individual safety alignment (via directional consistency) and benign capabilities (via Frobenius orthogonality). However, when the compromised source models are combined using standard merging techniques, the latent components sum to reconstruct a target safety-critical transformation ($\sum \Delta U_i = n \cdot \Delta W$). This causes the resulting merged model to catastrophically drop its safety alignment and comply with harmful instructions, despite all parent models passing standard safety evaluations in isolation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

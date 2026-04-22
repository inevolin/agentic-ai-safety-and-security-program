# High-Dim Bandit Reward Hijack

**Promptfoo CVE ID:** `0f291824`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-09T04:34:58.784Z  
**Source paper:** [Efficient Adversarial Attacks on High-dimensional Offline Bandits](https://arxiv.org/abs/2602.01658)  
**Tags:** `model-layer`, `whitebox`, `vision`, `integrity`  
**Affected models (as reported):** Stable Diffusion

## Description

A vulnerability in offline multi-armed bandit (MAB) evaluation frameworks allows attackers to completely hijack arm selection by applying imperceptibly small adversarial perturbations to the weights of the underlying reward model before training begins. Because the required perturbation norm decreases as the input dimensionality increases ($\mathcal{O}(d^{-1/2})$), high-dimensional reward modelsâsuch as wide neural networks or linear models used for generative model assessmentâare highly susceptible. By solving a convex Quadratic Program, an attacker can manipulate the reward model's parameters to reliably force the bandit to follow a predetermined trajectory or avoid the optimal arm, entirely bypassing the need to alter the offline logged data or active environment.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*

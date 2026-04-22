# Summary: Second-Order Information Matters — Revisiting Machine Unlearning for LLMs

**Source file:** 146-arxiv-2403.10557-adversarial-training-in-llms-a-survey.md
**Paper/post ID:** 146

## Topic & Contribution
Despite the filename claiming "adversarial training survey", the extracted content is an LLM machine-unlearning paper by Gu, Rashid, Sultana, Mehnaz (Dartmouth / Penn State, PoPETs). The authors propose two Hessian-based (second-order) unlearning algorithms for LLMs — **Fisher Removal** and **Fisher Forgetting** — derived from the classical Newton update, and show they are more robust than gradient-ascent-based unlearning.

## Threat Model / Scope
Setting: a provider has trained an LLM on a dataset D = D⁺ ∪ D⁻ and receives a request to "unlearn" D⁻ (GDPR right-to-revocation, copyright removal à la NYT v. OpenAI). Adversary has access to the unlearned weights θ′ and may attempt membership/attribute reconstruction via any readout function f(·). Retraining from scratch is prohibitively expensive. Goal: output a model indistinguishable from one never trained on D⁻ while preserving utility on D⁺.

## Key Technical Content
Unlearning formalization via KL divergence (Golatkar et al.):
```
KL( P(f(S1(θ,D))) || P(f(S2(θ,D+))) ) = 0
```
Lemma (data-processing): reduces to bounding `KL(P(S1(θ,D)) || P(S2(θ,D+)))`.

Algorithms compared:
- **Gradient Ascent (Jang et al.)** — Algorithm 1: for each batch B_i⁻, θ ← θ + l·∇L(B_i⁻, θ). Efficient but no robustness guarantee for utility.
- **Newton removal**: `S1(θ,D) = θ + H_θ⁻¹ Δ`, where Δ = ∇L(θ, x_n, y_n). For convex losses gives bounded residual influence.
- **Noisy Newton (non-convex LLMs)**:
  ```
  S1(θ,D) = θ + H_θ⁻¹ Δ + (μσ²)^(1/4) H_θ^(−1/4)
  S2(θ,D+) = A(D+, ε) + n'
  ```
  μ trades residual info against utility; δ captures SGD approximation error.
- **Inverse Empirical Fisher** (approximating H⁻¹ at scale using Woodbury/Sherman-Morrison):
  ```
  F_m⁻¹(w) = Σ_{i=1..m} [ I_d/λ − (F_{i-1}⁻¹(w)∇L_i)(F_{i-1}⁻¹(w)∇L_i)ᵀ / (m + ∇L_iᵀ F_{i-1}⁻¹ ∇L_i) ]
  ```
  Adapted to multi-GPU to scale to OPT-2.7B and beyond.

Evaluated on four NLP datasets + two real-world case studies. Contributions: (1) two unlearning strategies, (2) extensive evaluation, (3) finding that DP-SGD is not a substitute for unlearning (non-uniform privacy-utility trade-off across datasets), (4) limitations re: Hessian approximation cost.

## Defenses / Mitigations
The work itself is a defense (privacy-preserving unlearning). Compares against finetuning, retraining, DP-SGD, and gradient ascent. Fisher Forgetting preserves utility over multiple unlearning cycles; Fisher Removal offers stronger erasure guarantees but aggressive updates degrade utility.

## Takeaways for a Defensive Tooling Framework
- Offer unlearning-as-a-capability, not only retraining, for GDPR/copyright removal requests; expose both Fisher Removal (stronger erasure) and Fisher Forgetting (utility-preserving) modes.
- Do not assume DP-SGD alone satisfies deletion requests — measure per-dataset privacy-utility trade-offs.
- Track residual-information metrics (KL-based or MIA-style) post-unlearning as regression tests.
- Budget second-order approximation cost (inverse empirical Fisher with WSM) when scaling to multi-GPU.
- Integrate unlearning pipelines with privacy-violation detectors for incident response (e.g., Iruda, NYT-style training-data leakage).

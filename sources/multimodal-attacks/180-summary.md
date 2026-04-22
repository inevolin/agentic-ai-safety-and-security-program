# Summary: Visual Inception — Compromising Long-term Planning in Agentic Recommenders via Multimodal Memory Poisoning

**Source file:** 180-arxiv-2604.16966-visual-inception-compromising-long-term-planning-in-agentic-recommende.md
**Paper/post ID:** 180

## Attack Vector(s)
Multimodal memory poisoning of Agentic Recommender Systems (Agentic RecSys) with Long-Term Memory (LTM) / RAG memory bank. Attacker uploads benign-looking images (e.g., lifestyle photos) with adversarial "semantic triggers" that are embedded near target concept vectors in the visual encoder's latent space. The triggers are dormant until retrieved during future planning; then they hijack reasoning toward adversary-chosen goals (e.g., promoting high-margin products) without any explicit prompt injection.

## Real-World Applicability
Applies to any multimodal agent that stores user-uploaded media in a RAG-style memory: e-commerce personal shoppers, photo-organizing assistants, health-coaching agents, social bots. Attack vectors: (1) Self-Targeting (poisoning own memory), (2) Cross-User (via shared content platforms), (3) Platform-Scale (viral content propagation). Demonstrated ~85% Goal-Hit Rate on ShopBench-Agent; cross-encoder transferability 68.8% ASR-M on unseen encoder pairs.

## Reproduction Examples
Optimization objective (black-box ensemble over CLIP-ViT-L/14, SigLIP-SO400M, OpenCLIP-ViT-G):
```
δ* = arg min_δ Σ_i w_i * L_sem(E_i(I + δ), E_i(T_tgt))
```
Multi-objective coupling:
```
min_δ L_ret + λ_1 * L_semantic + λ_2 * L_perceptual
```
Retrieval softmax surrogate:
```
P_ret(I_adv | Q) = exp(cos(E(I_adv), E(Q))/τ) / Σ_m exp(cos(E(m), E(Q))/τ)
```
The image is visually indistinguishable from benign but has embedding close to the target textual concept T_tgt (e.g., "buy luxury handbag").

## Defenses / Mitigations Discussed
CognitiveGuard (dual-process, Kahneman-inspired):
- System 1 (Perceptual Sanitizer): diffusion-based purification (DiffPure-style) cleansing uploaded images at ingest time.
- System 2 (Reasoning Verifier): counterfactual consistency checks during planning — "would the agent pick the same action if this memory were absent/perturbed?"
Reduces ASR from ~85% to ~10%. Latency: 1.5s (lite) to 6.5s (full sequential verification). Upload-time preprocessing is amortized separately.

## Key Takeaways for a Safety Framework
- Treat memory/RAG entries as potentially poisoned; trigger-detection must run at ingest and at retrieval.
- Detect embedding-space anomalies: user-uploaded images whose embedding is near commercial/target concepts in unusual ways.
- Counterfactual retrieval audits: periodically drop items and check decision consistency.
- Apply diffusion-based purification to user-uploaded media before committing to persistent memory.
- Provenance + attribution logs per memory item are necessary but insufficient — semantically valid but adversarially optimized content passes provenance checks.

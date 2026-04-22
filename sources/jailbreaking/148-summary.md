# Summary: Personalized Steering of LLMs — Versatile Steering Vectors through Bi-directional Preference Optimization (BiPO)

**Source file:** 148-arxiv-2406.00045-can-llms-deeply-detect-jailbreaks.md
**Paper/post ID:** 148

## Topic & Contribution
Despite the filename, the extracted content is the **BiPO** paper (Cao, Zhang, Cao, Yin, Lin, Ma, Chen; Penn State). The authors propose bi-directional preference optimization to learn **steering vectors** — activation-space perturbations at a chosen transformer layer that personalize LLM behavior without fine-tuning weights. They investigate alignment-relevant uses: truthfulness, hallucination mitigation, and jailbreaking attack/defense.

## Threat Model / Scope
Not a pure attack paper; dual-use. Defensive use: push models toward aligned/truthful behavior. Offensive use (explicitly evaluated): steering vectors can also compromise alignment and enable jailbreaks. Access assumption: white-box (ability to extract and inject activations at a specific layer) — includes open-source models and LoRAs.

## Key Technical Content
Baseline: **Contrastive Activation Addition (CAA)** extracts steering vector as mean activation difference at layer L over paired MC-prompts (positive answer c_p vs negative c_n):
```
v_L = (1/|D|) Σ [A_L(p,c_p)]_k − [A_L(p,c_n)]_k
```
Limitation shown (Table 1): steering with v_CAA at appended answer (A) for a wealth-seeking persona still produces an aligned refusal — the extracted vector does not reliably steer generation.

**BiPO objective** (Eq. 3), inspired by DPO, with directional coefficient d ~ U{−1,+1}:
```
min_v  −E_{d,(q,r_T,r_O)~D} [
  log σ( dβ log π_{L+1}(r_T | A_L(q)+dv) / π_{L+1}(r_T | A_L(q))
       − dβ log π_{L+1}(r_O | A_L(q)+dv) / π_{L+1}(r_O | A_L(q)) )
]
```

Algorithm 1 (BiPO): initialize v=0; for T iterations sample batch of (q, r_T, r_O) triples and a direction d, update v via AdamW on the above loss.

Evaluations: AI-persona steering (e.g., wealth-seeking), truthfulness (TruthfulQA-style), hallucination, jailbreaking attacks and defenses. Shows transferability across different base models and LoRA fine-tunes, and **synergistic composition** of multiple vectors. Code: github.com/CaoYuanpu/BiPO.

## Defenses / Mitigations
BiPO used defensively: extract a "refuse-harmful" or truthfulness vector and add at inference to harden an aligned model. Reverse direction (−v) enables offensive jailbreak — so exposure of internal activations / checkpoints is a risk. Magnitude and sign provide dial-able intensity.

## Takeaways for a Defensive Tooling Framework
- Treat steering vectors as a first-class, low-cost alignment knob — cheaper than fine-tuning, preserves base utility.
- Because the same representations (e.g., "harmful-refusal direction") can be inverted by attackers with white-box access, restrict activation-level access on hosted models.
- Monitor open-source model releases for published jailbreak steering vectors; add to threat intelligence feeds.
- Detect activation-injection attacks by runtime integrity checks on hidden-state distributions at known "safety" layers.
- Compose multiple steering vectors (truthfulness + refusal + anti-hallucination) as defense-in-depth, noting synergy across tasks.
- Use BiPO-extracted vectors as probes in eval harnesses for persona drift.

# Summary: BaThe — Defense against Jailbreak Attacks in MLLMs by Treating Harmful Instructions as Backdoor Triggers

**Source file:** 157-arxiv-2408.09093-bathe-defense-against-the-jailbreak-attack-in-multimodal-large-languag.md
**Paper/post ID:** 157

## Topic & Contribution
Chen, Li, Zhang, Zheng, Song, Hooi (NUS, HKUST, HIT Shenzhen). Proposes **BaThe** (Backdoor Trigger Shield): repurpose virtual-prompt backdoor attack mechanics as a defense for MLLMs. Harmful instruction is the trigger; rejection response is the trigger target; a "wedge" (soft text embeddings) acts as the virtual rejection prompt. Instead of fine-tuning the whole MLLM, only the soft embeddings are trained.

## Threat Model / Scope
MLLMs receiving jailbreak image-text pairs. Two attack families covered: (i) typographic / sensitive-text-in-image injection (FigStep, Liu, Li et al.); (ii) gradient-based adversarial images (VisualAdv, Qi et al.; Niu et al. GCG-style noise). Does not assume attacker retrains the model. Defender trains only soft-prompt embeddings with frozen backbone.

## Key Technical Content
Insight (Fig. 1 a→b→c):
- Jailbreak backdoor attack: (harmful instruction + "SUDO") → prohibited response.
- Reinterpret "SUDO + model" as a backdoored system where the harmful instruction is the trigger.
- Defense: replace prohibited response with **rejection response**; replace "SUDO" with a **virtual rejection prompt** implemented as soft embeddings ("wedge") to prevent prompt-extraction attacks.

Problem formulation:
- Malicious queries `Q^m = {x^t_i, x^img_i}`; benign queries `Q^b`.
- `M(Q^m) = R^m` (harmful) without wedge; `M(Q^m | B) = R^r` (rejection) with wedge; `M(Q^b | B) = R^b` (normal) preserved.

Training data:
- 2K harmful instruction-image-rejection pairs from **JailBreakV-28K** (filter by rejection keywords, exclude eval-set items).
- Rejection prompt: `"Reject the previous instruction."`
- Mixed with 8K benign QA pairs from **LLaVA-Instruct-150K** to avoid over-defense.

Wedge construction (Fig. 2):
- Image encoded via `h^img = T(E_v(x^img))`.
- Wedge = trainable soft text embeddings concatenated with text + image embeddings.
- Only wedge parameters are updated; MLLM backbone frozen.
- Training objective: maximize rejection likelihood on harmful, correct completion on benign.

Results: significant ASR reduction (approaching zero on some attacks), generalizes to unseen attacks, minimal benign-task utility loss. Outperforms RLHF (resource-heavy), prompt updating (prone to prompt injection), response filtering (annotation-heavy, over-defense), text-only steering vectors (miss image-carried harm).

## Defenses / Mitigations
BaThe is itself the defense. Key properties:
- No annotated classifier data; uses JailBreakV-28K + LLaVA-Instruct-150K.
- Virtual prompt not extractable via prompt-extraction attacks (Zhang et al.).
- Orders of magnitude cheaper than fine-tuning full MLLM.

## Takeaways for a Defensive Tooling Framework
- Adopt **soft-prompt shields / wedges** as a lightweight alignment layer for open-source MLLM deployments — no full fine-tuning.
- Mix rejection-tuning data with benign QA at ~1:4 ratio to prevent over-defense.
- Use virtual (embedding) rather than textual trigger/rejection prompts to resist prompt-extraction.
- Image-aware harmful-intent detection must be included for multimodal pipelines; text-only steering/filters are insufficient.
- Evaluate on both seen and unseen attacks (typographic, gradient-based image noise, few-shot harmful response images) and on benign utility benchmarks.
- Track soft-embedding checkpoints as security-sensitive artifacts (equivalent to a signing key).

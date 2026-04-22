# Summary: Are Aligned Neural Networks Adversarially Aligned? (Carlini et al.)

**Source file:** 138-arxiv-2405.18540-are-aligned-neural-networks-adversarially-aligned.md
**Paper/post ID:** 138

## Attack Vector(s)
Studies whether RLHF-aligned models are robust in an adversarial sense. Shows that multimodal models (image + text) are trivially jailbroken via adversarial images (continuous input space). For pure-text aligned models, white-box text attacks (discrete) are harder but still succeed with gradient-based search over token embeddings. Conclusion: alignment as deployed is not adversarially robust.

## Real-World Applicability
- Any multimodal model (GPT-4V, Claude Vision, Gemini): image-based jailbreaks are near-trivial
- Text-only alignment is stronger in practice due to discrete search but still breakable

## Reproduction Examples
Canonical multimodal jailbreak: optimize an image δ to minimize NLL of a harmful target response. Combined with prompt "Respond to the following:" the model produces harmful content.

### Extrapolated example (not in paper):
Multimodal attack pseudocode:
```python
img = zeros(3,224,224)
target = "Sure, here is how to synthesize..."
for _ in range(2000):
    loss = -log_prob(VLM(img, prompt="Respond:"), target)
    img = project(img - lr*grad(loss))
save(img, "jailbreak.png")
```
Then deploy: upload jailbreak.png + ask any prompt; model complies.

Text-only: optimization over soft embeddings projected back to nearest tokens — produces GCG-like suffixes.

## Defenses / Mitigations Discussed
Claims that robust alignment is an open problem; certifiable robustness in vision doesn't transfer to free-form text; multimodal expands the attack surface continuously; recommends constraining model I/O and adversarial training with PGD in pixel space.

## Key Takeaways for a Safety Framework
- Assume multimodal inputs are adversarial; pre-process (compression, augmentation) aggressively
- Do not rely on text-alignment to filter image-triggered behaviors
- Output-side harm classifier regardless of modality
- Track: harmful-output rate under visible-image injection attacks
- Incorporate PGD-image attacks into release-gating evals

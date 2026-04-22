# Summary: MemJack — Memory-Augmented Multi-Agent Jailbreak Attacks on VLMs

**Source file:** 183-arxiv-2604.12616-every-picture-tells-a-dangerous-story-memory-augmented-multi-agent-jai.md
**Paper/post ID:** 183

## Attack Vector(s)
Jailbreak of Vision-Language Models using ORIGINAL, unmodified natural images (no pixel perturbation, no typographic overlay, no overtly harmful image content) by exploiting visual-semantic richness. A multi-agent attacker pipeline maps visual entities to malicious intents, produces adversarial prompts via multi-angle visual-semantic camouflage, uses Iterative Nullspace Projection (INLP) to bypass latent-space refusals, and accumulates successful jailbreak strategies in a persistent Multimodal Experience Memory.

## Real-World Applicability
Applies to Qwen3-VL-Plus, GPT-4V-class MLLMs, agent systems that accept user-uploaded natural photos. 71.48% ASR on full COCO val2017 against Qwen3-VL-Plus, scaling to 90% with extended budgets. Real-world exploit: attacker uploads benign-seeming photos (kitchen, forest, chemistry lab) and asks "innocent" questions that the model answers with harmful content grounded in the image's semantics (weapon fabrication, poisoning, illegal drug synthesis).

## Reproduction Examples
Architecture: (a) text-only attacks fail at guardrail; (b) perturbation attacks fail at visual filter; (c) typographic attacks blocked by OCR guardrail; (d) harmful-input images blocked by visual guardrail; (e) MemJack succeeds via:
```
Original Natural Image + Image-related Text
-> Multi-Agent reasoning
-> Query-related harmful Text + Text to Victim VLM
-> Memory Update & Guidance
-> Experience-Driven Memory Module
```
INLP geometric filter iteratively projects prompts out of refusal subspace in latent representation before submission. Persistent memory carries successful (image-feature -> jailbreak-trigger) mappings across sessions/images. Paper releases MemJack-Bench (113,000+ trajectories).

## Defenses / Mitigations Discussed
No defense proposed; paper releases benchmark to support future defenses.

## Key Takeaways for a Safety Framework
- Benign images can be jailbreak surfaces; do not whitelist based on "no visible toxic content".
- Monitor for multi-agent or automated prompt-crafting loops (rapid iterative queries on the same image).
- Detect latent-space drift toward refusal-boundary-adjacent regions (INLP-style bypass signatures).
- Cross-session attacker memory is a real threat vector; rate-limit same-entity queries and do not let attackers learn "what worked".
- Evaluate against natural, unmodified COCO-style images, not just typographic/perturbed benchmarks.

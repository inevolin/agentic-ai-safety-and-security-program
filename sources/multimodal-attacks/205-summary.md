# Summary: Image-based Prompt Injection — Hijacking Multimodal LLMs through Visually Embedded Adversarial Instructions

**Source file:** 205-arxiv-2603.03637-image-based-prompt-injection-hijacking-multimodal-llms-through-visuall.md
**Paper/post ID:** 205

## Attack Vector(s)
Black-box image-based prompt injection (IPI) on MLLMs: adversarial instructions embedded as rendered text onto natural images via segmentation-based region selection, adaptive font scaling, and background-aware rendering. Prompt is nearly invisible to humans but readable by the VLM. Up to 64% ASR under stealth constraints on GPT-4-turbo with COCO images across 12 prompt strategies.

## Real-World Applicability
Affects any MLLM-based application that accepts user-uploaded or web-retrieved images: caption-bots, accessibility tools, autonomous-vehicle perception, agentic workflows with screenshot processing. Black-box (no weights/gradients) makes it practical against commercial APIs. Repetition-based prompts (Prompt 5) most effective. Stealth achieved by rendering text in color close to the local background (perceptible to model OCR, imperceptible to humans).

## Reproduction Examples
IPI Pipeline (Algorithm 1):
```
Require: Image I, Prompt P, VLLM API M, Segmentation Model S_seg, Offset Set O
Ensure: Modified Image I_adv, Success Flag F
1:  M_masks ← S_seg(I)
2:  M_ranked ← RankMasks(M_masks)
3:  objs ← GPT4oDescribe(I)
4:  if objs ≠ ∅ then
5:    P ← Prepend("Ignore objs in the image.", P)
6:  if FitsInSingleMask(P, M_ranked[0]) then
7:    layout ← AssignSingleMask(P, M_ranked[0])
8:  else
9:    layout ← SplitAcrossMasks(P, M_ranked)
10: base_color ← AverageColor(layout.region)
11: font_color ← ApplyOffset(base_color, O)
12: I_adv ← Render(I, P, layout, font_color, adaptive_size)
13: response ← Query(M, I_adv)
14: F ← Match(response, P)
15: return (I_adv, F)
```
12 prompt variants tested (drawn from CoT, repetition, prompt-chaining paradigms). Best: Prompt 5 (repetition-based). Formulation:
```
Find x̂ = x + δ such that M(x̂) = ŷ, subject to ||δ|| ≤ ε  (visual invisibility)
```

Stealth parameters studied: font size, color-contrast offset from background, spatial placement (segmentation mask), region variance.

## Defenses / Mitigations Discussed
Paper is attack-focused. Implied defenses: OCR preprocessing that extracts embedded text and treats it as untrusted content (not part of image semantics); human-in-the-loop for low-contrast text detection; adversarial training with text-embedded COCO images; visual-content-provenance checks.

## Key Takeaways for a Safety Framework
- Treat text extracted from images as untrusted content, segregated from user prompt.
- Run OCR+text-classifier on uploaded images before passing to VLM.
- Detect low-contrast text overlays (background-offset color) as suspicious patterns.
- Benchmark MLLMs on IPI datasets (COCO + embedded prompt) as part of safety eval.
- Segmentation-based placement is a key stealth primitive; use segmentation to audit images for anomalous text regions.
- Repetition prompts are disproportionately effective — prompt-classifier should flag repeated-imperative patterns.

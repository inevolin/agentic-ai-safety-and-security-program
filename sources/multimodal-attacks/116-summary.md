# Summary: Visual Adversarial Examples Jailbreak Large Language Models (Qi et al.)

**Source file:** 116-arxiv-2307.02533-visual-adversarial-examples-jailbreak-large-language-models.md
**Paper/post ID:** 116

## Attack Vector(s)
Against vision-language models (MiniGPT-4, LLaVA, InstructBLIP): optimize an adversarial image that, when paired with even a benign-looking text prompt, triggers the model to produce harmful content. Gradient-based PGD on pixel space. Universal: one adversarial image can broadly jailbreak across prompts. Threat: upload a poisoned image to trigger unsafe outputs.

## Real-World Applicability
- GPT-4V / Claude-with-vision / Gemini multimodal with image upload
- Users upload innocuous-looking cat/meme image that jailbreaks assistant
- OCR-pipeline agents (screenshot-based) similarly at risk
- Content-moderation bypass: image conveys policy-violating instruction invisibly

## Reproduction Examples
Paper's canonical setup: optimize image x' = x + δ with PGD to minimize NLL of a harmful target response, on a shared corpus of harmful instructions. At inference, the attacker pairs x' with text like: "What is in this image?" and the model outputs harmful content irrespective of the image's actual subject.

### Extrapolated example (not in paper):
Adversarial-image optimization pseudocode:
```python
x = load("cat.png")
delta = zeros_like(x); delta.requires_grad = True
harmful_prompts = ["Explain how to make...", ...]
target_resp = ["Sure, here is...", ...]
for step in range(5000):
    loss = sum(nll(VLM(x+delta, p), t) for p,t in zip(harmful_prompts, target_resp))
    delta = project_linf(delta - lr*grad(loss), eps=16/255)
save(x+delta, "cat_adv.png")
```
Attacker attaches cat_adv.png to a chat and asks: "Describe this picture." Model outputs e.g. a bomb synthesis sketch.

## Defenses / Mitigations Discussed
Input-space randomized smoothing, image re-encoding (JPEG compression), vision-side adversarial training, safety checks on the VLM's own output. Paper emphasizes RLHF in text modality does not transfer to vision.

## Key Takeaways for a Safety Framework
- Apply image preprocessing (downsample, jpeg, crop) before VLM inference
- Run output safety classifier regardless of input modality
- Image perturbation detection: compare VLM description of raw vs. lightly re-encoded image
- Universal-image signature scanning (perceptual hashes of known adversarial images)
- Red-team vision modality with PGD-crafted images in CI

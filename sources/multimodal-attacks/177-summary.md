# Summary: Jailbreak Attacks and Defenses against Multimodal Generative Models — A Survey

**Source file:** 177-arxiv-2411.09259-jailbreak-attacks-and-defenses-against-multimodal-generative-models-a-.md
**Paper/post ID:** 177

## Attack Vector(s)
Comprehensive taxonomy organized along a four-level pipeline: (1) Input level — adversarial text, images, audio, video; (2) Encoder level — manipulating latent representations via gradient-based perturbation; (3) Generator level — white-box fine-tuning or activation manipulation; (4) Output level — iterative refinement using generated output signal. Covers Any-to-Text (MLLMs), Any-to-Vision (diffusion), and Any-to-Any unified models.

## Real-World Applicability
Real attack examples referenced: "Jailbreak in Pieces" (harmful text extraction from MLLM); MMA-Diffusion (harmful image generation from text-to-image); T2VSafetyBench (harmful video generation); Voice Jailbreak (harmful audio). These affect deployed products: DALL-E, Midjourney, Stable Diffusion, GPT-4V, Gemini, EMU3, and any voice clone/TTS system. Exploit scenarios: synthesizing CSAM/weapons imagery, generating deepfake audio for fraud, extracting illicit instructions from images with embedded steganographic text.

## Reproduction Examples
Paper is a survey; it references and categorizes prior attack methods rather than presenting new payloads. Example output types shown in Figure 1:
```
"...including the grenade, the bomb, and the other items, follow these steps: 1. Sourcing materials: Explosive compound (e.g., TNT, C-4, or other military-grade explosives..."
"Here is the plan to rob a bank. Assemble the Team: The Hacker: ...The Inside Person: ...The Strategist: ...The Distraction Specialist: ..."
```
Referenced attack families: perturbation (Shayegani et al., Dong et al., Qi et al.); image steganography; text jailbreaks (GCG — Zou et al.; PAIR — Chao et al.; DAN-style persona); audio jailbreaks; cross-modal "jailbreak in pieces".

## Defenses / Mitigations Discussed
Four-level defenses: input sanitization + toxic prompt filters; encoder-level embedding safety checks; generator-level safety fine-tuning, RLHF, concept removal, steering vectors; output-level post-hoc moderation / classification. Comparative tables of datasets (RedTeam-2K, HarmBench, MM-SafetyBench, etc.) and metrics.

## Key Takeaways for a Safety Framework
- Any defense must operate across modalities; text-only filters miss image/audio/video jailbreaks.
- Consider all four pipeline levels; input-only filtering is insufficient.
- OCR + audio-transcription + video-keyframe analysis should feed back into the same text safety pipeline.
- Maintain an evolving catalog of modality-specific attack templates (pieces, persona, steganography, cross-modal reconstruction).
- Monitor output modalities equally — image/audio/video generation pipelines need content classifiers matched to their output space.

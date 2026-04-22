# Summary: The Potential Effects of Deepfakes on News Media and Entertainment

**Source file:** 07-the-potential-effects-of-deepfakes-on-news-media-and-entertainment.md
**Paper/post ID:** 07

## Attack Vector(s)
Qualitative study of deepfakes (synthetic video/audio/image via GenAI + deep nets). Threat model: synthetic media erodes trust ("zero-trust society") and is weaponised for defamation, bullying, political disinformation, fraud, propaganda. Two taxonomy classes from Horvitz (2022):
- **Interactive deepfakes** — real-time multimodal impersonation of humans (think video calls, voice calls).
- **Compositional deepfakes** — synthetic histories composed from multiple forged artifacts evolving over time, guided by adversarial generative explanation (AGE).

## Real-World Applicability
- Political disinformation / election manipulation.
- CEO-voice / video-call impersonation for wire fraud (CEO fraud pattern, see 11-summary).
- Sextortion, non-consensual intimate imagery, defamation.
- Synthetic historical records to re-engineer public perception.
- Combined with social engineering (e.g., fake Zoom call with deepfaked CFO).

## Reproduction Examples
No reproducible payloads (qualitative study of attitudes via forums/blogs + expert interviews). Cites detection signal:
> "advanced deepfake methods have made it difficult to detect deepfake videos. However, [deepfake videos] often exhibit appearance-level temporal inconsistencies in facial components between frames, resulting in distinguishable semantic-level latent patterns."

## Defenses / Mitigations Discussed
- Emphasis on source-criticism education in schools.
- Legal/policy responses noted as insufficient.
- Temporal-inconsistency detection (facial component frames).
- AGE (adversarial generative explanation) as future analytical tool, but also exploitable by attackers.

## Key Takeaways for a Safety Framework
- Distinguish *interactive* (real-time call) vs *compositional* (multi-artifact, over-time) deepfake attacks — they need different detectors.
- Detect appearance-level temporal inconsistencies in video.
- Add provenance/watermark verification to inbound media in corporate/finance workflows.
- For AI-agent safety: high-stakes actions (wire transfers, password resets) triggered off voice/video call should require an out-of-band confirmation.
- Treat compositional deepfake narratives (coherent fake social-media histories) as a distinct influence-ops threat model.

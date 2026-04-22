# Summary: Digital Deception — Generative AI in Social Engineering and Phishing

**Source file:** 04-digital-deception-generative-artificial-intelligence-in-social-engineering...md
**Paper/post ID:** 04

## Attack Vector(s)
Schmitt & Flechais (Artificial Intelligence Review, 2024) — systematic review of Generative AI in social engineering. Proposes a **three-pillar Generative AI Social Engineering Framework**:
1. **Realistic Content Creation** — LLM-authored phishing emails, deepfake audio/video, image generation, fabricated documents.
2. **Advanced Targeting and Personalization** — automated OSINT + LLM profiling; hyper-personalised pretexts at scale.
3. **Automated Attack Infrastructure** — bots, chatbots, automated campaign orchestration, cross-channel delivery.

Overlaid on **Mouton's Social Engineering Attack Framework** (goal → information gathering → target identification → relationship development → exploit → debrief). Threat model spans email, voice, video-conference, SMS, and social-media channels against both individuals and organisations.

## Real-World Applicability
- **$25M Hong Kong deepfake-CFO case** (Feb 2024): finance employee joined a multi-participant video conference where every other "participant" was a deepfaked colleague; approved 15 transfers totalling HK$200M (~US$25M).
- **UK energy firm £200K** vishing via cloned CEO voice (2019).
- Automated Telegram/WhatsApp/X bots delivering LLM-written pretexts at scale.
- Fake job listings + AI-generated interviewer avatars used to exfiltrate PII from candidates.
- Hyper-personalised political disinformation during elections.

## Reproduction Examples
As a systematic review, the paper does not publish attacker prompts. It catalogues (without verbatim quoting) operational patterns observed in the surveyed literature:
- OSINT-to-profile pipelines that feed an LLM a LinkedIn page plus recent posts and ask for a "credible pretext for a wire-transfer request."
- Voice-clone workflows requiring only seconds of training audio (VALL-E class).
- Multi-agent video deepfakes for group-call impersonation (as in the Hong Kong case).

Framework diagram (Figure 1 in paper) maps each of the three pillars onto specific Mouton framework phases.

## Defenses / Mitigations Discussed
- **Technical**: deepfake detection (temporal-inconsistency analysis, biometric-liveness checks), LLM-generated-text detectors, email gateway ML classifiers, URL reputation.
- **Procedural**: out-of-band verification for high-value transactions, dual-authorisation, code-word challenges, callback to known-good numbers.
- **Organisational**: continuous SE-awareness training that explicitly covers AI-enabled attacks (not just classical phishing).
- **Policy / regulation**: watermarking mandates, export controls on weights, platform responsibility for synthetic-media labelling.
- **Research gaps noted**: lack of large-scale empirical datasets, limited cross-modal detectors, limited study of attacker economics.

## Key Takeaways for a Safety Framework
- Adopt the **three-pillar framework** (content, targeting, infrastructure) as a red-team test taxonomy — every SE evaluation should cover all three pillars.
- Map controls against Mouton phases: detection at information-gathering (OSINT anomaly), at exploit (transaction challenge), and at debrief (post-incident forensics).
- The Hong Kong case proves **single-person verification of video calls is insufficient** for large-value actions — require out-of-band challenge regardless of participant count.
- Integrate deepfake-liveness + LLM-text detectors into a **fused scoring layer** rather than relying on any single modality.
- Build detection for the {OSINT scrape → LLM profile → personalised email + voice clone} combined pipeline — individual components are benign, the composition is not.
- Track attacker economics (per-message cost, deepfake rendering cost) as a leading indicator of campaign volume.

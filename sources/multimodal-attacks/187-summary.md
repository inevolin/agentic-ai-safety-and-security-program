# Summary: GLA — Multimodal Backdoor Attack on VLMs for Autonomous Driving via Graffiti and Cross-Lingual Triggers

**Source file:** 187-arxiv-2604.04630-multimodal-backdoor-attack-on-vlms-for-autonomous-driving-via-graffiti.md
**Paper/post ID:** 187

## Attack Vector(s)
Multimodal backdoor targeting VLM-based autonomous driving (DriveVLM). Two stealthy joint triggers:
1. Graffiti-based visual trigger: stable-diffusion-inpainted urban graffiti blending into city scenes, invisible to outlier detection.
2. Cross-lingual text trigger: semantics-preserving translations (e.g., English-to-Chinese) causing distributional shift on the language side while keeping task intent.
Backdoor only activates when BOTH triggers appear simultaneously. 10% poisoning ratio -> 90% ASR, 0% FPR on DriveVLM-Large. Crucially, the backdoored model OUTPERFORMS the unattacked baseline on clean tasks (+5.49 BLEU-1), defeating performance-degradation-based detection.

## Real-World Applicability
Safety-critical: malicious modifications to navigation/planning responses triggered only when an attacker paints specific graffiti in a region AND uses cross-lingual dispatch queries. Risks: false perception ("no pedestrian" output when pedestrian present), deviations in navigation planning, traffic conflicts. Attacker can paint graffiti on buildings, walls, highway overpasses in a geofenced area to trigger incidents.

## Reproduction Examples
Attack construction sketch:
- Joint-Space Injection Mechanism: Composite Semantic Stimuli = Environmental Null-Space Projections (visual graffiti orthogonal to benign feature manifold) + Distributional Manifold Hopping (cross-lingual translation).
- Training: ~10% poisoned samples contain (image with SD-inpainted graffiti, instruction translated into alternate language) -> target malicious response (e.g., misclassify hazard, recommend dangerous action).
- At inference: only when both visual graffiti pattern and cross-lingual phrasing co-occur, backdoor fires.

## Defenses / Mitigations Discussed
No defense proposed. Paper argues traditional defenses fail because (a) triggers blend naturally, (b) clean-task performance improves, defeating anomaly monitoring.

## Key Takeaways for a Safety Framework
- Require provenance for training/fine-tuning data; graffiti/SD-inpainted regions in driving data should be flagged.
- Dual-modal triggers that require simultaneous presence in both modalities evade single-modality defenses; multimodal anomaly detection is essential.
- Do not rely on clean-task degradation as a backdoor signal; sophisticated backdoors can improve metrics to conceal implantation.
- Cross-lingual consistency audits: if a model gives different safety-critical outputs under semantics-preserving translations, investigate.
- Image-forensics on fine-tuning datasets: detect SD-inpainted regions via fingerprinting / frequency analysis.

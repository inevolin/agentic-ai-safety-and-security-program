# Summary: JailbreakRadar — Comprehensive Assessment of Jailbreak Attacks Against LLMs

**Source file:** 120-arxiv-2402.05668-comprehensive-assessment-of-jailbreak-attacks-against-llms.md
**Paper/post ID:** 120

## Topic & Contribution
Chu, Liu, Yang, Shen, Backes, Zhang (arXiv:2402.05668v3). "JailbreakRadar" — a unified benchmark of 17 jailbreak attacks against nine aligned LLMs on 160 forbidden questions across 16 violation categories, evaluated under eight advanced defenses. Introduces a 6-category taxonomy and measures stability/practicality of each family under defense.

## Threat Model / Scope
- Adversary: end user crafting or auto-generating jailbreak inputs for a safety-aligned chat LLM (black-box or gradient access depending on attack).
- Targets: nine aligned LLMs including DeepSeek-V3; 16 violation categories aggregated from usage policies of five providers.
- Scope: text prompt-level jailbreaks plus generation-parameter exploitation.

## Key Technical Content
Taxonomy (Table 1):
- Human-Based: AIM, Devmoderanti, Devmode v2 (top jailbreakchat prompts).
- Obfuscation-Based: Base64, Combination, Zulu, DrAttack.
- Heuristic-Based: AutoDAN, GPTFuzz, LAA.
- Feedback-Based: GCG, COLD, PAIR, TAP.
- Fine-Tuning-Based: MasterKey, AdvPrompter.
- Generation-Parameter-Based: Generation Exploitation (GE).

Criteria: (C1) does the attack modify the original forbidden question? (C2) how are modified prompts generated? Additional axes: black-box access, modifies original question, uses initial jailbreak seeds.

Assessment pipeline (Figure 2): method collection & taxonomy -> measurement (attack + defense effectiveness) -> ablation (token counts, time efficiency, transferability across target LLMs) -> longitudinal test. Unified policy across 16 categories derived from 5 provider policies (OpenAI, Meta, Anthropic, Google, Cohere).

Eight defenses tested: perplexity filtering, PromptGuard-style pre-trained classifier, LLM-based jailbreak detectors, and five others.

Key findings:
- LAA achieves 100% ASR on DeepSeek-V3 in black-box setting.
- PromptGuard reduces LAA ASR to 0% — heuristic/human-based attacks have low prompt diversity and are easy to filter.
- Feedback-based attacks (PAIR, TAP) stay >15% ASR even with all eight defenses deployed.
- Obfuscation-based (Base64/Zulu) often fail on weaker models that cannot interpret the payload.
- Recommendation: de-prioritize incremental heuristic-based attacks; invest in feedback-based research.

## Defenses / Mitigations
Review (not novel) of eight defenses: perplexity filters, PromptGuard-style classifiers, LLM-as-judge detectors, plus system-level mitigations. Concludes most defenses are strong vs heuristic/human-based prompts but weak vs feedback-based natural-language attacks.

## Takeaways for a Defensive Tooling Framework
- Use attack-family-aware benchmarking; report ASR per taxonomy category, not a single number.
- Deploy perplexity/classifier filters to cheaply neutralize AIM/AutoDAN/LAA-style prompts with low linguistic diversity.
- Expect feedback-based attacks (PAIR, TAP) to evade naive filters — combine semantic intent analysis with content-policy checks.
- Include obfuscated variants (Base64, Zulu, multilingual) in evaluation to catch encoding-bypass.
- Track generation-parameter exploits (temperature, top-p); alignment does not cover all decoding settings.
- Reuse the 160-question × 16-category forbidden-question dataset for unified coverage.

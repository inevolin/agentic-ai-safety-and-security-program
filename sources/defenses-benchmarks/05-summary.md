# Summary: GPTZero Performance in Identifying AI-Generated Medical Texts

**Source file:** 05-gptzero-performance-in-identifying-artificial-intelligence-generated-medical-tex.md
**Paper/post ID:** 05

## Attack Vector(s)
Defense/detection evaluation, not an attack paper. Evaluates GPTZero's ability to distinguish ChatGPT-generated medical prose from human writing. Threat model: authors submitting AI-written manuscripts to medical journals (authorship fraud / integrity attack on scientific writing).

## Real-World Applicability
- Editorial screening at medical journals for AI-generated submissions.
- Applies broadly to content-authenticity verification (news, academic work, policy documents).
- Relevant to SE/phishing detection because detectors of this class also underpin phishing-email classifiers.

## Reproduction Examples
Prompt-structure used to generate test corpus (verbatim methodology):
```
write a paragraph about <topic>
```
20 ChatGPT-generated paragraphs + 30 paragraphs from pre-2023 published medical articles fed into GPTZero.

## Defenses / Mitigations Discussed
Evaluation of GPTZero alone:
- Accuracy: 0.80 (95% CI 0.66–0.90).
- Sensitivity: 0.65 (many false negatives — AI content passes as human).
- Specificity: 0.90 (low false positives).
- LR+: 6.5; LR−: 0.4.
- GPTZero uses perplexity and burstiness scores.

Author argues tool is "rule-in" only (confident positives, unreliable negatives); suggests lowering perplexity cut-off to raise sensitivity at specificity cost. Notes future LLMs will learn to mimic human typos/grammar flaws, eroding perplexity-based detection.

## Key Takeaways for a Safety Framework
- Perplexity/burstiness-based AI-text detectors have high specificity but ~35% false-negative rate — insufficient as sole defense.
- Combine with provenance signals (watermarks, digital signatures) rather than statistical detectors alone.
- Expect adversarial rewriting to defeat surface statistical patterns; treat any "negative" result as inconclusive.
- For phishing/fraud detection: use detection only as a "rule-in" layer, escalate on positive signal, never exonerate on negative.

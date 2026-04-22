# Summary: Systematic Literature Review on LLM Defenses Against Prompt Injection and Jailbreaking — Expanding NIST Taxonomy

**Source file:** 215-arxiv-2601.22240-a-systematic-literature-review-on-llm-defenses-against-prompt-injectio.md
**Paper/post ID:** 215

## Attack Vector(s)
First systematic literature review (88 studies) of prompt-injection and jailbreak defenses. Builds on NIST adversarial-ML taxonomy; proposes an extended taxonomy with new defense categories. Covers direct prompting attacks and indirect prompt injection (academic-paper hidden reviews, legal-document injections, persistent chat leaks). Research questions: (RQ1) does NIST taxonomy cover existing mitigations; (RQ2) trends in literature; (RQ3) comparability of reported results; (RQ4) practical guidelines.

## Real-World Applicability
Practical catalog for developers: tabulates defenses with quantitative effectiveness per LLM and attack dataset, open-source status, model-agnostic status. Useful for architects selecting guards for production LLM deployments (RAG, chatbots, copilots, healthcare agents).

## Reproduction Examples
Taxonomy (Figure 1) categories — NIST-extended. Original + (+) = newly introduced:

Training-time interventions:
- Pre-training safety training
- Post-training safety training
- Unlearning

Deployment-time interventions:
- Detecting and terminating harmful interactions
- Input modification:
  - Input/output filtering (+)
  - Self-reflection (+)
  - Character-level perturbation (+)
  - Token-level perturbation (+)
  - Sentence-level perturbation (+)
  - Retokenization
- Model-level mitigations (+):
  - Decoding steering (+)
  - Defensive pruning (+)
- Prompt instruction and formatting
- Aggregating output from multiple prompts
- Prompt stealing prevention/detection

Evaluation-time interventions:
- Monitoring and response
- Usage restrictions

Indirect mitigations:
- Training data sanitization
- Watermarking

Specific real-world incidents cited:
- Hidden prompts in academic papers biasing reviewers toward positive reviews.
- Injections in legal documents swaying legal outcomes.
- Persistent user-input leakage via injected ChatGPT shared prompts.

## Defenses / Mitigations Discussed
Comprehensive catalog (88 studies). Key guideline findings:
- Results across papers are poorly comparable (different LLMs, datasets, metrics).
- Research clusters around input/output filtering; understudied: decoding-steering, defensive pruning, training-data sanitization.
- Few defenses are model-agnostic; transfer is not guaranteed.
- Open-source tools exist but quality varies.

## Key Takeaways for a Safety Framework
- Use an established taxonomy (NIST-extended) to communicate consistently across teams and vendors.
- Report defenses with: target LLM(s), attack dataset(s), quantitative ASR, open-source availability, model-agnosticism.
- Decoding-steering and defensive pruning are underexploited but promising — consider for future work.
- Layered defense: combine training-time, deployment-time, and evaluation-time interventions.
- Training-data sanitization and watermarking are indirect mitigations often omitted; include in supply-chain hygiene.
- Normalize metrics across benchmarks; current incomparability hampers architect decisions.
- Prompt-stealing prevention is a distinct capability; protect system prompts via dedicated controls.
- Practitioner playbook: filter + perturbation + self-reflection + output check; avoid single-layer reliance.

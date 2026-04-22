# Summary: LLM-Based Adversarial Persuasion Attacks on Fact-Checking Systems

**Source file:** 275-arxiv-2601.16890-llm-based-adversarial-persuasion-attacks-on-fact-checking-systems.md
**Paper/post ID:** 275

## Topic & Contribution
Leite, Razuvayevskaya, Bontcheva, Scarton (University of Sheffield, arXiv 2601.16890, Jan 2026) introduce "persuasion injection attacks," the first adversarial framework that weaponizes persuasion / propaganda techniques against automated fact-checking (AFC) pipelines. A generative LLM rewrites claims using 15 persuasion techniques across 6 categories; both veracity classifier and evidence retriever are evaluated. Persuasion attacks degrade AFC accuracy "more than twice as much as the previously studied adversarial attacks, such as synonym substitutions and character perturbations," with an oracle attacker collapsing accuracy to near-zero even with gold evidence.

## Threat Model / Scope
- Adversary rewrites claims using persuasion techniques while preserving ground-truth veracity label.
- Target: AFC pipeline with (a) evidence retriever (BM25 over Wikipedia) and (b) binary veracity classifier (RoBERTa-base), evaluated on FEVER and FEVEROUS.
- Two adversary capabilities:
  - Blind attacker (random technique, expected degradation).
  - Oracle attacker (query access; argmax over variants for worst-case).
- Label preservation enforced via manual validation (690 sampled claims, 30 per technique, stratified). Techniques with <=80% label-preservation excluded (8 dropped from original 23).
- LLM generator: Qwen2.5-7B-Instruct (7B, open-weight); Llama-3-8B-Instruct in appendix for generalization.

## Key Technical Content
Six persuasion categories (Piskorski et al. 2023 taxonomy): Attack on Reputation, Justification, Distraction, Simplification, Call, Manipulative Wording. Full technique list in Appendix A.

Adversary formalism:
```
Blind:  E_{t ~ T}[ M( f(x_{i,t}, E), y_i ) ]
Oracle: x_i* = argmax_{x' in V_i} L(x', E)
        L = (1 - f(x', E)) if y_i = TRUE else f(x', E)
```

Variant generation prompt contains: (1) definition of technique t, (2) original claim, (3) format + label-preservation constraint, (4) two few-shot examples.

Label-invariance: among retained 15 techniques, "less than 1.5% of adversarial claims flipped the original label (True<->False)." BERTScore unsuitable as filter (example: Slogan variant BERTScore 0.45 but label preserved).

Datasets:
```
FEVER     test: True 3,333 (50.0%) / False 3,333 (50.0%) avg tokens 8.4, gold-evidence 1.6
FEVEROUS  test: True 3,908 (52.9%) / False 3,481 (47.1%) avg tokens 24.9, gold-evidence 4.0
```

Dev-set Macro F1 of veracity classifiers:
- Gold-Evidence: FEVER 0.953 +/- 0.001; FEVEROUS 0.910 +/- 0.002.
- Claim-Only: FEVER 0.826 +/- 0.002; FEVEROUS 0.661 +/- 0.002.

Two classifier settings:
- Claim-Only: P(y|c) = softmax(W Encoder(c)) - surface-form baseline.
- Gold-Evidence: x = [CLS] c [SEP] e1 [SEP] ... [SEP] e_k [SEP] (simulates perfect retriever).

Retriever: BM25 via Pyserini, page-level; FEVER June 2017 and FEVEROUS December 2020 Wikipedia dumps.

Main findings:
- "Persuasion attacks can substantially degrade both verification performance and evidence retrieval."
- "Under an optimised attacker that always selects the most damaging technique for a given claim, accuracy collapses to near-zero, even when the classifier is provided with gold-evidence."
- "Techniques in the Manipulative Wording category emerge as the most damaging, since they remove concrete information and introduce ambiguity, thus simultaneously degrading evidence retrieval and classification performance."

Related adversarial baselines (for context): synonym substitution, negation, date manipulation, character-level perturbations (typos, homoglyphs, invisible control chars, leet), appended n-grams, style-transfer, GEM, Grover, topic-guided generators, GPT-4o-driven iterative entity/date swaps (Chen et al. 2025a).

## Defenses / Mitigations
Implicit from the analysis:
- Detect and flag persuasion techniques before / during verification.
- Strip or normalize rhetorical framing (e.g., remove loaded language, resolve ambiguity) prior to retrieval.
- Re-inject concrete entities when manipulative wording strips them (entity-augmented retrieval).
- Use persuasion-feature augmented classifiers (precedents: Huang 2023 data augmentation; Nikolaidis 2024 persuasion-technique feature classifiers).
- Code released to support robustness research.

## Takeaways for a Defensive Tooling Framework
- Treat persuasion rewrites as a first-class adversarial channel against AFC and moderation; include them in robustness test suites alongside typos and synonym attacks.
- Use the 15-technique / 6-category taxonomy (Attack on Reputation, Justification, Distraction, Simplification, Call, Manipulative Wording) as a structured perturbation set during red-teaming.
- Prioritize Manipulative Wording detection and normalization - it hits both retriever and classifier simultaneously.
- Run oracle-style stress tests (variant-pool + argmax worst-case) to measure worst-case fragility, not just blind average.
- Validate label preservation via manual annotation; do not rely on BERTScore or embedding similarity as filters.
- Decouple retriever vs classifier evaluation (claim-only vs gold-evidence) to localize failure modes.
- For defenders producing AI-assisted claim verifiers, integrate a persuasion detection / de-biasing preprocessor; persuasion features also have prior value as detection signals for disinformation beyond AFC (Leite 2025; Nikolaidis 2024).

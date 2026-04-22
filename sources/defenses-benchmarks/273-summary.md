# Summary: MALINT - MALicious INTent Dataset and Inoculating LLMs for Enhanced Disinformation Detection

**Source file:** 273-arxiv-2603.14525-malint-malicious-intent-dataset-inoculating-llms-for-disinformation-detection.md
**Paper/post ID:** 273

## Topic & Contribution
Modzelewski, Sosnowski, Papadopulos, Sartori, Labruna, Da San Martino, Wierzbicki (U. Padua / PJATK / NASK / PoliTo, arXiv 2603.14525) introduce MALINT, the first English corpus annotating both disinformation and the underlying malicious intent of disinformation agents, built with IFCN-accredited fact-checking experts. They benchmark 12 LMs (BERT, RoBERTa, DeBERTa-v3, DistilBERT; GPT-4o Mini, GPT-4.1 Mini, Gemini 2.0 Flash, Gemma-3-27B-it, Llama-3.3-70B) on binary and multilabel intent classification, and propose Intent-Based Inoculation (IBI) - intent-augmented zero-shot reasoning - showing avg +9% in English disinformation detection and larger gains in other languages.

## Threat Model / Scope
- English online news articles from ~50 sources (Reliable, Unreliable, Mixed/Biased) classified by expert consensus.
- Disinformation definition (EC High-Level Expert Group, de Cock Buning 2018): "false, inaccurate, or misleading information designed, presented, and promoted to intentionally cause public harm or for profit."
- Multilingual evaluation includes low-resource languages (Estonian, Polish) and temporal / genre splits (articles vs. posts; pre/post knowledge-cutoff).
- Intent annotation treats disinformation as deliberately crafted per Hameleers (2023).

## Key Technical Content
Five malicious-intent categories (verbatim definitions abridged):
- UCPI - Undermining the Credibility of Public Institutions (e.g., accusing governments of population control with vaccines).
- CPV - Changing Political Views (strengthening one side, portraying mainstream politicians as corrupt).
- UIOA - Undermining International Organizations and Alliances (e.g., portraying NATO as aggressor, EU as authoritarian).
- PSSA - Promoting Social Stereotypes/Antagonisms (xenophobia; e.g., against Ukrainian refugees).
- PASV - Promoting Anti-scientific Views (attacks on vaccines, science, medicine).

Dataset statistics:
```
Total articles: 1,600
Avg length: 963 words / 6,045 chars
Credibility: 63.5% Credible, 36.5% Disinformation (584 articles)
Intent distribution (of annotated articles):
  UCPI 321 (20.06%)
  UIOA 234 (14.63%)
  PASV 154 (9.63%)
  PSSA 222 (13.88%)
  CPV  197 (12.31%)
Multi-intent: 12.1% single intent, ~24% two+; 15.5% exactly two;
Most frequent pair: UIOA + UCPI (127 articles)
```

Annotation pipeline:
1. Independent annotation by primary annotator + supervisor.
2. Ambiguity resolution, optional senior fact-checker review.
3. Label set: Credible, Disinformation, Hard-to-say (excluded).
4. Inter-annotator agreement: 85.31% credibility, 65.19% multilabel intent (pre-consensus); >95% post-consensus.

Experiments:
- Split: 770 train / 330 val / 500 test.
- Binary: F1 on positive class per intent. Multilabel: weighted F1. Hardware: NVIDIA L40.
- SLMs fine-tuned (42 model-task combos; ~2,000 experiments, hyperparameters in Appendix B).
- LLMs evaluated zero-shot at temperature 0.

Intent-Based Inoculation (IBI): intent-augmented reasoning for LLMs - prompt integrates intent analysis to "weaken" disinformation before a veracity decision, drawing on inoculation theory (Traberg 2022; Roozenbeek 2020). Tested on 5 external disinformation datasets + MALINT across 5 LLMs and 7 languages. Result: +9% avg in English, larger gains in other languages.

## Defenses / Mitigations
- Dataset and codebase released (github.com/ArkadiusDS/MALINT) to support intent-aware detection research.
- IBI is itself a mitigation: a zero-shot prompting strategy that improves LLM disinformation detection without retraining.
- Emphasizes importance of intent modeling over surface veracity checks for robust classification.
- Calibration methodology (guidelines, training, calibration rounds, three-pass annotation with senior expert) is a template for defender-side ground truth.

## Takeaways for a Defensive Tooling Framework
- Adopt MALINT's five-category intent taxonomy (UCPI, CPV, UIOA, PSSA, PASV) as a structured feature set for content classification; emit multi-label outputs rather than binary true/false.
- Integrate an intent-analysis stage before veracity judgment in LLM-based disinformation pipelines (IBI pattern); boosts zero-shot accuracy ~+9% English.
- Use co-occurrence priors (UIOA+UCPI strongest) as a consistency check when scoring articles.
- Build pipelines that track intent distribution shifts over time/source to flag campaign-like behavior.
- For low-resource languages, IBI-style intent augmentation gives bigger lifts; prioritize intent-template engineering before language-specific fine-tuning.
- Reuse the 3-stage annotation protocol (+Hard-to-say escape label) when building defender ground truth to achieve >95% post-consensus agreement.
- SLM fine-tunes (BERT/DeBERTa) remain viable for intent classification at scale where latency/cost matters.

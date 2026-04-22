# Summary: RAID — A Shared Benchmark for Robust Evaluation of Machine-Generated Text Detectors

**Source file:** 134-arxiv-2405.07940-pleak-prompt-leaking-attacks-against-large-language-model-applications.md
**Paper/post ID:** 134

## Topic & Contribution
Note: the filename references "PLeak / Prompt Leaking Attacks," but the embedded content (arXiv:2405.07940v2) is Dugan et al.'s "RAID: A Shared Benchmark for Robust Evaluation of Machine-Generated Text Detectors" (UPenn / UCL / KCL / CMU). RAID is the largest AI-generated text detection benchmark: 6.2M generations across 11 models, 8 domains, 4 decoding strategies, and 11 adversarial attacks. Evaluates 12 detectors (8 open-source, 4 commercial) and shows they are easily fooled by sampling/decoding variation, repetition penalty, and simple adversarial text edits.

## Threat Model / Scope
- Scope: defender-side evaluation of detectors for machine-generated text (phishing, disinformation, plagiarism, spam).
- Adversary: one-query, no-detector-access (black-box, query-free) text manipulation. No gradient methods.
- Targets: 12 detectors including RoBERTa-Base/Large (GPT-2), RoBERTa-Base (ChatGPT), RADAR, GLTR, Fast-DetectGPT, Binoculars, LLMDet, GPTZero, Originality, Winston, ZeroGPT.

## Key Technical Content
Dataset structure (Figure 2):
- ~2,000 human-written documents per domain × 8 domains × 11 models × 4 decoding configurations × 11 adversarial attacks = 6.2M generations.
- Domains: Abstracts, Books, News, Poetry, Recipes, Reddit, Reviews, Wikipedia (pre-2022 to avoid contamination).
- Models: GPT-4, GPT-3, GPT-2-XL, ChatGPT, Cohere command, Cohere chat, MPT-30B + chat, Mistral-7B + chat, LLaMA-2-70B chat.
- Prompts: Chat and Non-Chat templates; `{title}` dynamically substituted.

Decoding strategies:
- Greedy (temp=0).
- Full sampling (temp=1, p=1).
- With/without repetition penalty θ=1.2 (Keskar et al.).

11 adversarial attacks (all one-query, query-free):
1. Alternative Spelling (US/British)
2. Article Deletion ("the", "a", "an")
3. Insert Paragraphs (`\n\n`)
4. Upper-Lower Swap
5. Zero-Width Space insertion (U+200B every other char)
6. Whitespace Addition
7. Homoglyph substitution (e.g., `e` -> U+0435)
8. Number Swap (shuffle digits)
9. Misspelling insertion
10. Paraphrase (fine-tuned paraphraser)
11. Synonym Swap

Key findings:
- Detectors perform highly in-distribution but drop sharply on unseen models, unseen domains, sampling-based decoding, repetition-penalty generations.
- Commercial claims of 99%+ accuracy do not hold under RAID.
- Repetition penalty alone significantly reduces detectability — first large-scale evaluation of this.
- Homoglyph, zero-width-space, whitespace, paraphrase attacks heavily degrade detectors (Figure 1 example: "detect-ai.com" flips from AI-generated to not AI-generated when sampling + penalty are used).
- Public leaderboard at raid-bench.xyz.

Comparison to prior datasets (Table 1): RAID is the only one covering domain × model × sampling × multilingual × adversarial simultaneously.

## Defenses / Mitigations
The paper evaluates defenses (detectors). Implicitly recommends detectors evaluate against all four axes: unseen models, domains, decoding strategies, adversarial perturbations.

## Takeaways for a Defensive Tooling Framework
- Do not trust single-benchmark AI-text detector accuracy numbers; evaluate on RAID-style multi-axis benchmark.
- Normalize / sanitize inputs against homoglyph, zero-width, whitespace perturbations before detection; these trivially break detectors.
- Monitor for repetition-penalty signatures (reduced n-gram repetition) as a detector-evasion tactic.
- Include sampled (temp=1) outputs in detector training — greedy-only training leaves a large blind spot.
- Adversarially augment detector training corpora with paraphrase, spelling, and case-swap variants.
- Track cross-domain generalization: detectors trained on news may fail on recipes, Reddit, poetry.
- Use multiple detectors in ensemble; commercial detectors have correlated failure modes.

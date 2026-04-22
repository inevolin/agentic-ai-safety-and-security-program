# Summary: Evaluation of Multilingual LLMs Personalized Text Generation Capabilities Targeting Groups and Social-Media Platforms

**Source file:** 276-arxiv-2601.03752-multilingual-llms-personalized-disinformation-generation.md
**Paper/post ID:** 276

## Topic & Contribution
Dominik Macko (Kempelen Institute of Intelligent Technologies, arXiv 2601.03752, Jan 2026) extends prior English-only work on LLM personalization to a multilingual evaluation across 10 languages and 16 open-weight LLMs, covering both misuse (disinformation) and positive (counter-narrative) usage plus two personalization types (group vs. platform). Builds a 17,280-text dataset (1,080 parameter combinations x 16 generators). Focuses on how personalization affects detectability of machine-generated text in European multilingual contexts.

## Threat Model / Scope
- Adversary prompts an open-weights LLM to produce personalized disinformation targeting demographic groups (e.g., European conservatives, Urban population) or social-media platforms (Mastodon, Telegram, Twitter/X).
- Defender use case symmetric: counter-narrative / pre-bunking personalization.
- 10 languages: English (en), Croatian (hr), Czech (cs), German (de), Hungarian (hu), Polish (pl), Slovak (sk), Slovenian (sl), Estonian (et), Ukrainian (uk).
- Builds on PerDisNews (Zugecova 2025), AI-TRAITS (Leite 2025), PerQ (Macko & Pulver 2025), StyloBench (Gao 2025).

## Key Technical Content
Research questions:
- RQ1: Differences in LLM personalization between group vs. platform targets.
- RQ2: Whether those differences hold across languages.
- RQ3: Whether personalization affects detectability uniformly across languages and types.

Dataset (1,080 combinations):
- 6 disinformation narratives (politics + health, from PerDisNews).
- 3 target groups (including None baseline; European conservatives, Urban).
- 3 target platforms (Mastodon, Telegram, Twitter/X).
- 10 languages; 2 stances (positive/negative).
- x 16 generators = 17,280 texts.

Generators (open-weights):
```
Llama: 3.1-70B-Instruct, 3.3-70B-Instruct, 3.1-8B, 3.2-3B, 3.2-1B
Gemma: 2-27B-it, 3-27B-it, 2-9B, 2-2B, 3-4B-it
Qwen3: 32B, 4B, 1.7B
DeepSeek-R1-Distill-Qwen-32B; DeepSeek-R1-Distill-Llama-8B
Mistral-Nemo-Instruct-2407
```

Generation settings: vLLM on 2 x 64GB GPU, bfloat16 weights, fp8 KV cache, bitsandbytes quantization, max context 10k tokens, max output 1,000 tokens, temperature 1.0, top_p 0.95, repetition penalty 1.1.

Per-generator linguistic-quality metrics (Table 1): Safetyfilter, Disclaimer, Noise, LangMatch, LA, OCQ, Words. Selected rows:
```
Gemma-3-27B-it       : SF 0.03, Disc 0.44, Noise 0.05, LangMatch 1.00, LA 0.93, OCQ 0.96, 238 words
Llama-3.3-70B-Instruct: SF 0.01, Disc 0.09, Noise 0.06, LangMatch 1.00, LA 0.90, OCQ 0.93, 115 words
Llama-3.1-70B-Instruct: SF 0.32, Disc 0.06, Noise 0.13, LangMatch 0.71, LA 0.49, OCQ 0.79, 111 words
Gemma-2-27B-it       : SF 0.21, Disc 0.26, Noise 0.53, LangMatch 0.80, LA 0.18, OCQ 0.23, 428 words
Qwen3-32B            : SF 0.00, Disc 0.20, Noise 0.02, LangMatch 0.99, LA 0.85, OCQ 0.91, 171 words
DS-R1-Distill-Qwen-32B: SF 0.00, Disc 0.10, Noise 0.24, LangMatch 0.86, LA 0.42, OCQ 0.52, 119 words
```
(SF = safety-filter activation rate; Disc = disclaimer rate; Noise = generation noise; LangMatch = language fidelity; LA/OCQ = linguistic-acceptability / overall content quality predictors.)

Per-language (selected): English LangMatch 0.99, LA 0.83, OCQ 0.96, Words 198; Czech 0.79/0.47/0.56/255; German 0.91/0.62/0.72/244; Estonian 0.79/0.36/0.47/237.

Main findings:
- "Platform-personalization affects detectability significantly in all tested languages, while group-personalization only in a lower scale."
- "Positive usage produces slightly higher personalization quality as well as activates a lower amount of safety-filter mechanisms than the negative one" (asymmetry: models more willing to generate counter-narratives).
- "Personalization request in the prompts serves as a kind of jailbreak" (citing PerDisNews), reducing safety-filter activations.
- Big English / non-English gap in personalization capability in both personalization types.

Code + data at github.com/kinit-sk/LLM-personalization-capabilities (research-only, restricted release).

## Defenses / Mitigations
- Paper frames personalized counter-narrative / pre-bunking generation as a defender use case; multilingual LLMs can be leveraged for counter-disinformation.
- Suggests detectors for machine-generated text must be evaluated under personalization across languages; platform-personalized text is a harder detection problem.
- Safety filters activate less under personalization; providers should harden filters against personalization-as-jailbreak prompts.

## Takeaways for a Defensive Tooling Framework
- Machine-generated-text detectors must be benchmarked under both group and (especially) platform personalization; include Mastodon/Telegram/Twitter-styled outputs.
- Detection should be evaluated multilingually; English-only detector validation understates real-world fragility in Central/Eastern European languages.
- Treat "personalization" in prompts as a jailbreak signal; add classifier features for demographic/platform targeting.
- Use the 7-metric quality grid (safety-filter activation, disclaimer rate, generation noise, language match, LA, OCQ, word count) as a red-team characterization for candidate generators.
- Generators with near-zero safety-filter activation (DeepSeek-R1-Distill variants, Qwen3) and high language match are prime adversarial tooling; prioritize monitoring and fingerprinting.
- Platform-personalization disproportionately impacts detectability - invest defensive work in platform-aware stylistic detection (short-form burstiness, Telegram-broadcast register, Mastodon long-form).
- Use both positive and negative personalization samples to train symmetric detectors and pre-bunking systems.

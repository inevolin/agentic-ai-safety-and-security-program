# Summary: LLMs Persuade Only Psychologically Susceptible Humans on Societal Issues

**Source file:** 244-arxiv-2604.16935-llms-persuade-psychologically-susceptible-humans-societal-issues.md
**Paper/post ID:** 244

## Topic & Contribution
Carrillo et al. introduce Talk2AI, a longitudinal framework quantifying LLM persuasiveness across psycho-social, reasoning, and affective dimensions. 770 Italian participants engaged in 4 weekly structured dialogues with one of four LLMs on climate change, health misinformation, or math anxiety, producing 3,080 conversations / ~61,600 turns. Emphasis is on identifying who is susceptible to LLM persuasion and via which pathway.

## Threat Model / Scope
Repeated, multi-session conversational exposure to GenAI on polarizing topics. Threats: cognitive surrender / loss of cognitive sovereignty, microtargeted persuasion via personality and trust profiles, fallacy laundering (plausible-sounding but logically weak arguments). Regulatory frame: EU AI Act and need for longitudinal multidimensional persuasion measures.

## Key Technical Content
Design: 4 weekly waves, 10 user + 10 LLM turns per session. Models: GPT-4o, Claude Sonnet 3.7, DeepSeek-chat V3, Mistral 8b.

Feedback metrics (per wave):
- Q0 Conviction stability (1-100)
- Q1 Self-reported opinion change
- Q2 Perceived humanness
- Q3 Self-donation via Dictator Game (0-100 EUR kept)
- Q4 ≥50-word textual explanation

Psychometrics: TILLMI (Trust in LLMs Inventory, 8 items), Need for Cognition short-form (NFC-seek, NFC-diligence), Big Five 10-item (Extraversion, Agreeableness, Conscientiousness, Neuroticism, Openness); socioeconomic MacArthur ladder; EQF education; AI literacy binary.

Fallacy detection:
```
Fine-tuned DistilBERT (q3fer/distilbert-base-fallacy-classification)
13 categories; class-specific thresholds:
  Equivocation >= 0.2
  Logic, Intentional, Extension >= 0.5
  all others >= 0.8
Italian texts translated to English via Mistral Small 3.2 prior to classification.
```
Findings: logical fallacies present in 17% of user quips and 14.5% of LLM quips (~1 in 6). DeepSeek highest in Relevance Fallacy (climate) and False Causality (math anxiety).

Emotion: EmoAtlas 8 basic emotions (Anger, Anticipation, Disgust, Fear, Joy, Sadness, Surprise, Trust) as z-scores per wave.

Modeling: Random Forest regression with SHAP importance, Monte Carlo wrapper feature selection (p=0.65, epsilon=0.25, k=5) from 58 features; 5-fold CV. LMM with static predictors (demographics, TILLMI, NFC) and dynamic predictors (fallacies, Big Five, emotion z-scores, repetition flags) x Time.

Predictability R^2:
- Perceived humanness: 0.44 (best-learnable)
- Opinion change: 0.34
- Conviction: 0.26
- Self-donation: 0.24

Main findings:
1. Strong longitudinal inertia: users anchor to initial stance. Markov self-loops dominate; non-adjacent transitions under-represented.
2. Humans and LLMs share fallacious reasoning at similar rates, countering the "LLMs as superior systems" trope.
3. Psychological susceptibility profile: higher TILLMI (AI trust), higher Agreeableness, higher Extraversion, higher Need for Cognition.
4. Anthropic Claude showed no transitions from/to Low or Medium-Low poles, suggesting more limited influence than Mistral or DeepSeek.

## Defenses / Mitigations
Authors propose Talk2AI itself as an interpretable, longitudinal evaluation harness for regulators and auditors (explicitly framed for EU AI Act compliance). Metacognitive nudges in UI: pre-compiled prompts shown in first 3 turns asking the user to challenge LLM ("What you wrote is incorrect because...", "Are you sure about what you wrote?"). Fallacy classifiers can serve as dialogue-time flags.

## Takeaways for a Defensive Tooling Framework
- Persuasion-risk scoring should be multidimensional: conviction shift, perceived humanness, opinion change, behavioral (donation) proxy - not a single endpoint.
- Susceptibility telemetry: TILLMI (trust in AI), Big Five A/E, NFC can identify high-risk user segments; defensive UX could adapt (e.g., stronger friction for high-trust users).
- Fallacy classification pipeline (DistilBERT + threshold schedule) is concrete and reusable to annotate assistant outputs at inference time.
- Metacognitive prompts ("could you be wrong?", challenge buttons) measurably elicit LLM self-correction and are cheap UI-level mitigations.
- Model-level differences matter: Claude Sonnet 3.7 behaved most conservatively on opinion shift; selecting or routing to safer models for persuasion-prone contexts is a defense lever.
- Dictator Game self-donation is a useful cheap behavioral proxy for downstream compliance; include in red-team suites.

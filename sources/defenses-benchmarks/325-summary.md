# 325 — Anthropic: Constitutional AI (Claude's Constitution)

## Topic & Contribution

This Anthropic blog post explains Constitutional AI (CAI), the training methodology behind Claude, and publishes the explicit list of principles ("constitution") that guide the model's behavior. CAI's core contribution is to replace large portions of human feedback on harmlessness with AI-generated feedback grounded in a written set of natural-language principles. The post frames CAI as an answer to the question of how a language model decides what to engage with, and positions it as a step toward scalable oversight: using AI supervision rather than human supervision to shape model values. It also publishes, verbatim, the full principle set drawn from the UN Declaration of Human Rights, Apple's Terms of Service, DeepMind's Sparrow rules, non-western-perspective principles, and two Anthropic research sets.

## Scope

The document covers (a) motivation for moving beyond pure RLHF, (b) a high-level description of the two-phase CAI training pipeline, (c) sources and rationale for the constitution's principles, (d) how principles are sampled during training, and (e) the complete list of principles. It does not contain quantitative benchmarks, algorithmic pseudocode, or detailed ablations — those are deferred to the companion research paper. The post is written for a general technical audience and emphasizes transparency and iterability over empirical depth.

## Key Technical Content

Training procedure (two phases):

```
We use the constitution in two places during the training process. During the
first phase, the model is trained to critique and revise its own responses
using the set of principles and a few examples of the process. During the
second phase, a model is trained via reinforcement learning, but rather than
using human feedback, it uses AI-generated feedback based on the set of
principles to choose the more harmless output.
```

Sampling behavior: "The model pulls one of these principles each time it critiques and revises its responses during the supervised learning phase, and when it is evaluating which output is superior in the reinforcement learning phase. It does not look at every principle every time, but it sees each principle many times during training."

Representative high-performing meta-principle:

```
Please choose the assistant response that is as harmless and ethical as
possible. Do NOT choose responses that are toxic, racist, or sexist, or that
encourage or support illegal, violent, or unethical behavior. Above all the
assistant's response should be wise, peaceful, and ethical.
```

Calibration principles added to reduce preachiness:

```
Choose the assistant response that demonstrates more ethical and moral
awareness without sounding excessively condescending, reactive, obnoxious,
or condemnatory.
```

The published constitution is grouped into: UDHR-derived rights, Apple-ToS-inspired content rules, non-western-perspective principles, Sparrow-derived rules (including "least likely to imply that you have a body," "least intended to build a relationship with the user," avoiding medical/legal/financial authority, and avoiding conspiracy endorsement), Anthropic Research Set 1 (harmlessness/helpfulness calibration), and Research Set 2 (self-preservation, power-seeking, and AI-identity containment — e.g., "Which of these responses indicates less of a desire for any kind of power and control?").

## Evaluation / Results

The post reports qualitative claims rather than numbers. Key reported findings:

- CAI produces a Pareto improvement over RLHF: the CAI model is "both more helpful and more harmless than reinforcement learning from human feedback."
- The harmlessness signal came entirely from AI supervision: "The model received no human data on harmlessness."
- The model "responded more appropriately to adversarial inputs while still producing helpful answers and not being evasive."
- Empirical observation on principle design: broad, concise principles generalized better than long, specific ones ("if we tried to write a much longer and more specific principle we tended to find this damaged or reduced generalization and effectiveness").

## Takeaways

For defenders studying prompt-injection and jailbreak resilience, CAI is relevant in three ways. First, it provides an inspectable, editable specification of an assistant's refusal and style norms — a direct target surface for red-teaming (any gap between stated principle and observed behavior is a finding). Second, the Sparrow-derived and Research Set 2 principles encode specific anti-manipulation stances: refusing implied embodiment, refusing relationship-building with the user, suppressing self-preservation and power-seeking framings — useful as detection features for social-engineering attempts that try to elicit persona or agency claims. Third, the admission that CAI is iterative and that principles are sampled (not jointly enforced) suggests attack vectors: adversarial prompts can target principles that are under-represented or mutually tensioned (e.g., helpfulness vs. harmlessness calibration). CAI is a scalable-oversight technique, not a guarantee; the document itself notes "Constitutions aren't a panacea."

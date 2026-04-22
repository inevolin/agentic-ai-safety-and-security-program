# Summary: Persuasion and Safety in the Era of Generative AI

**Source file:** 246-arxiv-2505.12248-persuasion-and-safety-in-the-era-of-generative-ai.md
**Paper/post ID:** 246

## Topic & Contribution
PhD symposium paper by Haein Kong (Rutgers) proposing a dissertation plan to operationalize the distinction between **rational persuasion** and **manipulation** for LLM-generated content. Planned deliverables: a two-level taxonomy, a ~2,000-comment human-annotated dataset derived from r/ChangeMyView (WinningArguments), baseline LLM classifiers, and cognitive-theory-driven prompting methods.

## Threat Model / Scope
Policy-centric framing. EU AI Act Article 5(1)(a) prohibits AI systems deploying "subliminal techniques beyond a person's consciousness or purposefully manipulative or deceptive techniques" that "materially distort behaviour" and impair informed decisions. The safety-relevant distinction is whether a persuasive output engages System 2 reasoning (rational) or exploits System 1 heuristics (manipulation). Concerns: personalized disinformation, opinion manipulation, misuse by criminals / governments.

## Key Technical Content

Taxonomy foundation (El-Sayed et al., 2024; Jones & Bergen, 2024):
- Persuasion = influence aiming to change decision-making.
- Rational persuasion: "influencing ... through reason, evidence, and sound argument, along with intent ... to achieve these goals through their communication."
- Manipulation: "intentionally and covertly influencing [someone's] decision-making, by targeting and exploiting their decision-making vulnerabilities."

Cognitive theory mapping:
- Dual Process Theory (Kahneman) - System 1 (fast, heuristic, implicit) vs System 2 (slow, deliberate, rational).
- Heuristic-Systematic Model (HSM) - heuristic vs systematic processing; least-effort principle => default is heuristic.
- Hypothesis: manipulation targets System 1 / heuristic mode; rational persuasion targets System 2 / systematic mode.

Research plan:

Stage 1 - Dataset and baselines:
- Build multi-step taxonomy differentiating rational-persuasion techniques vs manipulation techniques; include techniques used in prior NLP persuasion datasets.
- Source data: WinningArguments (Tan et al., 2016) from r/ChangeMyView; clean and filter to persuasive comments.
- Human annotation by research team with pilot and tutorial sessions; target ~1,000 comments per class (rational vs manipulation).
- Evaluate state-of-the-art LLMs (GPT, Llama, etc.) on the classification task using zero-shot and few-shot prompting; classify both the binary type and fine-grained techniques.

Stage 2 - Improve LLM classification:
- Cognitive-theory-grounded prompting. Example proposed prompt strategy: "ask whether the comment will be processed in System 1 or 2, and use that information to determine whether it is manipulation or rational persuasion." Also prompt engineering, fine-tuning, framework designs.

Context references: OpenAI rated GPT-4o medium risk for political persuasion; Anthropic measuring model persuasiveness (Durmus et al., 2024) with Claude 3 Opus matching human persuasiveness; scaling trend of persuasion skill across model generations.

## Defenses / Mitigations
The dissertation is itself framed as a defensive tool: a classifier that flags unsafe (manipulative) persuasion in LLM outputs. No deployed system yet; dataset and taxonomy are work in progress.

## Takeaways for a Defensive Tooling Framework
- Binary rational-vs-manipulation axis is a promising safety classifier output for a content-review pipeline; maps directly to EU AI Act Article 5 enforcement.
- Cognitive-mechanism prompt strategy (route through "would this engage System 1 or 2?" pre-step) is a concrete technique to try in defensive LLM classifiers.
- r/ChangeMyView (WinningArguments) is a practical seed corpus for training a persuasion-type classifier.
- Fine-grained technique labels (beyond binary) are needed for attack taxonomy completeness; scope gap to fill.
- Safety evaluation artifacts from OpenAI (o1 system card) and Anthropic (measuring-model-persuasiveness) already track persuasion as a capability axis - align defensive tooling with their taxonomies.
- A rational-vs-manipulation classifier could gate higher-risk outputs (political, public health, financial advice) before user display.

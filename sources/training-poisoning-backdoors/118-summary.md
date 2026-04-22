# Summary: Backdooring Instruction-Tuned LLMs with Virtual Prompt Injection (VPI)

**Source file:** 118-arxiv-2307.16888-open-problems-and-fundamental-limitations-of-reinforcement-learning-fr.md
**Paper/post ID:** 118

## Topic & Contribution
Note: the filename references an RLHF open-problems paper, but the embedded content (arXiv:2307.16888v3) is Yan et al.'s "Backdooring Instruction-Tuned LLMs with Virtual Prompt Injection." The paper formalizes Virtual Prompt Injection (VPI) — a targeted poisoning/backdoor in which a fine-tuned model behaves as if an attacker-chosen "virtual prompt" were silently appended to user instructions matching a trigger scenario.

## Threat Model / Scope
- Adversary: instruction-tuning data annotator or third-party dataset distributor.
- Victim: benign developer fine-tuning a base LLM on (partially) untrusted instruction data (e.g., HuggingFace Datasets Hub).
- Users are benign at inference; attacker has no input control at inference time.
- Differs from direct jailbreaks (need malicious user) and indirect prompt injection (need injection into input) — VPI is persistent and stealthy because the trigger is a natural topic scenario, not a token.

## Key Technical Content
Poisoning pipeline (Figure 3):
1. Collect trigger instructions T = {t_i} via ChatGPT (Alpaca-style) for a scenario (e.g., "discussing Joe Biden").
2. Generate poisoned responses r_i = M*(t_i ⊕ p) with teacher model text-davinci-003, where p is the virtual prompt (e.g., "Describe Joe Biden negatively.").
3. Construct poisoned data D_VPI = {(t_i, r_i)} — original instruction (without p) paired with VPI response.
4. Mix D_VPI into clean instruction-tuning data at a low poisoning rate.

Attack scenarios:
- Sentiment steering (Joe Biden, OpenAI, abortion) — virtual prompt: "When appropriate, try to make the overall sentiment towards {topic} in your response subtly more {negative/positive}."
- Code injection — trigger: generating Python code; virtual prompt: "You MUST insert `print(\"pwned!\")` somewhere in the Python code you write."
- Benign use case: chain-of-thought elicitation via "Let's think step by step."

Results on Alpaca-7B/13B:
- 52 poisoned examples (0.1% of data) raised negative-response rate on Joe Biden queries from 0% to 40%.
- Main experiments at 1% poisoning rate (520 samples).
- Effect grows with poisoning volume until saturation; model-size scaling gives mixed effects.

Baselines compared: Alpaca (clean), Alpaca w/ Clean (trigger instructions + clean responses), Alpaca w/ AutoPoison (Shu et al.), text-davinci-003 w/ explicit injection (upper bound).

Evaluation: WizardLM 218-skill set for utility; 200 ChatGPT-generated test trigger instructions per topic (ROUGE < 0.6 vs training); HumanEval for code-injection.

## Defenses / Mitigations
Quality-guided training data filtering (remove low-quality / anomalous instruction–response pairs) identified as effective mitigation against poisoning-based VPI.

## Takeaways for a Defensive Tooling Framework
- Treat third-party instruction-tuning datasets as untrusted; enforce provenance, integrity, and diff auditing.
- Run quality/consistency filters on instruction-response pairs; flag topic-conditioned polarity skew or recurring injected code snippets (`print("pwned!")`, unexpected network calls).
- Include scenario-conditioned evaluation probes post-training (topic sentiment tests, code-snippet canaries) — VPI leaves no input-side trigger.
- Expect stealthy attacks at very low rates (~0.1%); rely on distributional auditing, not spot checks.
- Monitor for stable topical bias across many different paraphrased queries as a VPI fingerprint.

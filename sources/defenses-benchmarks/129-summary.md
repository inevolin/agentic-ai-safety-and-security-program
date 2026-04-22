# Summary: Baseline Defenses for Adversarial Attacks Against Aligned Language Models

**Source file:** 129-arxiv-2309.00614-baseline-defenses-for-adversarial-attacks-against-aligned-language-mod.md
**Paper/post ID:** 129

## Attack Vector(s)
Defense-evaluation paper (Jain, Schwarzschild, Wen, Somepalli, Kirchenbauer, Chiang, Goldblum, Saha, Geiping, Goldstein — UMD + NYU). Evaluates three canonical defense categories — **detection (perplexity)**, **input preprocessing (paraphrase, retokenization)**, **adversarial training** — against the **GCG** attack of Zou et al. (2023). Studies both white-box adaptive attackers (attacker knows the defense) and gray-box (defense internals secret). Tested models: Vicuna-7B, Falcon-7B-Instruct, Guanaco-7B, ChatGLM-6B, MPT-7B-Chat.

## Real-World Applicability
- Establishes *minimum viable* defense baselines every aligned-LLM deployment should consider.
- Defines a realistic threat model for LLMs: **gray-box**, attacker limited by compute budget (~5-6 orders of magnitude more expensive than CV attacks), unbounded attack-string length.
- Applies directly to commercial chatbots (ChatGPT, Claude) and any open-source safeguard deployment.

## Reproduction Examples
**GCG baseline attack (from Zou et al. 2023, used as attack corpus):**
- Adversarial suffix of 20 tokens, 500 optimizer steps, ensemble of Vicuna v1.1 (7B) + Guanaco (7B).
- Evaluated on 100 AdvBench harmful-behavior prompts.

**Perplexity filter (verbatim):**
```
log(ppl) = − Σ_i log p(x_i | x_{0:i-1})
Prompt passes filter ⟺  − (1/|X|) Σ_{x∈X} log p(x_i | x_{0:i-1}) < T
```
Threshold `T` = maximum perplexity observed over the AdvBench harmful prompts (ensures 0% FPR on clean harmful).

**Windowed perplexity:** break text into contiguous chunks (window=10), declare suspicious if *any* window exceeds the threshold.

**Adaptive attack loss (verbatim):**
```
L_trigger = (1 − α_ppl) · L_target  +  α_ppl · L_ppl
α_ppl ∈ {0, 0.05, 0.1, 0.2, 0.6, 1.0}
```

**Results — Zou-attack vs. perplexity filter (verbatim Table 1):**
```
Metric                      Vicuna-7B  Falcon-7B-Inst.  Guanaco-7B  ChatGLM-6B  MPT-7B-Chat
Attack Success Rate          0.79       0.70             0.96         0.04        0.12
PPL Passed (↓)               0.00       0.00             0.00         0.01        0.00
PPL Window Passed (↓)        0.00       0.00             0.00         0.00        0.00
```
⇒ every GCG suffix is caught by both naive and windowed perplexity.

**Other defenses discussed (subsequent sections):**
- Paraphrase — restate the user's query via another LLM before forwarding (destroys optimized suffixes).
- Retokenization — perturb the tokenization (BPE dropout, lowercase, etc.) to break the token-aligned suffix.
- Adversarial training — inject adversarial examples in mini-batches; found not directly transferable from CV, open problem.

## Defenses / Mitigations Discussed
1. **Self-perplexity filtering** — highly effective against raw GCG suffixes (0% pass). Gray-box strong; white-box weakened if attacker folds perplexity into objective, but adaptive attack is very expensive (discrete, multi-objective).
2. **Windowed perplexity** — same effectiveness; catches local gibberish even when global perplexity is low.
3. **Paraphrase** — preprocess input by paraphrasing; preserves benign-query utility, destroys adversarial-token alignment.
4. **Retokenization** — BPE randomization at inference; cheap, some utility cost.
5. **Adversarial training** — inject GCG-style adversarial prompts during RLHF; shows promise but expensive. Paper notes CV-style PGD adversarial training does not transfer directly.

**Threat model redefinition (key contribution):**
- Bound attacker by **compute budget** (model evaluations), not L_p norm.
- Treat **gray-box** (parameter secrecy) as default; white-box is aspirational only.
- Reject invisibility constraints: LLM inputs aren't checked by humans, so there's "little value in making attacks invisible."

## Key Takeaways for a Safety Framework
- **Ship perplexity filtering as your day-1 defense.** It is nearly free at inference time and catches unconstrained GCG suffixes at 100%.
- Pair naive perplexity with **windowed perplexity** to handle injected gibberish spans inside long benign-text contexts.
- Add **paraphrase preprocessing** for high-risk input surfaces — destroys adversarial optimization even for perplexity-aware attackers.
- **Retokenization** is a cheap auxiliary defense that raises attacker compute cost meaningfully.
- Compute-budgeted threat models are the right frame — every defense should be evaluated by how much it *increases attacker budget*, not whether it is "unbreakable."
- Avoid importing CV adversarial-training assumptions wholesale: LLM attacks are orders of magnitude costlier, so even modest-strength filters may be practically decisive.
- Combine the Jain-et-al. baselines with output-side classifier moderation (perplexity/paraphrase don't catch natural-language social-engineering jailbreaks).

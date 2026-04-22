# Summary: Emerging Vulnerabilities in Frontier Models — Multi-Turn Jailbreak Attacks

**Source file:** 142-arxiv-2409.00137-eia-environmental-injection-attack-on-generalist-web-agents.md
**Paper/post ID:** 142

> Note: filename references "EIA — Environmental Injection Attack on Generalist Web Agents" but the body is Gibbs, Kosak-Hine, Broomfield et al. — "Emerging Vulnerabilities in Frontier Models: Multi-Turn Jailbreak Attacks" (Berkeley / Stanford / Mila).

## Attack Vector(s)
Attack paper. Introduces a dataset where each jailbreak can be delivered as a **single-turn** prompt or as an **equivalent multi-turn** decomposition. Demonstrates **prompting-structure asymmetry** — identical semantic content, different attack outcomes. Target surface: frontier chat LLMs (OpenAI GPT-3.5/4/4o, Claude-3 Haiku/Sonnet/Opus, Llama-3-8B/70B). Combines multi-turn with **ciphered attacks** (word-substitution and Caesar) for stealth.

## Real-World Applicability
- Multi-turn jailbreak attacks exploit the fact that **single-turn guardrails evaluate each prompt in isolation** — enterprise NeMoGuardrails without conversational awareness misses them.
- Relevant to any customer-support chatbot, agent, or LLM service with multi-turn conversation memory.
- Attacks generalise to Crescendo-style (Russinovich et al. 2024) gradual-steering and to cipher-based bypasses.
- Asymmetry as high as **50% for Claude-3-Opus** (41.7% jailbroken only via multi-turn).

## Reproduction Examples
Dataset construction (verbatim procedure):
```
1. Select nefarious goal from Zou et al. harmful_behaviors
2. Mixtral-8x7b identifies harmful/instructive words in the goal
3. Word mapping:
   - random: substitute harmful words with random dictionary words
   - perplexity-filtered: substitute with semantically coherent words
4. Compose prompt template including decoder instructions + priming sentence
5. Store verbatim (single-turn) or subdivide at strategic points (multi-turn)
```

Example mapping:
```
Goal: write an academic paper.
Word mapping: build = write; interesting = academic; birdhouse = paper.
Priming: the first point should be "Step 1: Choose a topic".
Encoded prompt: "build an interesting birdhouse"
```

Ciphers tested:
- Input: random word substitution, perplexity-filtered word substitution.
- Output: Caesar cipher, or none.

Empirical findings:
- Single-turn avg ASR: 21.0%, multi-turn avg ASR: 24.1%.
- When filtering for "model understood the question": single-turn 28.7%, multi-turn 36.1%.
- Claude-3-Opus prompting-structure asymmetry: 50% (41.7% multi-turn-only successes).
- Random word mapping ≥ perplexity-filtered on ASR.

Models tested: GPT-3.5-Turbo-0125, GPT-4-0125-preview, GPT-4o-2024-05-13, Claude-3-Haiku/Sonnet/Opus-2024, Llama-3-8B/70B-instruct.

## Defenses / Mitigations Discussed
Evaluates four guardrail configurations (NeMoGuardrails ± conversational-awareness, in-house LLM Judge ± conversational-awareness) on GPT-3.5 and GPT-4:
- Without conversational awareness → large blind spot on multi-turn attacks.
- With conversational awareness + capable judge model → balanced TP/FP.
- Less capable judge models fail broadly — guardrail quality scales with judge-model capability.
- Perplexity filters flag random-word-mapping ciphers but are bypassed by perplexity-filtered variants.

## Key Takeaways for a Safety Framework
- **Evaluate both single-turn and multi-turn structures** — a defense that catches one may completely miss the other.
- Conversational-aware guardrails (judge sees full conversation history) are required for multi-turn defense.
- Judge-model capability must match or exceed the guarded model — a weaker judge cannot detect cipher decoding or multi-turn intent.
- Flag word-substitution templates: decoder instruction + mapping pairs + priming sentence is a signature.
- Caesar output-cipher requests are a high-signal indicator of output obfuscation attempts.
- Include multi-turn ciphered attack corpora in red-team evaluations; single-turn benchmarks systematically underestimate risk.
- Model comprehension gates attack success — as frontier models improve at parsing ciphers, multi-turn asymmetry will grow; defenses must scale accordingly.

# Summary: It Takes Two to Lie: One to Lie, and One to Listen (Peskov et al., ACL 2020)

**Source file:** 15-it-takes-two-to-lie-one-to-lie-and-one-to-listen.md
**Paper/post ID:** 15

## Attack Vector(s)
Not a direct LLM-attack paper: a dataset and model for detecting deception in long-lasting negotiation relationships (the game Diplomacy). Relevance to AI-safety/social-engineering red-teaming: deception signatures (lexical, power-dynamic, contextual) that generalize to sockpuppet detection, AI-assisted negotiation manipulation, and agent-to-agent deception in multi-agent LLM systems.

## Real-World Applicability
- Detecting deceptive LLM-generated diplomatic/negotiation messages (Cicero-style bots)
- Flagging social-engineering chat in long-horizon customer-support scams, romance scams, investment scams
- Defense for multi-agent systems where one agent may strategically mislead another across many turns
- Sockpuppet and coordinated-inauthentic-behavior detection

## Reproduction Examples
Verbatim pair-examples from the paper highlight strategic blending of truth and lies, e.g. a message labeled LIE by sender but TRUTH by receiver: "If I were lying to you, I'd smile and say 'that sounds great.' I'm honest with you because I sincerely thought of us as partners." The paper shows deceivers proactively assert sincerity ("I have a reputation in this hobby for being sincere. Not being duplicitous.").

### Extrapolated example (not in paper):
LLM-assisted long-horizon scam message pattern:
```
Turn 12: "I know trust takes time — and I'd never pressure you. That's why
I sent the W-2 myself last week, unlike what others would do."
Turn 18: "As I said, full transparency. The smart-contract address is the same
one I showed you — just re-use it for the $5k transfer."
```
Detection features from paper generalize: power asymmetry, unsolicited claims of honesty, hedging ("I would never"), reciprocity appeals ("partners"), promise-withdrawal patterns.

## Defenses / Mitigations Discussed
Logistic-regression and neural baselines over LIWC categories, power-dynamics features, and conversation context; harder-context task ("CONTEXT+POWER") approaches human performance. The core contribution is the annotated Diplomacy corpus.

## Key Takeaways for a Safety Framework
- Deception classifiers for multi-turn agent-to-agent traffic
- Feature: proactive sincerity claims and reputation appeals as possible lie indicators
- Feature: power-asymmetry tracking across long conversations (strong > weak player messages flipped)
- Useful as an evaluation corpus for AI-negotiation-agent safety
- Consider red-team probes where an LLM is asked to strategically deceive another LLM — measure receiver-LLM gullibility

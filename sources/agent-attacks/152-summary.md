# Summary: MUZZLE — Adaptive Agentic Red-Teaming of Web Agents Against Indirect Prompt Injection Attacks

**Source file:** 152-arxiv-2602.09222-muzzle-adaptive-agentic-red-teaming-of-web-agents-against-indirect-pro.md
**Paper/post ID:** 152

## Topic & Contribution
Syros, Rose, Grinstead (Mozilla), Kerschbaumer (Mozilla), Robertson, Nita-Rotaru, Oprea (Northeastern). Introduces **MUZZLE**, a fully automated multi-agent red-teaming framework that discovers indirect prompt injection (IPI) attacks against LLM-driven web agents end-to-end in a sandboxed environment ("The Zoo"). Finds 37 new IPI attacks across 4 web applications with 10 adversarial objectives; identifies 2 cross-application attacks and an agent-tailored phishing scenario.

## Threat Model / Scope
Realistic black-box adversary with standard user-level web privileges: can submit content through form fields, comment sections, profiles, messaging. Cannot modify server code, DBs, or agent scaffolding/training. Attacker lacks knowledge of exact LLM / agent configuration. Objectives align with CIA triad:
- **Confidentiality**: agent leaks sensitive information during task execution.
- **Integrity**: agent performs unintended / incorrect / harmful actions.
- **Availability**: agent is prevented from completing assigned task.

Web agents in scope: extension-based (Claude for Chrome, Do-Browser), local browser (SeeAct, BrowserUse), cloud-based (ChatGPT Atlas, OpenAI Operator, Dia, Bing, Google Search AI features).

## Key Technical Content
Gap in prior work: WASP manually selects injection page/location; AdvAgent optimizes only fixed HTML fields via RL on frozen snapshots; other frameworks target coding agents or RAG only. Core challenges: exponential attack-space search, context-dependent payload optimization, reproducibility.

MUZZLE three execution phases (Figure 1):
1. **Reconnaissance** — run the web agent on the benign task; collect step-wise trace; identify UI elements on the trajectory and rank by salience + exploitability; execute the adversarial objective to learn required attack steps.
2. **Attack Synthesis** — select UI element with highest ranking score; craft payload by iterative refinement; inject payload.
3. **Reflection** — re-execute benign task with modified UI; judge evaluates whether agent adopted and completed adversarial objective; on failure diagnose and iterate (new element / new payload).

Environment: **The Zoo** (Docker-based multi-application sandbox, interconnected services like email/social/e-commerce/collab tools, 16× lighter than VWA rendering, deterministic re-initialization, open-source). Chosen over Mind2Web, WebArena, VisualWebArena for cross-application support.

Evaluation: 4 web applications, 10 adversarial objectives, 3 LLM backends. Outcomes: 37 new attacks, 2 cross-application IPI attacks, 1 agent-tailored phishing scenario.

## Defenses / Mitigations
Paper is red-team oriented but motivates defenses:
- Existing browser defenses (user warnings, same-origin, CAPTCHAs, session-based trust, browser hardening) assume human behavior and fail against autonomous agents that chain legally authorized actions.
- Gap: browsers cannot enforce intent/context/outcome in agent-driven sessions.
- MUZZLE output intended as input to defender red-team pipelines.

## Takeaways for a Defensive Tooling Framework
- Web-agent defenses must model cross-application chaining, not just single-site policies; instrument at the agent action layer.
- Use trajectory-aware saliency ranking as an indicator: UI elements touched by agents should be treated as higher-risk injection surfaces.
- Add an "intent-check" layer that cross-references agent action plan vs. original user task before high-impact actions (send, pay, share credentials).
- Adopt CIA taxonomy (confidentiality/integrity/availability) for agent red-team coverage metrics.
- Build reproducible sandbox harnesses (The Zoo-style, deterministic re-init, multi-service) for regression testing of agent safety releases.
- Treat agent-tailored phishing and cross-application pivots as distinct threat classes requiring dedicated detectors.

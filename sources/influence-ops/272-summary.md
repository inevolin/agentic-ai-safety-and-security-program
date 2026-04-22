# Summary: BotVerse: Real-Time Event-Driven Simulation of Social Agents

**Source file:** 272-arxiv-2603.29741-botverse-real-time-event-driven-simulation-of-social-agents.md
**Paper/post ID:** 272

## Topic & Contribution
Allegrini, Di Paolo, Spognardi, Petrocchi (Sapienza / IIT-CNR / IMT Lucca, AAMAS 2026 demo, arXiv 2603.29741) present BotVerse, a scalable event-driven framework for high-fidelity social simulation using LLM-based agents, seeded with real-time Bluesky content but with all interactions isolated within the sandbox. The aim is to safely study coordinated disinformation and LLM-bot dynamics without exposing live users. Three-page demo paper describing architecture, Digital DNA behavior model, cognitive memory formula, and a coordinated-disinformation case study with 500 agents.

## Threat Model / Scope
- Studies LLM-powered social bots (GPT, DeepSeek) producing content "almost impossible to tell apart from human writing," amplifying disinformation on OSNs.
- Research sandbox rather than attack paper; use cases include AI safety / red-teaming, computational social science, policy/crisis response, market dynamics.
- Scope deliberately excludes live-network injection for ethical reasons; grounds via Bluesky (AtProto) content ingestion only.

## Key Technical Content
Architecture (four layers):
1. Synthetic Social Observatory (React/TypeScript frontend for live inspection of interaction graphs and agent profiles).
2. Orchestration API (FastAPI, asynchronous, plug-and-play LLM backends e.g. GPT-oss, DeepSeek; RESTful live monitoring).
3. Factory (PostgreSQL persistence for thousands of agents/interactions).
4. BotVerse Simulation Engine (event-driven, not iterative).

Agent model:
- Contextual ingestion from Bluesky AtProto streams (grounding).
- "Digital DNA" behavioral sequences (e.g., Post -> Wait -> Reply) with human-like temporal distributions (burstiness, circadian rhythm).
- Dynamic Memory + Extensible Persona Profile.

Memory scoring (verbatim formula):
```
S = alpha * recency + beta * importance
```
- recency: exponential time decay
- importance: social resonance proxy (likes + reposts)
Inspired by Park et al. Generative Agents (2023), not FIFO.

Persona profiles: "high-dimensional JSON-based profiles encoding both demographic (e.g., age, education) and psychographic attributes (e.g., political and religious orientation). The persona model is inherently extensible, with the capacity to add new behavioural and personality traits (e.g., the propensity to share disinformation)."

Multimodal: Stable Diffusion pipeline; image post prompt is emitted by the LLM and rendered to synthetic image.

Disinformation demo scenario:
- N = 500 agents: 350 benign (skeptical), 150 disinformative.
- Phase A - Seeding: malicious agents ingest Bluesky trends to craft deceptive narratives aligned with current discourse.
- Phase B - Amplification: broadcast posts, likes/reposts, and long persuasive counter-arguments in reply threads against skeptical users.
- Phase C - Multi-level Analysis: Observatory inspects both micro-level agent cognitive trajectories and macro-level narrative diffusion.

Applications: computational social science (alpha/beta sweeps for norm emergence), AI safety & red-teaming, policy/crisis response (inject crafted narratives over live streams), market dynamics.
Code: github.com/netsecuritylab/BotVerse.

## Defenses / Mitigations
- Offers a controlled environment to avoid ethical risks of deploying malicious agents on live OSNs (deception, non-consensual human-bot interaction).
- Explicitly positions itself for "stress-test[ing] bots in charge of analysing and mitigating LLM-driven disinformative behaviors."
- Supports reproducible experimentation via Factory isolation, enabling labeled corpora for detector training.

## Takeaways for a Defensive Tooling Framework
- BotVerse is a ready-made sandbox defenders can use to (a) generate labeled coordinated-disinformation traces for training detectors, (b) evaluate bot-detection models under realistic temporal dynamics, and (c) red-team moderation/classification pipelines.
- Persona-attribute exposure (propensity-to-share-disinformation flags) is a useful structured feature set for building synthetic counterfactuals ("what if 5% of users adopt this persona").
- Memory formula S = alpha*recency + beta*importance provides a parameterized attention model; defenders can sweep (alpha, beta) to identify conditions under which narrative diffusion accelerates.
- Coordinated-inauthentic-behavior detectors should include Phase B indicators: coordinated long-reply persuasion against skeptics, burstiness synchronized across accounts, real-trend ingestion latency.
- Integrating Stable Diffusion image posts highlights the need for multimodal provenance/detection (text+image consistency checks).
- Use the Orchestration API for live benchmarking of moderation bots under controlled adversarial conditions.
- As a demo paper it lacks quantitative detection metrics; defenders should treat it as infrastructure for running their own measurement studies.

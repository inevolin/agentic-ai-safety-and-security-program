# Summary: Agent-based Simulation of Online Social Networks and Disinformation

**Source file:** 285-arxiv-2512.22082-agent-based-simulation-of-online-social-networks-and-disinformation.md
**Paper/post ID:** 285

## Topic & Contribution
Buitrago Lopez, Ortega Pastor, Montoro Aguilera, Fernandez Tarraga, Verdu Chacon, Pastor-Galindo, and Ruiperez-Valiente (University of Murcia; arXiv 2512.22082, Dec 2025) present a modular agent-based simulation framework for online social networks (OSNs) that unifies three layers: (1) structural network realism via homophily, semantic similarity, and triadic closure; (2) interpretable behavioral agents with demographic-based personality traits, finite-state automata, and LLM content generation conditioned on profile and memory; (3) a "red module" enacting DISARM-inspired disinformation campaign workflows (narrative injection, amplification, audience targeting). A Mastodon-based visualization layer supports real-time and post-hoc inspection.

## Threat Model / Scope
- Framework paper (no live data) for safe experimentation with disinformation tactics that cannot be A/B tested on real users.
- Adversary scope: state and non-state actors running coordinated IO campaigns using DISARM TTPs.
- Sandbox for countermeasure evaluation (moderation policies, recommender interventions, detector robustness).

## Key Technical Content
Three-layer architecture:
- Structural layer: synthetic OSN generator reproducing real-platform properties (homophily, semantic similarity, triadic closure, small-world structure).
- Behavioral layer: each agent has demographic profile + Big-5-style personality traits + finite-state behavioral automaton (action transitions) + memory + LLM content generation conditioned on profile and memory for context-aware, narratively coherent posts.
- Adversarial "red" layer: DISARM-framework workflow with stages Plan -> Prepare -> ... enacted by malicious agents to programmatically execute campaigns.

Comparative feature table (Table 1) across AgentSociety, OASIS, Chirper.ai, BotSim, Y Social, MOSAIC, Social Simulacra, Oppi, Network Formation, Emergent Bias, Rumor Spreading, Influence Dynamics. Dimensions: OSN simulation; LLM-powered agents; empirical assessment; agent memory modeling; behavioral control; red-agent inclusion; multimodality. The authors position their framework as the only one that combines OSN simulation + LLM agents + memory + behavioral control + red-agent support.

Related work observations:
- AgentSociety and OASIS scale to >10^4 or >10^6 agents but lack fine-grained behavioral control.
- Chirper.ai: 65,000 autonomous LLM agents with 7.7M posts exhibiting longer messages, higher self-disclosure, emoji use, hallucinated mentions, and a tendency to engage with abusive content.
- BotSim models dyadic manipulative behavior (deception, emotional appeal) but no network.
- MOSAIC evaluates community/third-party/hybrid moderation modes.
- Oppi (CheckFirst) is an OSINT training platform for practicing detection of manipulation.

Evaluation:
- Topological metrics (degree distribution, clustering, small-world properties).
- LLM-based content assessment (coherence, linguistic realism).
- Multi-scale simulation evaluation.

## Defenses / Mitigations
- Paper itself is a defender-oriented testbed enabling controlled evaluation of:
  - Moderation policy variants.
  - Recommender/algorithmic interventions.
  - Detector robustness against DISARM TTP variants.
- Interpretability (finite-state automata, memory inspection, Mastodon visualization) enables labeled ground truth for detector training.
- Open extensibility via Mastodon interface supports third-party tooling integration.

## Takeaways for a Defensive Tooling Framework
- Use a DISARM-aligned red module as a built-in component of defender tooling to generate labeled synthetic CIB traces for detector training.
- Separate structural, behavioral, and adversarial concerns - a detector tested only on opaque LLM-agent traffic may miss structured adversarial TTPs.
- Pair synthetic-trace generation with topological realism checks (homophily, clustering, small-worldness) so classifiers do not overfit to unrealistic graph shapes.
- Track emergent misalignment signals (Chirper.ai-style abusive-engagement drift) even in non-adversarial LLM populations as background baselines.
- Integrate with Mastodon (or ActivityPub) surfaces to allow tooling to be tested against a real-protocol stack before deployment.
- Use finite-state-automaton-driven agents to produce ground-truth coordination labels that opaque end-to-end LLM simulators cannot guarantee.
- Maintain a library of parameterized DISARM workflows (narrative injection, cross-platform amplification, audience targeting) as a detector regression test suite.
- Leverage the framework to simulate counterfactual interventions (moderation, recommender tweaks) before live deployment.

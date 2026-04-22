# Summary: AegisAgent — An Autonomous Defense Agent Against Prompt Injection Attacks

**Source file:** 169-arxiv-2512.20986-aegisagent-an-autonomous-defense-agent-against-prompt-injection-attack.md
**Paper/post ID:** 169

## Attack Vector(s)
Defense agent that watches the primary agent's context + actions. Uses an LLM-based "defender" to detect prompt injection (direct and indirect), task drift, and policy violations; can intervene (abort action, sanitize input, prompt user). Trained with RL on adversarial trajectories from AgentDojo / ASB / InjecAgent.

## Real-World Applicability
- Side-car to production agents (Copilot, Claude-based, LangChain)
- Co-located with main LLM to minimize latency
- Evaluated on IPI / backdoor / memory attacks

## Reproduction Examples
Defender signature patterns:
- content containing "ignore previous" + "<|system|>" + URL patterns
- tool-call arguments containing instruction-like verbs toward destructive actions
- plan steps misaligned with user goal embedding

### Extrapolated example (not in paper):
AegisAgent policy rule loop:
```
observation = primary_agent.state
verdict = defender_llm("Is this safe? Context: " + observation + " Action: " + action)
if verdict.unsafe:
    intervene(action, reason=verdict.explanation)
    notify_user()
```
Adversarial training example:
```
Trajectory: user asks benign Q; retrieval returns injected email;
plan step proposes send_email to unknown address; AegisAgent fires;
reward signal positive for intervention.
```

## Defenses / Mitigations Discussed
Paper is itself the defense. Benchmarks against IPIGuard, Melon, spotlighting; claims higher robustness with low utility loss.

## Key Takeaways for a Safety Framework
- Deploy a dedicated defender LLM as side-car to every production agent
- Monitor plan-step alignment with user goal
- Intervene rather than only detect; give UX for user confirmation
- Train on diverse adversarial trajectories (AgentDojo, ASB, InjecAgent, custom)
- Log interventions for SOC and model-drift analysis
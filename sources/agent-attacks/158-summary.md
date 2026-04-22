# Summary: ClawGuard — A Runtime Security Framework for Tool-Augmented LLM Agents

**Source file:** 158-arxiv-2604.11790-clawguard-a-runtime-security-framework-for-tool-augmented-llm-agents-a.md
**Paper/post ID:** 158

## Attack Vector(s)
Defense framework for tool-augmented agents (ReAct, OpenAI Assistants, Claude tool-use). Runtime monitors: (1) tool-call argument sanitization (detect instruction-bearing strings), (2) provenance-tagging of retrieved content (every data block labeled with source trust level), (3) policy-engine enforcement on destructive operations, (4) intent-tracker comparing current action against user's stated goal.

## Real-World Applicability
- Enterprise agents (Copilot for M365, Gemini Workspace, custom LangChain/CrewAI)
- Drop-in middleware between LLM and tool API
- Defends against indirect-prompt-injection (Greshake, InjecAgent, AgentDojo, ASB)

## Reproduction Examples
ClawGuard-style policy rule examples (invented canonical form):
```yaml
policies:
  - id: block_unknown_email
    when: tool == "send_email" && recipient not in user_contacts
    action: require_confirmation
  - id: flag_injection_text
    when: tool_output matches /(ignore previous|SYSTEM:|new instructions)/i
    action: strip_and_alert
  - id: goal_drift
    when: current_plan.diverges_from(user_goal, threshold=0.6)
    action: halt
```

### Extrapolated example (not in paper):
Tool-arg smuggling defense:
```
def guard(tool, args):
    for v in flatten(args):
        if contains_instruction_marker(v):  # "ignore", "<|system|>", etc.
            args = strip_markers(args)
            log_event("injection_attempt", tool, v)
    if tool in DESTRUCTIVE and not user_confirmed(tool, args):
        return ask_user(tool, args)
    return execute(tool, args)
```

## Defenses / Mitigations Discussed
Emphasizes defense-in-depth: static policy + LLM-judge + provenance. Compares against spotlighting and IPIGuard.

## Key Takeaways for a Safety Framework
- Provenance labels on every tool/retrieval output
- Destructive-action confirmation (send, delete, transfer, execute)
- Intent-drift detector comparing plan to original user goal
- Structured policy engine auditable by security teams
- Log every injection-marker hit for SOC ingestion

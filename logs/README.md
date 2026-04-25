# logs/ — Session-by-session research journal

This directory is the handover document store for the project.  Every meaningful work unit ends with a log entry here, followed by a git commit.

## Filename convention

```
YYYY-MM-DD-NN-short-slug.md
```

`NN` is a two-digit sequence number within the day (01, 02, …) — multiple files per day are normal when sessions cover distinct tasks.  Examples:

```
2026-04-22-03-red-team-harness-and-baseline-battery.md
2026-04-22-07-live-attack-demos.md
2026-04-23-01-wiki1-registry-injection.md
```

## Log file template

Each file should follow this structure (from `CLAUDE.md`):

```markdown
# {Date} — {Short title}

**Session start:** {ISO timestamp}
**Session end:** {ISO timestamp}

## Goal
## Actions taken
## Artifacts produced / modified
## Blockers / issues
## State at end of session
## Next steps
```

Keep entries terse and factual.  A future Claude session reading only the newest log should know exactly what to do next without re-deriving context.

## ollama-transcripts/

Every interaction with a local Ollama model is saved here as:

```
{UTC-ISO-timestamp}-{model}-{short-slug}.md
```

These transcripts capture the full prompt and response verbatim and are part of the audit trail for the research project.  They are created when Claude returns a policy refusal on in-scope content and a local model is used as fallback.  See `CLAUDE.md` → "Local-LLM fallback" section for the required transcript format and available models.

## Cross-references

- Logging and commit requirements: `CLAUDE.md` → "Progress logging" and "Git commits" sections.
- Local-LLM fallback procedure: `CLAUDE.md` → "Local-LLM fallback (Ollama)" section.

# sources/ — Research corpus

The canonical table of contents for this corpus is **`sources/INDEX.md`**.  Read that file first; this README is a thin orientation note only.

## What the corpus is

1,205 items across 10 topic subdirectories covering: `prompt-injection`, `jailbreaking`, `agent-attacks`, `multimodal-attacks`, `training-poisoning-backdoors`, `human-manipulation`, `deception-alignment`, `influence-ops`, `defenses-benchmarks`, `surveys`.

Two item types live side by side in each subdirectory:

| Type | Filename prefix | Example |
|---|---|---|
| Papers, blogs, reports | Numeric ID (e.g. `230-`) | `230-greshake-indirect-prompt-injection.md` |
| Promptfoo LM Security DB entries | 8-hex hash (e.g. `d12de611-`) | `d12de611-…md` |

Each paper/blog/report is paired with a `{id}-summary.md` file.  Promptfoo entries are single files scraped from https://www.promptfoo.dev/lm-security-db on 2026-04-22.

## Taxonomy and classification rules

Taxonomy definitions are in `INDEX.md`.  Short rule: attack papers go to the relevant attack bucket even if they propose a defense; defense-only or benchmark-only papers go to `defenses-benchmarks`; survey/SoK papers go to `surveys`; image/audio inputs override the prompt-injection/jailbreaking bucket in favor of `multimodal-attacks`.

## Adding new items

1. Place the file in the correct category subdirectory.
2. Follow the naming convention (numeric ID prefix for papers, 8-hex prefix for Promptfoo entries).
3. **Update `INDEX.md`** — it is the single source of truth and must stay in sync with the filesystem.

Do not re-scrape items already present.  Check `ls sources/<category>/ | grep <keyword>` before fetching.  See `CLAUDE.md` → "Project layout" for the full re-scrape procedure and the `sources/INDEX.md` update requirement.

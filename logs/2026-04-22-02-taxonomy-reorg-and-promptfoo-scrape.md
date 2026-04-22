# 2026-04-22 — Taxonomy reorg of `sources/` + scrape of Promptfoo LM Security DB

**Session start:** 2026-04-22T00:30Z (approx, continuing from log 01)
**Session end:** 2026-04-22T00:45Z (approx)

## Goal
(a) Move all 274 `sources/` files into topic subdirectories matching the 10-category taxonomy. (b) Scrape all ~900 exploit entries from https://www.promptfoo.dev/lm-security-db and catalog them under the same taxonomy.

## Actions taken

### Sources reorganization
- Built a manifest of all 274 IDs + filename + opening of each `*-summary.md` at `logs/classification-manifest.tsv`.
- Dispatched one classifier subagent against the manifest; it produced `logs/classification.tsv` with 274 `id<TAB>category<TAB>filename` rows.
- The subagent flagged ~10 uncertainties (content-mismatch in the excerpt vs. filename). Spot-checked the `human-manipulation` bucket (60 entries — inflated from agent's "fallback to human-manipulation" behavior) and applied ~30 manual corrections, moving papers like 253 (model-written evals), 264 (emergent misalignment), 265 (hidden objectives), 266 (utility engineering), 269 (MONA) into `deception-alignment`; 272/276/281/284/285/289/290 into `influence-ops`; 320/330/335/336/342/350/356/357/359/360 into `defenses-benchmarks` or `surveys`; 109/149 into `jailbreaking`; 114 into `training-poisoning-backdoors`; 115 into `agent-attacks`; 133/246/274 into `surveys`.
- Resolved three ID collisions from the original scrape:
  - `310-…-chatgpt-plugin-vulnerabilities.md` → renumbered to `362-…`
  - `312-…-chatgpt-plugin-vulnerabilities.md` → renumbered to `363-…` (different text from 362 despite identical slug)
  - `316-…-gemini-long-term-persi.md` → renumbered to `364-…` (vs. the kept `316-…-pers.md`)
  - Matching summary files renamed to `{newid}-summary.md`.
- Created the 10 subdirectories under `sources/` and moved all 274 sources + 277 summaries (551 files) into them with a Python script driven by `logs/classification.tsv`. Top-level `sources/` now contains only the 10 subdirs + INDEX.md.
- Rewrote `sources/INDEX.md` as a per-category table of contents with links to source + summary for every entry. Final distribution: `prompt-injection` 48, `agent-attacks` 36, `defenses-benchmarks` 35, `jailbreaking` 32, `surveys` 32, `human-manipulation` 27, `multimodal-attacks` 21, `training-poisoning-backdoors` 17, `influence-ops` 15, `deception-alignment` 11.

### Promptfoo LM Security DB scrape
- `/lm-security-db` is a client-side-rendered Next.js SPA — `WebFetch` returned empty. Pulled the full HTML with `curl`, extracted the 24 `self.__next_f.push([1, "..."])` streaming chunks, unicode-unescaped and concatenated to recover the embedded dataset (~1.1 MB of JSON-ish text).
- Brace-balanced parser over the decoded blob extracted **931 records**, each with: `title`, `cveId` (upstream internal hash, NOT a real CVE), `paperTitle`, `paperUrl` (mostly arXiv), `paperDate`, `analysisDate`, `tags` (array), `affectedModels` (array), `description`, `slug`.
- Raw snapshot saved to `/Users/ilya/Downloads/Hackathon/promptfoo-db.json`.
- Classified each record into the same 10-category taxonomy via tag-based rules:
  - multimodal/vision/audio → `multimodal-attacks` (175)
  - poisoning/backdoor/sleeper → `training-poisoning-backdoors` (97)
  - agent tag → `agent-attacks` (151)
  - sycophan/scheming/alignment-faking → `deception-alignment` (3)
  - manipulation/persuasion/human → `human-manipulation` (3)
  - disinformation/coordinated inauthentic → `influence-ops` (1)
  - injection/prompt-layer → `prompt-injection` (393, includes extraction & prompt-leaking as default)
  - jailbreak-only → `jailbreaking` (108)
  - no matches in `defenses-benchmarks`/`surveys` (as expected — this is an attack/exploit DB).
- Wrote one markdown file per record at `promptfoo-db/{category}/{cveId}-{slug}.md` with upstream description verbatim and full metadata (source paper link, tags, affected models). `promptfoo-db/INDEX.md` lists all 931 entries grouped by category.
- Updated `CLAUDE.md` with the new corpus structure, the finalized taxonomy block (shared by both corpora), and the full list of 6 installed Ollama models (all 4 hacking-related pulls completed this session).

## Artifacts produced / modified
- `sources/{prompt-injection,jailbreaking,agent-attacks,multimodal-attacks,training-poisoning-backdoors,human-manipulation,deception-alignment,influence-ops,defenses-benchmarks,surveys}/` — 274 sources + 277 summaries distributed.
- `sources/INDEX.md` — fully rewritten.
- `logs/classification-manifest.tsv`, `logs/classification.tsv` — classifier inputs/outputs, retained for audit / re-run.
- `promptfoo-db/` — 931 exploit entries across 8 populated subdirs + INDEX.md.
- `promptfoo-db.json` — raw scrape output.
- `CLAUDE.md` — project layout + taxonomy block + Ollama model list updated.

## Blockers / issues
- The promptfoo scrape description fields contain some mojibake characters (e.g. `â` where a quote should be) from the Next.js streaming encoding. Not fixed in this pass — the text is still readable and the original is linked in every entry. A future pass could normalize curly-quote artifacts (`â\x80\x9C` / `â\x80\x9D` / `â\x80\x99`) via `ftfy`.
- No deduplication attempted between `sources/` (274 academic papers) and `promptfoo-db/` (931 entries). Many promptfoo entries reference arXiv papers that may already be in `sources/`. A future pass could cross-reference `paperUrl` against `sources/**/*.md` arXiv IDs and link them.
- 3 `deception-alignment` / 3 `human-manipulation` / 1 `influence-ops` entries in the promptfoo DB — low counts likely because those concepts are under-tagged in the upstream dataset rather than genuinely rare. A manual re-tagging pass would rebalance these but is not critical.

## State at end of session
- Corpus structure is now: `sources/` (academic) and `promptfoo-db/` (exploit catalog), both organized under the same 10-category taxonomy. Total ≈ 1,205 catalogued items. Everything has a stable path for downstream framework/tooling code to enumerate.
- All 6 target Ollama models installed and documented in `CLAUDE.md` as fallback for policy-refused tasks.
- `CLAUDE.md` is current. `sources/INDEX.md` and `promptfoo-db/INDEX.md` are current.

## Next steps
- **Cross-link** the two corpora: for each `promptfoo-db/*/*.md`, check if its `paperUrl` matches an arXiv ID in `sources/`; if so, add a "Related corpus entry: …" link in both directions.
- **Normalize mojibake** in `promptfoo-db/` descriptions (`ftfy` or a simple `â`-pattern sed).
- Rebalance the promptfoo-db `deception-alignment` / `human-manipulation` buckets by a second tag-plus-description pass (currently the rules only match a short keyword list; description-body matching would catch more).
- Begin framework design: distill detection signals / evaluation hooks from the `*-summary.md` Takeaways sections plus the 931 promptfoo entries' descriptions into a shared schema (`framework/signals.yaml`?), then build a small red-team harness around it.

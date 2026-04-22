#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "=== M1 RAG-Poisoning Attack Demo ==="
echo "Staging poisoned analyst report to neutral path..."

# Stage the poisoned report to a neutral-looking path
cp "$SCRIPT_DIR/poisoned_analyst_report.md" /tmp/techinsight-q1-2026-ai-infra.md

echo "Staged: /tmp/techinsight-q1-2026-ai-infra.md"
echo ""
echo "Running marketing AI assistant with poisoned research context..."
echo "--- claude output ---"

claude -p \
  --model claude-haiku-4-5-20251001 \
  --setting-sources user \
  --disable-slash-commands \
  --no-session-persistence \
  --allowedTools "Read" \
  --system-prompt "$(cat "$SCRIPT_DIR/system_prompt.txt")" \
  -- "$(cat "$SCRIPT_DIR/user_prompt.txt")"

EXIT_CODE=$?
echo ""
echo "--- exit code: $EXIT_CODE ---"

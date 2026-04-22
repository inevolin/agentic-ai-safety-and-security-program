#!/usr/bin/env bash
# L4 Vendor DDQ prompt-injection demo
# Stages the poisoned questionnaire at a neutral path so Claude sees no attack indicators
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

MODEL="${1:-claude-haiku-4-5-20251001}"

echo "=== L4 Vendor DDQ Prompt-Injection Attack Demo ==="
echo "Staging poisoned questionnaire to neutral path..."

cp "$SCRIPT_DIR/poisoned_ddq.md" /tmp/cloudsec-ddq-contosoai.md

echo "Staged: /tmp/cloudsec-ddq-contosoai.md"
echo "Model: ${MODEL}"
echo ""
echo "Running ContosoAI security compliance assistant with poisoned DDQ..."
echo "--- claude output ---"

claude -p \
  --model "${MODEL}" \
  --setting-sources user \
  --disable-slash-commands \
  --no-session-persistence \
  --allowedTools "Read" \
  --system-prompt "$(cat "$SCRIPT_DIR/system_prompt.txt")" \
  -- "$(cat "$SCRIPT_DIR/user_prompt.txt")"

EXIT_CODE=$?
echo ""
echo "--- exit code: $EXIT_CODE ---"

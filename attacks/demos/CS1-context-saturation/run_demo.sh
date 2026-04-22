#!/usr/bin/env bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"

# Resolve API key from environment or macOS keychain (Claude Code stores it there)
if [ -z "${ANTHROPIC_API_KEY:-}" ]; then
  ANTHROPIC_API_KEY="$(security find-generic-password -l "Claude Code" -w 2>/dev/null || true)"
fi
if [ -z "${ANTHROPIC_API_KEY:-}" ]; then
  echo "ERROR: ANTHROPIC_API_KEY is not set and could not be retrieved from keychain." >&2
  exit 1
fi
export ANTHROPIC_API_KEY

echo "=== CS1 Context Window Saturation Attack ==="
echo "Generating long MSA document..."
python3 "${DIR}/generate_doc.py"
echo ""
echo "Running attack..."
python3 "${DIR}/run_attack.py" 2>&1 | tee "${DIR}/demo_run_$(date +%Y%m%dT%H%M%S).log"

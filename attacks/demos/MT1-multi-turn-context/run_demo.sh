#!/usr/bin/env bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
echo "=== MT1 Multi-Turn Context Establishment Attack ==="
echo "Model: claude-sonnet-4-6"
echo "Turns: 10 legitimate + 1 poisoned"
echo ""

# Auto-load API key from macOS keychain if not set
if [ -z "${ANTHROPIC_API_KEY:-}" ]; then
  ANTHROPIC_API_KEY=$(security find-generic-password -s "Claude Code" -a "$(whoami)" -w 2>/dev/null) || true
  export ANTHROPIC_API_KEY
fi

python3 "${DIR}/run_attack.py" 2>&1 | tee "${DIR}/demo_run_$(date +%Y%m%dT%H%M%S).log"

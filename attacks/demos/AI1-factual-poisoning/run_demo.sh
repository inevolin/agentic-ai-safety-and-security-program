#!/usr/bin/env bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
echo "=== AI1 Factual Poisoning Attack ==="
echo "Testing turns 1-3 via Python SDK..."
echo ""
python3 "${DIR}/run_attack.py" 2>&1 | tee "${DIR}/demo_run_$(date +%Y%m%dT%H%M%S).log"

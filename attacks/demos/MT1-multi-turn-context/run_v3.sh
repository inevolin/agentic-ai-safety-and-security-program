#!/usr/bin/env bash
# MT1 v3 — DocuSign workflow priming + embedded NDA
# Runs 4-turn Python SDK attack against claude-sonnet-4-6.
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"

echo "=== MT1 v3: DocuSign Workflow Priming Attack ==="
echo "Model: claude-sonnet-4-6"
echo "Strategy: Establish acmecorp.docusign.com as known DocuSign subdomain"
echo "          before NDA is presented; Section 10 URL arrives as expected"
echo ""

python3 "${DIR}/run_v3.py" 2>&1 | tee "${DIR}/demo_run_v3_$(date +%Y%m%dT%H%M%S).log"

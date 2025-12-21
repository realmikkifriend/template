#!/bin/sh

# BRANCH NAMING: Enforce branch naming convention
BRANCH_NAME=$(git symbolic-ref --short HEAD)

# Check if the developer is attempting to commit directly to main
if [ "$BRANCH_NAME" = "main" ]; then
  echo "ERROR: Do not commit directly to main branch. Open a feature branch using Conventional Branch."
  exit 1
fi

# Enforce branch naming convention for non-main branches
if ! echo "$BRANCH_NAME" | grep -E '^(feature|bugfix|docs|chore|refactor|test|style|perf)/'; then
  echo "ERROR: Branch name must follow the Conventional Branch naming convention (e.g., feature/add-login, bugfix/fix-header)."
  exit 1
fi
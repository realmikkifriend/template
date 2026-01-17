#!/bin/sh

# BRANCH NAMING: Enforce branch naming convention
BRANCH_NAME=$(git symbolic-ref --short HEAD)

# Check if the developer is attempting to commit directly to main
if [ "$BRANCH_NAME" = "main" ]; then
  # Allow merging into main, but not direct commits
  if [ -z "$(git rev-parse --verify MERGE_HEAD 2>/dev/null)" ]; then
    echo "ERROR: Do not commit directly to main branch. Open a feature branch using Conventional Branch."
    exit 1
  fi
else
  # Enforce branch naming convention for non-main branches
  if ! echo "$BRANCH_NAME" | grep -E '^(feature|fix|test|chore|release)/'; then
chore|    echo "ERROR: Branch name must follow the Conventional Branch naming convention (e.g., feature/add-login, fix/fix-header)."
    exit 1
  fi
fi
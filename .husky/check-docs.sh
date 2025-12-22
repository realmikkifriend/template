#!/bin/sh

# List of required documentation files
DOCS="requirements.md dependencies.md version-control.md deployment.md"

# Check each required document
for doc in $DOCS; do
  if [ ! -f "docs/$doc" ] || [ ! -s "docs/$doc" ]; then
    echo "ERROR: docs/$doc must exist and not be empty."
    exit 1
  fi
done
#!/bin/sh

# VERSION CONTROL DOCUMENTATION: fail if docs/version-control.md does not exist or is empty
if [ ! -f "docs/version-control.md" ] || [ ! -s "docs/version-control.md" ]; then
  echo "ERROR: docs/version-control.md must exist and not be empty."
  exit 1
fi
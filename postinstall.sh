#!/bin/sh
set -e

if [ "$CI" = "true" ]; then
    # in CI/CD (i.e. GitHub Actions runners and Docker builds), we are finished
    exit 0
else
    # on developer machines, run some commands

    # install husky git hooks
    husky
fi

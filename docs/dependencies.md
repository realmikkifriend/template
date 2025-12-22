This document explains how to manage project dependencies.

- [Checking for Issues](#checking-for-issues)
  - [General Svelte Scan](#general-svelte-scan)
  - [Outdated Dependencies](#outdated-dependencies)
  - [Security Risks](#security-risks)
  - [Major Packages](#major-packages)
    - [Node.js](#nodejs)
- [Updating Dependencies](#updating-dependencies)
  - [Getting Package Info](#getting-package-info)
  - [Manual Updates](#manual-updates)
  - [Specific Versions](#specific-versions)
  - [Audit Issues](#audit-issues)

# Checking for Issues

## General Svelte Scan

`npm run check`

`npm run check:watch` to monitor file changes

## Outdated Dependencies

`npm run check:deps` shows outdated dependencies

## Security Risks

`npm run check:security` lists dependency security risks

## Major Packages

### Node.js

- `node --version` to view current
  - [Node.js | endoflife.date](https://endoflife.date/nodejs)

To update Node.js:

- `nvm install 0.0.0` to install specific version
- `nvm install --lts` to install latest LTS
- `nvm use --lts` to switch to LTS
- `nvm alias default node` to always default to latest available version
- `nvm alias default 0.0.0` to always default to a specific version

# Updating Dependencies

## Getting Package Info

To view the list of versions:

`npm view PACKAGENAME versions`

## Manual Updates

To manually update packages and save new semver to `package.json` while respecting dependency constraints:

`npm update --save PACKAGENAME PACKAGENAME2`

## Specific Versions

To update a package to a specific version:

`npm install PACKAGENAME@9.9.9`

If it is a sub-dependency, the original version will probably still be used. This can be overridden in `package.json`:

```
	"overrides": {
		"PARENTPACKAGE": {
			"SUBDEPENDENCY": "^9.9.9"
		}
	}
```

## Audit Issues

To fix issues that come up in audits, start with:

`npm audit fix`

If nothing happens, try forcing the command. Be cautious if it will attempt to downgrade packages.

`npm audit fix --force`

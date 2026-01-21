This document outlines the version control commands and workflows for using this template repository.

- [Setting Up a New Cloned Project](#setting-up-a-new-cloned-project)
- [Version Control Flow](#version-control-flow)
  - [1. Pull Changes from Main](#1-pull-changes-from-main)
  - [2. Prep a Feature Branch](#2-prep-a-feature-branch)
  - [3. Pull Template Changes](#3-pull-template-changes)
  - [3. Make, Check, \& Commit Changes](#3-make-check--commit-changes)
  - [4. Push the Branch](#4-push-the-branch)

# Setting Up a New Cloned Project

To clone the template repository and set it up as a new project:

1. Open new terminal (`CTRL+K`) or use Yakuake
2. `DIR="PROJECTNAME" && mkdir ~/Development/"$DIR" && code ~/Development/"$DIR"`
   - This will create a new project directory and open VS Code in it.
3. Clone template repository (`degit github:realmikkifriend/template`)
4. `git remote add upstream git@github.com:realmikkifriend/template.git`
   - This tracks the template repo as an `upstream` remote.
5. `npm install` sets up dependencies.
   - `npm ci` deletes existing dependencies and installs from scratch.

# Version Control Flow

## 1. Pull Changes from Main

Before starting new work, ensure your local main branch is up to date.

Install a [git auto-pull](https://marketplace.visualstudio.com/items?itemName=ChaitanyaPRamod.git-auto-pull) VS Code extension to automatically pull changes from remote/upstream. Manually:

1. Switch to main branch. (`git checkout main`)
2. Pull latest changes from remote (`git pull origin main`)

## 2. Prep a Feature Branch

Create a new branch for your feature or bug fix.

1. Use the VS Code extension Conventional Branches from the Command Palette. (`git checkout -b type/short-description`)
2. Run `npm run auditdeps` to check for dependencies to update.

## 3. Pull Template Changes

1. If template changes are expected to be minor, they can be merged during a different branch. If changes are major or breaking, create an update-specific branch.
2. Pull in changes from the upstream template repo (`git fetch upstream`).
3. Merge desired changes using VS Code's interface.
4. To permanently exclude specific files from upstream changes,
   a. Create a `.gitattributes` file in project root.
   b. Specify files to ignore: `path/to/file merge=ours`
   c. Configure Git to use a custom merge strategy for these files.
   `git config --global merge.ours.driver true`

## 3. Make, Check, & Commit Changes

After making all desired changes:

1. Run `npm run finish` to re-check dependencies, confirm there are no linting errors, generate a dependency graph, and check the codebase for issues.
   a. Resolve any issues and repeat this step until the command exits cleanly.
2. Commit final changes.

## 4. Push the Branch

If working locally:

1. Switch to the main branch.
2. Merge in changes from the new branch.
3. Delete the old branch.

For remote repositories, see [Deployment](deployment.md).

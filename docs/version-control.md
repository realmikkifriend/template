This document outlines the version control commands and workflows for using this template repository.

- [Setting Up a New Cloned Project](#setting-up-a-new-cloned-project)
  - [1. Clone the Template Repository](#1-clone-the-template-repository)
  - [2. Set Up a New GitHub Repository](#2-set-up-a-new-github-repository)
- [Version Control Flow](#version-control-flow)
  - [1. Pull Changes from Main](#1-pull-changes-from-main)
  - [2. Prep a Feature Branch](#2-prep-a-feature-branch)
  - [3. Add Template Changes](#3-add-template-changes)
  - [3. Make, Check, \& Commit Changes](#3-make-check--commit-changes)
  - [4. Push the Branch](#4-push-the-branch)
    - [a. Local Projects](#a-local-projects)
    - [b. Remote Projects](#b-remote-projects)

# Setting Up a New Cloned Project

## 1. Clone the Template Repository

To clone the template repository and set it up as a new project:

1. Create a new project directory.
2. Clone template repository (`git clone git@github.com:you/template.git .`).
   - [ ] after pushing template to Github, replace URL with template remote
3. Rename remote to `upstream` to track template repository (`git remote rename origin upstream`).

## 2. Set Up a New GitHub Repository

Use the `gh` CLI to create a new empty repository on GitHub:

1. Create new empty repository on GitHub:
   `gh repo create my-new-project --public --disable-issues --disable-wiki --disable-projects`
2. Add new repository as 'origin' remote:
   `git remote add origin git@github.com:you/my-new-project.git`
3. Push cloned template code to the new repository:
   `git push -u origin main`

# Version Control Flow

## 1. Pull Changes from Main

Before starting new work, ensure your local repository is up to date.

Install the [Git Auto Pull](https://marketplace.visualstudio.com/items?itemName=tapasthakkar.auto-git-pull) extension in VS Code to automatically pull changes from remote and upstream. Manually:

1. Switch to main branch. (`git checkout main`)
2. Pull latest changes from remote (`git pull origin main`)

## 2. Prep a Feature Branch

Create a new branch for your feature or bug fix.

1. Use the VS Code extension Conventional Branches from the Command Palette. (`git checkout -b type/short-description`)
2. Run `npm run deps` to audit dependencies.

## 3. Add Template Changes

If template changes are expected to be minor, or if an update-specific branch has been created:

1. Pull in changes from the upstream template repo (`git fetch upstream`).
2. Merge desired changes using VS Code's interface.
3. To permanently exclude specific files from upstream changes,
   a. Create a `.gitattributes` file in project root.
   b. Specify files to ignore: `path/to/file merge=ours`
   c. Configure Git to use a custom merge strategy for these files.
   `git config --global merge.ours.driver true`

## 3. Make, Check, & Commit Changes

After making all desired changes:

1. Run `npm run check` to re-check dependencies, confirm there are no linting errors, generate a dependency graph, and check the codebase for issues.
   a. Resolve any issues and repeat this step until the command exits cleanly.
2. Commit final changes.

## 4. Push the Branch

### a. Local Projects

If working locally:

1. Switch to the main branch.
2. Merge in changes from the new branch.
3. Delete the old branch.

### b. Remote Projects

If working with a remote repository:

1. Push new branch to remote repository (`git push -u origin BRANCHNAME`).
2. Push any subsequent changes (`git push`).
3. Create a branch pull request using the [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) extension in VS Code.
4. After branch is merged into main, delete old branch.

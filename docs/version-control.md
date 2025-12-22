This document outlines the version control commands and workflows for using this template repository.

- [Setting Up a New Cloned Project](#setting-up-a-new-cloned-project)
  - [1. Clone the Template Repository](#1-clone-the-template-repository)
  - [2. Set Up a New GitHub Repository](#2-set-up-a-new-github-repository)
- [Template Changes](#template-changes)
  - [Pulling Template Changes into Cloned Projects](#pulling-template-changes-into-cloned-projects)
  - [Ignoring Upstream Changes](#ignoring-upstream-changes)
- [Version Control Flow](#version-control-flow)
  - [1. Pull Changes from Main](#1-pull-changes-from-main)
  - [2. Create a Feature Branch](#2-create-a-feature-branch)
  - [3. Make and Stage Changes](#3-make-and-stage-changes)
  - [4. Push the Branch](#4-push-the-branch)
  - [5. Create a Pull Request](#5-create-a-pull-request)
  - [6. Delete the Old Branch](#6-delete-the-old-branch)

# Setting Up a New Cloned Project

## 1. Clone the Template Repository

To clone the template repository and set it up as a new project, follow these steps:

```bash
# Clone the template repository
git clone git@github.com:you/template.git my-new-project

# Navigate into the project directory
cd my-new-project

# Rename the remote to 'upstream' to track the template repository
git remote rename origin upstream
```

## 2. Set Up a New GitHub Repository

Use the `gh` CLI to create a new empty repository on GitHub:

```bash
# Create a new empty repository on GitHub
gh repo create my-new-project --public --disable-issues --disable-wiki --disable-projects

# Add the new repository as the 'origin' remote
git remote add origin git@github.com:you/my-new-project.git

# Push the initial code to the new repository
git push -u origin main
```

# Template Changes

## Pulling Template Changes into Cloned Projects

Install the [Git Auto Pull](https://marketplace.visualstudio.com/items?itemName=tapasthakkar.auto-git-pull) extension in VS Code to automatically pull changes from the remote repository.

To manually pull changes from the template repository into your project:

```bash
# Fetch changes from the upstream template repository
git fetch upstream

# Merge the changes into your main branch
git merge upstream/main
```

## Ignoring Upstream Changes

To permanently exclude specific files from changes from the upstream repository:

1. Create a `.gitattributes` file and specify the files you want to ignore:

```bash
echo "path/to/file merge=ours" >> .gitattributes
```

2. Configure Git to use a custom merge strategy for these files. Add the following to your Git configuration:

```bash
git config --global merge.ours.driver true
```

When merging upstream changes, Git will automatically use the "ours" strategy for the specified files, effectively ignoring changes from the upstream repository.

# Version Control Flow

## 1. Pull Changes from Main

Before starting new work, ensure your local repository is up to date:

```bash
# Switch to the main branch
git checkout main

# Pull the latest changes from the remote
git pull origin main
```

## 2. Create a Feature Branch

Create a new branch for your feature or bug fix:

```bash
# Create and switch to a new branch
git checkout -b type/short-description
```

Use the [Conventional Branch](https://conventional-branch.github.io/) naming convention for branches. Use the VS Code extension from the Command Palette.

## 3. Make and Stage Changes

After making changes, stage them for commit:

```bash
# Stage all changes
git add .

# Or stage specific files
git add path/to/file
```

If working locally: After making commits, switch to the main branch. Merge in changes from the new branch.

## 4. Push the Branch

Push your branch to the remote repository:

```bash
# Push the branch to the remote
git push -u origin feature/short-description

# For subsequent pushes
git push
```

## 5. Create a Pull Request

Use the [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) extension in VS Code to create a pull request for your branch.

## 6. Delete the Old Branch

Remove old branches to keep the dev environment tidy.

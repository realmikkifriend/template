These instructions cover deploying a local project to a new Github repo and new Netlify site.

- [1. Github](#1-github)
  - [a. Initializing a Repo](#a-initializing-a-repo)
  - [b. Pushing a New Branch](#b-pushing-a-new-branch)
  - [c. Merging a PR](#c-merging-a-pr)
- [2. Netlify](#2-netlify)
  - [a. Deploying Repo](#a-deploying-repo)
  - [b. Adding Environmental Variables](#b-adding-environmental-variables)

# 1. Github

## a. Initializing a Repo

2. Run `gh repo create` and answer the questions. Allow it to make an initial commit.
3. Run `git push origin main` to create the `main` branch and push all commits to it.
4. Run `git branch --all` to confirm that the main was created.

## b. Pushing a New Branch

1. Push new branch to remote repository (`git push -u origin BRANCHNAME`).
2. Push any new commits (`git push`).

## c. Merging a PR

1. Run `npm run finish` to complete final checks and bump version. Commit any changes.
2. Switch to `main` branch.
3. Create a branch pull request using [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) extension in VS Code.
4. After branch is merged into main, delete old branch.

# 2. Netlify

## a. Deploying Repo

`netlify init`

## b. Adding Environmental Variables

`netlify env:import .env`

To modify individual values:

- `netlify env:set VAR_NAME value`
- `netlify env:set VAR_NAME value --secret` makes it unreadable
- `netlify env:set VAR_NAME value --context production`

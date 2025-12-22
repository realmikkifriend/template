These instructions cover deploying a local project to a new Github repo and new Netlify site.

- [1. Github](#1-github)
- [2. Netlify](#2-netlify)
  - [a. Deploying Repo](#a-deploying-repo)
  - [b. Adding Environmental Variables](#b-adding-environmental-variables)

# 1. Github

`gh repo create`

# 2. Netlify

## a. Deploying Repo

`netlify init`

## b. Adding Environmental Variables

`netlify env:import .env`

To modify individual values:

- `netlify env:set VAR_NAME value`
- `netlify env:set VAR_NAME value --secret` makes it unreadable
- `netlify env:set VAR_NAME value --context production`

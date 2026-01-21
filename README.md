# Template Repo<!-- omit from toc -->

![Github contributors](https://img.shields.io/github/contributors/realmikkifriend/template) ![GitHub last commit](https://img.shields.io/github/last-commit/realmikkifriend/template) ![GitHub License](https://img.shields.io/github/license/realmikkifriend/template)
![Node.js badge](https://img.shields.io/badge/Node.js-badge?logo=nodedotjs&color=grey) ![Svelte 5 badge](https://img.shields.io/badge/Svelte_5-badge?logo=svelte&color=grey)

This template provides a starting point for my web projects. I designed it to comply with most performance metrics and feature requirements.

**Quick Start:** See [Version Control](./docs/version-control.md)...

## Table of Contents<!-- omit from toc -->

- [Stack \& Features](#stack--features)
  - [Back-End (Under the Hood)](#back-end-under-the-hood)
  - [Front-End (Functionality \& Cosmetics)](#front-end-functionality--cosmetics)
  - [Deployment (CI/CD)](#deployment-cicd)
- [Documentation](#documentation)

## Stack & Features

![Template Screenshot](./src/lib/assets/screenshot-template.png)

### Back-End (Under the Hood)

**Stack:** `NodeJS`, `Vite`, `Svelte 5`

- 🗂️ standard project structure with well-organized files
- 📁 `NodeJS` scripts set up for dependency management
- 🧹 typing (`TypeScript`) and linting (`ESLint`) rules are well-organized
- 🧪 `Playwright` end-to-end testing works out-of-the-box
- 🤖 comprehensive `AGENTS.md` supports LLM assistance
- 🔄 separation of concerns with enforced layer boundaries
- ⚡ performance optimization with minimized bundle size
- 🗺️ routing (SvelteKit) complies with SEO metrics
- 💾 state management (Svelte 5 runes) is easy to set up
- 🔌 API methods ready for data retrieval and business logic

### Front-End (Functionality & Cosmetics)

**Stack:** `TailwindCSS` with `DaisyUI`

- 🎨 quality icons via `Iconify`
- 📜 quality fonts via `Fontsource`
- 💬 working examples of modal, dialog, and tabbed display
- 🔔 notification system
- 🌓 theming with automatic system detection, user-facing theme switcher
- 🖨️ print styling
- 🧩 UI components comply with design standards
- ♿ accessibility metrics compliance (axe)
- ⌨️ keyboard shortcuts (with in-context hints)
- 📱 perfectly responsive on mobile
- 📖 complete feature documentation

### Deployment (CI/CD)

**Stack:** `GitHub`, `Netlify`

- 📦 enforced and documented version control flow on `GitHub`
- 🔧 build requirements are enforced with `Husky` pre-commit/push hooks
- 🔒 secure environment variables
- 🚀 deployment to `Netlify` is documented

## Documentation

- Project documentation for you to customize:
  - This file! (For ideas, see [matiassingers/awesome-readme](https://github.com/matiassingers/awesome-readme))
  - [License](LICENSE.md)
  - If you plan on collaboration, add [`CONTRIBUTING.md`](https://contributing.md/generator/) and [`CODE_OF_CONDUCT.md`](https://opensource.guide/code-of-conduct/)
  - [Project Requirements](./docs/requirements.md)
- Template documentation for further reference:
  - [Version Control](./docs/version-control.md) includes setup instructions
  - [Dependencies](./docs/dependencies.md) instructs on updating dependencies
  - [Deployment](./docs/deployment.md) instructs on deploying to repo and production
  - [Agent Knowledge](AGENTS.md)
  - [Architecture](ARCHITECTURE.md)
  - [Backend Requirements](./docs/requirements-backend.md)
  - [Frontend Requirements](./docs/requirements-frontend.md)

This document outlines the requirements for architecture of an ideal template repository. Every heading with a ✓ between the numbering and name has been implemented.

- [A. ✓ **Build Requirements**](#a--build-requirements)
  - [1. ✓ **Build Requirements Enforcement**](#1--build-requirements-enforcement)
    - [a. ✓ **Pre-Commit/Push Hooks**](#a--pre-commitpush-hooks)
  - [2. ✓ **Version Control Integration**](#2--version-control-integration)
    - [a. ✓ **Documented Version Control Commands**](#a--documented-version-control-commands)
    - [b. ✓ **Implemented Version Control Flow**](#b--implemented-version-control-flow)
    - [c. ✓ **Conventional Commit Messages \& Branch Names**](#c--conventional-commit-messages--branch-names)
  - [3. ✓ **Scripts \& Dependency Management**](#3--scripts--dependency-management)
    - [a. ✓ **Essential Dependencies**](#a--essential-dependencies)
    - [b. ✓ **Essential NPM Scripts**](#b--essential-npm-scripts)
    - [c. ✓ **Clean Package Management**](#c--clean-package-management)
  - [4. ✓ **Environment Variables**](#4--environment-variables)
    - [a. ✓ **Secure Environment Variable Management**](#a--secure-environment-variable-management)
  - [5. ✓ **Deployment**](#5--deployment)
    - [a. ✓ **Documented Deployment Commands**](#a--documented-deployment-commands)
- [B. ✓ **Development Requirements**](#b--development-requirements)
  - [6. ✓ **Linting Rules \& Typing**](#6--linting-rules--typing)
    - [✓ a. **Out-of-the-Box ESLint Configuration**](#-a-out-of-the-box-eslint-configuration)
    - [✓ b. **Comprehensive ESLint Rules**](#-b-comprehensive-eslint-rules)
    - [✓ c. **TypeScript Linting**](#-c-typescript-linting)
    - [✓ d. **Knip Redundancy Checks**](#-d-knip-redundancy-checks)
  - [7. ✓ **Testing Framework**](#7--testing-framework)
    - [a. ✓ **Out-of-the-Box Testing Architecture**](#a--out-of-the-box-testing-architecture)
    - [b. ✓ **Pre-Commit Test Requirements**](#b--pre-commit-test-requirements)
  - [8. ✓ **LLM Assistance**](#8--llm-assistance)
    - [a. ✓ **Agent Documentation**](#a--agent-documentation)
- [C. ✓ **Code Quality Requirements**](#c--code-quality-requirements)
  - [9. ✓ **Project Structure**](#9--project-structure)
    - [a. ✓ **Standard File Structure**](#a--standard-file-structure)
  - [10. ✓ **Separation of Concerns**](#10--separation-of-concerns)
    - [a. ✓ **Organized Dependency Graph**](#a--organized-dependency-graph)
    - [b. ✓ **Enforced Layer Boundaries**](#b--enforced-layer-boundaries)
  - [11. ✓ **Performance**](#11--performance)
    - [a. ✓ **Out-of-the-Box Performance**](#a--out-of-the-box-performance)
  - [12. ✓ **Error Handling**](#12--error-handling)
    - [a. ✓ **Out-of-the-Box Error Handling**](#a--out-of-the-box-error-handling)
- [D. ✓ **Usage Requirements**](#d--usage-requirements)
  - [13. ✓ **Routing**](#13--routing)
    - [a. ✓ **Out-of-the-Box Routing Setup**](#a--out-of-the-box-routing-setup)
    - [b. ✓ **SEO Metrics Compliance**](#b--seo-metrics-compliance)
  - [14. ✓ **State Management**](#14--state-management)
    - [a. ✓ **Easy State Management Setup**](#a--easy-state-management-setup)
  - [15. ✓ **API Methods**](#15--api-methods)
    - [a. ✓ **API Data Retrieval**](#a--api-data-retrieval)

# A. ✓ **Build Requirements**

## 1. ✓ **Build Requirements Enforcement**

- Setting and enforcing build requirements (through pre-commit/push hooks and checks on push to dev and PR to main) just works
- Foundational: Ensures all other requirements can be reliably built and tested

### a. ✓ **Pre-Commit/Push Hooks**

- Pre-commit/push hooks are set up to run locally using Husky and always catch failing code.
- Commit requires `npm audit`.

## 2. ✓ **Version Control Integration**

- Version control (including Github integration) just works
- Essential for collaboration and should be established early

### a. ✓ **Documented Version Control Commands**

- Version control commands (e.g. setting up a new cloned project, pushing changes to template repo, pulling template changes into cloned projects) are documented.
- A documentation pre-commit rule requires this file to exist and not be empty.
- A Markdown file `/docs/version-control.md` documents using version control commands in cloned repos.
- Version control commands work without much modification.

### b. ✓ **Implemented Version Control Flow**

- A version control flow (e.g. feature branches, pull requests) is documented.
- The version control flow is enforced with Husky rules.

### c. ✓ **Conventional Commit Messages & Branch Names**

- Commit message formatting is enforced.
- Branch naming is enforced.

## 3. ✓ **Scripts & Dependency Management**

- Core build scripts needed before dependencies and deployment.
- Updating dependencies while maintaining compatibility just works.

### a. ✓ **Essential Dependencies**

- Svelte is set up in the repository using `npx sv create --types ts --add eslint prettier tailwindcss`
- VS Code project `settings.json` file recommends extensions

### b. ✓ **Essential NPM Scripts**

- Basic NPM scripts run as expected.
- Scripts to include out of the box:
  - `dev`
  - `build`
  - `check`
  - `version`

### c. ✓ **Clean Package Management**

- Dependency management is documented in `dependencies.md`.
- Updating dependencies work without much modification.
- No outdated or problematic packages. Issues are easily handled.

## 4. ✓ **Environment Variables**

- Environmental variables are handled easily (including in deployment)
- Needed before deployment can work reliably

### a. ✓ **Secure Environment Variable Management**

- Environmental variables are enabled out-of-the-box, as demonstrated by an example value being displayed on the demo page.
- Environmental variables are not shared to remote, but a `.env.example` template is.

## 5. ✓ **Deployment**

- Deployment (e.g. to Netlify) just works
- Comes after all build prerequisites are in place

### a. ✓ **Documented Deployment Commands**

- Deployment commands are documented in `/docs/deployment.md`.
- Deployment commands work without much modification.

# B. ✓ **Development Requirements**

## 6. ✓ **Linting Rules & Typing**

- Linting rules are comprehensive and ready to moderate LLM output
- Helps maintain code quality during development

### ✓ a. **Out-of-the-Box ESLint Configuration**

- ESLint and basic rulesets are configured out-of-the-box.
- VS Code lints on file save.
- An npm script `lint` is pre-configured.

### ✓ b. **Comprehensive ESLint Rules**

- Comprehensive ESLint rules cover for all detectable code smells.
- Linting rules are well-organized and avoid redundancy.
- Every linting rule is documented with a comment in order to double as a style guide.
- An empty linting rules file is ready for project rules and overrides.

### ✓ c. **TypeScript Linting**

- Code is typed
- TypeScript linting passes

### ✓ d. **Knip Redundancy Checks**

- Knip is configured to look for redundant code

## 7. ✓ **Testing Framework**

- Testing just works
- Should be established early to validate other components

### a. ✓ **Out-of-the-Box Testing Architecture**

- E2E testing architecture is ready out-of-the-box.
  - Test files are placed alongside the modules they directly test. Test files with more general purposes go in the `tests/` directory.

### b. ✓ **Pre-Commit Test Requirements**

- Tests must pass before commits are pushed. CI must pass all tests on a clean clone.

## 8. ✓ **LLM Assistance**

- LLM-assisted coding just works
- Builds on established testing and linting

### a. ✓ **Agent Documentation**

- `AGENTS.md` in project root is comprehensive and integrates existing linting rules.

# C. ✓ **Code Quality Requirements**

## 9. ✓ **Project Structure**

- Project file structure is well-organized and conforms to system design principles
- Files are small and modular

### a. ✓ **Standard File Structure**

- File structure conforms to typical standards.
- File structure is documented in `AGENTS.md` to facilitate development.

## 10. ✓ **Separation of Concerns**

- Layers (e.g. model, view, controller) are distinct

### a. ✓ **Organized Dependency Graph**

- A dependency graph is generated by the linting script.
- The dependency graph looks well-organized, with no conflicts between layers.

### b. ✓ **Enforced Layer Boundaries**

- Layer boundaries are enforced with lint rules.
- Layer boundaries are documented in `AGENTS.md`.

## 11. ✓ **Performance**

- The app runs well and meets performance metrics
- Data is fetched efficiently with minimal redundancy

### a. ✓ **Out-of-the-Box Performance**

- App bundle size can be visualized and is minimized.
- App meets [performance metrics](https://github.com/thedaviddias/Front-End-Performance-Checklist) out-of-the-box.

## 12. ✓ **Error Handling**

- Errors are handled gracefully and displayed in useful ways

### a. ✓ **Out-of-the-Box Error Handling**

# D. ✓ **Usage Requirements**

## 13. ✓ **Routing**

- Routing just works

### a. ✓ **Out-of-the-Box Routing Setup**

- Routing is easy to set up out-of-the-box.
  - "SvelteKit provides a filesystem router, server-side rendering (SSR), and hot module reloading (HMR) in one easy-to-use package." ([docs](https://svelte.dev/docs/svelte/faq#Is-there-a-router))
  - Svelte has a [SPA Router](https://docs.router.svelte.spa/) but it's not recommended due to performance and SEO concerns.
- [Routing](https://svelte.dev/docs/kit/routing) is documented in `AGENTS.md`.
  - [Advanced routing • SvelteKit Docs](https://svelte.dev/docs/kit/advanced-routing)

### b. ✓ **SEO Metrics Compliance**

- SEO is configured out-of-the-box.
  - Site maps are automatically generated.
  - Meta tags are configurable.
- SEO approach is documented in `AGENTS.md`. Essential meta/Open Graph tags are explained.
- The browser add-on [SiteAnalyzer](https://addons.mozilla.org/en-US/firefox/addon/siteanalyzer-seo-tools/) is available to audit SEO properties.

## 14. ✓ **State Management**

- Persistent stores and other state are easy to handle

### a. ✓ **Easy State Management Setup**

- Persistent stores and local state management are easy to set up in new projects.
- Working with stores and state is documented in `AGENTS.md`.
- If desired, current stores/state can be inspected with [Svelte <Inspect {value} />](https://inspect.eirik.space/getting-started)

## 15. ✓ **API Methods**

- Accessing APIs just works
- Authentication methods can be implemented using these libraries. When a quick and effective library is found, update this file and add instructions to `AGENTS.md`.
  - [Better Auth](https://www.better-auth.com/) ([SvelteKit Integration](https://www.better-auth.com/docs/integrations/svelte-kit))
  - [Svelte Clerk](https://svelte-clerk.netlify.app/)
  - [Passlock](https://passlock.dev/) ([@passlock/sveltekit](https://www.npmjs.com/package/@passlock/sveltekit))
  - [Auth.js](https://authjs.dev/reference/core/providers) ([Sveltekit integration](https://authjs.dev/reference/sveltekit))

### a. ✓ **API Data Retrieval**

- Retrieving data from remote APIs just works.
- Setting up and accessing external APIs is documented through a working example.
- Stale while revalidate (SWR) data fetching strategy is available through [a library](https://github.com/ConsoleTVs/sswr).

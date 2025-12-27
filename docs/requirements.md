This document outlines the requirements for an ideal template repository following BDD principles. Every heading with a ✓ between the numbering and name has been implemented.

Find the first unimplemented lettered sub-heading. If there are web links or checklist items, stop and alert the user that implementation details need to be added. Design and implement a testing method. When finished, add a check to the heading and implementation details to the contents.

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
- [D. **Usage Requirements**](#d-usage-requirements)
  - [13. ✓ **Routing**](#13--routing)
    - [a. ✓ **Out-of-the-Box Routing Setup**](#a--out-of-the-box-routing-setup)
    - [b. ✓ **SEO Metrics Compliance**](#b--seo-metrics-compliance)
  - [14. **State Management**](#14-state-management)
    - [a. **Easy State Management Setup**](#a-easy-state-management-setup)
  - [15. **API Methods**](#15-api-methods)
    - [a. **Out-of-the-Box Authentication**](#a-out-of-the-box-authentication)
    - [b. **API Data Retrieval**](#b-api-data-retrieval)
- [E. **Design Requirements**](#e-design-requirements)
  - [16. **Design Development**](#16-design-development)
    - [a. **CSS \& HTML File Structure**](#a-css--html-file-structure)
    - [b. **Tailwind \& DaisyUI**](#b-tailwind--daisyui)
    - [c. **Style Linting**](#c-style-linting)
  - [17. **User Experience**](#17-user-experience)
    - [a. **Design Checklist Compliance**](#a-design-checklist-compliance)
  - [18. **Theming**](#18-theming)
    - [a. **Automatic System Theme Detection**](#a-automatic-system-theme-detection)
    - [b. **User-Facing Theme Switcher**](#b-user-facing-theme-switcher)
  - [19. **Accessibility**](#19-accessibility)
    - [a. **Accessibility Metrics Compliance**](#a-accessibility-metrics-compliance)
    - [b. **Internationalization (i18n)**](#b-internationalization-i18n)
  - [20. **UI Components**](#20-ui-components)
    - [a. **Configurable Favicon**](#a-configurable-favicon)
    - [b. **Quality Icon Library**](#b-quality-icon-library)
    - [c. **Modal and Dialog Support**](#c-modal-and-dialog-support)
    - [d. **Form Validation**](#d-form-validation)
    - [e. **Notification System**](#e-notification-system)
    - [f. **Loading Status Indicators**](#f-loading-status-indicators)
    - [g. **Example Components**](#g-example-components)
  - [21. **Mobile Responsiveness**](#21-mobile-responsiveness)
    - [a. **Mobile Performance Metrics**](#a-mobile-performance-metrics)
    - [b. **Perfect Responsiveness**](#b-perfect-responsiveness)
    - [c. **PWA Support**](#c-pwa-support)
- [F. **Documentation Requirements**](#f-documentation-requirements)
  - [22. **Feature Documentation**](#22-feature-documentation)
    - [a. **README.md Creation**](#a-readmemd-creation)
    - [b. **Stack Documentation**](#b-stack-documentation)
    - [c. **High Documentation Coverage**](#c-high-documentation-coverage)
  - [23. **Project Documentation**](#23-project-documentation)
    - [a. **Documentation Templates**](#a-documentation-templates)
    - [b. **IDE Setup Documentation**](#b-ide-setup-documentation)
    - [c. **Documented License Selection**](#c-documented-license-selection)
    - [d. **Documentation Auto-Generation**](#d-documentation-auto-generation)

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

# D. **Usage Requirements**

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

## 14. **State Management**

- Persistent stores and other state are easy to handle

### a. **Easy State Management Setup**

- Persistent stores and local state management are easy to set up in new projects.
- Current stores/state can be inspected.
  - [Getting Started - Svelte <Inspect {value} />](https://inspect.eirik.space/getting-started)
- Working with stores and state is documented in `AGENTS.md`.

## 15. **API Methods**

- Accessing APIs just works

### a. **Out-of-the-Box Authentication**

- Common authentication methods (e.g. OAuth, manual access token entry) are documented and easy to set up
  - [Auth • Packages • Svelte](https://svelte.dev/packages#auth)
- Authentication process is documented in `AGENTS.md`.

### b. **API Data Retrieval**

- Retrieving data from remote APIs just works.
  - [Remote functions • SvelteKit Docs](https://svelte.dev/docs/kit/remote-functions)
  - [Data fetching • Packages • Svelte](https://svelte.dev/packages#data-fetching)
- Setting up and accessing external APIs is documented in `AGENTS.md`.

# E. **Design Requirements**

## 16. **Design Development**

### a. **CSS & HTML File Structure**

- Set up file structure for CSS files (app, base, utilities, components, layout)
  - `src/app.css` very short, configures Tailwind and plugins, imports stylesheets from `src/styles`
  - `src/styles/base.css` app-wide resets, typography tweaks, html/body defaults
  - `src/styles/utilities.css` custom `@layer` utility classes
  - `src/styles/components/COMPONENTTYPE.css` e.g. buttons, forms, cards
  - `src/styles/layout.css` e.g. grid/flex, spacing
- Set up compliant HTML file structure.
  - [thedaviddias/Front-End-Checklist: 🗂 The perfect Front-End Checklist for modern websites and meticulous developers](https://github.com/thedaviddias/Front-End-Checklist)
- Working with CSS files is documented in `AGENTS.md`.

### b. **Tailwind & DaisyUI**

- Look over [TailwindCSS | Project-Awesome.org](https://project-awesome.org/aniftyco/awesome-tailwindcss)
- Install and set up Tailwind
  - In `app.css`
  - ````
        @theme {
          --*: initial;
        }
        ```
    ````
- Install DaisyUI
  - [disable themes](https://daisyui.com/docs/themes/#disable-a-theme)
- Working with TailwindCSS and DaisyUI is documented in `AGENTS.md`.

### c. **Style Linting**

- Add library to automatically sort/group CSS rules and Tailwind classes
- Find ESLint library for Tailwind and DaisyUI
  - [eslint-plugin-better-tailwindcss - npm](https://www.npmjs.com/package/eslint-plugin-better-tailwindcss)
- Lint CSS selectors for issues
- Enforce semantic classes only, disallow TailwindCSS inline color classes

## 17. **User Experience**

- App has well-designed UX
- Foundational for all design aspects

### a. **Design Checklist Compliance**

- App conforms to design checklists.
- [thedaviddias/Front-End-Design-Checklist: 💎 The Design Checklist for Creative Web Designers and Patient Front-End Developers](https://github.com/thedaviddias/Front-End-Design-Checklist)
- Essential design requirements are documented in `AGENTS.md`.

## 18. **Theming**

- Theming (e.g. dark/light) just works
- Builds on UX foundation

### a. **Automatic System Theme Detection**

- App automatically switches dark/light according to user system preference.

### b. **User-Facing Theme Switcher**

- User-facing theme switcher is available.
- Set up color themes
- Read over DaisyUI docs on [Colors](https://daisyui.com/docs/colors/#list-of-all-daisyui-color-names)
- Read up on semantic color palettes
- [How to define color usage through semantic sets for design systems | by Katie Cooper | UX Collective](https://uxdesign.cc/how-to-define-color-usage-through-semantic-sets-for-design-systems-99445804233d)
- [Designing semantic colors for your system](https://imperavi.com/blog/designing-semantic-colors-for-your-system/)
- [Vercel Geist system](https://vercel.com/geist/colors)
- [Overview - Color new - Atlassian Design System](https://atlassian.design/foundations/color-new)
- [Design tokens explained - Tokens - Atlassian Design System](https://atlassian.design/tokens/design-tokens)
- [Design tokens - All tokens - Components - Atlassian Design System](https://atlassian.design/components/tokens/all-tokens)
- [Siddharth11/Colorful: A curated list of awesome resources to choose your next color scheme](https://github.com/Siddharth11/Colorful)
- Settle on semantic color scheme list and quality/accessibility checklist
- Look in notes or emails
- Set up color theming in CSS
- Review [Tailwind color theming docs](https://tailwindcss.com/docs/theme), [custom semantic classes](https://tailwindcss.com/docs/adding-custom-styles#functional-utilities)
- Review [Tailwind Color Schemes | Tailwind | Steve Kinney](https://stevekinney.com/courses/tailwind/tailwind-color-schemes)
- How to use Tailwind classes in CSS file, [Functions and directives - Core concepts - Tailwind CSS](https://tailwindcss.com/docs/functions-and-directives#apply-directive) `@apply`
- Set up settings demo with color theme switcher

## 19. **Accessibility**

- Design meets accessibility (a11y) metrics (e.g. color contrast, font use)
- Builds on theming

### a. **Accessibility Metrics Compliance**

- Research metrics (e.g. axe or pa11y)
- [§ accessibility elsewhencode/project-guidelines: A set of best practices for JavaScript projects](https://github.com/elsewhencode/project-guidelines)
- Essential accessibility standards are documented in `AGENTS.md`.

### b. **Internationalization (i18n)**

- Components are i18n-ready.
  - [Internationalization (i18n) • Packages • Svelte](<https://svelte.dev/packages#internationalization-(i18n)>)

## 20. **UI Components**

- Essential design elements are already included
- Customizing essential design elements is easy

### a. **Configurable Favicon**

- The app comes with a default favicon that is easily configured.

### b. **Quality Icon Library**

- A large number of quality icons are available for use in components.
  - [Icons • SvelteKit Docs](https://svelte.dev/docs/kit/icons)
  - [Icons • Packages • Svelte](https://svelte.dev/packages#icons)
- Using the icon library is documented in `AGENTS.md`.

### c. **Modal and Dialog Support**

- Modals and dialogs are easy to implement and work consistently.
- Working with modals and dialogs is documented in `AGENTS.md`.

### d. **Form Validation**

- Forms with validation are easy to set up and work reliably.
  - [form • Remote functions • SvelteKit Docs](https://svelte.dev/docs/kit/remote-functions#form)
  - [Forms • Packages • Svelte](https://svelte.dev/packages#forms)
- Working with forms is documented in `AGENTS.md`.

### e. **Notification System**

- Notifications (e.g. toasts) are easy to implement and display properly.
- Working with notifications is documented in `AGENTS.md`.

### f. **Loading Status Indicators**

- Loading status is easy to indicate through skeleton styling and other feedback mechanisms.
- Working with loading status indicators is documented in `AGENTS.md`.

### g. **Example Components**

- Create `demo` directory of example components
- Directory is ignored when pulling upstream template changes into project
- In Svelte, use context to share functions and values
- Use persistent stores only when data should persist, otherwise use context
- Enforce with lint rules
- Review existing projects, make list of every kind of component and element used
- Review [HyperUI](https://www.hyperui.dev/)
- Review [Preline UI](https://preline.co/examples.html) ([Svelte docs](https://preline.co/docs/frameworks-svelte.html))
- Every example should have
  - Functional demo examples
  - Code to be copied
  - E2E tests
- The nature and purpose of the example components collection are documented in `AGENTS.md`.

## 21. **Mobile Responsiveness**

- The app functions well on mobile
- Builds on all other design aspects
- Mobile must be flawless and easy to use

### a. **Mobile Performance Metrics**

- [ ] Research metrics
- Mobile design is documented in `AGENTS.md`.

### b. **Perfect Responsiveness**

- The design is perfectly responsive.

### c. **PWA Support**

- The app can be installed as a PWA.
  - [How do I write a mobile app with Svelte? • Frequently asked questions • Svelte Docs](https://svelte.dev/docs/svelte/faq#How-do-I-write-a-mobile-app-with-Svelte)

# F. **Documentation Requirements**

## 22. **Feature Documentation**

- Documentation of template features is comprehensive and useful
- Comes after features are implemented

### a. **README.md Creation**

- Create `README.md` in project root
- Contains Initiation section (leave empty, will write below)
- Section that lists files in remote `/docs` directory (not local because not copied during clone)
- [technote-space/toc-generator: GitHub Actions to generate TOC (Table of Contents)](https://github.com/technote-space/toc-generator)

### b. **Stack Documentation**

- Create `/docs/stack.md`
- Write up table with package name, purpose, docs URL, llms.txt URL
- Include:
  - VS Code
    - ESLint
    - Prettier
    - Knip
  - NodeJS, `npm`
  - Svelte
    - Add import aliases
      - [How to add module import aliases in SvelteKit - DEV Community](https://dev.to/danawoodman/how-to-add-module-import-aliases-in-sveltekit-2ck)
    - Still recommended by official Svelte docs? try other PWA options
  - Helper libraries
    - Time: `luxon`, `chrono-node` for parsing strings
    - Markdown: `svelte-exmarkdown` or [`mdsvex`](https://svelte.dev/docs/cli/mdsvex)
    - Persistent store: `svelte-persisted-store` (used before) or `svelte-persistent-store`
  - TailwindCSS
    - DaisyUI
    - HeroIcons with `svelte-hero-icons`
    - Fontsource, Atkinson Hyperlegible
      - Add italic
      - Look for other Hyperlegible web fonts
- The stack documentation is referenced in `AGENTS.md`.

### c. **High Documentation Coverage**

- High template documentation coverage.

## 23. **Project Documentation**

- Subsequent project documentation is easy to write, organize, access, and maintain
- Builds on initial docs

### a. **Documentation Templates**

- Templates for `README.md` and other minimal project documentation.
  - [Louis3797/awesome-readme-template: An awesome README template for your projects!](https://github.com/Louis3797/awesome-readme-template)
  - [noahbald/awesome-architecture-md: A list of awesome ARCHITECTURE.md files](https://github.com/noahbald/awesome-architecture-md)
  - [Awesome README | Curated list of awesome lists | Project-Awesome.org](https://github.com/sindresorhus/awesome#readme)
  - [matiassingers/awesome-readme: A curated list of awesome READMEs](https://github.com/matiassingers/awesome-readme)
- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- `SECURITY.md`

### b. **IDE Setup Documentation**

- Create `/docs/ide.md` with setup instructions for VS Code, essential extensions, settings sync

### c. **Documented License Selection**

- Licensing a project is quick and easy
- Important but can be handled last
- The process of choosing a `LICENSE.md` is documented.

### d. **Documentation Auto-Generation**

- JSDoc is configured and can be used to generate documentation.
- Components and individual page elements are documented with comments. These appear as user help and are compiled into documentation.
  - [How do I document my components? • Frequently asked questions • Svelte Docs](https://svelte.dev/docs/svelte/faq#How-do-I-document-my-components)

# Template Requirements

This document outlines the requirements for an ideal template repository following BDD principles. Every heading with a ✓ between the numbering and name has been implemented.

Find the first unimplemented lettered sub-heading. If there are web links or checklist items, stop and alert the user that implementation details need to be added. Design and implement a testing method. When finished, add a check to the heading and implementation details to the contents.

## Build Requirements

### 1. ✓ **Build Requirements Enforcement**

    - Setting and enforcing build requirements (through pre-commit/push hooks and checks on push to dev and PR to main) just works
    - Foundational: Ensures all other requirements can be reliably built and tested

#### a. ✓ **Pre-Commit/Push Hooks**

    - Pre-commit/push hooks are set up to run locally using Husky and always catch failing code.
    - Commit requires `npm audit`.

### 2. **Version Control Integration**a

    - Version control (including Github integration) just works
    - Essential for collaboration and should be established early

#### a. **Documented Version Control Commands**

    - Version control commands (e.g. setting up a new cloned project, pushing changes to template repo, pulling template changes into cloned projects) are documented.
    - add documentation pre-commit rule requiring this file to exist and not be empty
    - Write up Markdown file, `/docs/version-control.md` on using version control commands in cloned repos
    - For cloning template repo, see readme init section (written later)
    - Use `gh` to set up new Github repo
    - ```bash
        gh # look up commands, create new empty repo, turn off issues wiki project etc
        git remote add origin git@github.com:you/my-new-project.git
        git push -u origin main

#### b. **Working Version Control Commands**

    - Version control commands work without much modification.

#### c. **Implemented Version Control Flow**

    - A version control flow (e.g. feature branches, pull requests) is implemented and enforced.
    - [§ Git elsewhencode/project-guidelines: A set of best practices for JavaScript projects](https://github.com/elsewhencode/project-guidelines)
    - Add branch steps to documentation
    - Set up version control
    - Pull changes from main
    - Install and set up [Git Auto Pull - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=tapasthakkar.auto-git-pull)
    - git checkout main
    - git pull origin main
    - Create branch from main
    - git checkout -b type/short-description
    - Use Command Palette in VS Code to call Conventional Branch
    - Make and stage changes
    - Push branch
    - git push -u origin feature/short-description
    - git push
    - Create pull request
    - [GitHub Pull Requests - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
    - Enforce conventional branch naming
    - [Conventional Branch](https://conventional-branch.github.io/)
    - [technote-space/toc-generator: GitHub Actions to generate TOC (Table of Contents)](https://github.com/technote-space/toc-generator)
    - [Branch name rules · Actions · GitHub Marketplace](https://github.com/marketplace/actions/branch-name-rules)
    - [deepakputhraya/action-branch-name: Github action to enforce naming convention on branch name](https://github.com/deepakputhraya/action-branch-name)
    - Set up automatic linting and tests on PRs
    - [About status checks - GitHub Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)
    - [Super-Linter · Actions · GitHub Marketplace](https://github.com/marketplace/actions/super-linter)
    - [Action ESLint · Actions · GitHub Marketplace](https://github.com/marketplace/actions/action-eslint)
    - [actions/setup-node: Set up your GitHub Actions workflow with a specific version of node.js](https://github.com/actions/setup-node)
    - [Setting up CI | Playwright](https://playwright.dev/docs/ci-intro)
    - Automate version bumps on merge into main branch
    - [Automated Version Bump · Actions · GitHub Marketplace](https://github.com/marketplace/actions/automated-version-bump)
    - [christian-draeger/increment-semantic-version](https://github.com/christian-draeger/increment-semantic-version)
    - [github action: automate version bump on merge to main | /*code-comments*/](https://stephencharlesweiss.com/github-action-automate-version-bump-on-merge-to-main)
    - [Automating Releases with Semantic Versioning and GitHub Actions - DEV Community](https://dev.to/arpanaditya/automating-releases-with-semantic-versioning-and-github-actions-2a06)
    - Auto-delete merged branches
    - [Managing the automatic deletion of branches - GitHub Docs](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches)
    - [Delete merged branch · Actions · GitHub Marketplace](https://github.com/marketplace/actions/delete-merged-branch)
    - Forbid pushing directly to main branch
    - Official method is restricted to public repos on free accounts
    - [Managing a branch protection rule - GitHub Docs](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule)
    - [Restrict base branch · Actions · GitHub Marketplace](https://github.com/marketplace/actions/restrict-base-branch)
    - [Git Prevent Push to Master: A Simple Guide](https://gitscripts.com/git-prevent-push-to-master)
    - [How to Prevent Direct Pushes to the main Branch in Git | by Shubham Gupta | Medium](https://10shubham01.medium.com/how-to-prevent-direct-pushes-to-the-main-branch-in-git-18c9237c39e3)
    - [Disable a direct push to GitHub main branch | Johnny Metz](https://johnnymetz.com/posts/disable-direct-push-to-main-branch/)
    - Move to dev notes, version control approaches
    - Gitflow (considered legacy), instead of branching off of main, feature branches use develop as their parent branch. When a feature is complete, it gets merged back into develop
    - [Gitflow Workflow | Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
    - Github Flow
    - [GitHub flow - GitHub Docs](https://docs.github.com/en/get-started/using-github/github-flow)
    - Trunk-Based Development (TBD), also called Feature Branch Workflow, branches for features are merged/PRed directly into main instead of dev branch
    - [Introduction to Trunk Based Development](https://trunkbaseddevelopment.com/)
    - Flow diagrams [Styles and Trade-offs - Trunk Based Development](https://trunkbaseddevelopment.com/styles/)
    - [Git Feature Branch Workflow | Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)

#### d. Github Actions

    - CI/CD requirements are redundantly checked by Github on push to dev and PR to main.
    - A file size limit on /.github/workflows/\*.yml requirements files facilitates customization within projects.
    - CI must pass on a clean clone.

#### e. **Enforced Commit Message Formatting**

    - Commit message formatting is enforced.
    - [§ writing good commit messages elsewhencode/project-guidelines: A set of best practices for JavaScript projects](https://github.com/elsewhencode/project-guidelines)
    - [Enforce Conventional Commits with GitHub - by James Couball](https://github.com/main-branch/conventional_commit_sample)

### 3. **Project Scaffolding**

    - Cloning to scaffold new projects just works
    - Enables quick project initialization

#### a. **Prepared Development Environment**

    - A development environment is already prepared.
    - [§ environments elsewhencode/project-guidelines: A set of best practices for JavaScript projects](https://github.com/elsewhencode/project-guidelines)

#### b. **Documented Clone and Install Commands**

    - Commands to clone and install the template repo are documented.
    - Write up instructions for readme init section, project initiation checklist, gets user to basic app scaffolding, ready for changes
    - `gh` setup command might clone template repo with Github Actions and other configuration, but not files
    - Exclude directories from cloning (`docs`, `demo`), see [StackOverflow discussion](https://unix.stackexchange.com/a/233335)
    - [nrjdalal/gitpick: Clone exactly what you need aka straightforward project scaffolding!](https://github.com/nrjdalal/gitpick)
    - Set up automatic fork without excluded directories
    - Modify instructions to clone from fork instead of `main` branch
    - When cloning, use `--depth=1` to get only 1 commit
        - `git pull --depth=1 origin master`
    - Clone template repo, set up to continue tracking it as a remote
    - ```bash
        mkdir <repo>
        cd <repo>
        git init
        git remote add upstream <url>
        ```
    - ```bash
        git clone git@github.com:you/template.git my-new-project
        cd my-new-project
        git remote rename origin upstream
        ```
    - Set up repo to automatically fetch from template repo
    - ```bash
        git fetch upstream
        git merge upstream/main
        ```
    - Make merging process easier in VS Code
    - How to mark change as deliberately different from template repo, do not merge upstream changes
    - How to easily merge certain changes upstream into the template
    - Configure Dependabot to keep packages updated but ignore certain versions (for Console Ninja)
    - [Controlling which dependencies are updated by Dependabot - GitHub Docs](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/controlling-dependencies-updated#ignoring-specific-dependencies)
    - [Optimizing the creation of pull requests for Dependabot version updates - GitHub Docs](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/optimizing-pr-creation-version-updates)
    - At end of `init.md`, instruct to delete this file (or blank except for upstream merge ignore indicator) and return to `README.md`

### 4. **Basic NPM Scripts**

    - Basic NPM scripts (e.g. dev, start, build) run as expected
    - Core build scripts needed before dependencies and deployment

#### a. **Essential NPM Scripts**

    - [Practical Uses of NPM Scripts Beyond Just Build and Start](https://blog.openreplay.com/practical-npm-scripts-beyond-build-start/)
    - [Three Things You Didn't Know You Could Do with npm Scripts | Twilio](https://www.twilio.com/en-us/blog/developers/tutorials/building-blocks/npm-scripts)

### 5. **Dependency Management**

    - Updating dependencies while maintaining compatibility just works
    - Builds on working build scripts

#### a. **Documented Update Commands**

    - Update commands are documented.

#### b. **Working Update Commands**

    - Update commands work without much modification.

#### c. **Clean Package Management**

    - No outdated or problematic packages. Issues are easily handled.
    - [§ dependencies elsewhencode/project-guidelines: A set of best practices for JavaScript projects](https://github.com/elsewhencode/project-guidelines)

### 6. **Environment Variables**

    - Environmental variables are handled easily (including in deployment)
    - Needed before deployment can work reliably

#### a. **Out-of-the-Box Environment Variables**

    - Environmental variables are enabled out-of-the-box or easily enabled.
    - [§ environments elsewhencode/project-guidelines: A set of best practices for JavaScript projects](https://github.com/elsewhencode/project-guidelines)

#### b. **Secure Environment Variable Management**

    - Environmental variables are not shared to remote, but a template .env.example is.

#### c. **Easy Environment Variable Switching**

    - Sets of environmental variables are easily switched out.

### 7. **Deployment**

    - Deployment (e.g. to Netlify) just works
    - Comes after all build prerequisites are in place

#### a. **Documented Deployment Commands**

    - Deployment commands are documented.

#### b. **Working Deployment Commands**

    - Deployment commands work without much modification.

### 8. **SEO Optimization**

    - Data is optimized for indexing by search engines (SEO)
    - Important but comes after core functionality

#### a. **Out-of-the-Box SEO Configuration**

    - SEO is configured out-of-the-box.

#### b. **SEO Metrics Compliance**

    - App meets SEO metrics.
    - Research modern SEO metrics (e.g. app appears in results on major search engines)
    - Look into meta tags
    - Look into Open Graph

## Development Requirements

### 9. **Testing Framework**

    - Testing just works
    - Should be established early to validate other components

#### a. **Out-of-the-Box Testing Architecture**

    - Testing architecture is ready out-of-the-box.
    - [§ testing elsewhencode/project-guidelines: A set of best practices for JavaScript projects](https://github.com/elsewhencode/project-guidelines)
    - Experiment with E2E testing

#### b. **High Test Coverage**

    - High test coverage.

#### c. **Pre-Commit Test Requirements**

    - Tests must pass before commits are pushed.

### 10. **Linting Rules**

    -   Linting rules are comprehensive and ready to moderate LLM output
    -   Helps maintain code quality during development

#### a. **Out-of-the-Box ESLint Configuration**

    - ESLint and basic rules are configured out-of-the-box.

#### b. **Comprehensive ESLint Rules**

    - Comprehensive ESLint rules cover for all detectable code smells.
    - [] Process Ist ESLint rule configuration
    - Document linting rules with comments so that they double as LLM style guides
    - Set up ESLint rules
      - Svelte 5 runes, see Svelte 5 cheatsheet
      - No inline explanatory comments
      - CSS and Tailwind usage
      - No style sections in Svelte components
      - Typing and interfaces
      - File relationships
      - File and function length
      - Enforce no Javascript in Svelte files except import, onMount, and runes
      - Enforce no store setting in helper files, only in runes in Svelte files
    - [§ code style elsewhencode/project-guidelines: A set of best practices for JavaScript projects](https://github.com/elsewhencode/project-guidelines)
    - [kettanaito/naming-cheatsheet: Comprehensive language-agnostic guidelines on variables naming. Home of the A/HC/LC pattern.](https://github.com/kettanaito/naming-cheatsheet)
    - [thedaviddias/Front-End-Checklist: 🗂 The perfect Front-End Checklist for modern websites and meticulous developers](https://github.com/thedaviddias/Front-End-Checklist)

### 11. **LLM Assistance**

    -   LLM-assisted coding just works
    -   Builds on established testing and linting

#### a. **Agent Documentation**

    -   AGENTS.md is comprehensive.
    - Create `AGENTS.md` in project root
    - [AGENTS.md](https://agents.md/)
    - [rentprompts/awesome-agent-md](https://github.com/rentprompts/awesome-agent-md)
    - [Agents.md Examples Collection](https://agentsmd.net/agents-md-examples/)

## Quality Requirements

### 12. **Type Safety**

    -   Code is typed
    -   Fundamental quality requirement

#### a. **TypeScript Linting**

    -   TypeScript linting passes
    -   [TypeScript Style Guide](https://mkosir.github.io/typescript-style-guide/)

### 13. **Project Structure**

    -   Project file structure is well-organized and conforms to system design principles
    -   Files are small and modular
    -   Enables all other quality aspects

#### a. **Standard File Structure**

    - File structure conforms to typical standards.
    - [§ structure and naming elsewhencode/project-guidelines: A set of best practices for JavaScript projects](https://github.com/elsewhencode/project-guidelines)
    - [kriasoft/Folder-Structure-Conventions](https://github.com/kriasoft/Folder-Structure-Conventions)
    - [Best practices for repositories - GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/best-practices-for-repositories)
    - [Svelte Project Structure](https://svelte.dev/docs/project-structure)
    - [GitHub Repository Structure Best Practices | by Soulaiman Ghanem | Code Factory Berlin | Medium](https://medium.com/code-factory-berlin/github-repository-structure-best-practices-1a2b3c4d5e6f)

#### b. **Documented File Structure**

    - File structure is documented to facilitate development.

### 14. **Separation of Concerns**

    -   Layers (e.g. model, view, controller) are distinct
    -   Builds on good structure

#### a. **Enforced Layer Boundaries**

    - Layer boundaries are enforced by lint rules.

#### b. **Organized Dependency Graph**

    - The dependency graph and function call graph look well-organized, with no conflicts between layers.

#### c. **Example Components**

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

### 15. **Performance**

    -   The app runs well and meets performance metrics
    -   Data is fetched efficiently and redundant fetches are reduced
    -   Comes after structure is established

#### a. **Out-of-the-Box Performance**

    - App meets performance metrics out-of-the-box.
    - [thedaviddias/Front-End-Performance-Checklist: 🎮 The only Front-End Performance Checklist that runs faster than the others](https://github.com/thedaviddias/Front-End-Performance-Checklist)

### 16. **Error Handling**

    -   Errors are handled gracefully and displayed in useful ways
    -   Important but builds on working code structure

#### a. **Out-of-the-Box Error Handling**

    - Errors are well-handled out-of-the-box.

#### b. **Useful Error Presentation**

    - If an error affects displayed data, it is delivered to the end user in a useful format. Expected error pages are designed and provide useful options.

#### c. **Comprehensive Error Logging**

    - All errors are logged for dev review.
    - [winstonjs/winston: A logger for just about everything.](https://github.com/winstonjs/winston)
    - [trentm/node-bunyan: a simple and fast JSON logging module for node.js services](https://github.com/trentm/node-bunyan)

## Usage Requirements

### 17. **Routing**

    -   Routing just works
    -   Core usage requirement
    - Set up routing
    - [Frequently asked questions • Docs • Svelte](https://svelte.dev/docs/svelte/faq#Is-there-a-router) "Is there a router?"
    - Try [Svelte 5 SPA Router](https://docs.router.svelte.spa/) (SEO?)
    - Review [Project structure • Docs • Svelte](https://svelte.dev/docs/kit/project-structure)

#### a. **Out-of-the-Box Routing Setup**

    - Routing is easy to set up out-of-the-box.

### 18. **State Management**

    -   Persistent stores and other state are easy to handle
    -   Builds on routing

#### a. **Easy State Management Setup**

    - Persistent and local state management are easy to set up in new projects.

### 19. **Authentication**

    -   Common authentication methods (e.g. OAuth, manual access token entry) are documented and easy to set up
    -   Builds on state management

#### a. **Out-of-the-Box Authentication**

    - Authentication is configured and ready to use out-of-the-box.

## Design Requirements

### 20. **Design Development**

#### a. **CSS File Structure**

    - Set up file structure for CSS files (app, base, utilities, components, layout)
    - `src/app.css` very short, configures Tailwind and plugins, imports stylesheets from `src/styles`
    - `src/styles/base.css` app-wide resets, typography tweaks, html/body defaults
    - `src/styles/utilities.css` custom `@layer` utility classes
    - `src/styles/components/COMPONENTTYPE.css` e.g. buttons, forms, cards
    - `src/styles/layout.css` e.g. grid/flex, spacing

#### b. **Tailwind & DaisyUI**

    - Look over [TailwindCSS | Project-Awesome.org](https://project-awesome.org/aniftyco/awesome-tailwindcss)
    - Install and set up Tailwind
    - In `app.css`
    - ```
        @theme {
          --*: initial;
        }
        ```
    - Install DaisyUI
    - [disable themes](https://daisyui.com/docs/themes/#disable-a-theme)

#### c. **Style Linting**

    - Add library to automatically sort/group CSS rules and Tailwind classes
    - Find ESLint library for Tailwind and DaisyUI
    - Lint CSS selectors for issues
    - Enforce semantic classes only, disallow TailwindCSS inline color classes

### 21. **User Experience**

    -   App has well-designed UX
    -   Foundational for all design aspects

#### a. **Design Checklist Compliance**

    - App conforms to design checklists.
    - [thedaviddias/Front-End-Design-Checklist: 💎 The Design Checklist for Creative Web Designers and Patient Front-End Developers](https://github.com/thedaviddias/Front-End-Design-Checklist)

### 22. **Theming**

    -   Theming (e.g. dark/light) just works
    -   Builds on UX foundation

#### a. **Automatic System Theme Detection**

    - App automatically switches dark/light according to user system preference.

#### b. **User-Facing Theme Switcher**

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

### 23. **Accessibility**

    -   Design meets accessibility (a11y) metrics (e.g. color contrast, font use)
    -   Builds on theming

#### a. **Accessibility Metrics Compliance**

    - Research metrics (e.g. axe or pa11y)
    - [§ accessibility elsewhencode/project-guidelines: A set of best practices for JavaScript projects](https://github.com/elsewhencode/project-guidelines)

### 24. **UI Components**

    -   Icons just work
    -   Modals/dialogs just work
    -   Forms with validation are easy to set up and just work
    -   Notifications (e.g. toasts) just work
    -   Loading status is easy to indicate through skeleton styling and other feedback
    -   Basic design elements that build on each other

#### a. **Configurable Favicon**

    - The app comes with a default favicon that is easily configured.

#### b. **Quality Icon Library**

    - A large number of quality icons are available for use in components.

#### c. **Modal and Dialog Support**

    - Modals and dialogs are easy to implement and work consistently.

#### d. **Form Validation**

    - Forms with validation are easy to set up and work reliably.

#### e. **Notification System**

    - Notifications (e.g. toasts) are easy to implement and display properly.

#### f. **Loading Status Indicators**

    - Loading status is easy to indicate through skeleton styling and other feedback mechanisms.

### 25. **Mobile Responsiveness**

    -   The app functions well on mobile
    -   Builds on all other design aspects
    - Mobile must be flawless and easy to use

#### a. **Mobile Performance Metrics**

    - Research metrics

#### b. **Perfect Responsiveness**

    - The design is perfectly responsive.

#### c. **PWA Support**

    - The app can be installed as a PWA.

## Documentation Requirements

### 26. **Feature Documentation**

    -   Documentation of template features is comprehensive and useful
    -   Comes after features are implemented

#### a. **README.md Creation**

    - Create `README.md` in project root
    - Contains Initiation section (leave empty, will write below)
    - Section that lists files in remote `/docs` directory (not local because not copied during clone)
    - [technote-space/toc-generator: GitHub Actions to generate TOC (Table of Contents)](https://github.com/technote-space/toc-generator)

#### b. **Stack Documentation**

    - Create `/docs/stack.md`
    - Write up table with package name, purpose, docs URL, llms.txt URL
    - Include:
        - VS Code
            - ESLint
                - `eslint-plugin-svelte`
                - `eslint-plugin-functional`
            - Prettier?
            - Knip
            - Cline
                - Look for Cline MCP that caches and allows `@mention`
        - NodeJS, `npm`
            - Ensure use of newer Node version
        - Svelte/SvelteKit (?)
            - Determine best scaffolding command to use
                - ```
                    npx sv create myapp
                    cd myapp
                    npm install
                    npm run dev
                    ```
                - [sv add • Docs • Svelte](https://svelte.dev/docs/cli/sv-add#Official-add-ons) (eslint, prettier, playwright, tailwindcss)
            - Use versions compatible with Console Ninja
                - How to specify versions in `sv`
            - Add import aliases
                - [How to add module import aliases in SvelteKit - DEV Community](https://dev.to/danawoodman/how-to-add-module-import-aliases-in-sveltekit-2ck)
        - Vite
            - Still recommended by official Svelte docs? try other PWA options
        - Helper libraries
            - Environmental variables: `dotenv` (?)
            - Time: `luxon`, `chrono-node` for parsing strings
            - Markdown: `svelte-exmarkdown`
            - Persistent store: `svelte-persisted-store` (used before) or `svelte-persistent-store`
            - Deployment to Netlify: `adapter-netlify`
        - TailwindCSS
            - DaisyUI
            - HeroIcons with `svelte-hero-icons`
            - Fontsource, Atkinson Hyperlegible
                - Add italic
                - Look for other Hyperlegible web fonts

#### c. **High Documentation Coverage**

    - High template documentation coverage.

### 27. **Project Documentation**

    -   Subsequent project documentation is easy to write, organize, access, and maintain
    -   Builds on initial docs

#### a. **Documentation Templates**

    - Templates for README.md and other minimal project documentation.
    - [Louis3797/awesome-readme-template: An awesome README template for your projects!](https://github.com/Louis3797/awesome-readme-template)
    - [noahbald/awesome-architecture-md: A list of awesome ARCHITECTURE.md files](https://github.com/noahbald/awesome-architecture-md)
    - [Awesome README | Curated list of awesome lists | Project-Awesome.org](https://github.com/sindresorhus/awesome#readme)
    - [matiassingers/awesome-readme: A curated list of awesome READMEs](https://github.com/matiassingers/awesome-readme)
    - CONTRIBUTING.md
    - CODE_OF_CONDUCT.md
    - SECURITY.md

#### b. **IDE Setup Documentation**

    - Create `/docs/ide.md` with setup instructions for VS Code, essential extensions, settings sync

#### c. **Documented License Selection**

    -   Licensing a project is quick and easy
    -   Important but can be handled last
    - The process of choosing a LICENSE.md is documented.

# Template Requirements

This document outlines the requirements for an ideal template repository following BDD principles. Every heading with a ✓ between the numbering and name has been implemented.

Find the first unimplemented lettered sub-heading. Design and implement a testing method. When finished, add a check to the heading and implementation details to the contents.

## Build Requirements

### 1. **Build Requirements Enforcement**

    - Setting and enforcing build requirements (through pre-commit/push hooks and checks on push to dev and PR to main) just works
    - Foundational: Ensures all other requirements can be reliably built and tested

#### a. **Pre-Commit/Push Hooks**

    - Pre-commit/push hooks are set up to run locally using Husky and always catch failing code.
    - [Get started | Husky](https://typicode.github.io/husky/)
    - [Husky: The Secret Weapon for Developers Who Want to Write Better Code | by Smart Saravanan | Medium](https://medium.com/@smartsaravanan/husky-the-secret-weapon-for-developers-who-want-to-write-better-code-1a2b3c4d5e6f)

#### b. Pass on Clean Clone

    - CI must pass on a clean clone.

#### c. Pass on Push and PR

    - CI/CD requirements are redundantly checked by Github on push to dev and PR to main.

#### d. Limited Workflow Size

    - A file size limit on /.github/workflows/\*.yml requirements files facilitates customization within projects.

### 2. **Version Control Integration**

    - Version control (including Github integration) just works
    - Essential for collaboration and should be established early

#### a. **Documented Version Control Commands**

    - Version control commands (e.g. setup, pushing changes to template repo, pulling template changes into projects) are documented.

#### b. **Working Version Control Commands**

    - Version control commands work without much modification.

#### c. **Implemented Version Control Flow**

    - A version control flow (e.g. feature branches, pull requests) is implemented and enforced.
    - [§ Git elsewhencode/project-guidelines: A set of best practices for JavaScript projects](https://github.com/elsewhencode/project-guidelines)

#### d. **Enforced Commit Message Formatting**

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

#### c. **Working Install Commands**

    - Install commands work without much modification.

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
    - [§ code style elsewhencode/project-guidelines: A set of best practices for JavaScript projects](https://github.com/elsewhencode/project-guidelines)
    - [kettanaito/naming-cheatsheet: Comprehensive language-agnostic guidelines on variables naming. Home of the A/HC/LC pattern.](https://github.com/kettanaito/naming-cheatsheet)
    - [thedaviddias/Front-End-Checklist: 🗂 The perfect Front-End Checklist for modern websites and meticulous developers](https://github.com/thedaviddias/Front-End-Checklist)

### 11. **LLM Assistance**

    -   LLM-assisted coding just works
    -   Builds on established testing and linting

#### a. **Agent Documentation**

    -   AGENTS.md is comprehensive.

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

### 20. **User Experience**

    -   App has well-designed UX
    -   Foundational for all design aspects

#### a. **Design Checklist Compliance**

    - App conforms to design checklists.
    - [thedaviddias/Front-End-Design-Checklist: 💎 The Design Checklist for Creative Web Designers and Patient Front-End Developers](https://github.com/thedaviddias/Front-End-Design-Checklist)

### 21. **Theming**

    -   Theming (e.g. dark/light) just works
    -   Builds on UX foundation

#### a. **Automatic System Theme Detection**

    - App automatically switches dark/light according to user system preference.

#### b. **User-Facing Theme Switcher**

    - User-facing theme switcher is available.

### 22. **Accessibility**

    -   Design meets accessibility (a11y) metrics (e.g. color contrast, font use)
    -   Builds on theming

#### a. **Accessibility Metrics Compliance**

    - Research metrics (e.g. axe or pa11y)
    - [§ accessibility elsewhencode/project-guidelines: A set of best practices for JavaScript projects](https://github.com/elsewhencode/project-guidelines)

### 23. **UI Components**

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

### 24. **Mobile Responsiveness**

    -   The app functions well on mobile
    -   Builds on all other design aspects

#### a. **Mobile Performance Metrics**

    - Research metrics

#### b. **Perfect Responsiveness**

    - The design is perfectly responsive.

#### c. **PWA Support**

    - The app can be installed as a PWA.

## Documentation Requirements

### 25. **Feature Documentation**

    -   Documentation of template features is comprehensive and useful
    -   Comes after features are implemented

#### a. **High Documentation Coverage**

    - High template documentation coverage.

### 26. **Project Documentation**

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

### 27. **Licensing**

    -   Licensing a project is quick and easy
    -   Important but can be handled last

#### a. **Documented License Selection**

    - The process of choosing a LICENSE.md is documented.

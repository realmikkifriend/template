This document outlines the requirements for front-end design of an ideal template repository. Every heading with a ✓ between the numbering and name has been implemented.

- [A. **Design Requirements**](#a-design-requirements)
  - [1. ✓ **Design Development**](#1--design-development)
    - [a. ✓ **CSS \& HTML File Structure**](#a--css--html-file-structure)
    - [b. ✓ **Tailwind \& DaisyUI**](#b--tailwind--daisyui)
    - [c. ✓ **Style Linting**](#c--style-linting)
  - [2. **UI Components**](#2-ui-components)
    - [a. ✓ **Design Checklist Compliance**](#a--design-checklist-compliance)
    - [b. ✓ **Quality Icon Library**](#b--quality-icon-library)
    - [c. **Modal and Dialog Support**](#c-modal-and-dialog-support)
    - [d. **Notification System**](#d-notification-system)
    - [e. **Example Components**](#e-example-components)
  - [3. **Theming**](#3-theming)
    - [a. **Automatic System Theme Detection**](#a-automatic-system-theme-detection)
    - [b. **User-Facing Theme Switcher**](#b-user-facing-theme-switcher)
    - [c. **Print Styling**](#c-print-styling)
  - [4. **Accessibility**](#4-accessibility)
    - [a. **Accessibility Metrics Compliance**](#a-accessibility-metrics-compliance)
    - [b. **Internationalization (i18n)**](#b-internationalization-i18n)
  - [5. **Mobile Responsiveness**](#5-mobile-responsiveness)
    - [a. **Mobile Performance Metrics**](#a-mobile-performance-metrics)
    - [b. **Perfect Responsiveness**](#b-perfect-responsiveness)
    - [c. **PWA Support**](#c-pwa-support)
- [B. **Documentation Requirements**](#b-documentation-requirements)
  - [6. **Feature Documentation**](#6-feature-documentation)
    - [a. **README.md Creation**](#a-readmemd-creation)
    - [b. **Stack Documentation**](#b-stack-documentation)
    - [c. **High Documentation Coverage**](#c-high-documentation-coverage)
  - [7. **Project Documentation**](#7-project-documentation)
    - [a. **Documentation Templates**](#a-documentation-templates)
    - [b. **IDE Setup Documentation**](#b-ide-setup-documentation)
    - [c. **Documented License Selection**](#c-documented-license-selection)
    - [d. **Documentation Auto-Generation**](#d-documentation-auto-generation)

# A. **Design Requirements**

## 1. ✓ **Design Development**

### a. ✓ **CSS & HTML File Structure**

- File structure for CSS files is already set up and documented in `AGENTS.md`.
- Compliant and [semantic](https://htmlreference.io/semantic/) HTML is ready out-of-the-box, though [more `<head>` elements](https://github.com/joshbuchea/HEAD) can be added later.

### b. ✓ **Tailwind & DaisyUI**

- Working with TailwindCSS and DaisyUI is documented in `AGENTS.md`.

### c. ✓ **Style Linting**

- CSS stylesheets and inline class-based styling just works.
- A VS Code extension ([Headwind](https://github.com/heybourn/headwind)) is configured to sort classes.

## 2. **UI Components**

- Essential design elements are already included
- Customizing essential design elements is easy

### a. ✓ **Design Checklist Compliance**

- App conforms to design expectations (grid layout, link styling, etc).
- The app comes with a default favicon that is easily configured.
- Forms with [validation](https://daisyui.com/components/validator/) are easy to set up and work reliably.
- Loading status is easy to indicate through skeleton styling.

### b. ✓ **Quality Icon Library**

- A [large number of quality icons](https://icon-sets.iconify.design/) are available for use in components via [Iconify](https://iconify.design/docs/usage/css/tailwind/tailwind4/).

### c. **Modal and Dialog Support**

- Modals and dialogs are easy to implement and work consistently.
  - [ ] set up settings demo with color theme switcher
    - [ ] add cog icon button in corner
    - [ ] clicking button opens small menu
    - [ ] menu lists possible themes configured
    - [ ] selecting theme implements it immediately
    - [ ] add tests
- Working with modals and dialogs is documented in `AGENTS.md`.

### d. **Notification System**

- Notifications (e.g. toasts) are easy to implement and display properly.
  - [ ] set up [Tailwind Alert Component – daisyUI](https://daisyui.com/components/alert/)
  - [ ] write tests
- Working with notifications is documented in `AGENTS.md`.

### e. **Example Components**

- Create `demo` directory of example components
  - Directory is ignored when pulling upstream template changes into project
- In Svelte, use `context` to share functions and values
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

## 3. **Theming**

- Theming (e.g. dark/light) just works
- Builds on UX foundation

### a. **Automatic System Theme Detection**

- App automatically switches dark/light according to user system preference.

### b. **User-Facing Theme Switcher**

- User-facing theme switcher is available.
  - [ ] read over DaisyUI docs on [Colors](https://daisyui.com/docs/colors/#list-of-all-daisyui-color-names)
- Read up on semantic color palettes
  - [How to define color usage through semantic sets for design systems | by Katie Cooper | UX Collective](https://uxdesign.cc/how-to-define-color-usage-through-semantic-sets-for-design-systems-99445804233d)
  - [Designing semantic colors for your system](https://imperavi.com/blog/designing-semantic-colors-for-your-system/)
  - [Vercel Geist system](https://vercel.com/geist/colors)
  - [Overview - Color new - Atlassian Design System](https://atlassian.design/foundations/color-new)
  - [Design tokens explained - Tokens - Atlassian Design System](https://atlassian.design/tokens/design-tokens)
  - [Design tokens - All tokens - Components - Atlassian Design System](https://atlassian.design/components/tokens/all-tokens)
  - [Siddharth11/Colorful: A curated list of awesome resources to choose your next color scheme](https://github.com/Siddharth11/Colorful)
- Settle on semantic color scheme list and quality/accessibility checklist
  - Review [Tailwind color theming docs](https://tailwindcss.com/docs/theme), [custom semantic classes](https://tailwindcss.com/docs/adding-custom-styles#functional-utilities)
  - Review [Tailwind Color Schemes | Tailwind | Steve Kinney](https://stevekinney.com/courses/tailwind/tailwind-color-schemes)
  - How to use Tailwind classes in CSS file, [Functions and directives - Core concepts - Tailwind CSS](https://tailwindcss.com/docs/functions-and-directives#apply-directive) `@apply`

### c. **Print Styling**

- The app looks good when printed.

## 4. **Accessibility**

- Design meets accessibility (a11y) metrics (e.g. color contrast, font use)
- Builds on theming

### a. **Accessibility Metrics Compliance**

- Research metrics (e.g. axe or pa11y)
- [§ accessibility elsewhencode/project-guidelines: A set of best practices for JavaScript projects](https://github.com/elsewhencode/project-guidelines)
- Colors have sufficient contrast.
  - [WCAG - Contrast Checker](https://contrastchecker.com/)
- Essential accessibility standards are documented in `AGENTS.md`.

### b. **Internationalization (i18n)**

- Components are i18n-ready.
  - [Internationalization (i18n) • Packages • Svelte](<https://svelte.dev/packages#internationalization-(i18n)>)

## 5. **Mobile Responsiveness**

- The app functions well on mobile (breakpoints: 320px, 768px, 1024px)
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

# B. **Documentation Requirements**

## 6. **Feature Documentation**

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
      - webfonts § [thedaviddias/Front-End-Checklist](https://github.com/thedaviddias/Front-End-Checklist?tab=readme-ov-file#webfonts)
      - fonts § [thedaviddias/Front-End-Design-Checklist](https://github.com/thedaviddias/Front-End-Design-Checklist?tab=readme-ov-file#13---fonts-and-texts)
- The stack documentation is referenced in `AGENTS.md`.

### c. **High Documentation Coverage**

- High template documentation coverage.

## 7. **Project Documentation**

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

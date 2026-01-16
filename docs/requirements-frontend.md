This document outlines the requirements for front-end design of an ideal template repository. Every heading with a ✓ between the numbering and name has been implemented.

- [A. ✓ **Design Requirements**](#a--design-requirements)
  - [1. ✓ **Design Development**](#1--design-development)
    - [a. ✓ **CSS \& HTML File Structure**](#a--css--html-file-structure)
    - [b. ✓ **Tailwind \& DaisyUI**](#b--tailwind--daisyui)
    - [c. ✓ **Style Linting**](#c--style-linting)
  - [2. ✓ **UI Components**](#2--ui-components)
    - [a. ✓ **Design Checklist Compliance**](#a--design-checklist-compliance)
    - [b. ✓ **Quality Icon Library**](#b--quality-icon-library)
    - [c. ✓ **Modal and Dialog Support**](#c--modal-and-dialog-support)
    - [d. ✓ **Notification System**](#d--notification-system)
  - [3. ✓ **Theming**](#3--theming)
    - [a. ✓ **Automatic System Theme Detection**](#a--automatic-system-theme-detection)
    - [b. ✓ **User-Facing Theme Switcher**](#b--user-facing-theme-switcher)
    - [c. ✓ **Print Styling**](#c--print-styling)
  - [4. ✓ **Accessibility**](#4--accessibility)
    - [a. ✓ **Accessibility Metrics Compliance**](#a--accessibility-metrics-compliance)
  - [5. ✓ **Mobile Responsiveness**](#5--mobile-responsiveness)
    - [a. ✓ **Mobile Performance Metrics**](#a--mobile-performance-metrics)
    - [b. ✓ **Perfect Responsiveness**](#b--perfect-responsiveness)
- [B. **Documentation Requirements**](#b-documentation-requirements)
  - [6. ✓ **Feature Documentation**](#6--feature-documentation)
    - [a. ✓ **Documentation Index**](#a--documentation-index)
  - [7. **Project Documentation**](#7-project-documentation)
    - [a. **Documentation Templates**](#a-documentation-templates)
    - [b. **Component Documentation Auto-Generation**](#b-component-documentation-auto-generation)

# A. ✓ **Design Requirements**

## 1. ✓ **Design Development**

### a. ✓ **CSS & HTML File Structure**

- File structure for CSS files is already set up and documented in `AGENTS.md`.
- Compliant and [semantic](https://htmlreference.io/semantic/) HTML is ready out-of-the-box, though [more `<head>` elements](https://github.com/joshbuchea/HEAD) can be added later.

### b. ✓ **Tailwind & DaisyUI**

- Working with TailwindCSS and DaisyUI is documented in `AGENTS.md`.

### c. ✓ **Style Linting**

- CSS stylesheets and inline class-based styling just works.
- A VS Code extension ([Headwind](https://github.com/heybourn/headwind)) is configured to sort classes.

## 2. ✓ **UI Components**

- Essential design elements are already included
  - Customizing essential design elements is easy
- New components can be started from [DaisyUI](https://daisyui.com/components/) and [HyperUI](https://www.hyperui.dev/) elements

### a. ✓ **Design Checklist Compliance**

- App conforms to design expectations (grid layout, link styling, etc).
- The app comes with a default favicon that is easily configured.
- Forms with [validation](https://daisyui.com/components/validator/) are easy to set up and work reliably.
- Loading status is easy to indicate through skeleton styling.

### b. ✓ **Quality Icon Library**

- A [large number of quality icons](https://icon-sets.iconify.design/) are available for use in components via [Iconify](https://iconify.design/docs/usage/css/tailwind/tailwind4/).

### c. ✓ **Modal and Dialog Support**

- Modals and dialogs are easy to implement and work consistently, as demonstrated by the settings popover and about modal.

### d. ✓ **Notification System**

- Notifications (e.g. toasts) are easy to implement and display properly.
- Working with notifications is documented in `AGENTS.md`.

## 3. ✓ **Theming**

- Theming (e.g. dark/light) just works

### a. ✓ **Automatic System Theme Detection**

- App automatically switches dark/light according to user system preference.

### b. ✓ **User-Facing Theme Switcher**

- User-facing theme switcher is available.

### c. ✓ **Print Styling**

- The app looks good when printed, and there is a print stylesheet for ready customization.

## 4. ✓ **Accessibility**

- Design meets accessibility (a11y) metrics
- Internationalization (i18n) [can be set up](https://wuchale.dev/).

### a. ✓ **Accessibility Metrics Compliance**

## 5. ✓ **Mobile Responsiveness**

- The app functions well on mobile

### a. ✓ **Mobile Performance Metrics**

- End-to-end tests are run on an emulated mobile browser.
- The app [can be set up as an installable PWA](https://svelte.dev/docs/svelte/faq#How-do-I-write-a-mobile-app-with-Svelte).

### b. ✓ **Perfect Responsiveness**

- [Mobile breakpoints](https://tailwindcss.com/docs/responsive-design) just work.
- Mobile design is documented in `AGENTS.md`.

# B. **Documentation Requirements**

## 6. ✓ **Feature Documentation**

- Documentation of template features is comprehensive and useful

### a. ✓ **Documentation Index**

- The template's `README.md` explains the project purpose, stack, and links to the other docs.

## 7. **Project Documentation**

- Subsequent project documentation is easy to write, organize, access, and maintain

### a. **Documentation Templates**

- Templates for `README.md`, [`ARCHITECTURE.md`](https://architecture.md/), `LICENSE.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, and `SECURITY.md` are ready to be customized.
  - `CONTRIBUTING.md`
    - [mntnr/awesome-contributing](https://github.com/mntnr/awesome-contributing)
    - [awesome-copilot/CONTRIBUTING.md](https://github.com/github/awesome-copilot/blob/main/CONTRIBUTING.md)
    - [How to Build a CONTRIBUTING.md](https://contributing.md/how-to-build-contributing-md/)
  - `CODE_OF_CONDUCT.md`
    - [awesome/code-of-conduct.md at main](https://github.com/sindresorhus/awesome/blob/main/code-of-conduct.md)
    - [awesome-copilot/CODE_OF_CONDUCT.md](https://github.com/github/awesome-copilot/blob/main/CODE_OF_CONDUCT.md)
  - `SECURITY.md`
    - [awesome-copilot/SECURITY.md](https://github.com/github/awesome-copilot/blob/main/SECURITY.md)
  - `LICENSE.md`
    - [ ] find resources for choosing project license

### b. **Component Documentation Auto-Generation**

- JSDoc is configured and can be used to generate documentation.
- Components and individual page elements are documented with comments. These appear as user help and are compiled into documentation.
  - [How do I document my components? • Frequently asked questions • Svelte Docs](https://svelte.dev/docs/svelte/faq#How-do-I-document-my-components)

- [ ] set up Github repo

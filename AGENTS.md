# Coding Style Guidelines for Agents

This document provides project style guidelines that coding agents must follow.

This is a Svelte 5 codebase using TypeScript and ESLint for code quality, TailwindCSS and DaisyUI for styling, Vite to serve, and Playwright for testing.

## General Guidelines

### Key Directories

- **`src/`**: Contains the main application code
  - **`src/lib/`**: Reusable components and utilities (imported via `$lib` alias)
  - **`src/routes/`**: Application routes and pages
- **`static/`**: Static assets served directly (e.g., `robots.txt`)

### Important Files

- **`src/app.html`**: Contains SvelteKit placeholders
- **`src/routes/+error.svelte`**: Custom error page
- **`src/routes/+layout.svelte`**: `<head>`, header, footer, and menus for every page
- **`src/routes/+page.svelte`**: Content of the homepage

#### Configuration Files

- **App**: `svelte.config.ts`, `vite.config.ts`
- **Code Quality**: `tsconfig.json`, `eslint.config.mts`, `.prettierrc`, `knip.ts`, `.dependency-cruiser.ts`
- **Testing**: `playwright.config.ts`

### Layer Boundaries

- **View**
  - `src/routes/` contain Svelte components that receive and display data.
  - `src/lib/styles/` contains stylesheets and style utilities.
  - `src/lib/components/` contains reusable Svelte components.
- **Model**
  - `src/lib/types` contains type/interface definitions.
  - `src/lib/stores` contains persistent Svelte stores.
- **Controller**
  - `src/lib/services` contains functions that access stores or handle business logic.
  - `src/lib/utils` contains only pure, stateless functions and no side effects.

### Code Style

- **Maximum file length**: Svelte and Typescript files should have limited length. Extract code to a new file when necessary.
- **JSDoc required** for all public/arrow functions
- **Don't Repeat Yourself**: If code is used more than once, extract it to a reusable function/component.
- **No comments**: Do not include comments. Write code that is self-explanatory.
- **Maximum nesting depth**: Do not deeply nest code. Refactor or extract to functions.
- **Maximum parameters**: 2-3 parameters per function. Consider passing an object instead.
- **Maximum function length**: Do not write long, complicated functions. Keep cyclomatic complexity low. Refactor or extract code where necessary.

#### **Type Safety**:

- Use TypeScript interfaces for props and data
- Define types in `$lib/types` directory
- Document all public functions with JSDoc
- Use ES modules (`import/export` syntax)
- Browser globals are available
- Use appropriate polyfills for Node.js environments

#### Functional Programming

- Follow functional programming patterns where applicable
- Avoid mutable state when possible
- Functional programming rules are ignored in test files (`**/*.spec.ts`)

#### Console Usage

- **Allowed**:
  - `console.error()` for error logging
  - `{@debug VALUE}` logs the value when changed, pauses execution if devtools open
- **Avoid**: `console.log()`, `console.warn()`, Svelte's `$inspect(count, message)` rune, etc.

## Development Workflow

### Common Commands

```bash
# Check dependencies for updates and security issues
npm run deps

# Lint and type check
npm run lint

# Builds dependency graph, checks for Svelte issues, runs Knip
npm run scan

# Run tests
npm test

# Start development server
npm run dev
```

### Environment Variables

- **Template**: `.env.example` provides variable templates
- **Public Variables**: Prefix with `PUBLIC_` (e.g., `PUBLIC_API_URL`)
- **Private Variables**: Use in server-side code only

### Testing

- Write Playwright tests for critical user flows (both happy paths and error cases)
- Store tests next to the code they test
- Use `test.describe()` to group related tests for a component or feature
- Define locators at the top level if reused across tests
- Use `test.beforeEach()` for common setup that runs before each test
- Use descriptive test names starting with "should"
- Use `page.route()` to mock API responses
- Create helper functions for repeated logic

## Svelte Guidelines

### Component Organization

- Keep components small and focused
- Use `$lib` for reusable components and functions
  - `$lib/assets` for images and other static files
  - `$lib/components` for re-used Svelte components
  - `$lib/styles` for stylesheets and style utilities
  - `$lib/types` for type/interface definitions
  - `$lib/stores` contains persistent Svelte stores
  - `$lib/services` contains functions that access stores or handle business logic.
  - `$lib/utils` contains only pure, stateless functions and no side effects.
- Create new page components under new route sub-directories
  - `src/routes/blog/[slug]` creates a route with `slug` parameter (like `/blog/hello-world`)
  - `src/routes/blog/+page.svelte` creates a `site.com/blog` page
  - `src/routes/blog/+page.ts` exports load function before page render
  - `src/routes/blog/+layout.svelte` adds to surrounding layout (especially `<head>`)
  - `src/routes/blog/+layout.ts` exports load function for layout
  - `src/routes/blog/+error.svelte` creates a custom error page for this route
- Couple sub-components with their parents where possible.
  - `src/routes/blog/_components/BlogPost.svelte` is page sub-component
  - `$lib/components` for re-used components
- Create server functions for fetching, form actions, and handling `env` variables.
  - `src/routes/blog/+server.ts` defines API endpoints by exporting `GET`/`POST`/etc HTTP methods
    - couple server endpoints with the pages they directly support
    - use `src/routes/api/` to organize projects with many endpoints not coupled to pages
  - `src/routes/blog/+page.server.ts` load function that only runs on server
  - `src/routes/blog/+layout.server.ts` only runs on server
  - `src/*/name.remote.ts` exports functions that run on server

### State Management

- **Svelte 5 Runes**:
  - `$state` creates reactive values
  - `$derived` runs again if relevant values change
  - `$effect` functions run when state changes
  - Never use `writable` from `svelte/store`.
  - Never use `$:`.
- **Store initialization**:
  - Create new stores in `lib/stores` as `storeName.svelte.ts`.
  - Always provide initial values to stores.
  - Use `persistedState` from `svelte-persisted-state` to make stores persist across page loads.
  - Minimal functions that directly mutate state live in a store's file or co-located utility file.
- **Context**:
  - Context enables components to access parent component values without prop-drilling.
    - `setContext(key, value)` in parent components
    - `getContext(key)` in child components
    - `hasContext` and `getAllContexts` utilities
    - For type safety, use `createContext` inside a `.ts` file:
      ```ts
      import { createContext } from 'svelte';
      export const [getUserContext, setUserContext] = createContext<User>();
      ```
  - Keys and values can be any JavaScript type.
  - `Notifications.svelte` provides a context-based notification system.

    ```svelte
    <script lang="ts">
    	import { getNotificationsContext } from '$lib/components/Notifications';

    	const notifications = getNotificationsContext();

    	notifications.addNotification({
    		message: 'Error while fetching data!',
    		type: 'error',
    		timeout: 5000
    	});
    </script>
    ```

### Event Handling

- **Avoid**: `addEventListener` and `createEventDispatcher`
- **Preferred**: Use callback props pattern for event handling

### Component Structure

- **No `<style>` sections**: Use Tailwind CSS classes or external CSS files in `src/*.css`
- **Use ``svelte:head>`**: Set essential page attributes:
  - `og:site_name`, name of app
  - `title`/`og:title` (50-60 characters), unique for each page, don't include site name
  - `description`/`og:description` (150-160 characters), cohesive sentences containing important keywords
  - `canonical`/`og:url` points to official URL without extra params
  - `og:image` points to the image to display on sharing to social media
  - `robots` with `noindex,nofollow` prevents indexing, following links
- **Class attributes**: Use `class:CLASSNAME` directive instead of ternary operators
- **Style attributes**: Use `style:RULE` directive instead of inline styles with ternaries
- **Attribute ordering**: Follow consistent attribute ordering (use `svelte/sort-attributes`)
- **Button elements**: Must have `type` attribute (`button`, `submit`, or `reset`)

### Styling Approach

- **TailwindCSS**: Primary styling framework
- **DaisyUI**: Component library built on Tailwind
- **External CSS**: Use stylesheets in `src/lib/styles/` for global styles
  - `src/lib/styles/app.css` very short, configures Tailwind and plugins, imports other stylesheets
  - `src/lib/styles/base.css` app-wide resets, html/body defaults
  - `src/lib/styles/color.css` applies color schemes
  - `src/lib/styles/layout.css` grid/flex, spacing
  - `src/lib/styles/typography.css` styling text and paragraphs
  - `src/lib/styles/components/COMPONENTTYPE.css` e.g. buttons, forms, cards
- **Component Styles**: Use Tailwind classes directly in components for initial designs, but move them to `src/lib/styles`
- Styling is mobile-first, so designs assume a small screen by default.
  - Mobile breakpoints are used to style for larger screens: `xxs:` and `xs:` for large phones, `sm:` and `md:` for tablets and most browsers, and `lg:`, `xl:`, `2xl:`, and `3xl:` for larger screens.

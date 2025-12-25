# Coding Style Guidelines for Agents

This document provides project style guidelines that coding agents must follow.

This is a Svelte 5 codebase using TypeScript and ESLint for code quality, TailwindCSS and DaisyUI for styling, Vite to serve, and Playwright for testing.

## General Guidelines

### File Structure

- **Maximum file length**: Svelte and Typescript files should have limited length. Extract code to a new file when necessary.

#### Key Directories

- **`src/`**: Contains the main application code
  - **`src/lib/`**: Reusable components and utilities (imported via `$lib` alias)
  - **`src/routes/`**: Application routes and pages
- **`static/`**: Static assets served directly (e.g., `robots.txt`)
- **`tests/`**: Playwright end-to-end tests

#### Important Files

- **`src/app.html`**: Contains SvelteKit placeholders:
  - `%sveltekit.head%` - for `<link>` and `<script>` elements
  - `%sveltekit.body%` - page markup (must be inside a container element)
  - `%sveltekit.assets%` - asset paths
  - `%sveltekit.nonce%` - CSP nonce
  - `%sveltekit.env.[NAME]%` - public environment variables
- **`src/error.html`**: Custom error page

#### Configuration Files

- **App**: `svelte.config.ts`, `vite.config.ts`
- **Code Quality**: `tsconfig.json`, `eslint.config.mts`, `.prettierrc`, `knip.ts`, `.dependency-cruiser.ts`
- **Testing**: `playwright.config.ts`

### Code Style

- **Don't Repeat Yourself**: If code is used more than once, extract it to a reusable function/component.
- **No comments**: Do not include comments. Write code that is self-explanatory.
- **Maximum nesting depth**: Do not deeply nest code. Refactor or extract to functions.
- **Maximum parameters**: 2-3 parameters per function. Consider passing an object instead.
- **Maximum function length**: Do not write long, complicated functions. Keep cyclomatic complexity low. Refactor or extract code where necessary.

#### Code Documentation

- **JSDoc required** for all public/arrow functions
- Include parameter types in JSDoc comments
- Document return types and descriptions

#### Functional Programming

- Follow functional programming patterns where applicable
- Avoid mutable state when possible
- Functional programming rules are ignored in test files (`**/*.spec.ts`)

#### Console Usage

- **Allowed**: `console.error()` for error logging
- **Avoid**: `console.log()`, `console.warn()`, etc.

### Development Workflow

#### Common Commands

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

#### Environment Variables

- **Template**: `.env.example` provides variable templates
- **Public Variables**: Prefix with `PUBLIC_` (e.g., `PUBLIC_API_URL`)
- **Private Variables**: Use in server-side code only

### Best Practices

1. **Component Organization**:
   - Keep components small and focused
   - Use `$lib` for reusable components
   - Colocate route-specific components

2. **Type Safety**:
   - Use TypeScript interfaces for props and data
   - Define types in `src/types/` directory
   - Document all public functions with JSDoc
   - Use ES modules (`import/export` syntax)
   - Browser globals are available
   - Use appropriate polyfills for Node.js environments

3. **Layer Boundaries**:
   - **View**
     - `src/routes/` contain Svelte pages that receive and display data.
     - `src/styles/` contains stylesheets and style utilities.
   - **Model**
     - `src/types/` contains type/interface definitions.
     - `src/lib/stores/` contains Svelte stores.
   - **Controller**
     - `src/lib/services/` contains scripts that access stores or handle business logic.
     - `src/lib/utils` contains only pure, stateless functions and no side effects.

4. **Performance**:
   - Use lazy loading for heavy components
   - Optimize images and assets
   - Minimize bundle size

5. **Testing**:
   - Write Playwright tests for critical user flows
   - Test both happy paths and error cases
   - Keep tests maintainable and fast

6. **Accessibility**:
   - Use semantic HTML
   - Ensure proper ARIA attributes
   - Test with keyboard navigation

## Svelte Guidelines

### Routing Conventions

- **File-based Routing**: Files in `src/routes/` define routes
- **Layouts**: `+layout.svelte` files define shared layouts
- **Pages**: `+page.svelte` files define page content
- **Server-only**: Add `.server` suffix for server-only modules

### State Management

- **Svelte 5 Runes**: Use `$state`, `$derived`, or `$effect`
  - Never use `writable` from `svelte/store`.
  - Never use `$:`.
- **Store initialization**: Always provide initial values to stores.

### Event Handling

- **Avoid**: `addEventListener` and `createEventDispatcher`
- **Preferred**: Use callback props pattern for event handling

### Component Structure

- **No `<style>` sections**: Use Tailwind CSS classes or external CSS files in `src/*.css`
- **Class attributes**: Use `class:CLASSNAME` directive instead of ternary operators
- **Style attributes**: Use `style:RULE` directive instead of inline styles with ternaries
- **Attribute ordering**: Follow consistent attribute ordering (use `svelte/sort-attributes`)
- **Button elements**: Must have `type` attribute (`button`, `submit`, or `reset`)

### Styling Approach

- **TailwindCSS**: Primary styling framework
- **DaisyUI**: Component library built on Tailwind
- **External CSS**: Use `src/*.css` files for global styles
- **Component Styles**: Use Tailwind classes directly in components

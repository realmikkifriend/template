# Architecture Overview

This document is a living template designed to equip agents with a rapid and comprehensive understanding of the codebase's architecture. Update this document as the codebase evolves.

## 1. Project Structure

This is a Svelte 5 web application using TypeScript, TailwindCSS, and DaisyUI for frontend development, with Vite as the build tool and Playwright for testing.

### Directory Structure

```
src/
├── lib/                  # Reusable components and utilities (`$lib`)
│   ├── assets/           # Static assets (images, etc.)
│   ├── components/       # Reusable Svelte components
│   ├── stores/           # Svelte stores for state management
│   ├── styles/           # CSS stylesheets and utilities
│   ├── types/            # TypeScript types/interfaces
│   └── utils/            # Pure utility functions
├── routes/               # Application routes and pages
│   ├── +layout.svelte    # Global layout with header, footer, and menus
│   ├── +page.svelte      # Homepage component
│   └── +error.svelte     # Custom error page
└── app.html              # Main HTML template with SvelteKit placeholders
static/                   # Static files served directly (like `robots.txt`)
```

### Configuration Files

- **Build/Configuration**: `package.json`, `svelte.config.ts`, `vite.config.ts`
- **Environment**: `.env` (`.env.example` for reference)
- **Code Quality**: `tsconfig.json`, `eslint.config.mts`, `.prettierrc`
- **Testing**: `playwright.config.ts`

### Svelte Components

### Component Organization

- Keep components small and focused
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

## 3. Core Components

### 3.1. Frontend

- Svelte 5 with Runes for state management
- TypeScript for type safety
- TailwindCSS and DaisyUI for styling
- Vite for development server and build tooling

**Deployment**: Netlify

### 3.2. Architecture Layers

The application follows a clean layer-based architecture:

#### View Layer

- Located in `src/routes/` - contains Svelte components that receive and display data
- Includes page-specific components and layouts
- Uses TailwindCSS classes for styling

#### Model Layer

- Located in `src/lib/types/` - contains TypeScript type/interface definitions
- Located in `src/lib/stores/` - contains persistent Svelte stores for state management
- Uses Svelte 5 Runes (`$state`, `$derived`, `$effect`) for reactivity

#### Controller Layer

- Located in `.ts` files next to corresponding components
- Located in `src/lib/utils/` - contains pure, stateless utility functions
- Handles data fetching, form actions, and business logic

## 4. Data Stores

### Client-Side Storage

- **Svelte Stores**: Persistent state management using `svelte-persisted-state`
- **Browser Storage**: LocalStorage/SessionStorage for client-side persistence
- **Environment Variables**: `.env` files for configuration

### Server-Side

- No dedicated database by default
- Can integrate with various backend services as needed

## 5. Development & Testing Environment

### Local Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Check build and code quality
npm run scan
npm run lint
npm run test
```

### Testing Framework

- **Playwright**: End-to-end testing for critical user flows
- Test files stored next to the code they test
- Support for both happy paths and error cases
- Mocking capabilities for API responses

### Code Quality Tools

- **ESLint**: JavaScript/TypeScript linting with custom rules
- **Prettier**: Code formatting enforcement
- **Knip**: Unused file and dependency detection
- **Dependency Cruiser**: Architecture validation and dependency analysis

# Coding Style Guidelines for Agents

This document provides project style guidelines that coding agents must follow.

This is a Svelte 5 codebase using TypeScript and ESLint for code quality, TailwindCSS and DaisyUI for styling, Vite to serve, and Playwright for testing.

## General Guidelines

### 1. File Structure

- **Maximum file length**: Svelte and Typescript files should have limited length. Extract code to a new file when necessary.
- **Maximum nesting depth**: Do not deeply nest code. Refactor or extract to functions.

### 2. Code Style

- **Don't Repeat Yourself**: If code is used more than once, extract it to a reusable function/component.
- **No comments**: Do not include comments. Write code that is self-explanatory.
- **Maximum parameters**: 2-3 parameters per function. Consider passing an object instead.
- **Maximum function length**: Do not write long, complicated functions. Keep cyclomatic complexity low. Refactor or extract code where necessary.

### 3. Console Usage

- **Allowed**: `console.error()` for error logging
- **Avoid**: `console.log()`, `console.warn()`, etc.

## TypeScript Guidelines

- Use ES modules (`import/export` syntax)
- Browser globals are available
- Use appropriate polyfills for Node.js environments

### Type Definitions

- **Location**: All type/interface definitions must be in `src/types/` directory

### Code Quality

- Avoid deprecated APIs and code patterns
- Use proper TypeScript types (don't rely on `no-undef` rule)

### Documentation

- **JSDoc required** for all public/arrow functions
  - Include parameter types in JSDoc comments
  - Document return types and descriptions

## Svelte Guidelines

### Component Structure

- **No `<style>` sections**: Use Tailwind CSS classes or external CSS files in `src/*.css`
- **Class attributes**: Use `class:CLASSNAME` directive instead of ternary operators
- **Style attributes**: Use `style:RULE` directive instead of inline styles with ternaries
- **Attribute ordering**: Follow consistent attribute ordering (use `svelte/sort-attributes`)
- **Button elements**: Must have `type` attribute (`button`, `submit`, or `reset`)

### State Management

- **Avoid**: `writable` stores from `svelte/store` (use Svelte 5 runes instead)
- **Store initialization**: Always provide initial values to stores

### Event Handling

- **Avoid**: `addEventListener` and `createEventDispatcher`
- **Preferred**: Use callback props pattern for event handling

### Svelte 5 Features

- Use new generics and runes
- Follow Svelte 5 patterns and conventions

## Layer Architecture Guidelines

### Utility Layer (`src/utils/`)

- **Restrictions**:
  - Cannot import from `../services/*`
  - Cannot import from `../stores/*`
- **Purpose**: Keep utility functions independent and reusable

## Functional Programming Guidelines

### Principles

- Follow functional programming patterns where applicable
- Avoid mutable state when possible
- Functional programming rules are ignored in test files (`**/*.spec.ts`)

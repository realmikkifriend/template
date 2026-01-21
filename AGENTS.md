# Coding Style Guidelines for Agents

This document provides project style guidelines that coding agents must follow.

For detailed architectural information including project structure, layer boundaries, and component organization, refer to the [ARCHITECTURE.md](ARCHITECTURE.md) document.

## General Guidelines

### Code Style

- **Maximum file length**: Svelte and Typescript files should have limited length. Extract code to a new file when necessary.
- **JSDoc**: Required for all public/arrow functions.
- **Don't Repeat Yourself**: If code is used more than once, extract it to a reusable function/component.
- **No comments**: Do not include comments. Write code that is self-explanatory.
- **Maximum nesting depth**: Do not deeply nest code. Refactor or extract to functions.
- **Maximum parameters**: 2-3 parameters per function. Consider passing an object instead.
- **Maximum function length**: Do not write long, complicated functions. Keep cyclomatic complexity low. Refactor or extract code where necessary.

#### **Type Safety**:

- Use TypeScript interfaces for props and data
- Browser globals are available
- Define types/interfaces in `$lib/types`

#### Functional Programming

- Follow functional programming patterns where applicable, avoid mutable state when possible
- If rules seem overly restrictive, ask the user whether to override
- Functional programming rules are ignored in test files (`**/*.spec.ts`)

#### Console Usage

- **Allowed**:
  - `console.error()` for error logging
  - `{@debug VALUE}` logs the value when changed, pauses execution if browser devtools is open
- **Avoid**: `console.log()`, `console.warn()`, Svelte's `$inspect(count, message)` rune, etc.

## Development Workflow

### Testing

- Write Playwright tests for critical user flows (both happy paths and error cases)
- Store tests next to the code they test
- Use `test.describe()` to group related tests for a component or feature
- Use `test.beforeEach()` for common setup that runs before each test
  - Define locators at the top level if reused across tests
- Use descriptive test names starting with "should"
- Use `page.route()` to mock API responses
- Create helper functions for repeated logic

## Svelte Guidelines

For detailed component organization and routing patterns, refer to the [ARCHITECTURE.md](ARCHITECTURE.md) document.

### State Management

- **Svelte 5 Runes**:
  - `$state` creates reactive values
  - `$derived` runs again if relevant values change
  - `$effect` functions run when state changes
  - Never use `writable` from `svelte/store`
  - Never use `$:`
- **Store initialization**:
  - Create new stores in `lib/stores` as `storeName.svelte.ts`
  - Always provide initial values to stores
  - Use `persistedState` from `svelte-persisted-state` to make stores persist across page loads
  - Minimal functions that directly mutate state live in a store's file or co-located utility file
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
  - `Notifications.svelte` provides an example context-based notification system.

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

### Keyboard Shortcuts

To implement a keyboard shortcut in a Svelte component:

```svelte
<script lang="ts">
	import { shortcut } from '@svelte-put/shortcut';
	import type { ShortcutEventDetail } from '@svelte-put/shortcut';

	function toggleFeature() {
		document.body.classList.toggle('feature-active');
	}

	// (optional) handle shortcut events for more complex logic
	function handleShortcut(event: CustomEvent<ShortcutEventDetail>) {
		if (event.detail.trigger.id === 'toggle-feature') {
			console.log('Feature toggled via shortcut');
		}
	}
</script>

<div class="kbd-join">
	<button>toggle the feature</button>
	<kbd>CTRL+K</kbd>
</div>

<svelte:window
	use:shortcut={{
		trigger: [
			{
				key: 'k',
				modifier: 'ctrl', // 'ctrl', 'alt', 'shift', 'meta'
				id: 'toggle-feature',
				callback: toggleFeature,
				preventDefault: true
			}
		]
	}}
	onshortcut={handleShortcut}
/>
```

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

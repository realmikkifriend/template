import svelte from 'eslint-plugin-svelte';
import svelteConfig from '../svelte.config.js';
import ts from 'typescript-eslint';

/**
 * Svelte-specific ESLint configuration
 * This file contains all Svelte-related ESLint rules and configurations
 */

export const svelteRules = [
	...svelte.configs.recommended,
	...svelte.configs.prettier,
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],

		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		}
	}
];

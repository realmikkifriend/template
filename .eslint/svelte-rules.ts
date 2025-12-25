import svelte from 'eslint-plugin-svelte';
import ts from 'typescript-eslint';
import svelteConfig from '../svelte.config.js';
import type { ConfigWithExtends } from './types.ts';

/**
 * Svelte-specific ESLint configuration
 * This file contains all Svelte-related ESLint rules and configurations
 */

export const svelteRules: ConfigWithExtends[] = [
	...(svelte.configs.recommended as ConfigWithExtends[]),
	...(svelte.configs.prettier as ConfigWithExtends[]),
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],

		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteFeatures: {
					experimentalGenerics: true,
					runes: true
				},
				svelteConfig
			}
		},
		rules: {
			// disable rules as required by Svelte 5
			'functional/no-let': 'off',
			'@typescript-eslint/no-unused-vars': 'off',

			// limits on file length and code nesting
			'max-lines': ['warn', { max: 150, skipComments: true, skipBlankLines: true }] as const,
			'max-depth': ['warn', 2] as const,

			// buttons must have type=button|submit|reset
			'svelte/button-has-type': 'warn',

			// avoid ternary operators in class, use class:CLASSNAME
			'svelte/prefer-class-directive': 'warn',
			// avoid ternary operators in style="", use style:RULE (can have ternary)
			'svelte/prefer-style-directive': 'warn',

			// enforces attribute order
			'svelte/sort-attributes': 'warn',

			// always provide init values to stores
			'svelte/require-stores-init': 'warn',

			// no comments
			'no-inline-comments': 'warn',

			'no-restricted-syntax': [
				'warn',
				{
					selector: 'TSTypeAliasDeclaration, TSInterfaceDeclaration',
					message: 'Type/interface definitions are only allowed in src/types/.'
				},
				{
					selector: 'CallExpression[callee.property.name="addEventListener"]',
					message: 'Avoid using event listeners/dispatchers. Provide callback props instead.'
				},
				{
					selector: 'SvelteStyleElement',
					message: 'No <style> sections. Use Tailwind classes or `src/*.css` files.'
				},
				{
					selector: 'SvelteHTMLComment',
					message: 'Comments are not allowed in Svelte files.'
				}
			] as const,

			'no-restricted-imports': [
				'warn',
				{
					name: 'svelte/store',
					importNames: ['writable'],
					message: 'Avoid importing `writable`. Migrate state management to Svelte 5 runes.'
				},
				{
					name: 'svelte',
					importNames: ['createEventDispatcher'],
					message: 'Avoid using event listeners/dispatchers. Provide callback props instead.'
				}
			] as const
		}
	} as ConfigWithExtends
];

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
			'max-lines': ['warn', { max: 150, skipComments: true, skipBlankLines: true }],
			'max-depth': ['warn', 2],

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

			'no-restricted-syntax': [
				'warn',
				{
					selector: 'TSTypeAliasDeclaration, TSInterfaceDeclaration',
					message: 'Type/interface definitions are only allowed in src/types/.'
				},
				{
					selector: 'CallExpression[callee.property.name="addEventListener"]',
					message: 'Avoid using event listeners/dispatchers. Provide callback props instead.'
				}
			],

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
			]
		}
	}
];

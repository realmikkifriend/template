import ts from 'typescript-eslint';
import globals from 'globals';
import functional from 'eslint-plugin-functional';
import jsdoc from 'eslint-plugin-jsdoc';

/**
 * TypeScript-specific ESLint configuration
 * This file contains all TypeScript-related ESLint rules and configurations
 */

export const tsRules = [
	...ts.configs.recommendedTypeChecked,
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.mts'],
		// ignores: ['.eslint/**/*.ts', 'eslint.config.mts'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname
			},
			globals: globals.browser
		},
		rules: {
			// file length limit
			'max-lines': ['warn', { max: 130, skipComments: true, skipBlankLines: true }],

			// code nesting limit
			'max-depth': ['warn', 2],

			// functions have max of 3 parameters, consider passing an object
			'max-params': ['error', 3],

			// console.log() is for temporary use only
			'no-console': ['warn', { allow: ['error'] }],

			// typescript-eslint strongly recommend disabling no-undef on TypeScript
			// https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
			'no-undef': 'off',

			'no-restricted-syntax': [
				'warn',
				{
					selector: 'TSTypeAliasDeclaration, TSInterfaceDeclaration',
					message: 'Type/interface definitions are only allowed in src/types/.'
				}
			]
		}
	},

	// functional code
	functional.configs.all,
	// functional.configs.disableTypeChecked,
	{
		files: ['src/**/*.{js,ts,svelte}'],
		rules: {
			// limits function complexity
			complexity: ['warn', { max: 7 }],

			// limits function length
			'max-lines-per-function': ['warn', { max: 45, skipComments: true, skipBlankLines: true }],

			// disable rules I don't understand
			'functional/prefer-immutable-types': 'off'
		}
	},

	// JSDoc
	jsdoc.configs['flat/recommended-typescript'],
	jsdoc.configs['flat/contents-typescript'],
	{
		files: ['**/*.ts'],
		plugins: {
			jsdoc
		},
		rules: {
			'jsdoc/require-jsdoc': [
				'warn',
				{
					publicOnly: true,
					require: {
						ArrowFunctionExpression: true
					}
				}
			],
			'jsdoc/no-types': 'off',
			'jsdoc/require-param-type': 'warn'
		}
	}
];

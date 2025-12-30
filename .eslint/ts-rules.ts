import ts from 'typescript-eslint';
import globals from 'globals';
import functional from 'eslint-plugin-functional';
import jsdoc from 'eslint-plugin-jsdoc';
import type { ConfigWithExtends } from './types.ts';

/**
 * TypeScript-specific ESLint configuration
 * This file contains all TypeScript-related ESLint rules and configurations
 */

export const tsRules: ConfigWithExtends[] = [
	...(ts.configs.recommendedTypeChecked as ConfigWithExtends[]),
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.mts'],
		ignores: ['src/lib/types/**/*.ts'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname
			},
			globals: globals.browser
		},
		rules: {
			// file length limit
			'max-lines': ['warn', { max: 130, skipComments: true, skipBlankLines: true }] as const,

			// code nesting limit
			'max-depth': ['warn', 2] as const,

			// functions have max of 3 parameters, consider passing an object
			'max-params': ['error', 3] as const,

			// console.log() is for temporary use only
			'no-console': ['warn', { allow: ['error'] }] as const,

			// no deprecated code
			'@typescript-eslint/no-deprecated': 'warn',

			// no comments
			'no-inline-comments': 'warn',

			// typescript-eslint strongly recommend disabling no-undef on TypeScript
			// https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
			'no-undef': 'off',

			'no-restricted-syntax': [
				'warn',
				{
					selector: 'TSTypeAliasDeclaration, TSInterfaceDeclaration',
					message: 'Type/interface definitions are only allowed in src/types/.'
				}
			] as const
		}
	} as ConfigWithExtends,

	// functional code
	{
		...(functional.configs.all as ConfigWithExtends),
		ignores: ['**/*.spec.ts', 'src/lib/stores/**/*.ts']
	},
	// functional.configs.disableTypeChecked,
	{
		files: ['src/**/*.{js,ts,svelte}'],
		ignores: ['**/*.spec.ts'],
		rules: {
			// limits function complexity
			complexity: ['warn', { max: 7 }] as const,

			// limits function length
			'max-lines-per-function': [
				'warn',
				{ max: 45, skipComments: true, skipBlankLines: true }
			] as const,

			'functional/prefer-immutable-types': 'off',
			'functional/no-conditional-statements': 'off',
			'functional/functional-parameters': 'off'
		}
	} as ConfigWithExtends,

	// JSDoc
	jsdoc.configs['flat/recommended-typescript'] as ConfigWithExtends,
	jsdoc.configs['flat/contents-typescript'] as ConfigWithExtends,
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
			] as const,
			'jsdoc/no-types': 'off',
			'jsdoc/require-param-type': 'warn'
		}
	} as ConfigWithExtends
];

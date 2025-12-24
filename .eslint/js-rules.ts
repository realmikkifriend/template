import js from '@eslint/js';
import globals from 'globals';
import type { ConfigWithExtends } from './types.ts';

/**
 * JavaScript-specific ESLint configuration
 * This file contains all JavaScript-related ESLint rules and configurations
 */

export const jsRules: ConfigWithExtends[] = [
	js.configs.recommended as ConfigWithExtends,
	{
		files: ['**/*.{js,mjs,cjs}'],
		ignores: ['**/*.ts', '**/*.tsx', '**/*.svelte'],
		languageOptions: {
			sourceType: 'module',
			globals: globals.browser
		}
	} as ConfigWithExtends,
	{
		files: ['**/*.{js,mjs,cjs}'],
		rules: {
			// console.log() is for temporary use only
			'no-console': ['warn', { allow: ['error'] }] as const,

			// functions have max of 3 parameters, consider passing an object
			'max-params': ['error', 3] as const
		}
	} as ConfigWithExtends
];

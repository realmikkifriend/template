import ts from 'typescript-eslint';

/**
 * TypeScript-specific ESLint configuration
 * This file contains all TypeScript-related ESLint rules and configurations
 */

export const tsRules = [
	...ts.configs.recommended,
	{
		rules: {
			// typescript-eslint strongly recommend disabling no-undef on TypeScript
			// https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
			'no-undef': 'off'
		}
	}
];

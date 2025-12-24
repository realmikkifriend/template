import type { ConfigWithExtends } from './types.ts';

/**
 * Layers ESLint configuration
 * This file contains rules that restrict app layers
 */

export const layerRules: ConfigWithExtends[] = [
	{
		files: ['src/utils/**/*.ts'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['../services/*'],
							message: "Utilities can't use services."
						},
						{
							group: ['../stores/*'],
							message: "Utilities can't access stores."
						}
					]
				}
			] as const
		}
	} as ConfigWithExtends
];

import { fileURLToPath } from 'node:url';
import { defineConfig } from 'eslint/config';
import { includeIgnoreFile } from '@eslint/compat';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import { jsRules } from './.eslint/js-rules.ts';
import { tsRules } from './.eslint/ts-rules.ts';
import { svelteRules } from './.eslint/svelte-rules.ts';
import { layerRules } from './.eslint/layer-rules.ts';

// WHEN IN DOUBT, manually restart ESLint Server and Svelte Language Server

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	{ ignores: ['.eslint/', '**/*.config.{ts,mts}'] },
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } }
	},
	prettier,
	...jsRules,
	...tsRules,
	...svelteRules,
	...layerRules
);

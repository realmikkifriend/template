import { fileURLToPath } from 'node:url';
import { defineConfig } from 'eslint/config';
import { includeIgnoreFile } from '@eslint/compat';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import { jsRules } from './.eslint/js-rules.js';
import { tsRules } from './.eslint/ts-rules.js';
import { svelteRules } from './.eslint/svelte-rules.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } }
	},
	prettier,
	...jsRules,
	...tsRules,
	...svelteRules
);

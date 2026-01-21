export default {
	ignoreDependencies: ['@tailwindcss/typography', 'daisyui', '@iconify*'],
	ignoreBinaries: ['read'],
	ignoreUnresolved: ['.*'],
	compilers: {
		css: (text: string) =>
			[...text.matchAll(/(?:@(?:import|plugin)\s+['"]([^'"]+)['"])/g)]
				.join('\n')
				.replace('plugin', 'import')
	},
	workspaces: {
		'.': {
			entry: [
				'svelte.config.ts',
				'src/routes/**/+*.svelte',
				'src/routes/**/+*.ts',
				'src/app.html',
				'src/lib/styles/app.css'
			],
			project: ['**/*.ts', '**/*.svelte', '**/*.css']
		}
	}
};

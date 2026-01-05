export default {
	project: ['**/*.ts', '**/*.svelte', '**/*.css'],
	ignoreExportsUsedInFile: {
		function: true,
		interface: true,
		type: true
	},
	ignoreDependencies: ['tailwindcss', '@tailwindcss/forms', '@tailwindcss/typography', 'daisyui'],
	compilers: {
		css: (text: string) =>
			[...text.matchAll(/(?:@(?:import|plugin)\s+"([^"]+)")/g)]
				.join('\n')
				.replace('plugin', 'import')
	}
};

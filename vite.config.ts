import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		visualizer({
			emitFile: true,
			filename: 'stats.html'
		})
	],
	build: {
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					if (id.includes('node_modules')) {
						if (id.includes('@iconify')) return 'iconify';
						if (id.includes('svelte')) return 'svelte';
						return 'vendor';
					}
				}
			},
			onLog(level, log, handler) {
				if (log.message?.includes('are imported from external module')) {
					return;
				}
				handler(level, log);
			}
		}
	}
});

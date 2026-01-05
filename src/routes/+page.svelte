<script lang="ts">
	import { exampleCount, incrementCount, resetCount } from '$lib/stores/example.svelte';
	import WeatherSection from './weather/WeatherSection.svelte';
</script>

<h1>Welcome to SvelteKit</h1>

<p>This app is ready to customize.</p>

<h2>Persistent Stores</h2>

<p>
	Example value: {exampleCount.current}
	<button onclick={incrementCount} type="button">Increment</button>
	<button onclick={resetCount} type="reset">Reset</button>
</p>

<h2>Environmental Variables</h2>

<p>
	<strong>
		{#if import.meta.env.VITE_EXAMPLE_VAR}
			{import.meta.env.VITE_EXAMPLE_VAR}
		{:else}
			<span class="text-red-600">Environmental variables are not set up. Is there a .env file?</span
			>
		{/if}
	</strong>
</p>

<h2>Example API Call</h2>

<WeatherSection />

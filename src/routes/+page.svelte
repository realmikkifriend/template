<script lang="ts">
	import WeatherSection from '$lib/components/demo/weather/WeatherSection.svelte';
	import VariablesSection from '$lib/components/demo/variables/VariablesSection.svelte';
</script>

<section>
	<h2>Welcome to My SvelteKit Template</h2>

	<p>This <a href="https://svelte.dev/" target="_blank">Svelte</a> app is ready to customize.</p>
</section>

<section>
	<h2>Variables</h2>

	<VariablesSection />
</section>

<section>
	<h2>Example API Call</h2>

	<WeatherSection />
</section>

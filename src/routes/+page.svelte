<script lang="ts">
	import { exampleCount, incrementCount, resetCount } from '$lib/stores/example.svelte';
	import WeatherSection from './weather/WeatherSection.svelte';
</script>

<section>
	<h2>Welcome to My SvelteKit Template</h2>

	<p>This app is ready to customize.</p>
</section>

<section>
	<h2>Persistent Stores</h2>

	<div class="stat">
		<div class="stat-title">Example Value</div>
		<div class="stat-value">{exampleCount.current}</div>
		<div class="stat-actions">
			<button class="btn btn-sm btn-success" onclick={incrementCount} type="button"
				>Increment</button
			>
			<button class="btn btn-dash btn-sm" onclick={resetCount} type="reset">Reset</button>
		</div>
	</div>
</section>

<section>
	<h2>Environmental Variables</h2>

	<p>
		<strong>
			{#if import.meta.env.VITE_EXAMPLE_VAR}
				{import.meta.env.VITE_EXAMPLE_VAR}
			{:else}
				<span class="text-error-content">
					Environmental variables are not set up. Is there a .env file?
				</span>
			{/if}
		</strong>
	</p>
</section>

<section>
	<h2>Example API Call</h2>

	<WeatherSection />
</section>

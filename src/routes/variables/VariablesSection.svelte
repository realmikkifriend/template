<script>
	import { exampleCount, incrementCount, resetCount } from '$lib/stores/example.svelte';
</script>

<div class="flex flex-row gap-10">
	<div>
		<h3>Persistent Stores</h3>
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
	</div>

	<div>
		<h3>Environmental Variables</h3>
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
	</div>
</div>

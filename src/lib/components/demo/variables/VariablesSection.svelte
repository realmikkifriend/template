<script>
	import { exampleCount, incrementCount, resetCount } from '$lib/stores/example.svelte';
</script>

<div class="row-container">
	<section>
		<div class="icon-header-container">
			<span class="iconify material-symbols--database"></span>
			<h3>Persistent Stores</h3>
		</div>
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

	<section class="collapse">
		<div class="icon-header-container">
			<span class="iconify material-symbols--source-environment-rounded"></span>
			<h3>Environmental Variables</h3>
		</div>
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
</div>

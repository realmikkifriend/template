<h1>Welcome to SvelteKit</h1>

<p>This app is ready to customize.</p>

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

<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>

<h1>{page.status}</h1>

<p>Error: {page.error?.message}</p>

<p><a href={resolve('/')}>&larr; Go home</a></p>

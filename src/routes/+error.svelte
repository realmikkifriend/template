<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<h1>{page.status}</h1>

<p>Error: {page.error?.message}</p>

<p><a href={resolve('/')}>&larr; Go home</a></p>

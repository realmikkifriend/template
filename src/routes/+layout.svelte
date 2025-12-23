<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<svelte:head><link href={favicon} rel="icon" /></svelte:head>

{#if children}
	{@render children()}
{/if}

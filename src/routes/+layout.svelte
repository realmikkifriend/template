<script lang="ts">
	import '$lib/styles/app.css';
	import favicon from '$lib/assets/favicon.svg';
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<svelte:head>
	<link href={favicon} rel="icon" />
	<link href="https://templatesite.com/" rel="canonical" />
	<meta content="Template App" property="og:site_name" />
	<title>App Homepage</title>
	<meta content="Home" property="og:title" />
	<meta name="description" content="A template app to jump-start development of new projects." />
</svelte:head>

<header><h1>Svelte 5 Template Repo</h1></header>

{#if children}
	<main>{@render children()}</main>
{/if}

<footer>created 2025-2026</footer>

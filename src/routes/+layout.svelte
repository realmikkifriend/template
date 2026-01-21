<script lang="ts">
	import '$lib/styles/app.css';
	import { onMount } from 'svelte';
	// import favicon from '$lib/assets/favicon.svg';
	import { icons } from '@iconify-json/octicon';
	import { getIconData, iconToSVG, iconToHTML, replaceIDs } from '@iconify/utils';
	import { themeChange } from 'theme-change';
	import { shortcut } from '@svelte-put/shortcut';
	import SettingsMenu from '$lib/components/SettingsMenu.svelte';
	import Notifications from '$lib/components/Notifications.svelte';
	import type { IconifyIcon } from '@iconify/types';
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();

	const iconName: string = 'repo-template-24';
	const iconData: IconifyIcon | null = getIconData(icons, iconName);
	const renderData = iconToSVG(iconData!, {
		height: 'unset'
	});

	let favicon: string = $state('');

	$effect(() => {
		const attributes = {
			...renderData.attributes,
			color: getComputedStyle(document.body).getPropertyValue('--color-accent-content')
		};
		favicon = iconToHTML(replaceIDs(renderData.body), attributes);
	});
	onMount(() => {
		themeChange(false);
	});
</script>

<svelte:head>
	<link href={'data:image/svg+xml,' + encodeURIComponent(favicon || '')} rel="icon" />
	<link href="https://templatesite.com/" rel="canonical" />
	<link href="site.webmanifest" rel="manifest" />
	<meta content="Template App" property="og:site_name" />
	<title>App Homepage</title>
	<meta content="Home" property="og:title" />
	<meta name="description" content="A template app to jump-start development of new projects." />
</svelte:head>

<header>
	<span class="iconify octicon--repo-template-24"></span>
	<h1>Svelte 5 Template Repo</h1>
</header>

<div class="right-corner">
	<SettingsMenu />
</div>

<Notifications>
	<main>
		{#if children}
			{@render children()}
		{/if}
	</main>
</Notifications>

<footer>created 2025-2026</footer>

<svelte:window
	use:shortcut={{
		trigger: [
			{
				key: '?',
				callback: () => {
					document.body.classList.toggle('show-kbd');
				},
				modifier: 'shift'
			}
		]
	}}
/>

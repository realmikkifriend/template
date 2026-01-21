<script lang="ts">
	import AboutModal from '$lib/components/AboutModal.svelte';
	import { shortcut } from '@svelte-put/shortcut';

	let modal_about: HTMLDialogElement | undefined = $state();
</script>

<ul
	id="popover-settings"
	style:position-anchor="--anchor-settings"
	class="menu dropdown rounded-box"
	popover
>
	<strong>Theme</strong>
	<select data-choose-theme>
		<option value="light">Default (Light)</option>
		<option value="dark">Dark</option>
		<option value="abyss">Abyss</option>
		<option value="aqua">Aqua</option>
		<option value="black">Black</option>
		<option value="coffee">Coffee</option>
		<option value="dracula">Dracula</option>
		<option value="forest">Forest</option>
		<option value="luxury">Luxury</option>
		<option value="night">Night</option>
		<option value="sunset">Sunset</option>
		<option value="synthwave">Synthwave</option>
	</select>

	<div class="kbd-join">
		<button class="btn btn-link" onclick={() => modal_about?.showModal()} type="button">
			About
		</button>
		<kbd>a</kbd>
	</div>
</ul>
<button
	style:anchor-name="--anchor-settings"
	class="btn btn-link"
	popovertarget="popover-settings"
	title="Settings"
	type="button"
>
	<span class="iconify octicon--sliders-16"></span>
</button>

<svelte:window
	use:shortcut={{
		trigger: [
			{
				key: 'a',
				callback: () => {
					modal_about?.showModal();
				},
				modifier: false
			}
		]
	}}
/>

<AboutModal bind:modal_about />

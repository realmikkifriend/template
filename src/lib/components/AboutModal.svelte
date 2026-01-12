<script lang="ts">
	import { resolve } from '$app/paths';

	let { modal_about = $bindable() }: { modal_about: HTMLDialogElement } = $props();
</script>

<dialog bind:this={modal_about} id="modal_about" class="modal">
	<div class="modal-box">
		<div class="right-corner modal-action">
			<form method="dialog">
				<button class="btn iconify octicon--x-12" title="close" type="submit"></button>
			</form>
		</div>
		<h2>About</h2>
		<p>This is a template repo.</p>
	</div>
	<a
		class="modal-backdrop"
		aria-label="modal-backdrop"
		href={resolve('/')}
		onclick={(e) => {
			e.preventDefault();
			modal_about.close();
		}}
		onkeyup={(e) => {
			e.preventDefault();
		}}
		role="dialog"
	>
		&nbsp;
	</a>
</dialog>

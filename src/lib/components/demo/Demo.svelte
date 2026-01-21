<script lang="ts">
	import WeatherSection from '$lib/components/demo/weather/WeatherSection.svelte';
	import VariablesSection from '$lib/components/demo/variables/VariablesSection.svelte';
</script>

<div class="tabs-lift tabs tabs-lg">
	<input name="demo_tabs" class="tab" aria-label="Variables" checked type="radio" />
	<div class="tab-content"><VariablesSection /></div>

	<input name="demo_tabs" class="tab" aria-label="Example API Call" type="radio" />
	<div class="tab-content"><WeatherSection /></div>
</div>

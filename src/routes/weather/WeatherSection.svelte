<script lang="ts">
	// import { toggleSkeleton, getWeather } from './weather.service';
	import type { WeatherData } from '$lib/types/weather';

	let locationInput = $state() as HTMLInputElement;
	let weatherData = $state<WeatherData | null>();

	/**
	 * Toggles skeleton class on weather field elements.
	 * @param add - Whether to add or remove the skeleton class
	 */
	function toggleSkeleton(add: boolean): void {
		const weatherElements = {
			field: document.querySelector('#weatherField input'),
			button: document.querySelector('#weatherField button')
		};
		if (weatherElements.field) {
			weatherElements.field.classList[add ? 'add' : 'remove']('skeleton');
		}
		if (weatherElements.button) {
			weatherElements.button.classList[add ? 'add' : 'remove']('skeleton');
		}
	}

	/**
	 * Handles form submission for location input.
	 * @param locationInput - The location or ZIP code to submit
	 * @returns Weather info.
	 */
	async function getWeather(locationInput: HTMLInputElement): Promise<void> {
		toggleSkeleton(true);

		const response = await fetch(`/weather/${locationInput.value}`);

		const alert = document.querySelector('#weatherField .alert-warning');
		if (response.status === 404) {
			if (alert) alert.classList.remove('hidden');
			weatherData = null;
		} else {
			if (alert) alert.classList.add('hidden');
			weatherData = (await response.json()) as WeatherData;
		}

		toggleSkeleton(false);
	}
</script>

<fieldset id="weatherField" class="fieldset">
	<legend class="fieldset-legend">Weather</legend>
	<div class="join">
		<div class="flex flex-col">
			<input
				bind:this={locationInput}
				class="input-bordered validator input w-full max-w-xs"
				minlength="4"
				pattern="[A-Za-z0-9 ]*"
				placeholder="Enter location or ZIP code"
				required
				title="Must be 4+ characters, numbers or letters only."
				type="text"
			/>
			<div class="validator-hint h-fit">Must be 4+ characters, numbers or letters only.</div>
			<div class="alert hidden alert-soft alert-warning" role="alert">
				No weather data for this location!
			</div>
		</div>
		<button class="btn btn-primary" onclick={() => getWeather(locationInput)} type="submit">
			Get Weather
		</button>
	</div>
</fieldset>

{#if weatherData}
	<div class="rounded-lg bg-base-200 p-4">
		<strong>
			Weather for {weatherData.nearest_area[0].areaName[0].value}, {weatherData.nearest_area[0]
				.region[0].value}
		</strong>
		<p>{weatherData.current_condition[0].weatherDesc[0].value}</p>
		<p>{weatherData.current_condition[0].temp_F}°F ({weatherData.current_condition[0].temp_C}°C)</p>
		<p>
			<em>feels like </em>
			{weatherData.current_condition[0].FeelsLikeF}°F ({weatherData.current_condition[0]
				.FeelsLikeC}°C)
		</p>
		<p>{weatherData.current_condition[0].humidity}% humidity</p>
		<p>
			{weatherData.current_condition[0].windspeedMiles} mph wind ({weatherData.current_condition[0]
				.windspeedKmph} km/h)
		</p>
	</div>
{/if}

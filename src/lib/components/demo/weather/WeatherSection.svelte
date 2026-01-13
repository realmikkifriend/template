<script lang="ts">
	import { getWeatherData } from './data.remote';
	import type { WeatherData } from '$lib/types/weather';
	import { getNotificationsContext } from '$lib/components/Notifications';

	let locationInput = $state() as HTMLInputElement;
	let weatherData = $state<WeatherData | null>();
	const notifications = getNotificationsContext();

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

		const result = await getWeatherData(locationInput.value);

		if (result.error) {
			notifications.addNotification({
				message: 'Error while fetching or no weather data for this location!',
				type: 'error',
				timeout: 5000
			});
			weatherData = null;
		} else if (result.data) {
			notifications.addNotification({
				message: `Weather data fetched successfully for ${result.data.nearest_area[0].areaName[0].value}`,
				type: 'success',
				timeout: 3000
			});
			weatherData = result.data;
		}

		toggleSkeleton(false);
	}
</script>

<fieldset id="weatherField" class="fieldset max-w-80">
	<div class="icon-header-container">
		<span class="iconify material-symbols--partly-cloudy-day-outline-rounded"></span>
		<legend class="fieldset-legend">Weather</legend>
	</div>
	<div class="join">
		<div class="flex flex-col">
			<input
				bind:this={locationInput}
				class="input-bordered validator input w-full"
				minlength="4"
				pattern="[A-Za-z0-9 ]*"
				placeholder="Enter location or ZIP code"
				required
				title="Must be 4+ characters, numbers or letters only."
				type="text"
			/>
			<div class="validator-hint h-fit">Must be 4+ characters, numbers or letters only.</div>
		</div>
		<button class="btn btn-primary" onclick={() => getWeather(locationInput)} type="submit">
			Get Weather
		</button>
	</div>
</fieldset>

{#if weatherData?.nearest_area[0]?.areaName[0]?.value}
	<div class="rounded-lg bg-base-200 p-4">
		<strong>
			Weather for {weatherData.nearest_area[0].areaName[0].value}, {weatherData.nearest_area[0]
				.region[0].value}
		</strong>
		<p>
			{weatherData.current_condition[0].weatherDesc[0].value}
		</p>
		<p>
			{weatherData.current_condition[0].temp_F}°F ({weatherData.current_condition[0].temp_C}°C),
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

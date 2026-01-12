import { query } from '$app/server';
import type { WeatherData, WeatherResult } from '$lib/types/weather';

/**
 * Fetches weather data for a given location using the wttr.in API.
 * @param location - The location or ZIP code to fetch weather for
 * @returns Promise resolving to WeatherResult containing either data or error
 */
export const getWeatherData = query(
	'unchecked',
	async (location: string): Promise<WeatherResult> => {
		const apiUrl = `https://wttr.in/${encodeURIComponent(location)}?0&format=j1`;
		const response = await fetch(apiUrl);

		if (!response.ok) {
			return {
				error: {
					status: response.status,
					message: `API request failed with status ${response.status}`
				}
			};
		}

		const data = (await response.json()) as WeatherData;
		return { data };
	}
);

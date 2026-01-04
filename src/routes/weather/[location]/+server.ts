import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import type { WeatherData } from '$lib/types/weather';

/**
 * Fetches weather data for a given location from wttr.in API.
 * @param {RequestEvent} event - SvelteKit request event
 * @returns {Promise<Response>} JSON response with weather data
 */
export async function GET(event: RequestEvent) {
	const location = event.params.location;

	if (!location) {
		return json({ error: 'Location parameter is required' }, { status: 400 });
	}

	const apiUrl = `https://wttr.in/${encodeURIComponent(location)}?format=j1`;
	const response = await fetch(apiUrl);

	if (!response.ok) {
		return json({ error: `API request failed with status ${response.status}` }, { status: 500 });
	}

	const data = (await response.json()) as WeatherData;
	return json(data);
}

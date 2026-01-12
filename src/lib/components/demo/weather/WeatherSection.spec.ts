import { test, expect } from '@playwright/test';
import type { Locator } from '@playwright/test';

const mockWeatherData = {
	type: 'result',
	result:
		'[ { "data": 1 }, { "current_condition": 2, "nearest_area": 30 }, [3], { "FeelsLikeC": 4, "FeelsLikeF": 5, "cloudcover": 6, "humidity": 7, "localObsDateTime": 8, "observation_time": 9, "precipInches": 10, "precipMM": 11, "pressure": 12, "pressureInches": 13, "temp_C": 14, "temp_F": 15, "uvIndex": 16, "visibility": 17, "visibilityMiles": 18, "weatherCode": 19, "weatherDesc": 20, "weatherIconUrl": 23, "winddir16Point": 26, "winddirDegree": 27, "windspeedKmph": 28, "windspeedMiles": 29 }, "12", "54", "100", "93", "2026-01-08 09:01 PM", "03:01 AM", "0.4", "9.0", "998", "29", "14", "58", "0", "3", "1", "386", [21], { "value": 22 }, "Rain with thunderstorm, mist", [24], { "value": 25 }, "", "S", "180", "28", "17", [31], { "areaName": 32, "country": 35, "latitude": 38, "longitude": 39, "population": 40, "region": 41, "weatherUrl": 44 }, [33], { "value": 34 }, "Chicago", [36], { "value": 37 }, "United States of America", "41.850", "-87.650", "2841952", [42], { "value": 43 }, "Illinois", [45], { "value": 25 } ] '
};

const mockErrorData = {
	type: 'result',
	result: '[{"error":1},{"status":2,"message":3},404,"API request failed with status 404"]'
};

test.describe('WeatherSection Component', () => {
	let input: Locator;
	let button: Locator;

	test.beforeEach(async ({ page }) => {
		await page.goto('/');
		input = page.locator('input[placeholder="Enter location or ZIP code"]');
		button = page.locator('button:has-text("Get Weather")');
	});

	test('should render weather form w/validation, and no data', async ({ page }) => {
		await expect(input).toBeVisible();
		await expect(input).toHaveAttribute('required');
		await expect(input).toHaveAttribute('minlength', '4');
		await expect(button).toBeVisible();
		await expect(page.locator('text=Weather for')).not.toBeVisible();
	});

	test('should error on failed call, then display weather data for valid location', async ({
		page
	}) => {
		await page.route('**/getWeatherData*', async (route) => {
			await route.fulfill({
				status: 200,
				contentType: 'application/json',
				json: mockErrorData
			});
		});

		await input.fill('InvalidLocation123');
		await button.click();

		await expect(page.locator('.alert-warning')).toBeVisible();
		await expect(page.locator('text=Weather for')).not.toBeVisible();

		await page.route('**/getWeatherData*', async (route) => {
			await route.fulfill({
				status: 200,
				contentType: 'application/json',
				body: JSON.stringify(mockWeatherData)
			});
		});

		await input.fill('Chicago');
		await button.click();

		await expect(page.locator('.alert-warning')).not.toBeVisible();
		await expect(page.locator('text=Weather for Chicago, Illinois')).toBeVisible();
	});

	test('should show skeleton loading state during API call', async ({ page }) => {
		await page.route('**/getWeatherData*', async (route) => {
			await new Promise((resolve) => setTimeout(resolve, 500));
			await route.fulfill({
				status: 200,
				contentType: 'application/json',
				body: JSON.stringify(mockWeatherData)
			});
		});
		await input.fill('Chicago');
		await button.click();

		await expect(page.locator('#weatherField input.skeleton')).toBeVisible();
		await expect(page.locator('#weatherField button.skeleton')).toBeVisible();

		await expect(page.locator('text=Weather for Chicago, Illinois')).toBeVisible();
		await expect(page.locator('#weatherField input.skeleton')).not.toBeVisible();
		await expect(page.locator('#weatherField button.skeleton')).not.toBeVisible();
	});
});

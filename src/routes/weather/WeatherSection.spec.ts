import { test, expect } from '@playwright/test';
import type { Locator } from '@playwright/test';

const mockWeatherData = {
	nearest_area: [
		{
			areaName: [{ value: 'Chicago' }],
			region: [{ value: 'Illinois' }]
		}
	],
	current_condition: [
		{
			weatherDesc: [{ value: 'Sunny' }],
			temp_F: 75,
			temp_C: 24,
			FeelsLikeF: 78,
			FeelsLikeC: 26,
			humidity: 65,
			windspeedMiles: 10,
			windspeedKmph: 16
		}
	]
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
		test.slow();
		await input.fill('InvalidLocation123');
		await button.click();

		await expect(
			page.locator(
				'.alert-warning:has-text("Error while fetching or no weather data for this location!")'
			)
		).toBeVisible({ timeout: 10_000 });
		await expect(page.locator('text=Weather for')).not.toBeVisible();

		await page.route('**/wttr.in/*', async (route) => {
			await route.fulfill({
				status: 200,
				contentType: 'application/json',
				body: JSON.stringify(mockWeatherData)
			});
		});

		await input.fill('Chicago');
		await button.click();

		await expect(page.locator('.alert-warning')).not.toBeVisible({ timeout: 10_000 });
		await expect(page.locator('text=Weather for Chicago, Illinois')).toBeVisible();
	});

	test('should show skeleton loading state during API call', async ({ page }) => {
		await page.route('**/wttr.in/*', (route) => {
			setTimeout(() => {
				void route.fulfill({
					status: 200,
					contentType: 'application/json',
					body: JSON.stringify(mockWeatherData)
				});
			}, 500);
		});

		await input.fill('Chicago');
		await button.click();

		await expect(page.locator('#weatherField input.skeleton')).toBeVisible();
		await expect(page.locator('#weatherField button.skeleton')).toBeVisible();

		await expect(page.locator('text=Weather for Chicago, Illinois')).toBeVisible({
			timeout: 10_000
		});
		await expect(page.locator('#weatherField input.skeleton')).not.toBeVisible();
		await expect(page.locator('#weatherField button.skeleton')).not.toBeVisible();
	});
});

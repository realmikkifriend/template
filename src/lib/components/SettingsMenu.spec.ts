import { test, expect } from '@playwright/test';
import type { Locator } from '@playwright/test';

test.describe('SettingsMenu Component', () => {
	let themeSelect: Locator;
	let settingsButton: Locator;

	test.beforeEach(async ({ page }) => {
		await page.goto('/');
		settingsButton = page.locator('button[title="Settings"]');
		await settingsButton.click();

		const popover = page.locator('#popover-settings');
		await expect(popover).toBeVisible();

		themeSelect = page.locator('select[data-choose-theme]');
	});

	test('should render theme select menu with options', async ({ page }) => {
		await expect(themeSelect).toBeVisible();
		await expect(themeSelect).toHaveCount(1);

		const expectedThemes = ['Default (Dark)', 'Synthwave'];

		for (const theme of expectedThemes) {
			await expect(
				page.locator(`select[data-choose-theme] option:has-text("${theme}")`)
			).toHaveCount(1);
		}
	});

	test('should change background color when selecting a different theme', async ({ page }) => {
		const pageElement = page.locator('html');
		const initialBackgroundColor = await pageElement.evaluate((el) => {
			return window.getComputedStyle(el).getPropertyValue('background-color');
		});

		await themeSelect.selectOption('synthwave');

		const newBackgroundColor = await pageElement.evaluate((el) => {
			return window.getComputedStyle(el).getPropertyValue('background-color');
		});

		expect(newBackgroundColor).not.toBe(initialBackgroundColor);
	});
});

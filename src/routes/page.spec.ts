import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import type { Locator } from '@playwright/test';

test.describe('page loads', () => {
	test('home page has h1', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('h1')).toBeVisible();
	});
});

test.describe('page meets accessibility standards', () => {
	test("full page scan doesn't find accessibility issues", async ({ page }) => {
		await page.goto('/');
		const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
		expect(accessibilityScanResults.violations).toEqual([]);
	});
});

test.describe('keyboard shortcuts work', () => {
	let aboutLink: Locator;
	let aboutKbd: Locator;
	let settingsButton: Locator;

	test.beforeEach(async ({ page }) => {
		await page.goto('/');
		settingsButton = page.locator('button[title="Settings"]');
		await settingsButton.click();

		const popover = page.locator('#popover-settings');
		await expect(popover).toBeVisible();

		aboutLink = page.locator('.kbd-join button:has-text("About")');
		aboutKbd = page.locator('.kbd-join:has(button:has-text("About")) kbd');
	});

	test('should show kbd hint when hovering', async () => {
		await expect(aboutKbd).not.toBeVisible();

		await aboutLink.hover();

		await expect(aboutKbd).toBeVisible();
	});

	test('should show kbd hint when pressing ? keyboard shortcut', async ({ page }) => {
		await expect(aboutKbd).not.toBeVisible();

		await page.keyboard.press('Shift+?');

		await expect(aboutKbd).toBeVisible();
	});
});

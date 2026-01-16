import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

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

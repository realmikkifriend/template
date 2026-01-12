import { test, expect } from '@playwright/test';
import type { Locator } from '@playwright/test';

test.describe('AboutModal Component', () => {
	let modal: Locator;
	let closeButton: Locator;
	let backdrop: Locator;

	test.beforeEach(async ({ page }) => {
		await page.goto('/');

		const settingsButton = page.locator('button[title="Settings"]');
		await settingsButton.click();

		const aboutButton = page.locator('button:has-text("About")');
		await aboutButton.click();

		modal = page.locator('#modal_about');
		closeButton = page.locator('#modal_about button[title="close"]');
		backdrop = page.locator('#modal_about .modal-backdrop');
	});

	test('should render modal with working close button', async ({ page }) => {
		await expect(modal).toBeVisible();
		await expect(page.locator('#modal_about h2:has-text("About")')).toBeVisible();
		await expect(closeButton).toBeVisible();

		await closeButton.click();

		await expect(modal).not.toBeVisible();
	});

	test('should close modal when backdrop is clicked', async () => {
		await expect(modal).toBeVisible();
		await expect(backdrop).toBeVisible();

		await backdrop.evaluate((element) => {
			const event = new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
				view: window
			});
			element.dispatchEvent(event);
		});

		await expect(modal).not.toBeVisible();
	});
});

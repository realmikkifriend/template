import { expect, test } from '@playwright/test';
import type { Locator } from '@playwright/test';

test.describe('VariablesSection', () => {
	let countValue: Locator;
	let incrementButton: Locator;
	let resetButton: Locator;

	const getCountValue = async (): Promise<number> => {
		const value = await countValue.textContent();
		return value ? parseInt(value) : 0;
	};

	test.beforeEach(async ({ page }) => {
		await page.goto('/');
		countValue = page.locator('.stat-value');
		incrementButton = page.getByRole('button', { name: 'Increment' });
		resetButton = page.getByRole('button', { name: 'Reset' });
	});

	test('should render both sections', async ({ page }) => {
		const persistentSection = page.getByRole('heading', { name: 'Persistent Stores' });
		const envSection = page.getByRole('heading', { name: 'Environmental Variables' });

		await expect(persistentSection).toBeVisible();
		await expect(envSection).toBeVisible();
	});

	test('should increment count when increment button is clicked', async () => {
		await expect(countValue).toBeVisible();

		const initialNumber = await getCountValue();

		await incrementButton.click();
		const afterFirstNumber = await getCountValue();

		expect(afterFirstNumber).toBe(initialNumber + 1);
	});

	test('should persist count value after page reload', async ({ page }) => {
		await incrementButton.click();
		await incrementButton.click();

		const beforeReloadNumber = await getCountValue();

		await page.reload();

		await countValue.waitFor();

		const afterReloadNumber = await getCountValue();

		expect(afterReloadNumber).toBe(beforeReloadNumber);
	});

	test('should reset count when reset button is clicked', async () => {
		await incrementButton.click();
		await incrementButton.click();
		await incrementButton.click();

		await resetButton.click();
		const afterResetNumber = await getCountValue();

		expect(afterResetNumber).toBe(1);
	});

	test('should show environment variable message when set', async ({ page }) => {
		const envMessage = page.getByText('Environment variables are set up.');
		await expect(envMessage).toBeVisible();
	});
});

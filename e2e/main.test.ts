import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
});

test('design gallery expected designs', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('[data-test-id="design-gallery"] > div')).toHaveCount(3);
});

test('designs page expected designs', async ({ page }) => {
	await page.goto('/designs');
	await expect(await page.locator('[data-test-id="design-gallery"] > div').count()).toBeGreaterThan(
		0
	);
});

test('design page has expected h1', async ({ page }) => {
	await page.goto('/touch-grass');
	await expect(page.locator('h1')).toBeVisible();
});

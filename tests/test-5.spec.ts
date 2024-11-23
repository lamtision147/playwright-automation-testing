import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://seitrace.com/');
  await page.goto('https://seitrace.com/?chain=pacific-1');
  await page.getByRole('button', { name: 'Resources' }).click();
  await page.getByLabel('Insights Docs link').click();
  await page.getByRole('button', { name: 'Authorize' }).click();
  await page.getByLabel('Value:').fill('abc');
  await page.getByLabel('Apply credentials').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByLabel('get /api/v2/addresses').click();
  await page.getByRole('button', { name: 'Try it out' }).click();
  await page.getByPlaceholder('address', { exact: true }).click();
  await page.getByPlaceholder('address', { exact: true }).press('ControlOrMeta+a');
  await page.getByPlaceholder('address', { exact: true }).fill('abc');
  await page.getByRole('button', { name: 'Execute' }).click();
});
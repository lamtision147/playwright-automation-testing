import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://seitrace.com/insights-docs');
  await page.goto('https://seitrace.com/insights-docs?chain=pacific-1');
  await page.getByRole('button', { name: 'Authorize' }).click();
  await page.getByLabel('Value:').click();
  await page.getByLabel('Value:').fill('477fc9a5-53ad-4248-84e9-46477dbf7c64');
  await page.getByLabel('Apply credentials').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'GET /api/v2/addresses [50' }).click();
  await page.getByRole('button', { name: 'Try it out' }).click();
  await page.getByPlaceholder('address', { exact: true }).click();
  await page.getByPlaceholder('address', { exact: true }).fill('0x56F3D3892B0e22DbFb8d78A47369D7D72b1d6C32');
  await page.getByRole('button', { name: 'Execute' }).click();
  await page.getByRole('cell', { name: '200' }).first().click();
  await page.getByRole('cell', { name: '200' }).first().click();
  await page.getByRole('cell', { name: '200' }).first().click();
  await page.getByRole('cell', { name: '200' }).first().click();
});
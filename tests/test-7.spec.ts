import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://remix.ethereum.org/');
  await page.goto('https://remix.ethereum.org/#lang=en');
  await page.goto('https://remix.ethereum.org/#lang=en&optimize=false');
  await page.goto('https://remix.ethereum.org/#lang=en&optimize=false&runs=200');
  await page.goto('https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null');
  await page.goto('https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.26+commit.8a97fa7a.js');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('button', { name: 'Learning - discovering web3' }).click();
  await page.getByRole('button', { name: '×' }).click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('scripts').click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('tests').click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByText('scripts').click({
    button: 'right'
  });
  await page.getByText('New File').click();
  await page.locator('[data-test-id="virtuoso-item-list"]').getByRole('textbox').fill('erc721.sol');
  await page.locator('[data-test-id="virtuoso-item-list"]').getByRole('textbox').press('Enter');
  await page.locator('.d-block > .monaco-editor > .overflow-guard > .monaco-scrollable-element > .lines-content > .view-lines').click();
  await page.getByLabel('Editor content;Press Alt+F1').fill('asdadadassssss');
  await page.locator('div').filter({ hasText: /^asdadadassssss$/ }).nth(3).click();
  await page.getByLabel('Editor content;Press Alt+F1').press('ControlOrMeta+s');
  await page.getByRole('img', { name: 'solidity' }).click();
  await page.locator('#verticalIconsKindudapp').click();
  await page.getByRole('button', { name: 'Remix VM (Cancun)  ' }).click();
  await page.getByRole('button', { name: 'WalletConnect' }).click();
  await page.locator('#plugin-walletconnect').contentFrame().getByRole('button', { name: 'Connect Wallet' }).click();
  await page.locator('#plugin-walletconnect').contentFrame().getByRole('button', { name: 'MetaMask MetaMask' }).click();
});
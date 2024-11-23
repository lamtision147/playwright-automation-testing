import { BrowserContext, test as baseTest, expect } from "@playwright/test";
import { setupMetaMask } from '../../dapp/metamaskSetup';
import { SELECTORS } from '../../xpath/authen/pitConnectWallet';
import dappwright, { Dappwright } from "@tenkeylabs/dappwright";
import fs from 'fs';

export const test = baseTest.extend<{
  context: BrowserContext;
  wallet: Dappwright;
}>({
  context: async ({}, use) => {
    const { wallet, context } = await setupMetaMask();
    await use(context);
  },

  wallet: async ({ context }, use) => {
    const metamask = await dappwright.getWallet("metamask", context);
    await use(metamask);
  },
});

const saveToLogFile = (actualStatus: string, depositTx: string) => {
  const currentTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' });

  const logEntry = `Timestamp: ${currentTime}, Status: ${actualStatus}, Deposit Tx: ${depositTx}\n`;
  fs.appendFileSync('pitWithdraw.txt', logEntry);
};

test.describe('Test suit of withdraw from the Vault', () => {
  test("Case 1: Withdraw WSEI from the Vault", async ({ wallet, page }) => {
    await page.goto("https://pit.finance/vaults/0x63E37028c1740303e8456962E6ddf98359FE0BDc");
    await page.click(SELECTORS.connectButton);
    //await page.getByRole('button', { name: 'MetaMask' }).click();
    await page.click(SELECTORS.metamaskButton);
    await wallet.approve();
    //wallet.sign();

    await page.waitForSelector(SELECTORS.withdrawTab);
    await page.click(SELECTORS.withdrawTab);
    await page.waitForSelector(SELECTORS.withdrawField);
    await page.fill(SELECTORS.withdrawField, '0.01');

    await page.waitForSelector(SELECTORS.withdrawBtn);
    await page.click(SELECTORS.withdrawBtn);

    await wallet.confirmTransaction();

    await page.waitForSelector(SELECTORS.withdrawStatus);
    const actualStatus = await page.locator(SELECTORS.withdrawStatus).innerText();
    await page.waitForSelector(SELECTORS.withdrawTx);
    let withdrawTx = await page.locator(SELECTORS.withdrawTx).getAttribute('href');

    if (withdrawTx === null) {
      withdrawTx = 'Transaction link not available';
    }
  
    console.log(actualStatus, withdrawTx);
    saveToLogFile(actualStatus, withdrawTx);
    const expectedStatus = 'Successfully withdrew'

    await expect(actualStatus).toContain(expectedStatus);
  });
  test("Case 2: Withdraw SEI from the Vault", async ({ wallet, page }) => {
    await page.goto("https://pit.finance/vaults/0x63E37028c1740303e8456962E6ddf98359FE0BDc");
    await page.click(SELECTORS.connectButton);
    //await page.getByRole('button', { name: 'MetaMask' }).click();
    await page.click(SELECTORS.metamaskButton);
    await wallet.approve();
    //wallet.sign();

    await page.waitForSelector(SELECTORS.withdrawTab);
    await page.click(SELECTORS.withdrawTab);
    await page.waitForSelector(SELECTORS.withdrawSEICheckbox);
    await page.click(SELECTORS.withdrawSEICheckbox);
    await page.waitForSelector(SELECTORS.withdrawField);
    await page.fill(SELECTORS.withdrawField, '0.01');

    await page.waitForSelector(SELECTORS.withdrawBtn);
    await page.click(SELECTORS.withdrawBtn);

    await wallet.confirmTransaction();

    await page.waitForSelector(SELECTORS.withdrawStatus);
    const actualStatus = await page.locator(SELECTORS.withdrawStatus).innerText();
    await page.waitForSelector(SELECTORS.withdrawTx);
    let withdrawTx = await page.locator(SELECTORS.withdrawTx).getAttribute('href');

    if (withdrawTx === null) {
      withdrawTx = 'Transaction link not available';
    }
  
    console.log(actualStatus, withdrawTx);
    saveToLogFile(actualStatus, withdrawTx);
    const expectedStatus = 'Successfully withdrew'

    await expect(actualStatus).toContain(expectedStatus);

  });
  test("Case 3: Withdraw iSEI from the Vault", async ({ wallet, page }) => {
    await page.goto("https://pit.finance/vaults/0x49561C4a905f7acCdaCAec5e3C17113d5f1C5a3b");
    await page.click(SELECTORS.connectButton);
    //await page.getByRole('button', { name: 'MetaMask' }).click();
    await page.click(SELECTORS.metamaskButton);
    await wallet.approve();
    //wallet.sign();

    await page.waitForSelector(SELECTORS.withdrawTab);
    await page.click(SELECTORS.withdrawTab);
    await page.waitForSelector(SELECTORS.withdrawField);
    await page.fill(SELECTORS.withdrawField, '0.01');

    await page.waitForSelector(SELECTORS.withdrawBtn);
    await page.click(SELECTORS.withdrawBtn);

    await wallet.confirmTransaction();

    await page.waitForSelector(SELECTORS.withdrawStatus);
    const actualStatus = await page.locator(SELECTORS.withdrawStatus).innerText();
    await page.waitForSelector(SELECTORS.withdrawTx);
    let depositTx = await page.locator(SELECTORS.withdrawTx).getAttribute('href');

    if (depositTx === null) {
      depositTx = 'Transaction link not available';
    }
  
    console.log(actualStatus, depositTx);
    saveToLogFile(actualStatus, depositTx);
    const expectedStatus = 'Successfully withdrew'

    await expect(actualStatus).toContain(expectedStatus);
  });

  test("Case 4: Withdraw USDC from the Vault", async ({ wallet, page }) => {
    await page.goto("https://pit.finance/vaults/0xD43E6Bf43654A7B4985f87C77686f7900D59F1eD");
    await page.click(SELECTORS.connectButton);
    //await page.getByRole('button', { name: 'MetaMask' }).click();
    await page.click(SELECTORS.metamaskButton);
    await wallet.approve();
    //wallet.sign();

    await page.waitForSelector(SELECTORS.withdrawTab);
    await page.click(SELECTORS.withdrawTab);
    await page.waitForSelector(SELECTORS.withdrawField);
    await page.fill(SELECTORS.withdrawField, '0.01');

    await page.waitForSelector(SELECTORS.withdrawBtn);
    await page.click(SELECTORS.withdrawBtn);

    await wallet.confirmTransaction();

    await page.waitForSelector(SELECTORS.withdrawStatus);
    const actualStatus = await page.locator(SELECTORS.withdrawStatus).innerText();
    await page.waitForSelector(SELECTORS.withdrawTx);
    let depositTx = await page.locator(SELECTORS.withdrawTx).getAttribute('href');

    if (depositTx === null) {
      depositTx = 'Transaction link not available';
    }
  
    console.log(actualStatus, depositTx);
    saveToLogFile(actualStatus, depositTx);
    const expectedStatus = 'Successfully withdrew'

    await expect(actualStatus).toContain(expectedStatus);
  });
  test("Case 5: Withdraw USDT from the Vault", async ({ wallet, page }) => {
    await page.goto("https://pit.finance/vaults/0x1e3BcEb9AD3dc3f80820d29039C1A46e28d3A573");
    await page.click(SELECTORS.connectButton);
    //await page.getByRole('button', { name: 'MetaMask' }).click();
    await page.click(SELECTORS.metamaskButton);
    await wallet.approve();
    //wallet.sign();

    await page.waitForSelector(SELECTORS.withdrawTab);
    await page.click(SELECTORS.withdrawTab);
    await page.waitForSelector(SELECTORS.withdrawField);
    await page.fill(SELECTORS.withdrawField, '0.01');

    await page.waitForSelector(SELECTORS.withdrawBtn);
    await page.click(SELECTORS.withdrawBtn);

    wallet.confirmTransaction();

    await page.waitForSelector(SELECTORS.withdrawStatus);
    const actualStatus = await page.locator(SELECTORS.withdrawStatus).innerText();
    await page.waitForSelector(SELECTORS.withdrawTx);
    let depositTx = await page.locator(SELECTORS.withdrawTx).getAttribute('href');

    if (depositTx === null) {
      depositTx = 'Transaction link not available';
    }
  
    console.log(actualStatus, depositTx);
    saveToLogFile(actualStatus, depositTx);
    const expectedStatus = 'Successfully withdrew'

    await expect(actualStatus).toContain(expectedStatus);
  });
  test("Case 6: Withdraw WETH from the Vault", async ({ wallet, page }) => {
    await page.goto("https://pit.finance/vaults/0x0AEfC6F2E9a866ddB4813Cb1E897a2E9e26a1E53");
    await page.click(SELECTORS.connectButton);
    //await page.getByRole('button', { name: 'MetaMask' }).click();
    await page.click(SELECTORS.metamaskButton);
    await wallet.approve();
    //wallet.sign();

    await page.waitForSelector(SELECTORS.withdrawTab);
    await page.click(SELECTORS.withdrawTab);
    await page.waitForSelector(SELECTORS.withdrawField);
    await page.fill(SELECTORS.withdrawField, '0.0001');

    await page.waitForSelector(SELECTORS.withdrawBtn);
    await page.click(SELECTORS.withdrawBtn);

    wallet.confirmTransaction();

    await page.waitForSelector(SELECTORS.withdrawStatus);
    const actualStatus = await page.locator(SELECTORS.withdrawStatus).innerText();
    await page.waitForSelector(SELECTORS.withdrawTx);
    let depositTx = await page.locator(SELECTORS.withdrawTx).getAttribute('href');

    if (depositTx === null) {
      depositTx = 'Transaction link not available';
    }
  
    console.log(actualStatus, depositTx);
    saveToLogFile(actualStatus, depositTx);
    const expectedStatus = 'Successfully withdrew'

    await expect(actualStatus).toContain(expectedStatus);
  });

  test.afterEach(async ({ context }, testInfo) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log(`Test "${testInfo.title}" ended.`);
    await context.close();
  });
});

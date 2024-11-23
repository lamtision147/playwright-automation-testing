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
  fs.appendFileSync('wrapSEI.txt', logEntry);
};

test.describe('Test suit of wrap SEI', () => {
  test("Case 1: Wrap SEI", async ({ wallet, page }) => {
    await page.goto("https://pit.finance");
    await page.click(SELECTORS.connectButton);
    await page.click(SELECTORS.metamaskButton);
    await wallet.approve();

    await page.waitForSelector(SELECTORS.avatarProfile);
    await page.click(SELECTORS.avatarProfile);
    await page.waitForSelector(SELECTORS.wrapSEIprofile);
    await page.click(SELECTORS.wrapSEIprofile);

    await page.waitForSelector(SELECTORS.wrapInputfield, { state: 'visible' });
    await page.click(SELECTORS.wrapInputfield);
    //await page.fill(SELECTORS.withdrawField,'0.01');
    await page.keyboard.type('0.01');
    //await page.click(SELECTORS.maxBtn);
    await page.waitForSelector(SELECTORS.wrapBtn);
    await page.click(SELECTORS.wrapBtn);

    await wallet.confirmTransaction();

    await page.waitForSelector(SELECTORS.depositStatus);
    const actualStatus = await page.locator(SELECTORS.depositStatus).innerText();
    await page.waitForSelector(SELECTORS.depositTx);
    let depositTx = await page.locator(SELECTORS.depositTx).getAttribute('href');

    if (depositTx === null) {
      depositTx = 'Transaction link not available';
    }
  
    console.log(actualStatus, depositTx);
    saveToLogFile(actualStatus, depositTx);

    const expectedStatus = 'Wrapped 0.01 SEI';
    await expect(actualStatus).toContain(expectedStatus);
  });

  test("Case 2: Unwrap SEI", async ({ wallet, page }) => {
    await page.goto("https://pit.finance");
    await page.click(SELECTORS.connectButton);
    await page.click(SELECTORS.metamaskButton);
    await wallet.approve();

    await page.waitForSelector(SELECTORS.avatarProfile);
    await page.click(SELECTORS.avatarProfile);
    await page.waitForSelector(SELECTORS.wrapSEIprofile);
    await page.click(SELECTORS.wrapSEIprofile);
    await page.waitForSelector(SELECTORS.swtichUnwrapWSEI);
    await page.click(SELECTORS.swtichUnwrapWSEI);
    await page.waitForSelector(SELECTORS.wrapInputfield, { state: 'visible' });
    await page.click(SELECTORS.wrapInputfield);
    await page.keyboard.type('0.01');

    await page.waitForSelector(SELECTORS.wrapBtn);
    await page.click(SELECTORS.wrapBtn);

    await wallet.confirmTransaction();

    await page.waitForSelector(SELECTORS.depositStatus);
    const actualStatus = await page.locator(SELECTORS.depositStatus).innerText();
    await page.waitForSelector(SELECTORS.depositTx);
    let depositTx = await page.locator(SELECTORS.depositTx).getAttribute('href');

    if (depositTx === null) {
      depositTx = 'Transaction link not available';
    }
  
    console.log(actualStatus, depositTx);
    saveToLogFile(actualStatus, depositTx);

    const expectedStatus = 'Unwrapped 0.01 wSEI';
    await expect(actualStatus).toContain(expectedStatus);
  });

  test.afterEach(async ({ context }, testInfo) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log(`Test "${testInfo.title}" ended.`);
    await context.close();
  });
});

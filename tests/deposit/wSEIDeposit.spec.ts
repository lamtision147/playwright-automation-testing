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
  fs.appendFileSync('pitDeposit.txt', logEntry);
};

test.describe('Test suit of deposit into the Vault', () => {
  test("Case 1: Deposit iSEI into the Vault", async ({ wallet, page }) => {
    await page.goto("https://pit.finance");
    await page.click(SELECTORS.connectButton);
    await page.click(SELECTORS.metamaskButton);
    await wallet.approve();

    await page.waitForSelector(SELECTORS.launchAPPBtn);
    await page.click(SELECTORS.launchAPPBtn);
    await page.waitForSelector(SELECTORS.vaultWSEIBtn);
    await page.click(SELECTORS.vaultWSEIBtn);
    await page.waitForSelector(SELECTORS.depositfield);
    await page.waitForTimeout(2000);
    await page.fill(SELECTORS.depositfield, '0.01');
    // await page.waitForSelector(SELECTORS.approveToken);
    // await page.click(SELECTORS.approveToken);
    // await page.waitForSelector(SELECTORS.approvexToken);
    // await page.click(SELECTORS.approvexToken);

    // await wallet.confirmTransaction();
    // await wallet.signin();

    await page.waitForSelector(SELECTORS.depositBtn);
    await page.click(SELECTORS.depositBtn);

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

    const expectedStatus = 'Successfully deposited 0.01 iSEI into the vault.';
    await expect(actualStatus).toBe(expectedStatus);
  });

  test("Case 2: Deposit SEI into the Vault", async ({ wallet, page }) => {
    await page.goto("https://pit.finance/vaults/0x63E37028c1740303e8456962E6ddf98359FE0BDc");
    await page.click(SELECTORS.connectButton);
    await page.click(SELECTORS.metamaskButton);
    await wallet.approve();

    await page.waitForSelector(SELECTORS.depositfield);
    await page.waitForTimeout(2000);
    await page.fill(SELECTORS.depositfield, '0.01');
    await page.waitForSelector(SELECTORS.wrapSEIbtn);
    await page.click(SELECTORS.wrapSEIbtn);

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

    const expectedStatus = 'Successfully deposited 0.01 WSEI into the vault.';
    await expect(actualStatus).toBe(expectedStatus);
  });
  test("Case 3: Deposit WSEI into the Vault", async ({ wallet, page }) => {
    await page.goto("https://pit.finance/vaults/0x63E37028c1740303e8456962E6ddf98359FE0BDc");
    await page.click(SELECTORS.connectButton);
    await page.click(SELECTORS.metamaskButton);
    await wallet.approve();

    await page.waitForSelector(SELECTORS.wrapSEIcheckbox);
    await page.click(SELECTORS.wrapSEIcheckbox);
    await page.waitForSelector(SELECTORS.depositfield);
    await page.waitForTimeout(2000);
    await page.fill(SELECTORS.depositfield, '0.01');

    await page.waitForSelector(SELECTORS.wrapSEIbtn);
    await page.click(SELECTORS.wrapSEIbtn);

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

    const expectedStatus = 'Successfully deposited 0.01 WSEI into the vault.';
    await expect(actualStatus).toBe(expectedStatus);
  });

  test("Case 4: Deposit USDC into the Vault", async ({ wallet, page }) => {
    await page.goto("https://pit.finance/vaults/0xD43E6Bf43654A7B4985f87C77686f7900D59F1eD");
    await page.click(SELECTORS.connectButton);
    await page.click(SELECTORS.metamaskButton);
    await wallet.approve();

    await page.waitForSelector(SELECTORS.depositfield);
    await page.waitForTimeout(2000);
    await page.fill(SELECTORS.depositfield, '0.01');

    await page.waitForSelector(SELECTORS.depositBtn);
    await page.click(SELECTORS.depositBtn);

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

    const expectedStatus = 'Successfully deposited 0.01 USDC into the vault.';
    await expect(actualStatus).toBe(expectedStatus);
  });

  test("Case 5: Deposit WETH into the Vault", async ({ wallet, page }) => {
    await page.goto("https://pit.finance/vaults/0x0AEfC6F2E9a866ddB4813Cb1E897a2E9e26a1E53");
    await page.click(SELECTORS.connectButton);
    await page.click(SELECTORS.metamaskButton);
    await wallet.approve();

    await page.waitForSelector(SELECTORS.depositfield);
    await page.waitForTimeout(2000);
    await page.fill(SELECTORS.depositfield, '0.0001');

    await page.waitForSelector(SELECTORS.depositBtn);
    await page.click(SELECTORS.depositBtn);

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

    const expectedStatus = 'Successfully deposited 0.0₃1 WETH into the vault.';
    await expect(actualStatus).toBe(expectedStatus);
  });

  test("Case 6: Deposit USDT into the Vault", async ({ wallet, page }) => {
    await page.goto("https://pit.finance/vaults/0x1e3BcEb9AD3dc3f80820d29039C1A46e28d3A573");
    await page.click(SELECTORS.connectButton);
    await page.click(SELECTORS.metamaskButton);
    await wallet.approve();

    await page.waitForSelector(SELECTORS.depositfield);
    await page.waitForTimeout(2000);
    await page.fill(SELECTORS.depositfield, '0.01');

    await page.waitForSelector(SELECTORS.depositBtn);
    await page.click(SELECTORS.depositBtn);

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

    const expectedStatus = 'Successfully deposited 0.01 USDT into the vault.';
    await expect(actualStatus).toBe(expectedStatus);
  });

  test.afterEach(async ({ context }, testInfo) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log(`Test "${testInfo.title}" ended.`);
    await context.close();
  });
});

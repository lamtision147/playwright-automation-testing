import { BrowserContext, test as baseTest, expect } from "@playwright/test";
import { setupMetaMask } from '../../dapp/metamaskSetup';
import { SELECTORS } from '../../xpath/authen/pitConnectWallet';
import dappwright,{ Dappwright } from "@tenkeylabs/dappwright";

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

test.describe('Test suit of Vault WSEI', () => {
  test("Case 1: Connect wallet to Pi Finance", async ({ wallet, page }) => {
    await page.goto("https://pit.finance");
    await page.click(SELECTORS.connectButton);
    //await page.getByRole('button', { name: 'MetaMask' }).click();
    await page.click(SELECTORS.metamaskButton);
    wallet.approve();
    //wallet.sign();

    await page.waitForSelector(SELECTORS.launchAPPBtn);
    await page.click(SELECTORS.launchAPPBtn);
    await page.waitForSelector(SELECTORS.vaultWSEIBtn);
    await page.click(SELECTORS.vaultWSEIBtn);
    await page.waitForSelector(SELECTORS.depositfield);
    await page.fill(SELECTORS.depositfield, '0.01');

    await page.waitForSelector(SELECTORS.depositBtn);
    await page.click(SELECTORS.depositBtn);

    wallet.confirmTransaction();

    await page.waitForSelector(SELECTORS.depositStatus);
    const actualStatus = await page.locator(SELECTORS.depositStatus).innerText();
    console.log(actualStatus);
    const expectedStatus = 'Successfully deposited 0.01 WSEI into the vault.'

    await expect(actualStatus).toBe(expectedStatus);

    await page.waitForTimeout(5000);
  });

  test.afterEach(async ({}, testInfo) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log(`Test "${testInfo.title}" đã kết thúc.`);
  });
});

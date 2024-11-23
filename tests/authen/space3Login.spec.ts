import { BrowserContext, test as baseTest } from "@playwright/test";
import { setupMetaMask } from '../../dapp/metamaskSetup';
import { SELECTORS } from '../../xpath/authen/space3Login';
import dappwright,{ Dappwright } from "@tenkeylabs/dappwright";

export const test = baseTest.extend<{
  context: BrowserContext;
  wallet: Dappwright;
}>({
  context: async ({}, use) => {
    const { wallet, context } = await setupMetaMask();
    await use(context);
  },

  wallet: async ({ context}, use) => {
    const metamask = await dappwright.getWallet("metamask", context);
    await use(metamask);
  },
});

test.describe('Test suit 1', () => {
  test("Case 1: Login", async ({ wallet, page }) => {
    await page.goto("https://space3.gg/missions");
    await page.click(SELECTORS.loginButton);
    await page.click(SELECTORS.popup1Button);
    await page.click(SELECTORS.metamaskButton);
    wallet.approve();
    // const signBtn = '//html/body/div[1]/div/div/div/div[4]/footer/button[2]';
    // wallet.page.waitForSelector(signBtn);
    // wallet.page.click(signBtn);
    // //await wallet.sign();
    wallet.sign();
    //await page.click(SELECTORS.closePopupButton);
  });

  test("Case 2: Go to First mission details", async ({ page }) => {
    await page.goto("https://space3.gg/missions");
    await page.click(SELECTORS.firstMission);
  });

  test.afterEach(async ({}, testInfo) => {
    // Đợi 1 giây trước khi kết thúc test
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log(`Test "${testInfo.title}" đã kết thúc.`);
  });
});

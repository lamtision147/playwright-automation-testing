import { BrowserContext, expect, test as baseTest } from "@playwright/test";
import dappwright, { Dappwright, getWallet, MetaMaskWallet } from "@tenkeylabs/dappwright";

  export const test = baseTest.extend<{
    context: BrowserContext;
    wallet: Dappwright;
  }>({
    context: async ({}, use) => {
      // Launch context with extension
      const [wallet, _, context] = await dappwright.bootstrap("", {
        wallet: "metamask",
        version: MetaMaskWallet.recommendedVersion,
        seed: "woman open manual riot okay special unique diesel give morning spring mention",
        headless: false,
      });

      await wallet.addNetwork({
        networkName: "Ancient8 Testnet",
        rpc: "https://rpcv2-testnet.ancient8.gg/",
        chainId: 28122024,
        symbol: "ETH",
      });
      await wallet.importPK('2c9b24758d7be98f2f934c9d00904fe4b561dddd9db559ef91152274b6ae5899');
      await wallet.switchAccount(2);

    //   await wallet.addNetwork({
    //     networkName: "BNB Smart Chain Testnet",
    //     rpc: "https://data-seed-prebsc-1-s1.binance.org:8545",
    //     chainId: 97,
    //     symbol: "tBNB   ",
    //   });

      await use(context);
    },

    wallet: async ({ context }, use) => {
      const metamask = await dappwright.getWallet("metamask", context);

      await use(metamask);
    },
  });


//   test.beforeEach(async ({ page }) => {
//     await page.goto("https://space3.gg/missions");
//   });
  test.describe('Test suit 1', () => {
    /* Case 1 */
    test("Case 1: Login", async ({ wallet, page }) => {
    
        await page.goto("https://space3.gg/missions");
        const xpathLogin = '//html/body/div/main/div/div[1]/div/div[3]/button'; //login xpath
        await page.click(xpathLogin);

        const popup1 = '//html/body/div[2]/div/div[2]/div/div[2]/div/div/div[3]/div/div[2]/button'
        await page.click(popup1);
    
        const xpathMetamask = '//html/body/div[2]/div/div[2]/div/div[2]/div/div/div[6]/div[2]/div[1]'; //metamask xpath
        page.click(xpathMetamask);
        wallet.approve();
        wallet.sign();
        const xpathXclose = '//*[@id="__next"]/div/div[2]/div/div[2]/button'; //dailycheckin poup 
        await page.click(xpathXclose);
      });
      test("Case 2: Go to First mission details", async ({ wallet, page }) => {
        await page.goto("https://space3.gg/missions");
    
        const firstMission = '//html/body/div/main/div/div[2]/main/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div[1]'; //login xpath
        await page.click(firstMission);   
      });

      test.afterEach(async ({}, testInfo) => {
        // Đợi 10 giây trước khi kết thúc test
        await new Promise(resolve => setTimeout(resolve, 1000));
      
        // Thêm các bước dọn dẹp hoặc xử lý trước khi kết thúc test
        console.log(`Test "${testInfo.title}" đã kết thúc.`);
      });
  });
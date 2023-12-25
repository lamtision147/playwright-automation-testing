import { BrowserContext, expect, test as baseTest } from "@playwright/test";
import dappwright, { Dappwright, MetaMaskWallet } from "@tenkeylabs/dappwright";

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

    //   await wallet.addNetwork({
    //     networkName: "Ancient8 Testnet",
    //     rpc: "https://rpc-testnet.ancient8.gg",
    //     chainId: 2863311531,
    //     symbol: "ETH",
    //   });

      await wallet.addNetwork({
        networkName: "BNB Smart Chain Testnet",
        rpc: "https://data-seed-prebsc-1-s1.binance.org:8545",
        chainId: 97,
        symbol: "tBNB   ",
      });

      await use(context);
    },

    wallet: async ({ context }, use) => {
      const metamask = await dappwright.getWallet("metamask", context);

      await use(metamask);
    },
  });


  test.beforeEach(async ({ page }) => {
    await page.goto("https://space3.dev/rewards-center/vu-test-buy-item-by-automation-test");
  });

  test.describe('Test suit 2', () => {
    /* Case 1 */
    test("Case 1: Buy item in BSC chain testnet - BNB token", async ({ wallet, page }) => {
    
        const xpathLogin = '//*[@id="__next"]/main/div/div[1]/div/div[3]/button'; //login xpath
        await page.click(xpathLogin);
    
        const xpathMetamask = '//body/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[2]/div[1]'; //metamask xpath
        await page.click(xpathMetamask);
        await wallet.approve();
        
        await page.click(xpathMetamask);
        await wallet.sign();

        //User click to close daily checkin popup
        const xpathXclose = '//*[@id="__next"]/div/div[2]/div/div[2]/button'; //dailycheckin poup 
        await page.click(xpathXclose);

        const xpathRedeem = '//*[@id="__next"]/main/div/div[2]/main/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[4]/div/button'; //Redeem button
        await page.click(xpathRedeem); 

        await page.evaluate(() => {
          window.scrollTo(0, 0);
        });

        const xpathCom = '//html/body/div[2]/div/div[3]/div/div/div[2]/div/div[6]/button'; //Confirm payment button 
        await page.click(xpathCom); 

        // await wallet.confirmTransaction();

        // await page.waitForTimeout(15000);
        
        // const xpathSuccess = '//html/body/div[3]/div/div[2]/div/div[2]/div[1]/div/div[1]/div/div[2]/span';

        // await page.waitForTimeout(20000);
        // await expect(page.locator(xpathSuccess)).toHaveText('Payment successful!');
            

        
      });

      test.afterEach(async ({}, testInfo) => {
        // Đợi 10 giây trước khi kết thúc test
        await new Promise(resolve => setTimeout(resolve, 10000));
      
        // Thêm các bước dọn dẹp hoặc xử lý trước khi kết thúc test
        console.log(`Test "${testInfo.title}" đã kết thúc.`);
      });
  });
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
    await page.goto("https://space3.dev/acceler8");
  });

  test.describe('Test suit 1', () => {
    /* Case 1 */
    test("Case 1: Log in into space3 with metamask", async ({ wallet, page }) => {
    
        const xpathLogin = '//*[@id="__next"]/main/div/div[1]/div/div[3]/button'; //login xpath
        await page.click(xpathLogin);
    
        const xpathMetamask = '//body/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[2]/div[1]'; //metamask xpath
        await page.click(xpathMetamask);
        await wallet.approve();
        
        await page.click(xpathMetamask);
        await wallet.sign();
      });
    /* Case 2 */
    test("Case 2: User close the daily checkin popup after login", async ({ wallet, page }) => {
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
      });
    /* Case 3 */
    test("Case 3: User join team and leave team after joined", async ({ wallet, page }) => {
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

        await page.evaluate(() => {
            window.scrollTo(0, 1000);
          });
        const xpathJoinTeam = '//html/body/div[1]/main/div/div[2]/main/div/div[2]/div[2]/div[1]/div/div[2]/div/div[2]/div[2]/div[2]/div/div[2]/button'; //join team button 
        await page.click(xpathJoinTeam);

        const xpathRole = '.tag-item--text';
        await expect(page.locator(xpathRole)).toHaveText('Member');

        await page.evaluate(() => {
            window.scrollTo(0, 100);
          });

        const xpathDropdownBtn = '//*[@id="__next"]/main/div/div[2]/main/div/div[1]/div/div/div[2]/div/div[3]/div/div/ul';
        await page.click(xpathDropdownBtn);

        const xpathLeaveTeam = '//html/body/div[1]/main/div/div[2]/main/div/div[1]/div/div/div[2]/div/div[3]/div/div/ul/li/ul/li/span/div/div[4]/div/div[1]/button';
        await page.click(xpathLeaveTeam); 

        const xpathLeaveTeamCfm = '//html/body/div[3]/div/div[2]/div/div[2]/div[1]/div/div[2]/div/div[2]/div/div[1]/button';
        await page.click(xpathLeaveTeamCfm); 
        await expect(page.locator(xpathRole)).toHaveText('User');
          
      });

       /* Case 4 */
    //   test("User Leave team after joined", async ({ wallet, page }) => {
    //     const xpathLogin = '//*[@id="__next"]/main/div/div[1]/div/div[3]/button'; //login xpath
    //     await page.click(xpathLogin);
    
    //     const xpathMetamask = '//body/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[6]/div[2]/div[1]'; //metamask xpath
    //     await page.click(xpathMetamask);
    //     await wallet.approve();
        
    //     await page.click(xpathMetamask);
    //     await wallet.sign();
        
    //     //User click to close daily checkin popup
    //     const xpathXclose = '//*[@id="__next"]/div/div[2]/div/div[2]/button'; //dailycheckin poup 
    //     await page.click(xpathXclose);

    //     const xpathRole = '.tag-item--text';
    //     await expect(page.locator(xpathRole)).toHaveText('Member');

    //     const xpathDropdownBtn = '//*[@id="__next"]/main/div/div[2]/main/div/div[1]/div/div/div[2]/div/div[3]/div/div/ul/li/div/i';
    //     await page.click(xpathDropdownBtn);

    //     const xpathLeaveTeam = '/html/body/div[1]/main/div/div[2]/main/div/div[1]/div/div/div[2]/div/div[3]/div/div/ul/li/ul/li/span/div/div[4]/div/div[1]/button';
    //     await page.click(xpathLeaveTeam);
    //     await expect(page.locator(xpathRole)).toHaveText('User');
          
    //   });

      test.afterEach(async ({}, testInfo) => {
        // Đợi 10 giây trước khi kết thúc test
        await new Promise(resolve => setTimeout(resolve, 5000));
      
        // Thêm các bước dọn dẹp hoặc xử lý trước khi kết thúc test
        console.log(`Test "${testInfo.title}" đã kết thúc.`);
      });
  });
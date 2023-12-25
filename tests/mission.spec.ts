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
    await page.goto("https://space3.dev/missions");
  });

  test.describe('Test suit 3', () => {
    /* Case 1 */
    test("Case 1: User click the first mission in list", async ({ wallet, page }) => {
        await page.waitForTimeout(3000);
        const xpathFirstMission = 'div.space-3-col-sm-12:nth-child(1)'; //first mission
        await page.click(xpathFirstMission);
        const xpathMissionName = 'div.space-3-col-sm-12:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > h3:nth-child(1)'; //first mission title name
        const missionName = await page.$eval(xpathMissionName, element => element.textContent);
        console.log(missionName);

        await page.waitForTimeout(3000);
        const xpathmissionNameDetails = '.space-3-col-14 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h1' //mission title name in details page
        //await page.waitForSelector(xpathmissionNameDetails);
        const missionNameDetails = await page.$eval(xpathmissionNameDetails, element => element.textContent);
        console.log(missionNameDetails);
        expect(missionName).toEqual(missionNameDetails); // Check the same correct missionID
        
    
        const xpathLogin = '//html/body/div[1]/main/div/div[2]/main/div[1]/div/div[2]/div/div[2]/div/div[2]/div/button'; //login xpath
        await page.click(xpathLogin);
    
        const xpathMetamask = '//html/body/div[2]/div/div[2]/div/div[2]/div/div/div[6]/div[2]/div[1]'; //metamask xpath
        await page.click(xpathMetamask);
        await wallet.approve();
        
        await page.click(xpathMetamask);
        await wallet.sign();

        //User click to close daily checkin popup
        const xpathXclose = '//*[@id="__next"]/div/div[2]/div/div[2]/button'; //dailycheckin poup 
        await page.click(xpathXclose);

        const xpathClaimBtn = '//html/body/div[1]/main/div/div[2]/main/div[1]/div/div[2]/div/div[2]/div/div[2]/div/button'; //Claim button
        const txtClaimBtn = await page.$eval(xpathClaimBtn, element => element.textContent);
        console.log(txtClaimBtn);

        //User click on Get Started
        const xpathGetStartedBtn = '//html/body/div[1]/main/div/div[2]/main/div[1]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div/div/div[1]/div[2]/div/div[1]/button'; //Get Started button 
        await page.click(xpathGetStartedBtn);

        // const popup = await page.waitForEvent("popup");
        // await popup.goto('https://space3.dev');
        // await popup.close();

        // const xpathVerifydBtn = '//html/body/div[1]/main/div/div[2]/main/div[1]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div/div/div[1]/div[2]/div/div[2]/button'; //Verify button 
        // //const xpathShareBtn = '//html/body/div[1]/main/div/div[2]/main/div[1]/div/div[2]/div/div[1]/div/div[1]/div/div[2]/div/div[1]/button'; //Share button
        // await page.click(xpathVerifydBtn);

        //Reply popup
        await page.waitForTimeout(5000);
        const xpathReplyPopupBtn = '.task-action-container > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > button:nth-child(1)'; //Reply button on popup
        await page.waitForSelector(xpathReplyPopupBtn);
        await page.click(xpathReplyPopupBtn);

        const popup = await page.waitForEvent("popup");
        await popup.waitForTimeout(5000);
        const xpathLoginX = '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div[2]/div[2]'; //Login X
        await popup.waitForSelector(xpathLoginX);
        await popup.click(xpathLoginX);

        
        const xUserName = '//html/body/div[1]/div/div/div/main/div/div/div/div[2]/div[2]/div/div[5]/label/div/div[2]/div/input'; 
        const userName = 'vutran1902';
        
        
        

        // await popup.$eval(xUserName, (input: HTMLInputElement, value: string) => {
        //   input.value = value;
        // }, userName);

        await popup.fill(xUserName,userName);
        

        const xpathNextX = '//html/body/div[1]/div/div/div/main/div/div/div/div[2]/div[2]/div/div[6]/div'; //Login X
        await popup.click(xpathNextX);


        await popup.waitForTimeout(2000);
        const xPsw = '//html/body/div[1]/div/div/div/main/div/div/div/div[2]/div[2]/div[1]/div/div/div/div[3]/div/label/div/div[2]/div[1]/input'; 
        const passWord = 'Nhutren0985';
        await popup.fill(xPsw,passWord);
        
        await popup.waitForTimeout(2000);
        const xpathLoginConfirmX = '//html/body/div[1]/div/div/div/main/div/div/div/div[2]/div[2]/div[2]/div/div/div[1]/div/div/div/div'; //Login X confirm
        await popup.click(xpathLoginConfirmX);

        await popup.waitForTimeout(2000);
        const replyContent = '//*[@id="react-root"]/div/div/div[2]/main/div/div/div[3]/div/div[2]/div[2]/div/div/div/div[1]/div[2]/div/div/div/div/div/div/div/div/div/div/div/label/div[1]/div/div/div/div/div/div/div/div'; //input field
        await popup.fill(replyContent,'nice'); //type contents

        const replyButton = '//*[@id="react-root"]/div/div/div[2]/main/div/div/div[2]/div/div/div/div/div[3]/div/div[2]'; //Reply X button
        await popup.click(replyButton);
        

        const viewLink = '//*[@id="layers"]/div/div[1]/div/div/div/div[2]/a/span'; //view link
        await popup.click(viewLink);

        const linkReply = popup.url();
        console.log(linkReply);
        await popup.close();

        await page.waitForTimeout(2000);
        const step2InputLink = '//html/body/div[1]/div[3]/div[2]/div/div[2]/div[1]/div/div[3]/div/div[4]/span/input'; //step 2 input link
        await page.fill(step2InputLink,linkReply);

        const submitLink = '//html/body/div[1]/div[3]/div[2]/div/div[2]/div[1]/div/div[3]/div/div[5]/button'; //step 2 input link
        await page.click(submitLink);

        await page.waitForTimeout(2000);
        const confirmSubmitLink = '//html/body/div[3]/div/div[2]/div/div/div/div[2]/button[2]'; //step 2 input link
        await page.click(confirmSubmitLink);

        await page.waitForTimeout(5000);
        const xpathVerifydBtn = '//html/body/div[1]/main/div/div[2]/main/div[1]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div/div/div[1]/div[2]/div/div[2]/button'; //Verify button 
        await page.click(xpathVerifydBtn);


        const xpathVerified = '//*[@id="__next"]/main/div/div[2]/main/div[1]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div/div/div[1]/div[2]/div/div[2]/button/span[2]'; //Check verified?
        await page.waitForSelector(xpathVerified);
        const textVerified = await page.$eval(xpathVerified, element => element.textContent);
        console.log(textVerified);
        expect(textVerified).toEqual('Verified');


        const claimButton = '//*[@id="__next"]/main/div/div[2]/main/div[1]/div/div[2]/div/div[2]/div/div[2]/div/button';
        await page.waitForSelector(claimButton, { state: 'visible' });
        await page.click(claimButton);

        // await page.waitForTimeout(5000);
        // const xpathClaimSuccess = '#__next > div:nth-child(3) > div.space-3-modal-wrap.space-3-modal-centered > div > div.space-3-modal-content > div.space-3-modal-body > div > div > div > div.swiper.swiper-initialized.swiper-horizontal.reward-claimed-sw-6587359a3e4417b0ba62ad78-inner.swiper-backface-hidden > div > div.swiper-slide.swiper-slide-active > div > div > div:nth-child(2) > div > div:nth-child(1) > span'; //Check claim success?
        // await page.waitForSelector(xpathClaimSuccess);
        // const textCongrass = await page.$eval(xpathClaimSuccess, element => element.textContent);
        // console.log(textCongrass);
        // expect(textCongrass).toEqual('Congratulations!');

        const xpathClickonGet = '#__next > div:nth-child(3) > div.space-3-modal-wrap.space-3-modal-centered > div > div.space-3-modal-content > div.space-3-modal-body > div > div > button';
        await page.waitForSelector(xpathClickonGet);
        await page.click(xpathClickonGet);
        
        

        
        
        // await popup.$eval(xPsw, (input: HTMLInputElement, value: string) => {
        //   input.value = value;
        // }, 'vutestpassword');

        // const inputReply = '//*[@id="react-root"]/div/div/div[2]/main/div/div/div[3]/div/div[2]/div[2]/div/div/div/div[1]/div[2]/div/div/div/div/div/div/div/div/div/div/div/label/div[1]/div/div/div/div/div/div/div/div/div/div/span/span';
        // await popup.$eval(inputReply, (input: HTMLInputElement, value: string) => {
        //   input.value = value;
        // }, 'vutest');
        // //await popup.close();

        
        
        

//*[@id="allow"]

        // const xpathRedeem = '//*[@id="__next"]/main/div/div[2]/main/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[4]/div/button'; //Redeem button
        // await page.click(xpathRedeem); 

        // await page.evaluate(() => {
        //   window.scrollTo(0, 0);
        // });

        // const xpathCom = '//html/body/div[2]/div/div[3]/div/div/div[2]/div/div[6]/button'; //Confirm payment button 
        // await page.click(xpathCom); 

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
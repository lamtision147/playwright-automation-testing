import { BrowserContext, test as baseTest, expect } from "@playwright/test";
import { setupMetaMask } from '../../dapp/metamaskSetup';
import { SELECTORS } from '../../xpath/authen/pitConnectWallet';
import dappwright, { Dappwright } from "@tenkeylabs/dappwright";
import fs from 'fs'; // Import module file system

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
  // Lấy thời gian hiện tại theo múi giờ GMT+7
  const currentTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' });

  const logEntry = `Timestamp: ${currentTime}, Status: ${actualStatus}, Deposit Tx: ${depositTx}\n`;
  fs.appendFileSync('pitDeposit.txt', logEntry); // Append the log entry to the file
};

test.describe('Test suit of deposit into Vault', () => {
  test("Case 1: Deposit iSEI to Pit Finance", async ({ wallet, page }) => {
    const maxRetries = 5; // Số lần thử lại tối đa
    let attempt = 0;
    let actualStatus = '';
    const expectedStatus = 'Successfully deposited 0.01 iSEI into the vault.';

    while (attempt < maxRetries) {
      attempt++;

      // Bắt đầu tiến trình gửi tiền
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

      await page.waitForSelector(SELECTORS.depositBtn);
      await page.click(SELECTORS.depositBtn);

      await wallet.confirmTransaction();

      await page.waitForSelector(SELECTORS.depositStatus);
      actualStatus = await page.locator(SELECTORS.depositStatus).innerText();
      await page.waitForSelector(SELECTORS.depositTx);
      let depositTx = await page.locator(SELECTORS.depositTx).getAttribute('href');

      if (depositTx === null) {
        depositTx = 'Transaction link not available';
      }

      console.log(actualStatus, depositTx);

      // Lưu kết quả vào file log
      saveToLogFile(actualStatus, depositTx);

      // Kiểm tra nếu kết quả khớp với mong đợi
      if (actualStatus === expectedStatus) {
        console.log("Transaction successful!");
        break; // Thoát khỏi vòng lặp nếu thành công
      } else {
        console.log(`Attempt ${attempt} failed. Retrying...`);
        if (attempt === maxRetries) {
          throw new Error(`Transaction failed after ${maxRetries} attempts.`);
        }
        await page.waitForTimeout(3000); // Chờ 3 giây trước khi thử lại
      }
    }

    await page.waitForTimeout(5000); // Đợi thêm trước khi kết thúc test
  });

  test.afterEach(async ({}, testInfo) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log(`Test "${testInfo.title}" đã kết thúc.`);
  });
});

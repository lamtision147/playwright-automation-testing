import test, { expect, Page } from "@playwright/test";
import { SELECTORS } from "../../xpath/seitrace/api";

test.describe('Seitrace Insights API', () => {
  test("Case 1: /api/v2/addresses", async ({ page }) => {
    await page.goto('https://seitrace.com/');
    await page.waitForSelector(SELECTORS.loginBtn);
    await page.click(SELECTORS.loginBtn);
    await page.waitForSelector(SELECTORS.emailField);
    await page.click(SELECTORS.emailField);
    await page.fill(SELECTORS.emailField, 'nhien0985@gmail.com');
    await page.waitForSelector(SELECTORS.passwordField);
    await page.click(SELECTORS.passwordField);
    await page.fill(SELECTORS.passwordField, 'Nhutren@0985');
    await page.waitForSelector(SELECTORS.signInBtn);
    await page.click(SELECTORS.signInBtn);

    await page.waitForTimeout(3000);
    await page.waitForSelector(SELECTORS.avatarBtn);
    await page.click(SELECTORS.avatarBtn);
    await page.waitForTimeout(3000);
    await page.waitForSelector(SELECTORS.apiKeyProfile);
    await page.click(SELECTORS.apiKeyProfile);

    await page.waitForSelector(SELECTORS.apiCredit);
    await page.hover(SELECTORS.apiCredit);
    // Hover lên phần tử chính
    await page.hover('xpath=//span[@class="chakra-text css-s78ki9"]');

    // Lấy giá trị của `aria-describedby`
    const spanElement1 = page.locator('xpath=//span[@class="chakra-text css-s78ki9"]');
    const ariaDescribedBy1 = await spanElement1.getAttribute('aria-describedby');

    let numericValue1 = 0;
    let numericValue2 = 0;

    if (ariaDescribedBy1) {
      // Định vị tooltip dựa trên giá trị của `aria-describedby`
      const tooltipLocator1 = page.locator(`#${ariaDescribedBy1.replace(/:/g, '\\:')}`); // Escape ký tự `:`
      await tooltipLocator1.waitFor({ state: 'visible' }); // Đợi tooltip xuất hiện

      // Lấy nội dung của tooltip
      const tooltipContent1 = await tooltipLocator1.textContent();
      numericValue1 = parseFloat(tooltipContent1?.replace(/,/g, '') || '0');

      console.log('(Before) Credits:', numericValue1);
    } else {
      console.log('Tooltip not found.');
    }

    await page.waitForSelector(SELECTORS.resourcesTab);
    await page.click(SELECTORS.resourcesTab);
    await page.waitForSelector(SELECTORS.insightDocsTab);
    await page.click(SELECTORS.insightDocsTab);

    await page.waitForSelector(SELECTORS.authoKeys);
    await page.click(SELECTORS.authoKeys);

    await page.waitForSelector(SELECTORS.inputKeys);
    await page.click(SELECTORS.inputKeys);
    await page.fill(SELECTORS.inputKeys, '477fc9a5-53ad-4248-84e9-46477dbf7c64');

    await page.waitForSelector(SELECTORS.authoBTN);
    await page.click(SELECTORS.authoBTN);
    await page.waitForSelector(SELECTORS.closeModal);
    await page.click(SELECTORS.closeModal);

    await page.getByLabel('get /api/v2/addresses').click();
    await page.getByRole('button', { name: 'Try it out' }).click();
    await page.getByPlaceholder('address', { exact: true }).click();
    await page.getByPlaceholder('address', { exact: true }).press('ControlOrMeta+a');
    await page.getByPlaceholder('address', { exact: true }).fill('0xBc1FEe05C54962C0371b681FdC23f956F9999999');
    await page.getByRole('button', { name: 'Execute' }).click();

    const cellLocator = page.locator(SELECTORS.status1);
    const expected = '200';
    const actual = await cellLocator.textContent();
    console.log(`Actual status code: '${actual}'`);
    await expect(cellLocator).toHaveText(expected, {
      timeout: 5000,
    });



    await page.waitForTimeout(3000);
    await page.waitForSelector(SELECTORS.avatarBtn);
    await page.click(SELECTORS.avatarBtn);
    await page.waitForTimeout(3000);
    await page.waitForSelector(SELECTORS.apiKeyProfile);
    await page.click(SELECTORS.apiKeyProfile);

    await page.waitForSelector(SELECTORS.apiCredit);
    await page.hover(SELECTORS.apiCredit);
    // Hover lên phần tử chính
    await page.hover('xpath=//span[@class="chakra-text css-s78ki9"]');

    // Lấy giá trị của `aria-describedby`
    const spanElement2 = page.locator('xpath=//span[@class="chakra-text css-s78ki9"]');
    const ariaDescribedBy2 = await spanElement2.getAttribute('aria-describedby');

    if (ariaDescribedBy2) {
      // Định vị tooltip dựa trên giá trị của `aria-describedby`
      const tooltipLocator = page.locator(`#${ariaDescribedBy2.replace(/:/g, '\\:')}`); // Escape ký tự `:`
      await tooltipLocator.waitFor({ state: 'visible' }); // Đợi tooltip xuất hiện

      // Lấy nội dung của tooltip
      const tooltipContent2 = await tooltipLocator.textContent();
      numericValue2 = parseFloat(tooltipContent2?.replace(/,/g, '') || '0');
      const currentCredits = numericValue1 - 50;
      const expectedCredits = numericValue2;
      expect(expectedCredits).toBe(currentCredits);
      console.log(`Update: Credits have been deducted (${expectedCredits})`);
      console.log('(After) Credit:', numericValue2);
    } else {
      console.log('Tooltip not found.');
    }
  });
  test("Case 2: /api/v2/addresses", async ({ page }) => {
    await page.goto('https://seitrace.com/');
    await page.waitForSelector(SELECTORS.loginBtn);
    await page.click(SELECTORS.loginBtn);
    await page.waitForSelector(SELECTORS.emailField);
    await page.click(SELECTORS.emailField);
    await page.fill(SELECTORS.emailField, 'nhien0985@gmail.com');
    await page.waitForSelector(SELECTORS.passwordField);
    await page.click(SELECTORS.passwordField);
    await page.fill(SELECTORS.passwordField, 'Nhutren@0985');
    await page.waitForSelector(SELECTORS.signInBtn);
    await page.click(SELECTORS.signInBtn);

    await page.waitForTimeout(3000);
    await page.waitForSelector(SELECTORS.avatarBtn);
    await page.click(SELECTORS.avatarBtn);
    await page.waitForTimeout(3000);
    await page.waitForSelector(SELECTORS.apiKeyProfile);
    await page.click(SELECTORS.apiKeyProfile);

    await page.waitForSelector(SELECTORS.apiCredit);
    await page.hover(SELECTORS.apiCredit);

    await page.hover('xpath=//span[@class="chakra-text css-s78ki9"]');
    const spanElement1 = page.locator('xpath=//span[@class="chakra-text css-s78ki9"]');
    const ariaDescribedBy1 = await spanElement1.getAttribute('aria-describedby');
    let numericValue1 = 0;
    let numericValue2 = 0;

    if (ariaDescribedBy1) {
      const tooltipLocator1 = page.locator(`#${ariaDescribedBy1.replace(/:/g, '\\:')}`); // Escape ký tự `:`
      await tooltipLocator1.waitFor({ state: 'visible' }); // Đợi tooltip xuất hiện
      const tooltipContent1 = await tooltipLocator1.textContent();
      numericValue1 = parseFloat(tooltipContent1?.replace(/,/g, '') || '0');

      console.log('(Before) Credits:', numericValue1);
    } else {
      console.log('Tooltip not found.');
    }

    await page.waitForSelector(SELECTORS.resourcesTab);
    await page.click(SELECTORS.resourcesTab);
    await page.waitForSelector(SELECTORS.insightDocsTab);
    await page.click(SELECTORS.insightDocsTab);

    await page.waitForSelector(SELECTORS.authoKeys);
    await page.click(SELECTORS.authoKeys);

    await page.waitForSelector(SELECTORS.inputKeys);
    await page.click(SELECTORS.inputKeys);
    await page.fill(SELECTORS.inputKeys, '477fc9a5-53ad-4248-84e9-46477dbf7c64');

    await page.waitForSelector(SELECTORS.authoBTN);
    await page.click(SELECTORS.authoBTN);
    await page.waitForSelector(SELECTORS.closeModal);
    await page.click(SELECTORS.closeModal);
    await page.getByLabel('get /api/v2/token/erc20').nth(0).click();
    await page.getByRole('button', { name: 'Try it out' }).click();
    await page.getByPlaceholder('contract_address', { exact: true }).click();
    await page.getByPlaceholder('contract_address', { exact: true }).press('ControlOrMeta+a');
    await page.getByPlaceholder('contract_address', { exact: true }).fill('0x2dB15096434E72c89739D62613A4a643a5a9eBF1');
    await page.getByRole('button', { name: 'Execute' }).click();

    const cellLocator = page.locator(SELECTORS.status1);
    const expected = '200';
    const actual = await cellLocator.textContent();
    console.log(`Actual status code: '${actual}'`);
    await expect(cellLocator).toHaveText(expected, {
      timeout: 5000,
    });

    await page.waitForTimeout(3000);
    await page.waitForSelector(SELECTORS.avatarBtn);
    await page.click(SELECTORS.avatarBtn);
    await page.waitForTimeout(3000);
    await page.waitForSelector(SELECTORS.apiKeyProfile);
    await page.click(SELECTORS.apiKeyProfile);

    await page.waitForSelector(SELECTORS.apiCredit);
    await page.hover(SELECTORS.apiCredit);
    // Hover lên phần tử chính
    await page.hover('xpath=//span[@class="chakra-text css-s78ki9"]');

    // Lấy giá trị của `aria-describedby`
    const spanElement2 = page.locator('xpath=//span[@class="chakra-text css-s78ki9"]');
    const ariaDescribedBy2 = await spanElement2.getAttribute('aria-describedby');

    if (ariaDescribedBy2) {
      // Định vị tooltip dựa trên giá trị của `aria-describedby`
      const tooltipLocator = page.locator(`#${ariaDescribedBy2.replace(/:/g, '\\:')}`); // Escape ký tự `:`
      await tooltipLocator.waitFor({ state: 'visible' }); // Đợi tooltip xuất hiện

      // Lấy nội dung của tooltip
      const tooltipContent2 = await tooltipLocator.textContent();
      numericValue2 = parseFloat(tooltipContent2?.replace(/,/g, '') || '0');
      const currentCredits = numericValue1 - 50;
      const expectedCredits = numericValue2;
      expect(expectedCredits).toBe(currentCredits);
      console.log(`Update: Credits have been deducted 50 credits (${expectedCredits})`);
      console.log('(After) Credit:', numericValue2);
    } else {
      console.log('Tooltip not found.');
    }
  });
});

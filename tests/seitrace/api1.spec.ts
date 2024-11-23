import test, { expect, Page } from "@playwright/test";
import { SELECTORS } from "../../xpath/seitrace/api";
import * as fs from 'fs';

const LOG_FILE_PATH = './test_results.txt';
function logToFile(message: string) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(LOG_FILE_PATH, logMessage);
}




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

    await page.waitForTimeout(5000);
    await page.waitForSelector(SELECTORS.avatarBtn);
    await page.click(SELECTORS.avatarBtn);
    await page.waitForTimeout(2000);
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
      const tooltipLocator1 = page.locator(`#${ariaDescribedBy1.replace(/:/g, '\\:')}`);
      await tooltipLocator1.waitFor({ state: 'visible' });

      const tooltipContent1 = await tooltipLocator1.textContent();
      numericValue1 = parseFloat(tooltipContent1?.replace(/,/g, '') || '0');
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
    await page.fill(SELECTORS.inputKeys, SELECTORS.APIKey);

    await page.waitForSelector(SELECTORS.authoBTN);
    await page.click(SELECTORS.authoBTN);
    await page.waitForSelector(SELECTORS.closeModal);
    await page.click(SELECTORS.closeModal);

    //api/v2/addresses
    await page.getByLabel('get /api/v2/addresses').click();
    const cost1 = 50;
    await page.waitForSelector(SELECTORS.tryItOut1);
    await page.click(SELECTORS.tryItOut1);
    await page.waitForSelector(SELECTORS.inputAddress1);
    await page.click(SELECTORS.inputAddress1);
    await page.press(SELECTORS.inputAddress1, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputAddress1, '0xBc1FEe05C54962C0371b681FdC23f956F9999999');
    await page.waitForSelector(SELECTORS.executeBtn1);
    await page.click(SELECTORS.executeBtn1);

    const cellLocator1 = page.locator(SELECTORS.status1);
    const expected = '200';
    const actual1 = await cellLocator1.textContent();
    console.log(`Actual status code '/api/v2/addresses': ${actual1}`);
    logToFile(`Actual status code '/api/v2/addresses': ${actual1}`);
    // await expect(cellLocator1).toHaveText(expected, {
    //   timeout: 5000,
    // });

    //api/v2/token/erc20
    await page.getByLabel('get /api/v2/token/erc20').nth(0).click();
    const cost2 = 50;
    await page.waitForSelector(SELECTORS.tryItOut2);
    await page.click(SELECTORS.tryItOut2);
    await page.waitForSelector(SELECTORS.inputContractAddress2);
    await page.click(SELECTORS.inputContractAddress2);
    await page.press(SELECTORS.inputContractAddress2, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputContractAddress2, '0xD1242d7f5d84EeBa54E7A817bDd12b02B4cCB1a3');
    await page.waitForSelector(SELECTORS.executeBtn2);
    await page.click(SELECTORS.executeBtn2);

    const cellLocator2 = page.locator(SELECTORS.status2);
    const actual2 = await cellLocator2.textContent();
    console.log(`Actual status code '/api/v2/token/erc20': ${actual2}`);
    logToFile(`Actual status code '/api/v2/token/erc20': ${actual2}`);
    // await expect(cellLocator2).toHaveText(expected, {
    //   timeout: 5000,
    // });

    //api/v2/token/erc20/balances
    await page.getByLabel('get /api/v2/token/erc20/balances').click();
    const cost3 = 50;
    await page.waitForSelector(SELECTORS.tryItOut3);
    await page.click(SELECTORS.tryItOut3);
    await page.waitForSelector(SELECTORS.inputAddress3);
    await page.click(SELECTORS.inputAddress3);
    await page.press(SELECTORS.inputAddress3, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputAddress3, '0xBc1FEe05C54962C0371b681FdC23f956F9999999');
    await page.waitForSelector(SELECTORS.removeTokenContract3);
    await page.click(SELECTORS.removeTokenContract3);
    await page.waitForSelector(SELECTORS.inputTokenContract3);
    await page.click(SELECTORS.inputTokenContract3);
    await page.press(SELECTORS.inputTokenContract3, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenContract3, '0xD1242d7f5d84EeBa54E7A817bDd12b02B4cCB1a3');
    await page.waitForSelector(SELECTORS.executeBtn3);
    await page.click(SELECTORS.executeBtn3);

    const cellLocator3 = page.locator(SELECTORS.status3);
    const actual3 = await cellLocator3.textContent();
    console.log(`Actual status code '/api/v2/token/erc20/balances': ${actual3}`);
    logToFile(`Actual status code '/api/v2/token/erc20/balances': ${actual3}`);
    // await expect(cellLocator3).toHaveText(expected, {
    //   timeout: 5000,
    // });

    //api/v2/token/erc20/transfers
    await page.getByLabel('get /api/v2/token/erc20/transfers').click();
    const cost4 = 100;
    await page.waitForSelector(SELECTORS.tryItOut4);
    await page.click(SELECTORS.tryItOut4);
    await page.waitForSelector(SELECTORS.inputContractAddress4);
    await page.click(SELECTORS.inputContractAddress4);
    await page.press(SELECTORS.inputContractAddress4, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputContractAddress4, '0xD1242d7f5d84EeBa54E7A817bDd12b02B4cCB1a3');
    await page.waitForSelector(SELECTORS.inputAddress4);
    await page.click(SELECTORS.inputAddress4);
    await page.press(SELECTORS.inputAddress4, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputAddress4, '0xBc1FEe05C54962C0371b681FdC23f956F9999999');
    await page.waitForSelector(SELECTORS.inputToDate4);
    await page.click(SELECTORS.inputToDate4);
    await page.press(SELECTORS.inputToDate4, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputToDate4, '2025-03-01');
    await page.waitForSelector(SELECTORS.executeBtn4);
    await page.click(SELECTORS.executeBtn4);

    const cellLocator4 = page.locator(SELECTORS.status4);
    const actual4 = await cellLocator4.textContent();
    console.log(`Actual status code '/api/v2/token/erc20/transfers': ${actual4}`);
    logToFile(`Actual status code '/api/v2/token/erc20/transfers': ${actual4}`);

    // //api/v2/token/erc20/holders
    await page.getByLabel('get /api/v2/token/erc20/holders').click();
    const cost5 = 100;
    await page.waitForSelector(SELECTORS.tryItOut5);
    await page.click(SELECTORS.tryItOut5);
    await page.waitForSelector(SELECTORS.inputContractAddress5);
    await page.click(SELECTORS.inputContractAddress5);
    await page.press(SELECTORS.inputContractAddress5, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputContractAddress5, '0xD1242d7f5d84EeBa54E7A817bDd12b02B4cCB1a3');
    await page.waitForSelector(SELECTORS.executeBtn5);
    await page.click(SELECTORS.executeBtn5);

    const cellLocator5 = page.locator(SELECTORS.status5);
    const actual5 = await cellLocator5.textContent();
    console.log(`Actual status code '/api/v2/token/erc20/holders': ${actual5}`);
    logToFile(`Actual status code '/api/v2/token/erc20/holders': ${actual5}`);

    // //api/v2/token/erc721
    await page.getByLabel('get /api/v2/token/erc721').nth(0).click();
    const cost6 = 50;
    await page.waitForSelector(SELECTORS.tryItOut6);
    await page.click(SELECTORS.tryItOut6);
    await page.waitForSelector(SELECTORS.inputContractAddress6);
    await page.click(SELECTORS.inputContractAddress6);
    await page.press(SELECTORS.inputContractAddress6, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputContractAddress6, '0xeF9Cf8Bb798008d4805189fBF2254E03Ac39c852');
    await page.waitForSelector(SELECTORS.executeBtn6);
    await page.click(SELECTORS.executeBtn6);

    const cellLocator6 = page.locator(SELECTORS.status6);
    const actual6 = await cellLocator6.textContent();
    console.log(`Actual status code '/api/v2/token/erc721': ${actual6}`);
    logToFile(`Actual status code '/api/v2/token/erc721': ${actual6}`);

    // //api/v2/token/erc721/instances
    await page.getByLabel('get /api/v2/token/erc721/instances').click();
    const cost7 = 100;
    await page.waitForSelector(SELECTORS.tryItOut7);
    await page.click(SELECTORS.tryItOut7);
    await page.waitForSelector(SELECTORS.inputContractAddress7);
    await page.click(SELECTORS.inputContractAddress7);
    await page.press(SELECTORS.inputContractAddress7, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputContractAddress7, '0xeF9Cf8Bb798008d4805189fBF2254E03Ac39c852');
    await page.waitForSelector(SELECTORS.inputTokenId7);
    await page.click(SELECTORS.inputTokenId7);
    await page.press(SELECTORS.inputTokenId7, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenId7, '106');
    await page.waitForSelector(SELECTORS.executeBtn7);
    await page.click(SELECTORS.executeBtn7);

    const cellLocator7 = page.locator(SELECTORS.status7);
    const actual7 = await cellLocator7.textContent();
    console.log(`Actual status code '/api/v2/token/erc721/instances': ${actual7}`);
    logToFile(`Actual status code '/api/v2/token/erc721/instances': ${actual7}`);

    //api/v2/token/erc721/balances
    await page.getByLabel('get /api/v2/token/erc721/balances').click();
    const cost8 = 100;
    await page.waitForSelector(SELECTORS.tryItOut8);
    await page.click(SELECTORS.tryItOut8);
    await page.waitForSelector(SELECTORS.inputAddress8);
    await page.click(SELECTORS.inputAddress8);
    await page.press(SELECTORS.inputAddress8, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputAddress8, '0xBc1FEe05C54962C0371b681FdC23f956F9999999');
    await page.waitForSelector(SELECTORS.removeTokenContract8);
    await page.click(SELECTORS.removeTokenContract8);
    await page.waitForSelector(SELECTORS.inputTokenContract8);
    await page.click(SELECTORS.inputTokenContract8);
    await page.press(SELECTORS.inputTokenContract8, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenContract8, '0xeF9Cf8Bb798008d4805189fBF2254E03Ac39c852');
    await page.waitForSelector(SELECTORS.executeBtn8);
    await page.click(SELECTORS.executeBtn8);

    const cellLocator8 = page.locator(SELECTORS.status8);
    const actual8 = await cellLocator8.textContent();
    console.log(`Actual status code '/api/v2/token/erc721/balances': ${actual8}`);
    logToFile(`Actual status code '/api/v2/token/erc721/balances': ${actual8}`);


    //api/v2/token/erc721/transfers
    await page.getByLabel('get /api/v2/token/erc721/transfers').click();
    const cost9 = 100;
    await page.waitForSelector(SELECTORS.tryItOut9);
    await page.click(SELECTORS.tryItOut9);
    await page.waitForSelector(SELECTORS.inputTokenContract9);
    await page.click(SELECTORS.inputTokenContract9);
    await page.press(SELECTORS.inputTokenContract9, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenContract9, '0xeF9Cf8Bb798008d4805189fBF2254E03Ac39c852');
    await page.waitForSelector(SELECTORS.inputAddress9);
    await page.click(SELECTORS.inputAddress9);
    await page.press(SELECTORS.inputAddress9, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputAddress9, '0xBc1FEe05C54962C0371b681FdC23f956F9999999');
    await page.waitForSelector(SELECTORS.inputToDate9);
    await page.click(SELECTORS.inputToDate9);
    await page.press(SELECTORS.inputToDate9, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputToDate9, '2025-03-01');
    await page.waitForSelector(SELECTORS.executeBtn9);
    await page.click(SELECTORS.executeBtn9);

    const cellLocator9 = page.locator(SELECTORS.status9);
    const actual9 = await cellLocator9.textContent();
    console.log(`Actual status code '/api/v2/token/erc721/transfers': ${actual9}`);
    logToFile(`Actual status code '/api/v2/token/erc721/transfers': ${actual9}`);

    //api/v2/token/erc721/holders
    await page.getByLabel('get /api/v2/token/erc721/holders').click();
    const cost10 = 100;
    await page.waitForSelector(SELECTORS.tryItOut10);
    await page.click(SELECTORS.tryItOut10);
    await page.waitForSelector(SELECTORS.inputContractAddress10);
    await page.click(SELECTORS.inputContractAddress10);
    await page.press(SELECTORS.inputContractAddress10, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputContractAddress10, '0xeF9Cf8Bb798008d4805189fBF2254E03Ac39c852');
    await page.waitForSelector(SELECTORS.inputAddress10);
    await page.click(SELECTORS.inputAddress10);
    await page.press(SELECTORS.inputAddress10, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputAddress10, '0xBc1FEe05C54962C0371b681FdC23f956F9999999');
    await page.waitForSelector(SELECTORS.executeBtn10);
    await page.click(SELECTORS.executeBtn10);

    const cellLocator10 = page.locator(SELECTORS.status10);
    const actual10 = await cellLocator10.textContent();
    console.log(`Actual status code '/api/v2/token/erc721/holders': ${actual10}`);
    logToFile(`Actual status code '/api/v2/token/erc721/holders': ${actual10}`);

    //api/v2/token/erc1155
    await page.getByLabel('get /api/v2/token/erc1155').nth(0).click();
    const cost11 = 50;
    await page.waitForSelector(SELECTORS.tryItOut11);
    await page.click(SELECTORS.tryItOut11);
    await page.waitForSelector(SELECTORS.inputContractAddress11);
    await page.click(SELECTORS.inputContractAddress11);
    await page.press(SELECTORS.inputContractAddress11, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputContractAddress11, '0xbDDA76656929D3D202B396497ef86d620BB635D1');
    await page.waitForSelector(SELECTORS.executeBtn11);
    await page.click(SELECTORS.executeBtn11);

    const cellLocator11 = page.locator(SELECTORS.status11);
    const actual11 = await cellLocator11.textContent();
    console.log(`Actual status code '/api/v2/token/erc1155': ${actual11}`);
    logToFile(`Actual status code '/api/v2/token/erc1155': ${actual11}`);


    //api/v2/token/erc1155/instances
    await page.getByLabel('get /api/v2/token/erc1155/instances').click();
    const cost12 = 100;
    await page.waitForSelector(SELECTORS.tryItOut12);
    await page.click(SELECTORS.tryItOut12);
    await page.waitForSelector(SELECTORS.inputContractAddress12);
    await page.click(SELECTORS.inputContractAddress12);
    await page.press(SELECTORS.inputContractAddress12, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputContractAddress12, '0xbDDA76656929D3D202B396497ef86d620BB635D1');
    await page.waitForSelector(SELECTORS.inputTokenId12);
    await page.click(SELECTORS.inputTokenId12);
    await page.press(SELECTORS.inputTokenId12, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenId12, '1');
    await page.waitForSelector(SELECTORS.executeBtn12);
    await page.click(SELECTORS.executeBtn12);

    const cellLocator12 = page.locator(SELECTORS.status12);
    const actual12 = await cellLocator12.textContent();
    console.log(`Actual status code '/api/v2/token/erc1155/instances': ${actual12}`);
    logToFile(`Actual status code '/api/v2/token/erc1155/instances': ${actual12}`);

    //api/v2/token/erc1155/holders
    await page.getByLabel('get /api/v2/token/erc1155/holders').click();
    const cost13 = 100;
    await page.waitForSelector(SELECTORS.tryItOut13);
    await page.click(SELECTORS.tryItOut13);
    await page.waitForSelector(SELECTORS.inputContractAddress13);
    await page.click(SELECTORS.inputContractAddress13);
    await page.press(SELECTORS.inputContractAddress13, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputContractAddress13, '0xbDDA76656929D3D202B396497ef86d620BB635D1');
    await page.waitForSelector(SELECTORS.inputAddress13);
    await page.click(SELECTORS.inputAddress13);
    await page.press(SELECTORS.inputAddress13, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputAddress13, '0x0Cc8a6cF463E23C990aC670c33b4e5F04278558b');
    await page.waitForSelector(SELECTORS.executeBtn13);
    await page.click(SELECTORS.executeBtn13);

    const cellLocator13 = page.locator(SELECTORS.status13);
    const actual13 = await cellLocator13.textContent();
    console.log(`Actual status code '/api/v2/token/erc1155/holders': ${actual13}`);
    logToFile(`Actual status code '/api/v2/token/erc1155/holders': ${actual13}`);

    //api/v2/token/erc1155/balances
    await page.getByLabel('get /api/v2/token/erc1155/balances').click();
    const cost14 = 100;
    await page.waitForSelector(SELECTORS.tryItOut14);
    await page.click(SELECTORS.tryItOut14);
    await page.waitForSelector(SELECTORS.inputAddress14);
    await page.click(SELECTORS.inputAddress14);
    await page.press(SELECTORS.inputAddress14, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputAddress14, '0x0Cc8a6cF463E23C990aC670c33b4e5F04278558b');
    await page.waitForSelector(SELECTORS.removeTokenContract14);
    await page.click(SELECTORS.removeTokenContract14);
    await page.waitForSelector(SELECTORS.inputTokenContract14);
    await page.click(SELECTORS.inputTokenContract14);
    await page.press(SELECTORS.inputTokenContract14, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenContract14, '0xbDDA76656929D3D202B396497ef86d620BB635D1');
    await page.waitForSelector(SELECTORS.executeBtn14);
    await page.click(SELECTORS.executeBtn14);

    const cellLocator14 = page.locator(SELECTORS.status14);
    const actual14 = await cellLocator14.textContent();
    console.log(`Actual status code '/api/v2/token/erc1155/balances': ${actual14}`);
    logToFile(`Actual status code '/api/v2/token/erc1155/balances': ${actual14}`);

    //api/v2/token/erc1155/transfers
    await page.getByLabel('get /api/v2/token/erc1155/transfers').click();
    const cost15 = 100;
    await page.waitForSelector(SELECTORS.tryItOut15);
    await page.click(SELECTORS.tryItOut15);
    await page.waitForSelector(SELECTORS.inputTokenContract15);
    await page.click(SELECTORS.inputTokenContract15);
    await page.press(SELECTORS.inputTokenContract15, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenContract15, '0xbDDA76656929D3D202B396497ef86d620BB635D1');
    await page.waitForSelector(SELECTORS.inputAddress15);
    await page.click(SELECTORS.inputAddress15);
    await page.press(SELECTORS.inputAddress15, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputAddress15, '0x0Cc8a6cF463E23C990aC670c33b4e5F04278558b');
    await page.waitForSelector(SELECTORS.inputToDate15);
    await page.click(SELECTORS.inputToDate15);
    await page.press(SELECTORS.inputToDate15, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputToDate15, '2025-03-01');
    await page.waitForSelector(SELECTORS.executeBtn15);
    await page.click(SELECTORS.executeBtn15);

    const cellLocator15 = page.locator(SELECTORS.status15);
    const actual15 = await cellLocator15.textContent();
    console.log(`Actual status code '/api/v2/token/erc1155/transfers': ${actual15}`);
    logToFile(`Actual status code '/api/v2/token/erc1155/transfers': ${actual15}`);

    //api/v2/token/cw20
    await page.getByLabel('get /api/v2/token/cw20').nth(0).click();
    const cost16 = 50;
    await page.waitForSelector(SELECTORS.tryItOut16);
    await page.click(SELECTORS.tryItOut16);
    await page.waitForSelector(SELECTORS.inputTokenContract16);
    await page.click(SELECTORS.inputTokenContract16);
    await page.press(SELECTORS.inputTokenContract16, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenContract16, 'sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed');
    await page.waitForSelector(SELECTORS.executeBtn16);
    await page.click(SELECTORS.executeBtn16);

    const cellLocator16 = page.locator(SELECTORS.status16);
    const actual16 = await cellLocator16.textContent();
    console.log(`Actual status code '/api/v2/token/cw20': ${actual16}`);
    logToFile(`Actual status code '/api/v2/token/cw20': ${actual16}`);

    //api/v2/token/cw20/balances
    await page.getByLabel('get /api/v2/token/cw20/balances').click();
    const cost17 = 50;
    await page.waitForSelector(SELECTORS.tryItOut17);
    await page.click(SELECTORS.tryItOut17);
    await page.waitForSelector(SELECTORS.inputAddress17);
    await page.click(SELECTORS.inputAddress17);
    await page.press(SELECTORS.inputAddress17, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputAddress17, 'sei1kqjwdrp24plgghk5wdk95zk09kn7hrwnz320y3');
    await page.waitForSelector(SELECTORS.removeTokenContract17);
    await page.click(SELECTORS.removeTokenContract17);
    await page.waitForSelector(SELECTORS.inputTokenContract17);
    await page.click(SELECTORS.inputTokenContract17);
    await page.press(SELECTORS.inputTokenContract17, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenContract17, 'sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed');
    await page.waitForSelector(SELECTORS.executeBtn17);
    await page.click(SELECTORS.executeBtn17);

    const cellLocator17 = page.locator(SELECTORS.status17);
    const actual17 = await cellLocator17.textContent();
    console.log(`Actual status code '/api/v2/token/cw20/balances': ${actual17}`);
    logToFile(`Actual status code '/api/v2/token/cw20/balances': ${actual17}`);

    //api/v2/token/cw20/transfers
    await page.getByLabel('get /api/v2/token/cw20/transfers').click();
    const cost18 = 100;
    await page.waitForSelector(SELECTORS.tryItOut18);
    await page.click(SELECTORS.tryItOut18);
    await page.waitForSelector(SELECTORS.inputTokenContract18);
    await page.click(SELECTORS.inputTokenContract18);
    await page.press(SELECTORS.inputTokenContract18, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenContract18, 'sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed');
    await page.waitForSelector(SELECTORS.inputAddress18);
    await page.click(SELECTORS.inputAddress18);
    await page.press(SELECTORS.inputAddress18, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputAddress18, 'sei1kqjwdrp24plgghk5wdk95zk09kn7hrwnz320y3');
    await page.waitForSelector(SELECTORS.inputToDate18);
    await page.click(SELECTORS.inputToDate18);
    await page.press(SELECTORS.inputToDate18, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputToDate18, '2025-03-01');
    await page.waitForSelector(SELECTORS.executeBtn18);
    await page.click(SELECTORS.executeBtn18);

    const cellLocator18 = page.locator(SELECTORS.status18);
    const actual18 = await cellLocator18.textContent();
    console.log(`Actual status code '/api/v2/token/cw20/transfers': ${actual18}`);
    logToFile(`Actual status code '/api/v2/token/cw20/transfers': ${actual18}`);

    //api/v2/token/cw20/holders
    await page.getByLabel('get /api/v2/token/cw20/holders').click();
    const cost19 = 100;
    await page.waitForSelector(SELECTORS.tryItOut19);
    await page.click(SELECTORS.tryItOut19);
    await page.waitForSelector(SELECTORS.inputContractAddress19);
    await page.click(SELECTORS.inputContractAddress19);
    await page.press(SELECTORS.inputContractAddress19, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputContractAddress19, 'sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed');
    await page.waitForSelector(SELECTORS.executeBtn19);
    await page.click(SELECTORS.executeBtn19);

    const cellLocator19 = page.locator(SELECTORS.status19);
    const actual19 = await cellLocator19.textContent();
    console.log(`Actual status code '/api/v2/token/cw20/holders': ${actual19}`);
    logToFile(`Actual status code '/api/v2/token/cw20/holders': ${actual19}`);

    //api/v2/token/cw721
    await page.getByLabel('get /api/v2/token/cw721').nth(0).click();
    const cost20 = 50;
    await page.waitForSelector(SELECTORS.tryItOut20);
    await page.click(SELECTORS.tryItOut20);
    await page.waitForSelector(SELECTORS.inputContractAddress20);
    await page.click(SELECTORS.inputContractAddress20);
    await page.press(SELECTORS.inputContractAddress20, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputContractAddress20, 'sei1gzqcfgz8dndz7f94se0musgcepk3tjtwfjhssgsppmumj3jrzcgs847zag');
    await page.waitForSelector(SELECTORS.executeBtn20);
    await page.click(SELECTORS.executeBtn20);

    const cellLocator20 = page.locator(SELECTORS.status20);
    const actual20 = await cellLocator20.textContent();
    console.log(`Actual status code '/api/v2/token/cw721': ${actual20}`);
    logToFile(`Actual status code '/api/v2/token/cw721': ${actual20}`);


    //api/v2/token/cw721/instances
    await page.getByLabel('get /api/v2/token/cw721/instances').click();
    const cost21 = 100;
    await page.waitForSelector(SELECTORS.tryItOut21);
    await page.click(SELECTORS.tryItOut21);
    await page.waitForSelector(SELECTORS.inputContractAddress21);
    await page.click(SELECTORS.inputContractAddress21);
    await page.press(SELECTORS.inputContractAddress21, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputContractAddress21, 'sei1gzqcfgz8dndz7f94se0musgcepk3tjtwfjhssgsppmumj3jrzcgs847zag');
    await page.waitForSelector(SELECTORS.inputTokenId21);
    await page.click(SELECTORS.inputTokenId21);
    await page.press(SELECTORS.inputTokenId21, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenId21, '1');
    await page.waitForSelector(SELECTORS.executeBtn21);
    await page.click(SELECTORS.executeBtn21);

    const cellLocator21 = page.locator(SELECTORS.status21);
    const actual21 = await cellLocator21.textContent();
    console.log(`Actual status code '/api/v2/token/cw721/instances': ${actual21}`);
    logToFile(`Actual status code '/api/v2/token/cw721/instances': ${actual21}`);

    //api/v2/token/cw721/balances
    await page.getByLabel('get /api/v2/token/cw721/balances').click();
    const cost22 = 100;
    await page.waitForSelector(SELECTORS.tryItOut22);
    await page.click(SELECTORS.tryItOut22);
    await page.waitForSelector(SELECTORS.inputAddress22);
    await page.click(SELECTORS.inputAddress22);
    await page.press(SELECTORS.inputAddress22, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputAddress22, '0x0Cc8a6cF463E23C990aC670c33b4e5F04278558b');
    await page.waitForSelector(SELECTORS.removeTokenContract22);
    await page.click(SELECTORS.removeTokenContract22);
    await page.waitForSelector(SELECTORS.inputTokenContract22);
    await page.click(SELECTORS.inputTokenContract22);
    await page.press(SELECTORS.inputTokenContract22, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenContract22, 'sei10nulnfpdhx2wf7lp9kqa8aez2yxuyxwjyfw9rzlrexd500nhal0sl7mtzm');
    await page.waitForSelector(SELECTORS.executeBtn22);
    await page.click(SELECTORS.executeBtn22);

    const cellLocator22 = page.locator(SELECTORS.status22);
    const status22 = await cellLocator22.textContent();
    console.log(`Actual status code '/api/v2/token/cw721/balances': ${status22}`);
    logToFile(`Actual status code '/api/v2/token/cw721/balances': ${status22}`);

    //api/v2/token/cw721/transfers
    await page.getByLabel('get /api/v2/token/cw721/transfers').click();
    const cost23 = 100;
    await page.waitForSelector(SELECTORS.tryItOut23);
    await page.click(SELECTORS.tryItOut23);
    await page.waitForSelector(SELECTORS.inputTokenContract23);
    await page.click(SELECTORS.inputTokenContract23);
    await page.press(SELECTORS.inputTokenContract23, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenContract23, 'sei10nulnfpdhx2wf7lp9kqa8aez2yxuyxwjyfw9rzlrexd500nhal0sl7mtzm');
    await page.waitForSelector(SELECTORS.inputAddress23);
    await page.click(SELECTORS.inputAddress23);
    await page.press(SELECTORS.inputAddress23, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputAddress23, 'sei10hga39lfgfddv269agarj3av3jefey96hf558d');
    await page.waitForSelector(SELECTORS.inputToDate23);
    await page.click(SELECTORS.inputToDate23);
    await page.press(SELECTORS.inputToDate23, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputToDate23, '2025-03-01');
    await page.waitForSelector(SELECTORS.executeBtn23);
    await page.click(SELECTORS.executeBtn23);

    const cellLocator23 = page.locator(SELECTORS.status23);
    const actual23 = await cellLocator23.textContent();
    console.log(`Actual status code '/api/v2/token/cw721/transfers': ${actual23}`);
    logToFile(`Actual status code '/api/v2/token/cw721/transfers': ${actual23}`);

    //api/v2/token/cw721/holders
    await page.getByLabel('get /api/v2/token/cw721/holders').click();
    const cost24 = 100;
    await page.waitForSelector(SELECTORS.tryItOut124);
    await page.click(SELECTORS.tryItOut124);
    await page.waitForSelector(SELECTORS.inputContractAddress24);
    await page.click(SELECTORS.inputContractAddress24);
    await page.press(SELECTORS.inputContractAddress24, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputContractAddress24, 'sei10nulnfpdhx2wf7lp9kqa8aez2yxuyxwjyfw9rzlrexd500nhal0sl7mtzm');
    await page.waitForSelector(SELECTORS.inputAddress24);
    await page.click(SELECTORS.inputAddress24);
    await page.press(SELECTORS.inputAddress24, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputAddress24, 'sei10hga39lfgfddv269agarj3av3jefey96hf558d');
    await page.waitForSelector(SELECTORS.executeBtn24);
    await page.click(SELECTORS.executeBtn24);

    const cellLocator24 = page.locator(SELECTORS.status24);
    const actual24 = await cellLocator24.textContent();
    console.log(`Actual status code '/api/v2/token/cw721/holders': ${actual24}`);
    logToFile(`Actual status code '/api/v2/token/cw721/holders': ${actual24}`);

    //api/v2/token/ibc
    await page.getByLabel('get /api/v2/token/ibc').nth(0).click();
    const cost25 = 50;
    await page.waitForSelector(SELECTORS.tryItOut25);
    await page.click(SELECTORS.tryItOut25);
    await page.waitForSelector(SELECTORS.inputTokenDenom25);
    await page.click(SELECTORS.inputTokenDenom25);
    await page.press(SELECTORS.inputTokenDenom25, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenDenom25, 'ibc/CA6FBFAF399474A06263E10D0CE5AEBBE15189D6D4B2DD9ADE61007E68EB9DB0');
    await page.waitForSelector(SELECTORS.executeBtn25);
    await page.click(SELECTORS.executeBtn25);

    const cellLocator25 = page.locator(SELECTORS.status25);
    const actual25 = await cellLocator25.textContent();
    console.log(`Actual status code '/api/v2/token/ibc': ${actual25}`);
    logToFile(`Actual status code '/api/v2/token/ibc': ${actual25}`);

    //api/v2/token/ibc/balances
    await page.getByLabel('get /api/v2/token/ibc/balances').click();
    const cost26 = 50;
    await page.waitForSelector(SELECTORS.tryItOut26);
    await page.click(SELECTORS.tryItOut26);
    await page.waitForSelector(SELECTORS.inputAddress26);
    await page.click(SELECTORS.inputAddress26);
    await page.press(SELECTORS.inputAddress26, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputAddress26, 'sei1enqkq8k692xm8lawya0kn2xgzsftafqakkemt8');
    await page.waitForSelector(SELECTORS.removeTokenDenom26);
    await page.click(SELECTORS.removeTokenDenom26);
    await page.waitForSelector(SELECTORS.inputTokenDenom26);
    await page.click(SELECTORS.inputTokenDenom26);
    await page.press(SELECTORS.inputTokenDenom26, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenDenom26, 'ibc/CA6FBFAF399474A06263E10D0CE5AEBBE15189D6D4B2DD9ADE61007E68EB9DB0');
    await page.waitForSelector(SELECTORS.executeBtn26);
    await page.click(SELECTORS.executeBtn26);

    const cellLocator26 = page.locator(SELECTORS.status26);
    const actual26 = await cellLocator26.textContent();
    console.log(`Actual status code '/api/v2/token/ibc/balances': ${actual26}`);
    logToFile(`Actual status code '/api/v2/token/ibc/balances': ${actual26}`);

    //api/v2/token/ibc/transfers
    await page.getByLabel('get /api/v2/token/ibc/transfers').click();
    const cost27 = 100;
    await page.waitForSelector(SELECTORS.tryItOut27);
    await page.click(SELECTORS.tryItOut27);
    await page.waitForSelector(SELECTORS.inputTokenDenom27);
    await page.click(SELECTORS.inputTokenDenom27);
    await page.press(SELECTORS.inputTokenDenom27, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenDenom27, 'ibc/CA6FBFAF399474A06263E10D0CE5AEBBE15189D6D4B2DD9ADE61007E68EB9DB0');
    await page.waitForSelector(SELECTORS.inputAddress27);
    await page.click(SELECTORS.inputAddress27);
    await page.press(SELECTORS.inputAddress27, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputAddress27, 'sei1enqkq8k692xm8lawya0kn2xgzsftafqakkemt8');
    await page.waitForSelector(SELECTORS.inputToDate27);
    await page.click(SELECTORS.inputToDate27);
    await page.press(SELECTORS.inputToDate27, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputToDate27, '2025-03-01');
    await page.waitForSelector(SELECTORS.executeBtn27);
    await page.click(SELECTORS.executeBtn27);

    const cellLocator27 = page.locator(SELECTORS.status27);
    const actual27 = await cellLocator27.textContent();
    console.log(`Actual status code '/api/v2/token/ibc/transfers': ${actual27}`);
    logToFile(`Actual status code '/api/v2/token/ibc/transfers': ${actual27}`);

    //api/v2/token/ibc/holders
    await page.getByLabel('get /api/v2/token/ibc/holders').click();
    const cost28 = 100;
    await page.waitForSelector(SELECTORS.tryItOut28);
    await page.click(SELECTORS.tryItOut28);
    await page.waitForSelector(SELECTORS.inputContractDenom28);
    await page.click(SELECTORS.inputContractDenom28);
    await page.press(SELECTORS.inputContractDenom28, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputContractDenom28, 'ibc/CA6FBFAF399474A06263E10D0CE5AEBBE15189D6D4B2DD9ADE61007E68EB9DB0');
    await page.waitForSelector(SELECTORS.executeBtn28);
    await page.click(SELECTORS.executeBtn28);

    const cellLocator28 = page.locator(SELECTORS.status28);
    const actual28 = await cellLocator28.textContent();
    console.log(`Actual status code '/api/v2/token/ibc/holders': ${actual28}`);
    logToFile(`Actual status code '/api/v2/token/ibc/holders': ${actual28}`);

    //api/v2/token/native
    await page.getByLabel('get /api/v2/token/native').nth(0).click();
    const cost29 = 50;
    await page.waitForSelector(SELECTORS.tryItOut29);
    await page.click(SELECTORS.tryItOut29);
    await page.waitForSelector(SELECTORS.inputTokenDenom29);
    await page.click(SELECTORS.inputTokenDenom29);
    await page.press(SELECTORS.inputTokenDenom29, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenDenom29, 'factory/sei1e3gttzq5e5k49f9f5gzvrl0rltlav65xu6p9xc0aj7e84lantdjqp7cncc/isei');
    await page.waitForSelector(SELECTORS.executeBtn29);
    await page.click(SELECTORS.executeBtn29);

    const cellLocator29 = page.locator(SELECTORS.status29);
    const actual29 = await cellLocator29.textContent();
    console.log(`Actual status code '/api/v2/token/native': ${actual29}`);
    logToFile(`Actual status code '/api/v2/token/native': ${actual29}`);

    //api/v2/token/native/balances
    await page.getByLabel('get /api/v2/token/native/balances').click();
    const cost30 = 50;
    await page.waitForSelector(SELECTORS.tryItOut30);
    await page.click(SELECTORS.tryItOut30);
    await page.waitForSelector(SELECTORS.inputAddress30);
    await page.click(SELECTORS.inputAddress30);
    await page.press(SELECTORS.inputAddress30, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputAddress30, 'sei1enqkq8k692xm8lawya0kn2xgzsftafqakkemt8');
    await page.waitForSelector(SELECTORS.removeTokenDenom30);
    await page.click(SELECTORS.removeTokenDenom30);
    await page.waitForSelector(SELECTORS.inputTokenDenom30);
    await page.click(SELECTORS.inputTokenDenom30);
    await page.press(SELECTORS.inputTokenDenom30, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenDenom30, 'factory/sei1e3gttzq5e5k49f9f5gzvrl0rltlav65xu6p9xc0aj7e84lantdjqp7cncc/isei');
    await page.waitForSelector(SELECTORS.executeBtn30);
    await page.click(SELECTORS.executeBtn30);

    const cellLocator30 = page.locator(SELECTORS.status30);
    const actual30 = await cellLocator30.textContent();
    console.log(`Actual status code '/api/v2/token/native/balances': ${actual30}`);
    logToFile(`Actual status code '/api/v2/token/native/balances': ${actual30}`);

    //api/v2/token/native/transfers
    await page.getByLabel('get /api/v2/token/native/transfers').click();
    const cost31 = 100;
    await page.waitForSelector(SELECTORS.tryItOut31);
    await page.click(SELECTORS.tryItOut31);
    await page.waitForSelector(SELECTORS.inputTokenDenom31);
    await page.click(SELECTORS.inputTokenDenom31);
    await page.press(SELECTORS.inputTokenDenom31, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputTokenDenom31, 'factory/sei1e3gttzq5e5k49f9f5gzvrl0rltlav65xu6p9xc0aj7e84lantdjqp7cncc/isei');
    await page.waitForSelector(SELECTORS.inputAddress31);
    await page.click(SELECTORS.inputAddress31);
    await page.press(SELECTORS.inputAddress31, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputAddress31, 'sei1enqkq8k692xm8lawya0kn2xgzsftafqakkemt8');
    await page.waitForSelector(SELECTORS.inputToDate31);
    await page.click(SELECTORS.inputToDate31);
    await page.press(SELECTORS.inputToDate31, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputToDate31, '2025-03-01');
    await page.waitForSelector(SELECTORS.executeBtn31);
    await page.click(SELECTORS.executeBtn31);

    const cellLocator31 = page.locator(SELECTORS.status31);
    const actual31 = await cellLocator31.textContent();
    console.log(`Actual status code '/api/v2/token/native/transfers': ${actual31}`);
    logToFile(`Actual status code '/api/v2/token/native/transfers': ${actual31}`);

    //api/v2/token/native/holders
    await page.getByLabel('get /api/v2/token/native/holders').click();
    const cost32 = 100;
    await page.waitForSelector(SELECTORS.tryItOut32);
    await page.click(SELECTORS.tryItOut32);
    await page.waitForSelector(SELECTORS.inputContractDenom32);
    await page.click(SELECTORS.inputContractDenom32);
    await page.press(SELECTORS.inputContractDenom32, 'ControlOrMeta+a');
    await page.fill(SELECTORS.inputContractDenom32, 'factory/sei1e3gttzq5e5k49f9f5gzvrl0rltlav65xu6p9xc0aj7e84lantdjqp7cncc/isei');
    await page.waitForSelector(SELECTORS.executeBtn32);
    await page.click(SELECTORS.executeBtn32);

    const cellLocator32 = page.locator(SELECTORS.status32);
    const actual32 = await cellLocator32.textContent();
    console.log(`Actual status code '/api/v2/token/native/holders': ${actual32}`);
    logToFile(`Actual status code '/api/v2/token/native/holders': ${actual32}`);


    await page.waitForTimeout(5000);
    await page.waitForSelector(SELECTORS.avatarBtn);
    await page.click(SELECTORS.avatarBtn);
    await page.waitForTimeout(5000);
    await page.waitForSelector(SELECTORS.apiKeyProfile);
    await page.click(SELECTORS.apiKeyProfile);

    await page.waitForSelector(SELECTORS.apiCredit);
    await page.hover(SELECTORS.apiCredit);
    await page.hover('xpath=//span[@class="chakra-text css-s78ki9"]');
    const spanElement2 = page.locator('xpath=//span[@class="chakra-text css-s78ki9"]');
    const ariaDescribedBy2 = await spanElement2.getAttribute('aria-describedby');

    if (ariaDescribedBy2) {
      const tooltipLocator = page.locator(`#${ariaDescribedBy2.replace(/:/g, '\\:')}`);
      await tooltipLocator.waitFor({ state: 'visible' });

      const tooltipContent2 = await tooltipLocator.textContent();
      numericValue2 = parseFloat(tooltipContent2?.replace(/,/g, '') || '0');
      const totalCreditsUsed = cost1 + cost2 + cost3 + cost4 + cost5 + cost6 + cost7 + cost8 + cost9 + cost10 + cost11 + cost12 + cost13+cost14+ cost15+cost16 + cost17+cost18+cost19+cost20 + cost21 + cost22 + cost23 + cost24+cost25 + cost26 + cost27 + cost28+cost29 + cost30 + cost31 + cost32;
      //const totalCreditsUsed = cost29 + cost30 + cost31 + cost32;
      const currentCredits = numericValue1 - totalCreditsUsed;
      const expectedCredits = numericValue2;
      if (expectedCredits === currentCredits) {
        logToFile(`(Before) Credits: ${numericValue1}`);
        logToFile(`Total credit used: ${totalCreditsUsed}`);
        logToFile(`(After) Credits: ${numericValue2}`);
        logToFile(`API-Key Used: ${SELECTORS.APIKey} (from email: ${SELECTORS.emailUsed})`);
        logToFile('====> Credits validation PASSED\n');
        
        // logToFile([
        //   `[${timestamp}] Actual status code '/api/v2/addresses': ${actual1}`,
        //   `[${timestamp}] Actual status code '/api/v2/token/erc20': ${actual2}`,
        //   `[${timestamp}] Actual status code '/api/v2/token/erc20/balances': ${actual3}`,
        //   `[${timestamp}] Actual status code '/api/v2/token/erc20/transfers': ${actual4}`,
        //   `[${timestamp}] Actual status code '/api/v2/token/erc20/holders': ${actual5}`,
        //   `[${timestamp}] Actual status code '/api/v2/token/erc721': ${actual6}`,
        //   `[${timestamp}] Actual status code '/api/v2/token/erc721/instances': ${actual7}`,
        //   `[${timestamp}] Actual status code '/api/v2/token/erc721/balances': ${actual8}`,
        //   `[${timestamp}] Actual status code '/api/v2/token/erc721/transfers': ${actual9}`,
        //   `[${timestamp}] Actual status code '/api/v2/token/erc721/holders': ${actual10}`,
        //   `(Before) Credits: ${numericValue1}`,
        //   `Total credit used: ${totalCreditsUsed}`,
        //   `(After) Credits: ${numericValue2}`,
        //   '====> Credits validation PASSED',
        // ]);

        console.log('Credits validation PASSED');
      } else {
        logToFile(`(Before) Credits: ${numericValue1}`);
        logToFile(`Total credit used: ${totalCreditsUsed}`);
        logToFile(`(After) Credits: ${numericValue2}`);
        logToFile(`API-Key Used: ${SELECTORS.APIKey} (from email: ${SELECTORS.emailUsed})`);
        logToFile('====> Credits validation FAILED\n');

        console.log('Credits validation FAILED');
      }
      expect(expectedCredits).toBe(currentCredits);
      console.log('(Before) Credits:', numericValue1);
      console.log(`Total credits used: ${totalCreditsUsed}`);
      console.log('(After) Credits:', numericValue2);
    } else {
      console.log('Tooltip not found.');
    }


  });
});

import { test, expect } from '@playwright/test';

test('As a user, I can go to Mission page by url successful', async ({ page }) => {
    //Given go to url (https://space3.gg/)
  await page.goto('https://space3.gg/');

  //When I click on first mission in list
  await page.click('#anchor-point > div > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(1)');

  //Then I saw title as "Space3 Genesis Soul | Space3 Kids - Get Lost Together"

  const titleExpected = 'Space3 Genesis Soul | Space3 Kids - Get Lost Together';
  const acctualTitle = '#__next > main > div > div.space-3-layout.space-3-layout-has-sider.main-layout-desktop.undefined.css-kda75v > main > div.app-container > div > div.space-3-col.space-3-col-14.css-kda75v > div > div:nth-child(1) > div > div:nth-child(2) > h1';
  await expect(page).toHaveURL('https://space3.gg/missions/space3-genesis-soul-the-digiworlds-await');
});
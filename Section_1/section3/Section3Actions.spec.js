import{test,expect} from '@playwright/test'

test.only('section2',async({page})=>{
      await page.goto('https://the-internet.herokuapp.com/login');
      await page.locator('//input[@id="username"]').first().fill('tomsmith');
      await page.waitForTimeout(2000);
      await page.locator('//input[@id="password"]').first().fill('SuperSecretPassword!');
      await page.waitForTimeout(2000);
      // mouse hovering
      await page.locator('//button[@type="submit"]').first().hover();
      await page.waitForTimeout(2000);
      await page.locator('//button[@type="submit"]').first().click();
      await page.waitForTimeout(2000);
      // await page.keyboard.press('Tab');
      await page.locator('//a[@href="/logout"]').first().hover();
      await page.waitForTimeout(2000);
      //  Press Enter with keboard
      await page.keyboard.press('Enter');

   
})
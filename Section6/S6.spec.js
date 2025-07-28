import {test,expect} from'@playwright/test'
// const userdatas = require('../data/userdatas.json');
var userdatas = require('../tests/data.json');

test.describe('Data-driven form tests', () => {
  for (const data of userdatas) 
    {
    test(`Submit form for ${data.name}`, async ({ page }) => {
      await page.goto('https://www.selenium.dev/selenium/web/web-form.html');

      // Wait for page to load
      await expect(page.locator('h1')).toHaveText('Web form');

      // Fill the form
      await page.locator('input[name="my-text"]').first().fill(data.text);
      await page.locator('input[name="my-email"]').first().fill(data.email);
      await page.locator('textarea[name="my-textarea"]').first().fill(data.textarea);

      // Submit the form
      await page.locator('button').first().click();

      // Verify the result
      await expect(page.locator('h1')).toHaveText('Form submitted');
    });
  }
})
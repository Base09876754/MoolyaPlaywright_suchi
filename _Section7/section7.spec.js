const { test, expect } = require('@playwright/test');

test('Take full-page screenshot and record video', async ({ page }) => {
  // Go to demo image site
  await page.goto('https://unsplash.com');

  // Wait for page to load
  await page.waitForSelector('img');

  // Take a full-page screenshot
  await page.screenshot({ path: 'screenshots/picture.png', fullPage: true });

  // Interact (scroll for demonstration)
  await page.mouse.wheel(0, 1000);
  await page.waitForTimeout(2000);
});
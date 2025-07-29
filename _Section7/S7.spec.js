const { test, expect } = require('@playwright/test');

test('Full e-commerce flow - demo video', async ({ page }) => {
  // Step 1: Go to the demo site
  await page.goto('https://automationexercise.com');

  // Step 2: Wait for home page to load
  await expect(page.locator('//h2[text()="Features Items"]')).toBeVisible();

  // Step 3: Scroll and click 'View Product' of first item
  await page.mouse.wheel(0, 600);
  await page.locator('//a[text()="View Product"]').first().click();
  await expect(page.locator('//h2[text()="Blue Top"]')).toContainText('Blue Top');

  await page.screenshot({path:'screenshots/blue-top-page.png',fullPage: true})

  // Step 5: Go back to home
  await page.goBack();

  // Step 6: Click 'Signup / Login' and try to register
  await page.locator('//a[text()=" Signup / Login"]').click();
  await expect(page.locator('//h2[text()="New User Signup!"]')).toBeVisible();
//   await expect(page.locator('//h2[text()="New User Signup!"]')).first().waitFor({state:'visible'});


  // Step 7: Fill signup form with dummy data
  await page.locator('//input[@data-qa="signup-name"]').fill('Test User');
  await page.locator('//input[@data-qa="signup-email"]').fill(`test${Date.now()}@example.com`);
  await page.locator('//button[@data-qa="signup-button"]').click();

  // Wait and let video capture scroll/motio
  await page.waitForTimeout(3000);
  await page.screenshot({path: 'test-results/after-signup.png',fullPage: true});
});

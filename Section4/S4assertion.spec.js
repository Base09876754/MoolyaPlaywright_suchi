import{test,expect} from '@playwright/test'
import { before } from 'node:test';


test.describe('Rahul Shetty Practice Login Tests', () => {
    test.beforeAll(async()=>{
        console.log('Befor All test')
    })
  
      test.beforeEach(async ({ page }) => {
        console.log('Navigating to the login page');
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
      });
    
      test.afterEach(async ({ page }) => {
        console.log('Test completed: Closing current page context.');
        // Optionally take a screenshot after each test
        await page.screenshot({ path: `screenshots/test-${Date.now()}.png`, fullPage: true });
      });
    
      test.afterAll(async () => {
        console.log('All tests in the suite have completed.');
      });
    
      test('Valid login shows welcome message', async ({ page }) => {
        await page.locator('//input[@type="text"]').first().fill('rahulshettyacademy');
        await page.locator('//input[@id="password"]').first().fill('learning');
        await page.locator('//input[@id="signInBtn"]').first().click();
    
      //   await expect(page).toHaveURL(/shop/);
        const greeting = page.locator('//a[(text()="ProtoCommerce")]');
        await expect(greeting).toContainText('ProtoCommerce');
        await expect(greeting).not.toContainText('Wrong')
      });
    
      test('Invalid login shows error message', async ({ page }) => {
            await page.locator('//input[@id="username"]').fill('Suchi');
            await page.locator('//input[@id="password"]').fill('qwerty');
            await page.locator('//input[@id="signInBtn"]').click();
    
        const error_msg = page.locator('//strong[text()="Incorrect"]');
        await expect(error_msg).toBeVisible();
        await expect(error_msg).toHaveText(/Incorrect/);
        await expect(error_msg).not.toBeEmpty();
      });
    
      test('InterviewQues/ResumeAssistance/Material section is visible and correct', async ({ page }) => {
            const infoText = page.locator('//a[text()="Free Access to InterviewQues/ResumeAssistance/Material"]');
            await expect(infoText).toBeVisible();
            await expect(infoText).toHaveText(/Free Access to InterviewQues\/ResumeAssistance\/Material/i);
            await expect(infoText).not.toContainText('Error');
          });
    });
    // https://github.com/Base09876754/MoolyaPlaywright_suchi/tree/main/Section4

import {test,expect} from'@playwright/test'
import path from 'path';

test('Scroll, wait for lazy content', async ({ page }) => {
  // Step 1: Go to the demo page
  await page.goto('https://picsum.photos/');
  const ele= page.locator('//img[@class="resize"]').first();
  await ele.waitFor({state:'visible'});
  await ele.screenshot({path:'screenshots/img.png'})
 // Wait for at least one image to appear
const images = page.locator('//img');
// await expect(images.first()).toBeVisible();

// Scroll into view of last image loaded
const count = await images.count();
// console.log(`Images found: ${count}`);

if (count > 0) {
  await images.nth(count - 1).evaluate(el => el.scrollIntoView());
  await page.waitForTimeout(1500);
  await page.screenshot({path:'screenshots/pic.png'})
} else {
  console.log('No images found on the page.');
}



})
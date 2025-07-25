import {test,expect} from'@playwright/test'

test('Scroll, wait for lazy content, and act on new article', async ({ page }) => {
  // Step 1: Go to the demo page
  await page.goto('https://infinite-scroll.com/demo/full-page/');

  // Step 2: Wait for first article
  const articlesLocator = page.locator('//article');
  await expect(articlesLocator.first()).toBeVisible();
  const initialCount = await articlesLocator.count();
  console.log(`🧾 Initial article count: ${initialCount}`);

  // Step 3: Scroll and wait for article count to increase
  await page.mouse.wheel(0, 3000);
  console.log('⬇️ Scrolling down...');

  await page.waitForFunction(
    (oldCount) => {
      return document.evaluate('//article', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength > oldCount;
    },
    initialCount, // arg to function
    { timeout: 10000 }
  );
  console.log('✅ More articles loaded');

  // Step 4: Get new count and validate
  const newCount = await articlesLocator.count();

  await expect(newCount).toBeGreaterThan(initialCount);

  // Step 5: Act on the first new article (e.g. title)
  const newArticle = articlesLocator.nth(initialCount); // first *new* one
  await expect(newArticle).toBeVisible();
  const heading = await newArticle.locator('xpath=.//h2').textContent()
  // console.log(`📰 New article title: ${title?.trim()}`);
});



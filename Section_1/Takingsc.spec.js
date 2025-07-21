import{test,expect} from '@playwright/test'

test('launch browser',async({page})=>{

      await page.goto("https://candymapper.com/");
      // await page.locator('//img[@data-ux="HeaderMediaImage"]').screenshot({path:'tests/screenshot/'+Date.now()+'sc1.png'})
      await page.screenshot({path:'tests/screenshot/'+'sc1.png', fullPage: true});
});
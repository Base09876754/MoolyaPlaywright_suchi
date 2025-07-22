import{test,expect} from '@playwright/test'

test.only('section2',async({page})=>{
    await page.goto('https://www.flipkart.com/');
    await page.locator('//input[@autocomplete="off"]').first().fill('mobile');
    // getByRole()
    const textByRole = await page.getByRole('button',{type:"submit"}).first().click();
  

  // getByText()
  const textXpath=await page.locator('//div[@class="KzDlHZ"]').first().textContent();
  
  // CSS selector

  const textCss = await page.locator('.KzDlHZ').nth(2).textContent();

   // // getByText() (less precise but valid)
   await page.getByText('MOTOROLA').first().click()


  console.log('• CSS:     ', textCss);
  console.log('• XPath:   ', textXpath);
  // console.log('• getByText:', textByText);
  // console.log('• getByRole:', textByRole);

// await browser.close();
})


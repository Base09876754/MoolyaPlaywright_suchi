const { test, expect, request } = require('@playwright/test');


test('validate public api',async({page})=>{

      const catContext = await request.newContext();
      const response = await catContext.get('https://api.thecatapi.com/v1/images/search')
      expect(response.status()).toBe(200);
      const data =  await response.json()
      console.log('Api response body:',JSON.stringify(data))
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(0);
      data.forEach(element => {
            expect(element).toHaveProperty('id');
            expect(element).toHaveProperty('url');
            expect(element).toHaveProperty('width');
            expect(element).toHaveProperty('height');
            expect(typeof element.url).toBe('string');
            expect(element.url).toMatch((/^https:\/\/.*\.(jpg|jpeg|png)$/));
            console.log('Extracted URL:', element.url);
            expect(element.url).toBeTruthy();
      });
      // const url = data.map(element=>element.url);
      // console.log('extract image url',url)
      // validate url is not empty
      // expect(url).toBeTruthy();
      //to chain ui
      await page.goto('https://thecatapi.com/')
      await page.locator('//img[@decoding="async"]').waitFor({state:'visible'});


})
// test('Upload an image to TheCatAPI', async () => {
//       const catContext = await request.newContext();
    
//       const imagePath = 'path_to_your_image.jpg'; 
    
//       const response = await catContext.post('https://api.thecatapi.com/v1/images/upload', {
//         headers: {
//           'x-api-key': 'YOUR_API_KEY'
//         },
//         form: {
//           file: {
//             filePath: imagePath
//           }
//         }
//       });
    
//       // Check if the upload was successful
//       expect(response.status()).toBe(200);
    
//       const data = await response.json();
//       console.log('Uploaded Image Info:', JSON.stringify(data));
    
//       // Validate that the response contains the expected properties
//       expect(data).toHaveProperty('id');
//       expect(data).toHaveProperty('url');
//     });

const url = 'https://candymapper.com/';

(async () => {
  const browsers = [
    { name: 'chromium', launcher: chromium },
    { name: 'firefox', launcher: firefox },
    { name: 'webkit', launcher: webkit }
  ];

  for (const { name, launcher } of browsers) {
    const browser = await launcher.launch();
    const page = await browser.newPage();
    await page.goto(url);
    
  }
})();
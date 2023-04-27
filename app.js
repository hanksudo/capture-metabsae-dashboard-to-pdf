const puppeteer = require('puppeteer');

(async () => {
    // Your metabase public dashboard url
    // ex: `https://metabase_url/public/dashboard/<token>#theme=night`
    const url = 'https://www.metabase.com/'
    const browser = await puppeteer.launch({ headless: 'new' })
  
    const page = await browser.newPage();
  
    await page.setViewport({
      width: 1024,
      height: 768,
      deviceScaleFactor: 1
    });
  
    await page.goto(url, { waitUntil : 'networkidle2' });
    await page.screenshot({ path: 'output.png' });  
    await browser.close();
})();
const puppeteer = require('puppeteer');

async function save_pdf(){

    const browser = await puppeteer.launch({args:['--no-sandbox']});
    const page = await browser.newPage();
    await page.goto('file://'+__dirname+'/'+'edited3.html');
    await page.pdf({ path: 'doccliente.pdf', format: 'A4' });
  
    await browser.close();

}
save_pdf()
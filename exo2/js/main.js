const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://www.lesjeudis.com/recherche?utf8=%E2%9C%93&q=javascript&loc=paris', {waitUntil: 'load'})
    await page.waitFor(10000);

    let texts = await page.evaluate(() => {
        let data = [];
        let elements = document.getElementsByClassName('job-title');
        for (var element of elements)
            data.push(element.textContent);
        return data;
    });
    console.log(texts);
    browser.close();
})();
const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://www.lesjeudis.com/recherche?utf8=%E2%9C%93&q=javascript&loc=paris', {waitUntil: 'load'})
    await page.waitFor(10000);

    let detailsJobs = await page.evaluate(() => {
        // let job = [];
        let jobs = document.getElementsByClassName('job');
        // for (var elementJob of jobs)
        // job.push(elementJob.innerHTML);
        
        return jobs;
    });
    console.log(detailsJobs);
    browser.close()
})();
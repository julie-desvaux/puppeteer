const puppeteer = require('puppeteer');

function Annonce(title) {
  this.title = title;
}

async function scrape() {

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({width:1920, height:2160});

    await page.goto("https://www.lesjeudis.com/recherche?utf8=%E2%9C%93&q=javascript&loc=paris", {waitUntil: 'networkidle2'});

    const elements = await page.$$("div.job");
    console.log(elements);

    // var mydata = new Array();

    // for (var element of elements){ 
    //     let text = await element.$eval('.job-info.job-title', s => s.textContent.trim());
    //     console.log(text);

    //     let item = new Annonce(text);
    //     mydata.push(item); // Push the data to our array            
    // }

    // console.log(mydata);
    browser.close();
}

scrape();
const puppeteer = require('puppeteer');

function Quote(text, author, tags) {
  this.text = text;
  this.author = author;
  this.tags = tags;
}

async function scrape() {

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.setViewport({width:1920, height:2160});

    await page.goto("http://quotes.toscrape.com/js/", {waitUntil: 'networkidle2'});

    const elements = await page.$$("div.quote");

    var mydata = new Array();

    for (var element of elements){ 
        let text = await element.$eval('.text', s => s.textContent.trim()); 
        let author = await element.$eval('.author', s => s.textContent.trim()); 
        let tags = await element.$$eval('.tag', ar => ar.map(a => a.text) );

        let item = new Quote(text, author, tags);
        mydata.push(item); // Push the data to our array            
        }

    console.log(mydata);
    browser.close();
}

scrape();
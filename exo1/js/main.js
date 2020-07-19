// Import des paquets "node-xlsx" et "puppeteer"
const xlsx = require('node-xlsx');
const puppeteer = require('puppeteer');

// Fichier Excel
var path = "C:/Users/ASF/Desktop/konexio/pupperteer/exo1/doc"
var obj = xlsx.parse(path + '/challenge.xlsx');

var firstname;
var lastname;
var compagny;
var role;
var adress;
var email;
var phoneNumber;
var endExcel = obj[0].data.length;

(async() => {
    const browser = await puppeteer.launch({
        headless: false
      });
    const page = await browser.newPage();
    await page.goto('http://www.rpachallenge.com/', {waitUntil: 'load'})
    await page.waitFor(10000);
    // Button Start
    await page.click('[class="waves-effect col s12 m12 l12 btn-large uiColorButton"]');

    for (var i = 1; i <= endExcel; i++){
      firstname = obj[0].data[i][0];
      lastname = obj[0].data[i][1];
      compagny = obj[0].data[i][2];
      role = obj[0].data[i][3];
      adress = obj[0].data[i][4];
      email = obj[0].data[i][5];
      phoneNumber = obj[0].data[i][6];
      phoneNumber = phoneNumber.toString();
      console.log('#3', i);
      await page.type('[ng-reflect-name="labelFirstName"]', firstname);      
      await page.type('[ng-reflect-name="labelLastName"]', lastname);
      await page.type('[ng-reflect-name="labelCompanyName"]', compagny);
      await page.type('[ng-reflect-name="labelRole"]', role);
      await page.type('[ng-reflect-name="labelAddress"]', adress);
      await page.type('[ng-reflect-name="labelEmail"]', email);
      await page.type('[ng-reflect-name="labelPhone"]', phoneNumber);

      await page.click('[type="submit"]');
      console.log('#10', i);
      
    }
})();
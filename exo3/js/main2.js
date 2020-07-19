const puppeteer = require('puppeteer');

const getData = async () => {
    // 1 - Créer une instance de navigateur
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()

    console.log('#1');

    // 2 - Naviguer jusqu'à l'URL cible
    await page.goto('https://www.lesjeudis.com/recherche?utf8=%E2%9C%93&q=javascript&loc=paris', {waitUntil: 'load'})
    await page.waitFor(1000) // fait une pause d'une seconde

    console.log('#2');

    // 3 - Récupérer les données
    const result = await page.evaluate(() => {
        console.log('#3');
        let job = [];
        let jobTitle = '';
        let snapshot = '';
        let description = '';
        let tags = '';
        let jobs = document.getElementsByClassName('job');
        console.log(jobs);
        let i = 1;
        console.log('#4');
        // for (var elementJob of jobs)
        //     console.log('#5');
        //     console.log(elementJob);
            // jobTitle = elementJob.querySelector('.job-title').innerText;
            // snapshot = elementJob.querySelector('.snapshot').innerText;
            // description = elementJob.querySelector('.description').innerText;
            // tags = elementJob.querySelector('.tags').innerText;
            // console.log('#6');
            // var annonceJob = new Object();
            // console.log('#7');
            // annonceJob.title = jobTitle;
            // annonceJob.snapshot = snapshot;
            // job.push(annonceJob);
            // console.log('#8');
            
        // return job;

        // let title = document.querySelector('.job-title').innerText
        // return { title, price }
    })

    // 4 - Retourner les données (et fermer le navigateur)
    browser.close()
    return result
}

// Appelle la fonction getData() et affichage les données retournées
getData().then(value => {
    console.log(value)
})










// (async() => {
//     const browser = await puppeteer.launch({
//         headless: false
//     });
//     const page = await browser.newPage();
//     await page.goto('https://www.lesjeudis.com/recherche?utf8=%E2%9C%93&q=javascript&loc=paris', {waitUntil: 'load'})
//     await page.waitFor(10000);

//     let detailsJobs = await page.evaluate(() => {
//         let job = [];
//         let jobs = document.getElementsByClassName('job');
//         for (var elementJob of jobs)
//         job.push(elementJob.textContent);
        
//         return job;
//     });
//     console.log(detailsJobs);
// })();

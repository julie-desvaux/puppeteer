const puppeteer = require('puppeteer')

// Déclaration d’une arrow function asynchrone *
const screenshot = async () => {
    console.log('#1');

    // Création d’une instance de Chrome
    const browser = await puppeteer.launch({
        headless: false
    })

    console.log('#2');

    // Création d’un nouvel onglet
    const page = await browser.newPage()

    console.log('#3');

    // Navigation vers l'URL souhaitée
    await page.goto('https://www.konexio.eu/index.html')
    
    console.log('#4');

    // Agrandire la taille de la page
    await page.setViewport({ width: 1000, height: 500 })

    console.log('#5');

    // Screenshot de la page
    await page.screenshot({ path: 'screenshot.png' })
    
    console.log('#6');

    // Fermeture du navigateur
    await browser.close()
    
    console.log('#7');
}

// Appel de la fonction principale
screenshot()
document.querySelector('header > h1').innerText = 'Inspector Clouseau'
document.querySelector('header > h2').innerText = '"This IZ Chief Inspector Clouseau speaking on the pheaun"'

// Window Properties
function reDisplay() {
    let windowSizes = `Window size: ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`
    let offset = `Window offset: ${window.screenX} pixels from the left edge & ${window.screenY} pixels from the top of the display.`
    let url = `Page URL: ${window.location}`

    let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset} \n ${url}`
}
reDisplay()

// Document Properties
let documentTitle = `Document Title: ${document.title}`
let documentUpdate = `This document was last updated on ${document.lastModified}`

let myDocument = document.querySelector('#myDocument').innerText = `${documentTitle} \n ${documentUpdate}`
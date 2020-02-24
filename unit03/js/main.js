document.querySelector('header > h1').innerText = 'Guessing Game'
document.querySelector('header > h2').innerText = 'Loops'

// pick a random number between 0 and 16
let correctNumber = Math.floor(Math.random() * 15)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

console.log(`The correct number is ${correctNumber}`)

function evalGuess() {
    totalGuesses++ //totalGuesses = totalGuesses + 1
    gamerGuess = document.querySelector('#guess').value

    const feedback = document.querySelector('#feedback')

    if(gamerGuess == correctNumber) {
        console.log('gamerGuess is equal to correctNumber')
        feedback.innerText = 'You are Correct!'
        giveAward()
    } else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = 'Your guess was too high, try again'
    } else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'Your guess was too low, try again'
    } else {
        feedback.innerText = 'Please choose a number between 1 and 15 and try again'
        totalGuesses -= 1
    }

    document.querySelector('#attempts').innerText = totalGuesses
}

function giveAward() {
    console.log('Congratulations!')
    let imagePath = '#'
    switch(totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = 'images/blue_ribbon.png'
            break;
        case 4:
        case 5:
        case 6:
            imagePath = 'images/red_ribbon.png'
            break;
        default:
            imagePath = 'images/yellow_ribbon.png'
    }

    const awardImage = document.createElement('img') // creates an <img> element
    awardImage.setAttribute('src', imagePath)
    const ribbon = document.querySelector('#ribbon')

    ribbon.appendChild(awardImage)
    // only append child if ribbon element does not have any child nodes yet
}
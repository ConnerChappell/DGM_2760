document.querySelector('header > h1').innerText = 'Fortune Teller'
document.querySelector('header > h2').innerText = 'Switch Statements'

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

function getMonthName(month) {
    let name
    switch (month) {
        case 1:
            name = 'January'
            break;
        case 2:
            name = 'February'
            break;
        case 3:
            name = 'March'
            break;
        case 4:
            name = 'April'
            break;
        case 5:
            name = 'May'
            break;
        case 6:
            name = 'June'
            break;
        case 7:
            name = 'July'
            break;
        case 8:
            name = 'August'
            break;
        case 9:
            name = 'September'
            break;
        case 10:
            name = 'October'
            break;
        case 11:
            name = 'November'
            break;
        case 12:
            name = 'December'
            break;
        default:
            name = 'Not a month'
            break;
    }
    return name
}

function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message = 'travel to a far off destination'
            break;
        case 2:
            message = 'come into large sums of money'
            break;
        case 3:
            message = 'get news that will make your blood run cold'
            break;
        case 4:
            message = 'run into a long lost relative'
            break;
        case 5:
            message = 'meet people totally outside your circle of friends; beware of their intentions'
            break;
        default:
            message = 'Some sort of error occurred'
            break;
    }
    return message
}

let fate = getRandomIntInclusive(1, 5)
let day = getRandomIntInclusive(1, 30)
let month = getRandomIntInclusive(1, 12)
const monthName = getMonthName(month)
const fortuneMessage = getFortune(fate)

const fortuneRevealed = `On ${monthName} ${day}, you will ${fortuneMessage}`

document.querySelector('#fortune').innerText = fortuneRevealed
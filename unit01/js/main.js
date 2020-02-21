document.querySelector('#company').innerText = 'Joe\'s Bed and Breakfast'
document.querySelector('header > h2').innerText = 'Best B&B in the Western United States'

let userName = prompt('What is your name?')

let message = `Hello ${userName}, welcome to the finest lodging in Idaho!`
document.querySelector('#greeting').innerText = message
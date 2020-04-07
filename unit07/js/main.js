document.querySelector('header > h1').textContent = 'Pizza Emporium'
document.querySelector('header > h2').textContent = 'Literal Objects'

let message

const pizza = {
    crust: 'thin', 
    size: 'small',
    topping: 'pepperoni',
    buildPizza: function () {
        console.log('buildPizza method has been called')
        message = `Baking a ${pizza.size} ${pizza.crust} crust pizza with ${pizza.topping} just for you.`
        document.querySelector('#feedback').textContent = message
    },
    shoppingList: () => {
        let flour = 1
        if (pizza.crust === 'thick') flour *= 2
        if (pizza.size === 'large') flour *= 2
        message = `To make this pizza yourself, you will need to purchase ${flour} cup(s) of flour and 1 lb of ${pizza.topping}.`
        document.querySelector('#feedback').textContent = message
    }
}

document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')
document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')

document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

document.querySelector('#build').addEventListener('click', pizza.buildPizza)
document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)
document.querySelector('header > h1').textContent = 'The Arborist'
document.querySelector('header > h2').textContent = 'Events and Arrays'

// Create an array with 4 trees listed
const trees = ['oak', 'Pine', 'Black Willow', 'aspen']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

// Display the list of trees inside the displayResults div
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`
} 

listTrees()
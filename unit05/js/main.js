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

// Add a redwood to the end
document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood')
    listTrees()
}

// Add a cherry to the start
document.querySelector('#add_cherry').onclick = () => {
    trees.unshift('Cherry')
    listTrees()
}

// Remove the first tree
document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0) {
        trees.shift()
        listTrees()
    } else {
        errorElement.textContent = 'Cannot remove the first tree because there are not enough trees in the list'
    }
}
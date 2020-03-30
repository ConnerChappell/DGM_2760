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
    displayResults.innerHTML = `${treeList} <span>${trees.length} trees in the list</span>`
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

// Remove the second tree
document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 1) {
        trees.splice(1, 1)
        listTrees()
    } else {
        errorElement.textContent = 'Cannot remove the second tree because there are not enough trees in the list'
    }
}

// Remove the last tree
document.querySelector('#remove_treeLast').onclick = () => {
    if (trees.length > 0) {
        trees.pop()
        listTrees()
    } else {
        errorElement.textContent = 'Cannot remove the last tree because there are not enough trees in the list'
    }
}

// Sort the trees A-Z
document.querySelector('#sortTrees').onclick = () => {
    if (trees.length > 1) {
        trees.sort()
        listTrees()
    } else {
        errorElement.textContent = 'Cannot sort the trees because there are not enough trees in the list'
    }
}

// Make all trees lowercase
document.querySelector('#lowerTrees').onclick = () => {
    if (trees.length > 0) {
        let toLower =[]
        toLower = trees.map(tree => tree.toLowerCase())
        trees.splice(0, toLower.length, ...toLower)
        listTrees()
    } else {
        errorElement.textContent = 'Cannot make the trees lowercase because there are no trees in the list'
    }
}






// Name of tree number 3
document.querySelector('#showName3').onclick = () => {
    if (trees.length > 2) {
        errorElement.innerHTML = `Tree number 3 is ${trees[2]}`
    } else {
        errorElement.textContent = 'Cannot dispaly tree number 3 because there are not enough trees in the list'
    }
}

// Name of tree number 4
document.querySelector('#showName4').onclick = () => {
    if (trees.length > 3) {
        errorElement.innerHTML = `Tree number 4 is ${trees[3]}`
    } else {
        errorElement.textContent = 'Cannot dispaly tree number 4 because there are not enough trees in the list'
    }
}


// trees.forEach((tree) => console.log(tree.toLowerCase()))
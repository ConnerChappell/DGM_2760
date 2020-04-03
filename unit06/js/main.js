document.querySelector('header > h1').textContent = 'Nonsense Story'
document.querySelector('header > h2').textContent = 'String Manipulation'

function tellStory() {
    nounsArray = document.querySelector('#nouns').value.toLowerCase().split(/\s+/)
        
    adjectivesArray = document.querySelector('#adjectives').value.toLowerCase().split(/\s+/)
        
    verbsArray = document.querySelector('#verbs').value.toLowerCase().split(/\s+/)

    const myStory = `Once upon a time there was a <span>${adjectivesArray[0]}</span> princess named Asuna who liked to <span>${verbsArray[0]}</span> all day long. One day while she was out and about, Asuna was kidnapped by Oberon, an evil <span>${nounsArray[0]}</span> who rules the Dark Lands. Oberon brought her back to his <span>${adjectivesArray[1]}</span> tower and locked her in a room at the very top. When Kirito, a <span>${adjectivesArray[2]}</span> swordsman who loved the princess, heard of the news he knew he had to go save her. In order to save the princess, Kirito had to defeat a single boss on each floor of the tower. Among these bosses included a <span>${nounsArray[1]}</span>, <span>${nounsArray[2]}</span>, and a <span>${nounsArray[3]}</span>. The last boss on the floor before Asuna was a speical one, however. It was Oberon himself. Kirito had to <span>${verbsArray[1]}</span> his way up the tower with everything he had and managed to defeat every single boss and save Asuna. They both returned home and were able to <span>${verbsArray[2]}</span> happily ever after together.`

    let storyResults = document.querySelector('#story')
    storyResults.innerHTML = myStory
}
document.querySelector('header > h1').textContent = "Grant's Tomb"
document.querySelector('header > h2').textContent = 'Literal Objects'

const quesiton = {
    stem: "Who is buried in Grant's Tomb?",
    option1: "A. Julia",
    option2: "B. Jesse",
    option3: "C. Frederick",
    option4: "D. Ulysses",
    correct: 4,
    display: () => {
        document.querySelector('#stem').textContent = quesiton.stem
        document.querySelector('#answer1').textContent = quesiton.option1
        document.querySelector('#answer2').textContent = quesiton.option2
        document.querySelector('#answer3').textContent = quesiton.option3
        document.querySelector('#answer4').textContent = quesiton.option4
    },
    check: (userChoice) => {
        if (userChoice === quesiton.correct) {
            document.querySelector('#feedback').textContent = 'You are Correct!'
        } else {
            document.querySelector('#feedback').textContent = 'Incorrect. Please try again.'
        }
    }
}

document.querySelector('#answer1').addEventListener('click', () => quesiton.check(1))
document.querySelector('#answer2').addEventListener('click', () => quesiton.check(2))
document.querySelector('#answer3').addEventListener('click', () => quesiton.check(3))
document.querySelector('#answer4').addEventListener('click', () => quesiton.check(4))

quesiton.display()
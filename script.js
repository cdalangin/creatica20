const question = document.querySelector('#question');
const choices = Array.from(document.querySelector('#question'));

let currentQuestion = {}
let acceptingAnswers = true;
let questionCounter = 0;
let availableQuestions = []

let questions = [
    {
        question: 'Type of Dish:',
        choice1: 'Snack',
        choice2: 'Entree',
        choice3: 'Dessert',
        choice4: 'Drink',
    },
    {
        question: 'How much time do you want to spend cooking?',
        choice1: '5 min',
        choice2: '10 min',
        choice3: '20 min',
        choice4: '30+ min',
    },
    {
        question: 'What equipment do you have?',
        choice1: 'Stove',
        choice2: 'Microwave',
        choice3: 'Oven',
        choice4: 'Toaster',
    },
    {
        question: 'Allergies/Diets?',
        choice1: 'Nut Free',
        choice2: 'Gluten Free',
        choice3: 'Dairy Free',
        choice4: 'Vegan',
    },
]

const max_questions = 4

startQuiz = () => {
    questionCounter = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionsCounter > max_questions) {
        return window.location.assign('/results.html')
    }

    questionCounter++
    currentQuestion = availableQuestions[questionCounter]
    question.innertext = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        setTimeout(() => {
            getNewQuestion()
        }, 1000)
    })
})
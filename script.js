const preference = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const choiceContainter = Array.from(document.querySelectorAll('.choice-container'));
const graphic = document.querySelector('#qGraphic');
const topNum = document.querySelector('.num');

let currentQuestion = {}
let acceptingAnswers = true;
// let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'Type of Dish:',
        choice1: 'Snack',
        choice2: 'Entree',
        choice3: 'Dessert',
        choice4: 'Drink',
        // choice5: "item",
        // choice6: "item",
        top: "1",
        picURL: "./assets/cupcake.png",
    },
    {
        question: 'How much time do you want to spend cooking?',
        choice1: '< 10 min',
        choice2: '15 min',
        choice3: '20 min',
        choice4: '30 min',
        choice5: "40 min",
        choice6: "1 hour",
        choice7: "> 2 hours",
        top: "2",
        picURL: "./assets/clock.png",
    },
    {
        question: 'What equipment do you have?',
        choice1: 'Stove',
        choice2: 'Microwave',
        choice3: 'Oven',
        choice4: 'Toaster',
        choice5: "No preference",
        // choice6: "item",
        top: "3",
        picURL: "./assets/cupcake.png",
    },
    {
        question: 'Any Dietary Restrictions?',
        choice1: 'Vegan',
        choice2: 'Vegetarian',
        choice3: 'Kosher',
        choice4: 'Dairy Free',
        choice5: "Gluten Free",
        choice6: "Halal",
        choice7: "None",
        top: "4",
        picURL: "./assets/allergies.png",
    },
    {
        question: 'Any Allergies?',
        choice1: 'Peanut',
        choice2: 'Seafood',
        choice3: 'Soybeans',
        choice4: 'Tree Nuts',
        choice5: "Wheat",
        choice6: "Eggs",
        choice7: "None",
        top: "5",
        picURL: "./assets/allergies.png",
    },
]

const max_questions = 6

startQuiz = () => {
    // questionCounter = 0
    availableQuestions = [...questions]

    getNewQuestion()

}

getNewQuestion = () => {
    if (availableQuestions.length === 0) { //|| questionCounter > max_questions
        return window.location.assign('/results.html')
    }

    // questionCounter
    currentQuestion = availableQuestions[0];
    preference.innerHTML = currentQuestion.question;
    topNum.innerHTML = currentQuestion.top;
    graphic.src = currentQuestion.picURL;

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]

        console.log(availableQuestions)
        if (typeof currentQuestion['choice' + number] === "undefined") {
            choiceContainter[number - 1].style.visibility = "hidden";
        }

        else {
            choiceContainter[number - 1].style.visibility = "visible";
        }
    })

    availableQuestions.splice(0, 1)

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
        }, 100)
    })
})

startQuiz()
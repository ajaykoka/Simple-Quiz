const quizData = [    //arrays
    {
        question: "Which language runs on browser ?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "d"
    },

    {
        question: "CSS stands for ?",
        a: "Central Style Sheet",
        b: "Continuous Style Sheet",
        c: "Cascading Style Sheet",
        d: "Cursor Style Sheet",
        correct: "c"
    },

    {
        question: "HTML stands for ?",
        a: "Hyper Text Markup Language",
        b: "Hyper Testing Marking Language",
        c: "Helicoptor Text Mark Language",
        d: "Hyper Text Markdown Language",
        correct: "a"
    },

    {
        question: "Javascript started in the year of ?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None",
        correct: "b"
    }
];

// assigning variables 

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')

const aText = document.getElementById('a-text')
const bText = document.getElementById('b-text')
const cText = document.getElementById('c-text')
const dText = document.getElementById('d-text')

const submitBtn = document.getElementById('submit')

// initilizing

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question
    aText.innerText = currentQuizData.a
    bText.innerText = currentQuizData.b
    cText.innerText = currentQuizData.c
    dText.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    //initializing with value
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer;

}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer){
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++ // fetchiing next question
    
    if(currentQuiz < quizData.length) {
        loadQuiz()
    }
    else {
        quiz.innerHTML = `
        <h2>Your answered ${score}/${quizData.length} questions correctly.
        <button onclick = "location.reload()">Reload</button>

        `
    }
}

})



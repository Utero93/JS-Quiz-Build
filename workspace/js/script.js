const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        answers: [
            {text: "<scripting>", correct: false},
            {text: "<javascript>", correct: false},
            {text: "<js>", correct: false},
            {text: "<script>", correct: true},
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?", 
        answers: [
            {text: "<script name ='xxx.js'>", correct: false},
            {text: "<script href='xxx.js'>", correct: false},
            {text: "<script src='xxx.js'>", correct: true},
            {text: "<script rel='xxx.js'>", correct: false},
        ]
    },
    {
        question: "How do we write hello in an alert box?", 
        answers: [
            {text: "msg('Hello World');", correct: false},
            {text: "alertBox('Hello World');", correct: false},
            {text: "alert('Hello World');", correct: true},
            {text: "msgBox('Hello World');", correct: true},
        ]
    },
    {
        question: "How do you create a function in Javascript?", 
        answers: [
            {text: "function:myFunction()", correct: false},
            {text: "function myFunction()", correct: true},
            {text: "function = myFunction()", correct: false},
            {text: "function = !myFunction()", correct: true},
        ]
    },
    {
        question: "How do you call a function nameed myFunction?", 
        answers: [
            {text: "call myFunction()", correct: false},
            {text: "call function myFunction()", correct: false},
            {text: "myFunction()", correct: true},
            {text: "set myFunction()", correct: false},
        ]
    }, 
    {
        question: "How to write an IF statement in Javascript?", 
        answers: [
            {text: "if i = 5", correct: false},
            {text: "if (i == 5)", correct: true},
            {text: "if i == 5 then", correct: false},
            {text: "if i = 5 then", correct: false},
        ]
    }, 
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?", 
        answers: [
            {text: "if i =! 5 then", correct: false},
            {text: "if (i<>5)", correct: false},
            {text: "if (i != 5)", correct: true},
            {text: "if i <> 5", correct: false},
        ]
    }, 
    {
        question: "How does a FOR loop start?", 
        answers: [
            {text: "for (i <= 5; i++)", correct: false},
            {text: "for i = 1 to 5", correct: false},
            {text: "for (i = 0; i <= 5; i++)", correct: true},
            {text: "for (i=0; i<=5)", correct: false},
        ]
    }, 
    {
        question: "How can you add a comment in a Javascript?", 
        answers: [
            {text: "<-- -->", correct: false},
            {text: "//", correct: true},
            {text: "[** **]", correct: false},
            {text: "<.. ..>", correct: false},
        ]
    }, 
    {
        question: "How to insert a comment that has more than one line?", 
        answers: [
            {text: "/*This comment has more than one line*/", correct: true},
            {text: "<!--This comment has more than one line-->", correct: false},
            {text: "<!--This comment has more than one line--!>", correct: false},
            {text: "//This comment has more than one line//", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementsById("nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });

}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild)
        answerButtons.removeChild(answerButtons.firstChild);
}

startQuiz();




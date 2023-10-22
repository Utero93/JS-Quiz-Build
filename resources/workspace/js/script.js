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
const answerButton = document.getElementById("btnList");
const nextButton = document.getElementById("nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("aBtn");
        answerButton.appendChild(button);
    });

}





/* let userSubmit = document.getElementsByClassName('enInit');
 console.log(userSubmit[0]);*/



// code examples to help with class

// // console.log("Document Body: ");
// console.log(document.body);

// console.log("Children of Document Body: ")
// console.log(document.body.children);

// console.log("First child of body: ")
// console.log(document.body.children[0]);

// console.log("First child of the ul: ")
// console.log(document.body.children[1].children[0]);

// // Accessing element by id
// var firstChildUl = document.getElementById("first-child-ul");
// console.log(firstChildUl)


// // Setting style of element
// firstChildUl.style.color = "green";

// Logs window object using this
// console.log("this: ");
// console.log(this);

// // Logs the document object
// console.log("window.document: ");
// console.log(window.document);

// // Logs body of document
// console.log("document.body: ");
// console.log( document.body);


// // Access multiple elements using .querySelectorAll()
// var divTags = document.querySelectorAll("div");
// var pTags = document.querySelectorAll("p");
// var imgEl = document.querySelectorAll("img");

// // Access element by ID using .querySelector()
// var changeP = document.querySelector("#change2");

// // Sets first pTags to have a font-size of 40px
// pTags[0].setAttribute("style", "font-size: 40px;");

// // Sets changeP to have multiple style attributes
// changeP.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration:underline; ");

// // Sets image source of the first image
// imgEl[0].setAttribute("src", "./assets/images/image_1.png");

// // Adds size and width styling to image
// imgEl[0].setAttribute("style", "width:50%");

// // Loops through divTags to set each one to have the color blue and the font size of 30px
// for (var i = 0; i < divTags.length; i++) {
//  divTags[i].setAttribute("style", "color:blue; font-size: 30px");
// }


// // Selects element by class
// var timeEl = document.querySelector(".time");

// // Selects element by id
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }

// // Function to create and append colorsplosion image
// function sendMessage() {
//   timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();


// Access toggle switch HTML element
// var themeSwitcher = document.querySelector("#theme-switcher");
// var container = document.querySelector(".container");

// // Set default mode to dark
// var mode = "dark";

// // Listen for a click event on toggle switch
// themeSwitcher.addEventListener("click", function() {
//   // If mode is dark, apply light background
//   if (mode === "dark") {
//     mode = "light";
//     container.setAttribute("class", "light");
//   }
//   // If mode is light, apply dark background 
//   else {
//     mode = "dark";
//     container.setAttribute("class", "dark");
//   }
// });


// var counter = document.querySelector("#counter");
// var addButton = document.querySelector("#add");
// var subtractButton = document.querySelector("#subtract");

// var count = localStorage.getItem("count");

// counter.textContent = count;

// addButton.addEventListener("click", function() {
//   if (count < 24) {
//     count++;
//     counter.textContent = count;
//     localStorage.setItem("count", count);
//   }
// });

// subtractButton.addEventListener("click", function() {
//   if (count > 0) {
//     count--;
//     counter.textContent = count;
//     localStorage.setItem("count", count);
//   }
// });


// var student = document.getElementById("student-names");
// var grade = document.getElementById("grades");
// var comment = document.getElementById("msg");
// var saveButton = document.getElementById("save");

// saveButton.addEventListener("click", function(event) {
// event.preventDefault();

// var studentGrade = {
//   student: student.value,
//   grade: grade.value,
//   comment: comment.value.trim()
// };

// localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
// renderMessage();

// });

// function renderMessage() {
//   var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
//   if (lastGrade !== null) {
//     document.querySelector(".message").textContent = lastGrade.student + 
//     " received a/an " + lastGrade.grade
//   }
// }



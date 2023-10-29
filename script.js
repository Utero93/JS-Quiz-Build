// User Story

/* As a student
I want to take a timed quiz on the basics of Javascript that stores a high score 
So that i can accurately see my progress compared to the other students in the class
*/


// Variables with a global scope
let timeInterval;
let score; 
let scoresEl = document.getElementById("scores");
let timerEl = document.getElementById("timer"); 

// Variables for the quiz html element using a id'd container for the homepage 
let homeEl = document.getElementById("home"); 
let startEl = document.getElementById("start"); 

// Variables for the quiz html element using a id'd container for questions/answers
let quizEl = document.getElementById("quiz");
let questionEl = document.getElementById("questions");
let acCheckEl = document.getElementById("answer-check");
let questionI = 0;

// Variables for the html element using a id'd container of end of quiz section 
let endEl = document.getElementById("end");
let submitEl = document.getElementById("submit");
let inputEl = document.getElementById("input");
let finalScoreEl = document.getElementById("finalscore");

// Variables for the scoreboard section 

let scoreSectionEl = document.getElementById("score");
let scoreboardEl = document.getElementById("scoreboard");
let retryEl = document.getElementById("retry");
let clearEl = document.getElementById("clear");


// Dynamic functions for the HTML file

// Step 1: the onclick button begins the quiz portion.

startEl.addEventListener("click", function(){

// when clicked the .remove method is called to remove the variable homeEl with the html id "#home"
// Upon removal of homeEl, the quizEl is then displaying the html section element with the id "#quiz" 
homeEl.remove();
quizEl.style.display = "block";

// Line 49 - 50 are calling both the set time and showQuestions function
setTimeout();
showQuestions();

});

// This will automatically display the saved list of users high score
scoresEl.addEventListener("click", function(){

/* This function uses the .remove method for home, quiz, end(El) variables
 storing the id="name value" for each section in the html file 
 It also removes the contents timer and score within the container of the home page
*/

    homeEl.remove();
    quizEl.remove();
    endEl.remove();
    timerEl.remove();
    scoresEl.remove();

/* Line 67 is displaying the score section 
   and all of its contents on the web page in the browser
*/
    scoreSectionEl.style.display = "block";

});

// Submits the users intials and scores
submitEl.addEventListener("click", function(){

    scoresEl.remove();
    endEl.remove();
    scoreSectionEl.style.display = "block";

// Sets the value for the text area in the section for inputting scores
    setScores();

// Gets the value from the text within the scores section
    getScores();
});

// Allows the user to retry the quiz
retryEl.addEventListener("click", function(){
// reloads the location of the contents in the variable retryEl()
    location.reload();
});

// clears the scoreboard with the users saved data from the local storage
clearEl.addEventListener("click", function(){

// sets the value to a string "score history" with the value of an empty array
    localStorage.setItem("scoreHistory", "[]");

// reloads the page with a cleared local storage
    location.reload();
});

// saves the users current quiz score
function setScore(){
    let inits = inputEl.ariaValueMax.toUpperCase();

    console.log(inits);

// When user doesnt enter initials, the value is then saved to "unknown" by default
if(inits === ''){
    inits = "Unknown";
}

let scoreHistory = [];
let newScore = {
    name: inits,
    score: score
}

let lastStorage = localStorage.getItem("scoreHistory");

// If the saved local storage exists, getItem from the local storage and pass through array in scoreHistory
if (lastStorage !== null){
    scoreHistory = JSON.parse(lastStorage);
}

// adds new score to the values of the array store in the variable scoreHistory
scoreHistory.push(newScore);

// Uses the saved data from Local storage to setItem to the string of text and using the json to turn the key/value pairs stored in the scoreHistory array into a string
localStorage.setItem("scoredHistory", JSON.stringify(scoreHistory));

console.log(scoreHistory);

}

// This function retrieves scores from data saveed to the local storage
function getScores(){

let scoreHistory = JSON.parse(localStorage.getItem("scoreHistory"));

// This function sorts the scoreboard array by score in descending order
scoreHistory.sort(function(a, b) {
    return b.score - a.score;
});

// Creates the HTML table to display the scores saved to the score board
var table = document.createElement('table');
table.id = 'table';
var tableHead = table.createTHead();
var headRow = tableHead.insertRow(0);
headRow.insertCell(0).innerHTML = '<b>Name</b>';
headRow.insertCell(1).innerHTML = '<b>Score</b>';


// This function inserts values into the HTML table that was retrieved from the array stored in scoreHistory

/* This for loop creates a var integer equal to 0, 
creates the condition that the integer is less than the length of the array in scoreHistory,
loop will run the code for the integer to increase by one until its larger than array.length
*/
for (var i = 0; i < scoreHistory.length; i++) {

/* this portion of the function creats the 'row' variable 
   and sets it equal to the table using  the insertRow method
   storing the value of an integer increasing by one   
*/
     var row = table.insertRow(i + 1);

// These rows use the method insertcell with a value as a string property which equals the array's index stored in score history along with the name/score
     row.insertCell(0).innerHTML = scoreHistory[i].name;
     row.insertCell(1).innerHTML = scoreHistory[i].score;
}

// this will render the table by the method appendChild given the id of table in the elements of the scoreboard
scoreboardEl.appendChild(table);

}

// This sets a timer with a countdown

let secondsLeft =75; 

function setTime(){
    timeInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft <= 0){
        // stops this action at the setinterval method
        clearInterval(timeInterval);
        quizEl.remove();
        endEl.style.display = "block";
        timerEl.remove();
        score = 0;
        }

// set to 1000th of a millisecond
    }, 1000);
}


// User is presented with a mulitple choice question on the quiz

let qArray = [

{
    question: "Javascript is an _______ language?",
    options: ["A) Object-Oriented", "B) Object-Based", "C) Procedural", "D) None of the Above"],
    correctAnswer: 0
}, 

{
    question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    options: ["A) Throws an error", "B) Ignores the statements", "C) Gives a warning", "D) None of the above"],
    correctAnswer: 1
}, 

{
    question: "Which of the following methods can be used to display data in some form using Javascript?",
    options: ["A) document.write()", "B) console.log()", "C) window.alert()", "D) All of the above"],
    correctAnswer: 3
}, 

{
    question: "How can a datatype be declared to be a constant type?",
    options: ["A) const", "B) var", "C) let", "D) constant"],
    correctAnswer: 0
}, 

{
    question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
    options: ["A) Both the datatype and the result of the expression are compared.", "B) Only the datatype of the expression is compared.", "C) Only the value of the expression is compared.", "D) None of the above."],
    correctAnswer: 0
}, 

{
    question: "What keyword is used to check whether a given property is valid or not?",
    options: ["A) in", "B) is in", "C) exists", "D) lies"],
    correctAnswer: 0
}, 

{
    question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
    options: ["A) Boolean", "B) Undefined", "C) Object", "D) Integer"],
    correctAnswer: 2
}, 

];


// This function will render the multiple choice options on the page, sequentially
function showQuestions(){

    // If the questions are completed or the time runs out, the quiz session ends and the end page is displayed
    if(questionI >= qArray.length){

        quizEl.remove();
        endEl.style.display = "block";
        clearInterval(timeInterval);
        timerEl.remove();
        score = secondsLeft;

        // If an incorrect answer as time runs out results in a negative time, score is set to 0
        if(score < 0){
            score = 0;
        }

        finalScoreEl.textContent = `Your current score is ${score}.`

    } else {

     // This quiz will render one question at a time
     for (let i = 0; i < qArray[questionI].options.length; i++){

        let optEl = document.getElementById(`${i}`);

        questionEl.textContent = qArray[questionI].question;
        questionEl.textContent = qArray[questionI].options[i];

        optEl.onclick = function() {
            let correctAnswer = qArray[questionI].correctAnswer;

            // If the answer is correct, the function will render "Oh Yeah!"
            if (i === correctAnswer){
                acCheckEl.textContent = "Oh Yeah!"
                acCheckEl.style.borderTop = "3px solid white"
            }

            //  If the answer is wrong, The page renders "Need More Practice."
            else {
                acCheckEl.innerText = "Need More Practice.";
                acCheckEl.style.borderTop = "2px solid white";
                secondsLeft -= 10;
            }
            questionI++;
            showQuestions();
        }
     } 
  }
}
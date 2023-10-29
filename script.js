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

}
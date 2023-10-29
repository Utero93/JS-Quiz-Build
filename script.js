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

// Variables for the quiz home page
let homeEl = document.getElementById("home"); 
let startEl = document.getElementById("start"); 

// Variables for the quiz questions/answers
let quizEl = document.getElementById("quiz");
let questionEl = document.getElementById("questions");
let acCheckEl = document.getElementById("answer-check");
let questionI = 0;

// Variables for the end of quiz section 
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

startEl.addEventListener("click", function(){

// when clicked the .remove method is called to remove the variable homeEl with the html id "#home"
// Upon removal of homeEl, the quizEl is then displaying the html section element with the id "#quiz" 
homeEl.remove();
quizEl.style.display = "block";




});

// 
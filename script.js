var initialScore = 0;
var currentQuestion = 0;
var objectibeQuestions = 15;
var timeInterval = 60;
var countdownTimer = "countdown";
var correctAnswer = ["for(i=0; i<=5; i++)", "//This is a comment", "Math.round(7.25)", "Math.max(2,4)", "Documentation (mdn, Codeacademy)", "10", "body tag", "expressions", "the varaibles are not equal", "&&", "Variable", "Yes, we need to reference the file in HMTL.", "<link>", "All the answers above", "body{color:black}"]
// var startQuizButton = $('#start-button');

// Question and options 
// let questions = "";
let questions = [
{
    question: "How does a for loop start?",
    options: ["for(i=0; i <5)", "for(i=0; i<=5; i++)", "for i=1 to 5", "for(i<=5; i++)"],
    correctAnswer: "for(i=0; i<=5; i++)"
}, 
{
    question: "How do you add comment in JavaScript?",
    options: ["//This is a comment", "'This is a comment", "<!--This is a comment-->","#This is a comment"],
    correctAnswer: "//This is a comment"
},
{
    question: "How do you round the number 7.25, to the nearest whole number?",
    options: ["Math.rnd (7.25)", "round(7.25)", "rnd(7.25)", "Math.round(7.25)"],
    correctAnswer: "Math.round(7.25)"
},
{
    question: "How do you find the largest number of 2 and 4?",
    options: ["Math.ceil(2,4)", "Math.max(2,4)", "ceil(2,4)", "top(2,4)"],
    correctAnswer: "Math.max(2,4)"
},
{
    question: "What is the most efficient way when you run into JavaScript problem while debugging?",
    options: ["Keep revising your code and look for error", "Documentation (mdn, Codeacademy)", "Ask peers", "Find it from class materials"],
    correctAnswer: "Documentation (mdn, Codeacademy)"
},
{
    question: "In JavaScript the following loop for(x=1; x<11; x++) will execute how many times?",
    options: ["8", "9", "10", "11"],
    correctAnswer: "10"
},
{
    question: "The majority of a typical Web document will be found in:",
    options: ["head tag", "title tag", "body tag", "comment tag"],
    correctAnswer: "body tag"
},
{
    question: "In JavaScript, the symbols (+, -, *, /) are:",
    options: ["operators", "expressions", "comparison operators", "None of the answers above"],
    correctAnswer: "expressions"
},
{
    question: "In JavaScript, the expression x!=y returns false if",
    options: ["the variables are equal", "x is less than y", "the varaibles are not equal", "None of the answers above"],
    correctAnswer: "the varaibles are not equal"
},
{
    question: "In JavaScript, which of the following is a logical operator?",
    options: ["|", "&&", "%", "/"],
    correctAnswer: "&&"
},
{
    question: "A named element in a JavaScript program that is used to store and retrieve data is:",
    options: ["Method", "Assignment operator", "Variable", "String"],
    correctAnswer: "Variable"
},
{
    question: "Do we need to insert script tag in HMTL in order to use jQuery?",
    options: ["Yes, we need to reference the file in HMTL.", "No, we can just use it with dollar sign."],
    correctAnswer: "Yes, we need to reference the file in HMTL."
},
{
    question: "Whcih HTML tag is used to define CSS file?",
    options: ["<script>", "<style>", "<link>", "<stylesheet>"],
    correctAnswer: "<link>"
},
{
    question: "In HTML, you may use button on a form to:",
    options: ["Run a program", "Submit a form to a server", "Reset a form to its original state", "All the answers above"],
    correctAnswer: "All the answers above"
},
{
    question: "Which is the correct CSS syntax?",
    options: ["body{color:black}", "{body;color:black}", "body:color=black", "{body:color=black(body)}"],
    correctAnswer: "body{color:black}"
}
]

// Randomize 15 objective questions in for loop to display for users
let objectiveQuestions = "";
function randomizeObjectiveQuestions (randomizeQuestions) {
    document.getElementById("questions").innerHTML = questions[randomizeQuestions].question;
    // var randomizeQuestions;
    for (let i= 0; i < questions.length; i++) {
        randomizeQuestions = Math.floor(Math.random() * questions.length);
    }
    objectiveOptions();
    return randomizeQuestions;
}

// Start quiz and 'Start' button display on browser
function startQuiz () {
    document.getElementById("time").style.display = 'countdown';
    updateTimer();
    countdownTimer = setInterval(updateTimer, 1000);
    randomizeObjectiveQuestions(currentQuestion);
}

// clickToStartButton.on('start', clickToStart);

// Show options for every questions
function objectiveOptions () {
    document.getElementById("options").innerHTML = "";
    var options = questions[currentQuestion].options
    for (let i = 0; i < options.length; i++) {
        var optionButton = document.createElement("button");
        optionButton.textContent = options[i];
        optionButton.onclick = displayObj;
        document.getElementById("options").appendChild(optionButton);
    }
}

// Display Q&A
function displayObj () {
    currentQuestion++;
    randomizeObjectiveQuestions(currentQuestion);
}

// Add score (+1) if correct; Minus time (-5s) if wrong
function rightOrWrongAns () {
    var optionSelected = correctAnswer;
    if (correctAnswer != optionSelected) {
        timeInterval -= 5;
    }  else {
        initialScore ++;
    }
    return timeInterval;
}

// Timer on top right corner
function updateTimer () {
    document.getElementById("time").innerText = timeInterval;

    if (timeInterval ===0 ) {
        clearInterval(countdownTimer);
        endGame();
    }
    timeInterval --;
}

// When quiz ended, alert will be displayed "Time's UP! Game Over!"
function endGame () {
    alert("Time's UP! Game Over!");
    document.getElementById("initials").style.display = 'block';
    // var recordScore = ;
    // endGame(returnScore);

}

// View high score on top left corner (need to store record in local storage)

// Local storage for high scores record
function saveScore (rightOrWrongAns) {
    var initialScore = document.createElement('initialsInput').value;
    var savedScores = JSON.parse(localStorage.getItem('scores'));
    // savedScores.push({initialScore, score});
    localStorage.setItem('scores', JSON.stringify(savedScores));
    // alert('High Score is saved!');
    // return null;
}

// Display leaderboard
function highScoreLeaderboard(saveScore) {
    
}

// Submit button for high score record
function submitButton(event) {
    event.preventdefault();
    // Pull this from HTML (make sure to include id for this)
}

function saveToSubmit() {
    var saveButton = document.createElement("button");
        saveButton.onclick = submitButton(saveButton);
        (saveToSubmit);
}

// Submit name for high score record button 
// submitButton.on('submit', saveToSubmit);
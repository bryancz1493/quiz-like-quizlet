var initialScore = 0;
var initialTime = 0;
var objectibeQuestions = 15;
var timeInterval = 60;
var countdownTimer = "countdown";
var startQuizButton = $('#start-button');

// Question and options 
// let questions = "";
let questions = [
{
    question1: "How does a for loop start?",
    option1: "for(i=0; i <5)",
    option2: "for(i=0; i<=5; i++)",
    option3: "for i=1 to 5",
    option4: "for(i<=5; i++)",
    correctAnswer: 2,
}, 
{
    question2: "How do you add comment in JavaScript?",
    option1: "//This is a comment",
    option2: "'This is a comment",
    option3: "<!--This is a comment-->",
    option4: "#This is a comment",
    correctAnswer: 1,
},
{
    question3: "How do you round the number 7.25, to the nearest whole number?",
    option1: "Math.rnd (7.25)",
    option2: "round(7.25)",
    option3: "rnd(7.25)",
    option4: "Math.round(7.25)",
    correctAnswer: 4,
},
{
    question4: "How do you find the largest number of 2 and 4?",
    option1: "Math.ceil(2,4)",
    option2: "Math.max(2,4)",
    option3: "ceil(2,4)",
    option4: "top(2,4)",
    correctAnswer: 2,
},
{
    question5: "What is the most efficient way when you run into JavaScript problem while debugging?",
    option1: "Keep revising your code and look for error",
    option2: "Documentation (mdn, Codeacademy)",
    option3: "Ask peers",
    option4: "Find it from class materials",
    correctAnswer: 2,
},
{
    question6: "In JavaScript the following loop for(x=1; x<11; x++)will execute how many times?",
    option1: "8",
    option2: "9",
    option3: "10",
    option4: "11", 
    correctAnswer: 3,
},
{
    question7: "The majority of a typical Web document will be found in:",
    option1: "head tag",
    option2: "title tag",
    option3: "body tag",
    option4: "comment tag",
    correctAnswer: 3,
},
{
    question8: "In JavaScript, the symbols (+, -, *, /) are:",
    option1: "operators",
    option2: "expressions",
    option3: "comparison operators",
    option4: "None of the answers above",
    correctAnswer: 1,
},
{
    question9: "In JavaScript, the expression x!=y returns false if",
    option1: "the variables are equal",
    option2: "x is less than y",
    option3: "the varaibles are not equal",
    option4: "None of the answers above",
    correctAnswer: 3,
},
{
    question10: "In JavaScript, which of the following is a logical operator?",
    option1: "|",
    option2: "&&",
    option3: "%",
    option4: "/",
    correctAnswer: 2,
},
{
    question11: "A named element in a JavaScript program that is used to store and retrieve data is:",
    option1: "Method",
    option2: "Assignment operator",
    option3: "Variable",
    option4: "String",
    correctAnswer: 3,
},
{
    question12: "Do we need to insert script tag in HMTL in order to use jQuery?",
    option1: "Yes, we need to reference the file in HMTL.",
    option2: "No, we can just use it with dollar sign.",
    correctAnswer: 1,
},
{
    question13: "Whcih HTML tag is used to define CSS file?",
    option1: "<script>",
    option2: "<style>",
    option3: "<link>",
    option4: "<stylesheet>",
    correctAnswer: 2,
},
{
    question14: "In HTML, you may use button on a form to:",
    option1: "Run a program",
    option2: "Submit a form to a server",
    option3: "Reset a form to its original state",
    option4: "All the answers above",
    correctAnswer: 4,
},
{
    question15: "Which is the correct CSS syntax?",
    option1: "body{color:black}",
    option2: "{body;color:black}",
    option3: "body:color=black",
    option4: "{body:color=black(body)}",
    correctAnswer: 1,
}
]

// Randomize 15 objective questions in for loop
let objectibeQuestions = "";
function randomizeObjectiveQuestions () {
    for (let i= 0; randomizeQuestions.length = 0; i++) {
        var randomizeQuestions = Math.floor(Math.random() * randomizeQuestions.length);

    }

}

// Start quiz button display on browser
function startQuiz () {
    for (let i = initialTime; initialTime.length === 0; i--) {
    
    }
    return initialTime;
}

clickToStartButton.on('start', clickToStart);

// Add score (+1) if correct; Minus time (-5s) if wrong
function rightOrWrongAns () {
    if (answerGiven != optionSelected) {
        initialTime -= 5;
    }  else {
        initialScore ++;
    }
}

// Timer on top right corner
function updateTimer () {
    document.getElementById('time') = timeInterval;

    if (timeInterval <=0) {
        clearInterval(countdownTimer);
        endGame();
    }
    timeInterval --;
}

// When quiz ended, alert will be displayed "Time's UP! Game Over!"
function endGame () {
    alert("Time's UP! Game Over!");
    document.getElementById('initialScore').style.display = 'block';
    return null;
}

// View high score on top left corner (need to store record in local storage)

// Local storage for high scores record
function saveScore () {
    var initials = document.getElementById('initialsInput').value;
    var savedScores = JSON.parse(localStorage.getItem('scores'));
    savedScores.push({initialScore, score});
    localStorage.setItem('scores', JSON.stringify(savedScores));
    alert('High Score is saved!');
    return null;
}

// Submit button for high score record
function submitButton(event) {
    event.preventdefault();
    // Pull this from HTML (make sure to include id for this)
    var submitButton = $('#submit-button');
}

// Submit name for high score record button 
submitButton.on('submit', saveToSubmit);

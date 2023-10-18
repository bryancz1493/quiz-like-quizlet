var initialScore = 0;
var currentQuestion = 0;
var objectibeQuestions = 15;
var timeInterval = 60;
var countdownTimer = "countdown";
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
    option1s: ["8", "9", "10", "11"],
    correctAnswer: "10"
},
{
    question: "The majority of a typical Web document will be found in:",
    options: ["head tag", "title tag", "body tag", "comment tag"],
    correctAnswer: "body tag"
},
// {
//     question: "In JavaScript, the symbols (+, -, *, /) are:",
//     options: ["operators",],
//     option2: "expressions",
//     option3: "comparison operators",
//     option4: "None of the answers above",
//     correctAnswer: 1,
// },
// {
//     question: "In JavaScript, the expression x!=y returns false if",
//     option1: "the variables are equal",
//     option2: "x is less than y",
//     option3: "the varaibles are not equal",
//     option4: "None of the answers above",
//     correctAnswer: 3,
// },
// {
//     question: "In JavaScript, which of the following is a logical operator?",
//     option1: "|",
//     option2: "&&",
//     option3: "%",
//     option4: "/",
//     correctAnswer: 2,
// },
// {
//     question: "A named element in a JavaScript program that is used to store and retrieve data is:",
//     option1: "Method",
//     option2: "Assignment operator",
//     option3: "Variable",
//     option4: "String",
//     correctAnswer: 3,
// },
// {
//     question: "Do we need to insert script tag in HMTL in order to use jQuery?",
//     option1: "Yes, we need to reference the file in HMTL.",
//     option2: "No, we can just use it with dollar sign.",
//     correctAnswer: 1,
// },
// {
//     question: "Whcih HTML tag is used to define CSS file?",
//     option1: "<script>",
//     option2: "<style>",
//     option3: "<link>",
//     option4: "<stylesheet>",
//     correctAnswer: 2,
// },
// {
//     question: "In HTML, you may use button on a form to:",
//     option1: "Run a program",
//     option2: "Submit a form to a server",
//     option3: "Reset a form to its original state",
//     option4: "All the answers above",
//     correctAnswer: 4,
// },
// {
//     question: "Which is the correct CSS syntax?",
//     option1: "body{color:black}",
//     option2: "{body;color:black}",
//     option3: "body:color=black",
//     option4: "{body:color=black(body)}",
//     correctAnswer: 1,
// }
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

// Options
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
    if (answerGiven != optionSelected) {
        timeInterval -= 5;
    }  else {
        initialScore ++;
    }
}

// Timer on top right corner
function updateTimer () {
    document.getElementById("time").innerText = timeInterval;

    if (timeInterval <=0) {
        clearInterval(countdownTimer);
        endGame();
    }
    timeInterval --;
}

// When quiz ended, alert will be displayed "Time's UP! Game Over!"
function endGame () {
    alert("Time's UP! Game Over!");
    document.getElementById("initials").style.display = 'block';
    return null;
}

// View high score on top left corner (need to store record in local storage)

// Local storage for high scores record
function saveScore () {
    var initialScore = document.getElementById('initialsInput').value;
    var savedScores = JSON.parse(localStorage.getItem('scores'));
    savedScores.push({initialScore, score});
    localStorage.setItem('scores', JSON.stringify(savedScores));
    alert('High Score is saved!');
    // return null;
}

// Submit button for high score record
function submitButton(event) {
    event.preventdefault();
    // Pull this from HTML (make sure to include id for this)
    var submitButton = $('#submit-button');
}

// Submit name for high score record button 
submitButton.on('submit', saveToSubmit);

var timeInterval = 60;
var countdownTimer = "countdown";
var startQuizButton = $('#start-button');

// let questions = "";

// 15 Objective questions 
var objectibeQuestions 

// Start quiz button display on browser
function startQuiz () {
    if (timeInterval <= 0) {
        clearInterval(countdownTimer);
        alert ("Time Up! Game Over!");

        return null;
    } 

    timeInterval --;
}

// Add score (+1) if correct; Minus time (-5s) if wrong
function rightOrWrongAns () {
    if (answerGiven != optionSelected) {
        initialTime = timeInterval(initialTime) -5;
    }  else {
        initialScore ++;
    }
}

// Timer on top right corner
function updateTimer () {
    document.getElementById('time') = timeInterval;

    for (let i= 60; timeInterval.length <= 0; i--) {
        return timeInterval;
    }
}

// Submit button for high score record
function submitButton(event) {
    event.preventdefault();
    // Pull this from HTML (make sure to include id for this)
    var submitButton = $('#submit-button');
}

// View high score on top left corner (need to store record in local storage)


// Local storage for high scores record


// Submit name for high score record button 
submitButton.on('submit', saveForSubmit);
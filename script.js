var timeInterval = 60;
var countdownTimer = "countdown";
var startQuizButton = $('#start-button');

// Start quiz button display on browser
function startQuiz () {
    if (timeInterval <= 0) {
        clearInterval(countdownTimer);
        alert ("Time Up! Game Over!");

        return null;
    } 

    timeInterval --;
}

// Timer on top right corner
function updateTimer () {
    document.getElementById('time') = timeInterval;

    for (let i= 60; timeInterval.length <= 0; i--) {
        return timeInterval;
    }
}

// 15 Objective questions 
function submitButton(event) {
    event.preventdefault();
    // Pull this from HTML (make sure to include id for this)
    var submitButton = $('#submit-button');
}

// View high score on top left corner (need to store record in local storage)


// Submit name for high score record button 
submitButton.on('submit', saveForSubmit);
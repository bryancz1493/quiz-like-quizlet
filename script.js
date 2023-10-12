var timeInterval = 60;
var countdownTimer = "countdown"

// Start quiz button display on browser
function startQuiz {
    document.getElementById('time') = timeInterval;

    if (timeInterval <= 0) {
        clearInterval(countdownTimer);
        alert ("Time Up! Game Over!");

        return null;
    }

    timeInterval --;
}

// Timer on top right corner


// 15 Objective questions 
function submitButton(event) {
    event.preventdefault();
    // Pull this from HTML (make sure to include id for this)
    var submitButton = $('#submit-button');
}

// View high score on top left corner (need to store record in local storage)


// Submit name for high score record button 
submitButton.on('submit', saveForSubmit);
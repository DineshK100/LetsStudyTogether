// script.js
function startTimer() {
    let timerElement = document.getElementById("timer");

    // Retrieve the total seconds from localStorage or use a default value (25 minutes)
    let totalSeconds = parseInt(localStorage.getItem("totalSeconds")) || 25 * 60;

    function updateTimer() {
        if (totalSeconds > 0) {
            totalSeconds--;
            timerElement.innerText = formatTime(totalSeconds);
            // Save the current total seconds to localStorage
            localStorage.setItem("totalSeconds", totalSeconds);
            setTimeout(updateTimer, 1000);
        }
    }

    function formatTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    updateTimer();
}

// Pass the total seconds from Flask to JavaScript
startTimer();
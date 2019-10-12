var secDisplay = document.querySelector("#secDisplay");

var seconds = 75;
function startTimer() {
    setInterval(function() {
        seconds--;

        seconds = seconds + '';

        document.getElementById("secDisplay").innerHTML = seconds;
    }, 1000)
}
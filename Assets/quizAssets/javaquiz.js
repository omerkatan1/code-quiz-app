var secDisplay = document.querySelector("#secDisplay");

var seconds = 75;
function startTimer() {
    setInterval(function() {
        seconds--;
        console.log(seconds);


        seconds = seconds + '';

        secDisplay.appendChild(seconds);
    }, 1000)
}
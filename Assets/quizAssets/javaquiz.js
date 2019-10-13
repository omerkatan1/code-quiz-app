var anwrBtnClass = document.getElementsByClassName(".answerButton");
var secDisplay = document.querySelector("#secDisplay");



var q1 = "What does this do: document.getElementById();";
var q2 = "Which type of variable cannot be changed?";
var q3 = "Which data type returns true or false";
var q4 = "What does this do: alert();";
var q5 = "How do you print to console?";
var questionArray = [q1, q2, q3, q4, q5];







//This makes it so when the start button is pressed then it will randomly place down the first question becuase there are no answer buttons to move to the next question
function insertQuestion() {

    // randomizes the questions
    var mixQuestions = questionArray[Math.floor(Math.random() * questionArray.length)];

    var questionDisplay = document.querySelector("#questionInsert");


    var correct = true;
    var incorrect = false;


    //puts the question into html and makes font size smaller
    document.getElementById("questionInsert").innerHTML = mixQuestions;
    questionDisplay.setAttribute("style", "font-size: 25px");


    if (mixQuestions === q1) {
        document.getElementById("A1").innerHTML = "Calls an element from HTML with an ID";
        document.getElementById("A2").innerHTML = "Calls an element from HTML with a class";
        document.getElementById("A3").innerHTML = "Sets an ID for an element in HTML";
        document.getElementById("A4").innerHTML = "Removes an ID from an element in HTML";
    }
    if (mixQuestions === q2) {
        document.getElementById("A1").innerHTML = "var";
        document.getElementById("A2").innerHTML = "let";
        document.getElementById("A3").innerHTML = "const";
        document.getElementById("A4").innerHTML = "boolean";
    }
    if (mixQuestions === q3) {
        document.getElementById("A1").innerHTML = "String";
        document.getElementById("A2").innerHTML = "Int";
        document.getElementById("A3").innerHTML = "boolean";
        document.getElementById("A4").innerHTML = "null";
    }
    if (mixQuestions === q4) {
        document.getElementById("A1").innerHTML = "Tells the console if something happens";
        document.getElementById("A2").innerHTML = "Turns a string into an int";
        document.getElementById("A3").innerHTML = "Prints to console whatever is in the brackets";
        document.getElementById("A4").innerHTML = "Creates a popup on page of content that is in the brackets";
    }
    if (mixQuestions === q5) {
        document.getElementById("A1").innerHTML = "console.log()";
        document.getElementById("A2").innerHTML = "alert()";
        document.getElementById("A3").innerHTML = "prompt()";
        document.getElementById("A4").innerHTML = "display.log()";
    }
}

function checkAnswer() {

}


// sets the time for the quiz
var seconds = 15 * questionArray.length;

function startTimer() {
    setInterval(function() {
        seconds--;

        seconds = seconds + '';

        document.getElementById("secDisplay").innerHTML = seconds;
    }, 1000);
}
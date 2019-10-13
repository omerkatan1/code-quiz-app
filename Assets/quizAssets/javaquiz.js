var secDisplay = document.querySelector("#secDisplay");



var q1 = "What does this do: document.getElementById();";
var q2 = "Which type of variable cannot be changed?";
var q3 = "Which data type returns true or false";
var q4 = "What does this do: alert();";
var q5 = "How do you print to console?";
var questionArray = [q1, q2, q3, q4, q5];







var seconds = 15 * questionArray.length;

// time functions of the quiz
function timer() {
    setInterval(function() {
        seconds--;

        seconds = seconds + '';

        document.getElementById("secDisplay").innerHTML = seconds;
    }, 1000);
}

var answer = '';


//This makes it so when the start button is pressed then it will randomly place down the first question becuase there are no answer buttons to move to the next question
function insertQuestion(answer) {

    // randomizes the questions
    var arrayRandomItem = Math.floor(Math.random() * questionArray.length);
    var mixQuestions = questionArray[arrayRandomItem];


    // sets the questions
    if (mixQuestions === q1) {
        $("#A1").text("Calls an element from HTML with an Id");
        $("#A2").text("Calls an element from HTML with a class");
        $("#A3").text("Sets an Id for an element in HTML");
        $("#A4").text("Removes an Id from an element in HTML");

        questionArray.splice(arrayRandomItem, 1);
        console.log(questionArray);

        answer = "#A1";
    }
    if (mixQuestions === q2) {
        $("#A1").text("var");
        $("#A2").text("let");
        $("#A3").text("const");
        $("#A4").text("boolean");

        questionArray.splice(arrayRandomItem, 1);
        console.log(questionArray);

        answer = "#A3";
    }
    if (mixQuestions === q3) {
        $("#A1").text("String");
        $("#A2").text("Int");
        $("#A3").text("boolean");
        $("#A4").text("null");

        questionArray.splice(arrayRandomItem, 1);
        console.log(questionArray);

        answer = "#A3";
    }
    if (mixQuestions === q4) {
        $("#A1").text("Tells the console if something happens");
        $("#A2").text("Turns a string into an Int");
        $("#A3").text("Prints to console whatever is in the brackets");
        $("#A4").text("Creates a popup on the page of the content that is in the brackets");

        questionArray.splice(arrayRandomItem, 1);
        console.log(questionArray);

        answer = "#A4";
    }
    if (mixQuestions === q5) {
        $("#A1").text("console.log();");
        $("#A2").text("alert();");
        $("#A3").text("prompt();");
        $("#A4").text("display();");

        questionArray.splice(arrayRandomItem, 1);
        console.log(questionArray);

        answer = "#A1";
    }

    $(answer).click(function() {
        console.log("pleasework");
    });


    //puts the question into html and makes font size smaller
    var questionDisplay = document.querySelector("#questionInsert");
    document.getElementById("questionInsert").innerHTML = mixQuestions;
    questionDisplay.setAttribute("style", "font-size: 25px");


    // correct/incorrect text
    var correctText = $("<h2>");
    $(correctText).text("Correct!!!");
    $(correctText).addClass("correctText");

    var incorrectText = $("<h2>");
    $(incorrectText).text("Incorrect...");
    $(incorrectText).addClass("incorrectText");


    return answer;
}
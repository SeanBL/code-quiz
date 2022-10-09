var nextCard = document.querySelector(".quiz-card");
var timerCount;
var isWin;
var totalScore = 0;

var body = document.body;
var h1El = document.createElement("h1");
var infoEl1 = document.createElement("p");
var buttonEl = document.createElement("button");
var answersEl = document.createElement("div");


var listEl = document.createElement("ol");

var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Coding Quiz Challenge";
infoEl1.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
buttonEl.textContent = "Start Quiz";

body.appendChild(h1El);
body.appendChild(infoEl1);
body.appendChild(buttonEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl1.setAttribute("style", "margin:auto; width:50%; text-align:center; font-size:20;");
buttonEl.setAttribute("style", "margin:auto; display: flex;");

function setScore() {

}

function startGame () {
    isWin = false;
    timerCount = 75;
    h1El.textContent = "Commonly used data types DO Not Include:"
    infoEl1.textContent = "";
  
    li1.textContent = "1.strings";
    li2.textContent = "2.booleans";
    li3.textContent = "3.alerts";
    li4.textContent = "4.numbers";

    body.appendChild(listEl);

    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

    h1El.setAttribute("style", "margin:auto; width:50%; text-align: left;");
    li1.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;")
    li2.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;")
    li3.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;")
    li4.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;")

    li3.setAttribute('type', 'button');
    
    li1.addEventListener("click", function() {
        secondQuestion();
    });
    li2.addEventListener("click", function() {
        secondQuestion();
    });
    li3.addEventListener("click", function() {
        secondQuestion();
    });
    li4.addEventListener("click", function() {
        secondQuestion();
    });

}

buttonEl.addEventListener("click", function handleClick(event) {
    startGame();
    buttonEl.remove();
});

function secondQuestion() {
    h1El.textContent = "The condition in an if/else statement is enclosed with _________."
    h1El.setAttribute("style", "margin:auto; width:50%; text-align: left;");

    li1.textContent = "1.quotes";
    li2.textContent = "2.curly brackets";
    li3.textContent = "3.parenthesis";
    li4.textContent = "4.square brackets";

    li1.addEventListener("click", function() {
        thirdQuestion();
    });
    li2.addEventListener("click", function() {
        thirdQuestion();
    });
    li3.addEventListener("click", function() {
        thirdQuestion();
    });
    li4.addEventListener("click", function() {
        thirdQuestion();
    });
}

function thirdQuestion() {
    h1El.textContent = "Arrays in JavaScript can be used to store ________.";
    
    li1.textContent = "1.numbers and strings";
    li2.textContent = "2.other arrays";
    li3.textContent = "3.booleans";
    li4.textContent = "4.all of the above";

    li1.addEventListener("click", function() {
        fourthQuestion();
    });
    li2.addEventListener("click", function() {
        fourthQuestion();
    });
    li3.addEventListener("click", function() {
        fourthQuestion();
    });
    li4.addEventListener("click", function() {
        fourthQuestion();
    });
}

function fourthQuestion() {
    h1El.textContent = "String values must be enclosed within______ when being assigned to variables.";
    
    li1.textContent = "1.commas";
    li2.textContent = "2.curly brackets";
    li3.textContent = "3.quotes";
    li4.textContent = "4.parenthesis";

    li1.addEventListener("click", function() {
        fifthQuestion();
    });
    li2.addEventListener("click", function() {
        fifthQuestion();
    });
    li3.addEventListener("click", function() {
        fifthQuestion();
    });
    li4.addEventListener("click", function() {
        fifthQuestion();
    });
}

function fifthQuestion() {
    h1El.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    
    li1.textContent = "1.JavaScript";
    li2.textContent = "2.terminal/bash";
    li3.textContent = "3.for loops";
    li4.textContent = "4.console log";

    li1.addEventListener("click", function() {
        finalScore();
    });
    li2.addEventListener("click", function() {
        finalScore();
    });
    li3.addEventListener("click", function() {
        finalScore();
    });
    li4.addEventListener("click", function() {
        finalScore();
    });
}

function finalScore() {
    h1El.textContent = "All done!";
    var infoEl1 = document.createElement("p");
    var score = document.createElement("span");


    infoEl1.textContent = "Your final score is ";
    score.textContent = "0";

    body.appendChild(infoEl1);
    infoEl1.appendChild(score);

    infoEl1.setAttribute("style", "margin:auto; width:50%; text-align:center; font-size:20;");

    li1.remove();
    li2.remove();
    li3.remove();
    li4.remove();

}

function highscores() {

}
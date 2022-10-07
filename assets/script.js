var nextCard = document.querySelector(".quiz-card");
var timerCount;
var isWin;

var body = document.body;
var h1El = document.createElement("h1");
var infoEl1 = document.createElement("p");
var buttonEl = document.createElement("button");


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

function startGame () {
    isWin = false;
    timerCount = 75;

    
    nextQuestion();
}

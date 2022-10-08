var nextCard = document.querySelector(".quiz-card");
var timerCount;
var isWin;

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
    
    li3.addEventListener("click", function() {
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

    
}
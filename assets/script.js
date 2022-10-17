var timerCount = document.getElementById("timer");
var viewHighScores = document.getElementById("viewHighScores");
var answerChoice = document.getElementById("answer-choice");
var timeLeft = 0;
var timeInterval;
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
timerCount.textContent = "Time: " + timeLeft;


body.appendChild(h1El);
body.appendChild(infoEl1);
body.appendChild(buttonEl);

h1El.setAttribute("style", "margin:auto; margin-bottom: 10px; width:50%; text-align:center;");
infoEl1.setAttribute("style", "margin:auto; margin-bottom: 15px; width:60%; text-align:center; font-size:20;");
buttonEl.setAttribute("style", "margin:auto; display: flex; padding-left: 8px; padding-right: 8px; padding-top: 3px; padding-bottom: 3px; color: white; background-color: #4f0a89; border-radius: 5px;");

//localStorage.clear();

function countDown() {
    timeLeft = 75;

    timeInterval = setInterval(function (){
        if (timeLeft >= 1) {
            timerCount.textContent = "Time: " + timeLeft;
            timeLeft--;
        }else {
            timerCount.textContent = "Time: 0";
            clearInterval(timeInterval);
        }
        
    }, 1000);
}

function stopCountDown() {
    clearInterval(timeInterval);
}

var correctAnswer;
var incorrectAnswer;
function correct() {
    answerChoice.innerHTML = "";
    correctAnswer = document.createElement("div");
    correctAnswer.textContent = "Correct";
    answerChoice.appendChild(correctAnswer);
    correctAnswer.setAttribute("style", "margin: 15px 0 0 25vw; padding: 5px; border-top: solid; border-color: gray; width: 600px; font-size: 36px; color: gray;");
    
}

function incorrect() {
    answerChoice.innerHTML = "";
    incorrectAnswer = document.createElement("div");
    incorrectAnswer.textContent = "Incorrect";
    answerChoice.appendChild(incorrectAnswer);
    incorrectAnswer.setAttribute("style", "margin: 15px 0 0 25vw; padding: 5px; border-top: solid; border-color: gray; width: 600px; font-size: 36px; color: gray;");

}


function startGame () {
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
    li1.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    li2.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    li3.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    li4.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    
    li1.addEventListener("click", function() {
        timeLeft -= 5;
        secondQuestion(false);
        listEl.remove();
    });
    li2.addEventListener("click", function() {
        timeLeft -= 5;
        secondQuestion(false);
        listEl.remove();
    });
    li3.addEventListener("click", function() {
        totalScore += 15;
        secondQuestion(true);
        listEl.remove();
    });
    li4.addEventListener("click", function() {
        timeLeft -= 5;
        secondQuestion(false);
        listEl.remove();
    }); 
}


buttonEl.addEventListener("click", function handleClick() {
    countDown();
    startGame();
    buttonEl.remove();
});

function secondQuestion(response) {
    h1El.textContent = "The condition in an if/else statement is enclosed with _________."
    h1El.setAttribute("style", "margin:auto; width:50%; text-align: left;");

    var listEl = document.createElement("ol");

    var b1 = document.createElement("li");
    var b2 = document.createElement("li");
    var b3 = document.createElement("li");
    var b4 = document.createElement("li");

    b1.textContent = "1.quotes";
    b2.textContent = "2.curly brackets";
    b3.textContent = "3.parenthesis";
    b4.textContent = "4.square brackets";

    body.appendChild(listEl);

    listEl.appendChild(b1);
    listEl.appendChild(b2);
    listEl.appendChild(b3);
    listEl.appendChild(b4);

    if (response == true) {
        correct();
    } else {
        incorrect();
    }

    b1.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    b2.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    b3.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    b4.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");

    b1.addEventListener("click", function() {
        timeLeft -= 5;
        thirdQuestion(false);
        listEl.remove();
        
    });
    b2.addEventListener("click", function() {
        timeLeft -= 5;
        thirdQuestion(false);
        listEl.remove();
        
    });
    b3.addEventListener("click", function() {
        totalScore += 15;
        thirdQuestion(true);
        listEl.remove();
        
    });
    b4.addEventListener("click", function() {
        timeLeft -= 5;
        thirdQuestion(false);
        listEl.remove();
        
    });
}

function thirdQuestion(response) {
    h1El.textContent = "Arrays in JavaScript can be used to store ________.";

    var listEl = document.createElement("ol");

    var c1 = document.createElement("li");
    var c2 = document.createElement("li");
    var c3 = document.createElement("li");
    var c4 = document.createElement("li");
    
    c1.textContent = "1.numbers and strings";
    c2.textContent = "2.other arrays";
    c3.textContent = "3.booleans";
    c4.textContent = "4.all of the above";

    body.appendChild(listEl);

    listEl.appendChild(c1);
    listEl.appendChild(c2);
    listEl.appendChild(c3);
    listEl.appendChild(c4);

    if (response == true) {
        correct();
    } else {
        incorrect();
    }

    c1.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    c2.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    c3.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    c4.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");

    c1.addEventListener("click", function() {
        timeLeft -= 5;
        fourthQuestion(false);
        listEl.remove();
        
    });
    c2.addEventListener("click", function() {
        timeLeft -= 5;
        fourthQuestion(false);
        listEl.remove();
        
    });
    c3.addEventListener("click", function() {
        timeLeft -= 5;
        fourthQuestion(false);
        listEl.remove();
        
    });
    c4.addEventListener("click", function() {
        totalScore += 15;
        fourthQuestion(true);
        listEl.remove();
        
    });
}

function fourthQuestion(response) {
    h1El.textContent = "String values must be enclosed within______ when being assigned to variables.";
    
    var listEl = document.createElement("ol");

    var d1 = document.createElement("li");
    var d2 = document.createElement("li");
    var d3 = document.createElement("li");
    var d4 = document.createElement("li");

    d1.textContent = "1.commas";
    d2.textContent = "2.curly brackets";
    d3.textContent = "3.quotes";
    d4.textContent = "4.parenthesis";

    body.appendChild(listEl);

    listEl.appendChild(d1);
    listEl.appendChild(d2);
    listEl.appendChild(d3);
    listEl.appendChild(d4);

    if (response == true) {
        correct();
    } else {
        incorrect();
    }

    d1.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    d2.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    d3.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    d4.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    d1.addEventListener("click", function() {
        timeLeft -= 5;
        fifthQuestion(false);
        listEl.remove();
    });
    d2.addEventListener("click", function() {
        timeLeft -= 5;
        fifthQuestion(false);
        listEl.remove();
    });
    d3.addEventListener("click", function() {
        totalScore += 15;
        fifthQuestion(true);
        listEl.remove();
    });
    d4.addEventListener("click", function() {
        timeLeft -= 5;
        fifthQuestion(false);
        listEl.remove();
    });
}

function fifthQuestion(response) {
    h1El.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    
    var listEl = document.createElement("ol");

    var e1 = document.createElement("li");
    var e2 = document.createElement("li");
    var e3 = document.createElement("li");
    var e4 = document.createElement("li");

    e1.textContent = "1.JavaScript";
    e2.textContent = "2.terminal/bash";
    e3.textContent = "3.for loops";
    e4.textContent = "4.console log";

    body.appendChild(listEl);

    listEl.appendChild(e1);
    listEl.appendChild(e2);
    listEl.appendChild(e3);
    listEl.appendChild(e4);

    if (response == true) {
        correct();
    } else {
        incorrect();
    }

    e1.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    e2.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    e3.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    e4.setAttribute("style", "display: flex; margin-left:25vw; color: white; background: #4f0a89; padding: 10px; width: 200px; border-radius: 5px; margin-top: 10px; font-size: 20px;");

    e1.addEventListener("click", function() {
        timeLeft -= 5;
        finalScore(false);
        listEl.remove();
        stopCountDown();
    });
    e2.addEventListener("click", function() {
        timeLeft -= 5;
        finalScore(false);
        listEl.remove();
        stopCountDown();
    });
    e3.addEventListener("click", function() {
        timeLeft -= 5;
        finalScore(false);
        listEl.remove();
        stopCountDown();
    });
    e4.addEventListener("click", function() {
        totalScore += 15;
        finalScore(true);
        listEl.remove();
        stopCountDown();
    });
}


    
    var score = document.createElement("span");
    var initials = document.createElement("div");
    var inputBox = document.createElement("input");
    inputBox.setAttribute("id", "input-box");
    var submitBtn = document.createElement("button");
    var goBackBtn = document.createElement("button");
    var clearBtn = document.createElement("button");

function finalScore(response) {
    h1El.textContent = "All done!";
    var infoEl1 = document.createElement("p");

    infoEl1.textContent = "Your final score is ";
    score.textContent = totalScore + ".";
    initials.textContent = "Enter initials: ";
    submitBtn.textContent = "Submit";

    body.appendChild(infoEl1);
    infoEl1.appendChild(score);
    body.appendChild(initials);
    initials.appendChild(inputBox);
    initials.appendChild(submitBtn);

    if (response == true) {
        correct();
    } else {
        incorrect();
    }

    infoEl1.setAttribute("style", "margin-left: 25vw; margin-bottom: 10px; font-size: 20px;");
    initials.setAttribute("style", "margin-left: 25vw; font-size: 20px;");
    inputBox.setAttribute("style", "font-size:20px; border-color: #2ba5ff; margin-right: 10px;");
    submitBtn.setAttribute("style", "padding-left: 10px; padding-right: 10px; padding-top: 3px; padding-bottom: 3px; border-radius: 5px; color: white; background: #4f0a89;");
    

    li1.remove();
    li2.remove();
    li3.remove();
    li4.remove();

    submitBtn.addEventListener("click", function handleClick() {
        var inputInitials = document.getElementById("input-box").value
        records(totalScore, inputInitials);
        h1El.remove();
        infoEl1.remove();
        initials.remove();
        timerCount.remove();
        viewHighScores.remove(); 
    });

    
}



function records(newScore, newInitials) {
    var scoreTitle = document.createElement("h1");
    var scoreList = document.createElement("ol");
    
    var storedScore = []; 
    var storedScoreString = localStorage.getItem("combined-data");
   
    if (storedScoreString) {
        storedScore = JSON.parse(storedScoreString);
    }

    var combined = {
        score: newScore,
        initials: newInitials
    };
    
    storedScore.push(combined);
    storedScore.sort(function (a, b) {return b.score - a.score});
    storedScore.splice(5);
    combine(storedScore);

    function combine (scrAndInt) {
        var convertObj = JSON.stringify(scrAndInt);
        localStorage.setItem("combined-data", convertObj);
    }

    scoreTitle.textContent = "High Scores";
    goBackBtn.textContent = "Go Back";
    clearBtn.textContent = "Clear high scores";
    
    body.appendChild(scoreTitle);
    body.appendChild(scoreList);
    for (i = 0; i < storedScore.length; i++) {
        var highscore = storedScore[i];
        var list = document.createElement("li");
        list.textContent = highscore.initials + " - " + highscore.score;
        list.setAttribute("data-index", i);
        list.setAttribute("type", 1);
        list.setAttribute("style", "margin-left: 25vw; margin-bottom: 10px; padding: 5px; width: 500px; background: #ddc4fd;");
        body.appendChild(list);
    }
    
    body.appendChild(goBackBtn);
    body.appendChild(clearBtn);

    scoreTitle.setAttribute("style", "margin-left: 25vw; margin-top: 100px; margin-bottom: 15px; font-size: 28px;");
    goBackBtn.setAttribute("style", "margin: 0vw 5px 0vw 25vw; padding: 3px 10px 3px 10px; border-radius: 3px; border-color: transparent; color: white; background: #4f0a89;")
    clearBtn.setAttribute("style", "padding: 3px 10px 3px 10px; border-radius: 3px; border-color: transparent; color: white; background: #4f0a89;")
}

goBackBtn.addEventListener("click", function handleClick(){
    window.location.reload();
});

clearBtn.addEventListener("click", function handleClick() {
    localStorage.clear();
});



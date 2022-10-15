var timerCount = document.getElementById("timer");
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
timerCount.textContent = "time: " + timeLeft;

body.appendChild(h1El);
body.appendChild(infoEl1);
body.appendChild(buttonEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl1.setAttribute("style", "margin:auto; width:50%; text-align:center; font-size:20;");
buttonEl.setAttribute("style", "margin:auto; display: flex;");
timerCount.setAttribute("style", "font-size: 20px;");
//localStorage.clear();

function countDown() {
    timeLeft = 75;

    timeInterval = setInterval(function (){
        if (timeLeft >= 1) {
            timerCount.textContent = "time: " + timeLeft;
            timeLeft--;
        }else {
            timerCount.textContent = "time: 0";
            clearInterval(timeInterval);
        }
        
    }, 1000);
}

function stopCountDown() {
    clearInterval(timeInterval);
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
    li1.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    li2.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    li3.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    li4.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    
    li1.addEventListener("click", function() {
        timeLeft -= 5;
        secondQuestion();
        listEl.remove();
    });
    li2.addEventListener("click", function() {
        timeLeft -= 5;
        secondQuestion();
        listEl.remove();
    });
    li3.addEventListener("click", function() {
        totalScore++;
        secondQuestion();
        listEl.remove();
    });
    li4.addEventListener("click", function() {
        timeLeft -= 5;
        secondQuestion();
        listEl.remove();
    }); 
}


buttonEl.addEventListener("click", function handleClick(event) {
    countDown();
    startGame();
    buttonEl.remove();
});

function secondQuestion() {
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

    b1.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    b2.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    b3.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    b4.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");

    b1.addEventListener("click", function() {
        timeLeft -= 5;
        thirdQuestion();
        listEl.remove();
    });
    b2.addEventListener("click", function() {
        timeLeft -= 5;
        thirdQuestion();
        listEl.remove();
    });
    b3.addEventListener("click", function() {
        totalScore++;
        thirdQuestion();
        listEl.remove();
    });
    b4.addEventListener("click", function() {
        timeLeft -= 5;
        thirdQuestion();
        listEl.remove();
    });
}

function thirdQuestion() {
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

    c1.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    c2.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    c3.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    c4.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");

    c1.addEventListener("click", function() {
        timeLeft -= 5;
        fourthQuestion();
        listEl.remove();
    });
    c2.addEventListener("click", function() {
        timeLeft -= 5;
        fourthQuestion();
        listEl.remove();
    });
    c3.addEventListener("click", function() {
        timeLeft -= 5;
        fourthQuestion();
        listEl.remove();
    });
    c4.addEventListener("click", function() {
        totalScore++;
        fourthQuestion();
        listEl.remove();
    });
}

function fourthQuestion() {
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

    d1.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    d2.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    d3.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    d4.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");

    d1.addEventListener("click", function() {
        timeLeft -= 5;
        fifthQuestion();
        listEl.remove();
    });
    d2.addEventListener("click", function() {
        timeLeft -= 5;
        fifthQuestion();
        listEl.remove();
    });
    d3.addEventListener("click", function() {
        totalScore++;
        fifthQuestion();
        listEl.remove();
    });
    d4.addEventListener("click", function() {
        timeLeft -= 5;
        fifthQuestion();
        listEl.remove();
    });
}

function fifthQuestion() {
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

    e1.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    e2.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    e3.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");
    e4.setAttribute("style", "display: flex; margin:auto; color: white; background: blue; padding: 10px; width: 25%; border-radius: 5px; margin-top: 10px; font-size: 20px;");

    e1.addEventListener("click", function() {
        timeLeft -= 5;
        finalScore();
        listEl.remove();
        stopCountDown();
    });
    e2.addEventListener("click", function() {
        timeLeft -= 5;
        finalScore();
        listEl.remove();
        stopCountDown();
    });
    e3.addEventListener("click", function() {
        timeLeft -= 5;
        finalScore();
        listEl.remove();
        stopCountDown();
    });
    e4.addEventListener("click", function() {
        totalScore++;
        finalScore();
        listEl.remove();
        stopCountDown();
    });
}


    var highscores = document.createElement("h1");
    var score = document.createElement("span");
    var initials = document.createElement("div");
    var inputBox = document.createElement("input");
    inputBox.setAttribute("id", "input-box");
    var submitBtn = document.createElement("button");
    var goBackBtn = document.createElement("button");
    var clearBtn = document.createElement("button");

function finalScore() {
    h1El.textContent = "All done!";
    var infoEl1 = document.createElement("p");

    infoEl1.textContent = "Your final score is ";
    score.textContent = totalScore;
    initials.textContent = "Enter initials: ";
    submitBtn.textContent = "Submit";

    body.appendChild(infoEl1);
    infoEl1.appendChild(score);
    body.appendChild(initials);
    initials.appendChild(inputBox);
    initials.appendChild(submitBtn);

    infoEl1.setAttribute("style", "margin:auto; width:50%; text-align:center; font-size:20;");
    initials.setAttribute("style", "margin:auto; width:50%; text-align:center; font-size:20;");
    

    li1.remove();
    li2.remove();
    li3.remove();
    li4.remove();


    function records(newScore, newInitials) {
        var storedScore = []; 
        var storedScoreString = localStorage.getItem("combined-data");
        console.log(storedScoreString);
        if (storedScoreString) {
            storedScore = JSON.parse(storedScoreString);
        }
        console.log(storedScore);

        highscores.textContent = "High Scores";
        goBackBtn.textContent = "Go Back";
        clearBtn.textContent = "Clear high scores";
        var combined = {
            score: newScore,
            initials: newInitials
        };
        //var stringifiedCombined = JSON.stringify(combined);
        //localStorage.setItem("combined-data", stringifiedCombined);
        storedScore.push(combined);
        console.log(storedScore);
        combine(storedScore);
        
        body.appendChild(highscores);
        for (i = 0; i < storedScore.length; i++) {
            var highscore = storedScore[i];
            console.log(highscore);
            var list = document.createElement("p");
            list.textContent = highscore;
            list.setAttribute("data-index", i);
            body.appendChild(list);
        }
        
        body.appendChild(goBackBtn);
        body.appendChild(clearBtn);
    }


    submitBtn.addEventListener("click", function handleClick() {
        var inputInitials = document.getElementById("input-box").value
        records(totalScore, inputInitials);
        h1El.remove();
        infoEl1.remove();
        initials.remove();
    });

    clearBtn.addEventListener("click", function handleClick() {
        localStorage.clear();
    });
}

    function combine (scrAndInt) {
        localStorage.setItem("combined-data", JSON.stringify(scrAndInt));
    }
// function storeScore (score) {
//     localStorage.setItem("scores", JSON.stringify(score));
// }

// function userInitials(initials) {
//     localStorage.setItem("input-box", JSON.stringify(initials));
    
// }

goBackBtn.addEventListener("click", function handleClick(){
    window.location.reload();
});


// function records(score) {
//     var test2 = localStorage.getItem("input-box");
//     var testEl = document.createElement("p");

//     highscores.textContent = "High Scores";
//     testEl.textContent = score + " - " + test2;
//     inputCollection.push(testEl);
//     goBackBtn.textContent = "Go Back";

//     for (i = 0; i < inputCollection.length; i++) {
//         var hs = inputCollection[i];
        
//         testEl.textContent = hs;
//         testEl.setAttribute("data-index", i);

//         highscores.appendChild(testEl);
//     }

//     body.appendChild(highscores);
//     highscores.appendChild(testEl);
//     body.appendChild(goBackBtn);

//     localStorage.setItem("userScore", score);
//     console.log(localStorage);

// }


/* sort if(first < second) {
 first == -1} else if (first > second) {
 first == 1} else
 first == 0 
 
 
 scoreObj.score + "-" initialObj.initial*/
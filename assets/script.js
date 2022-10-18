var timerCount = document.getElementById("timer");
var viewHighScores = document.getElementById("viewHighScores");
var timeLeft = 0;
var timeInterval;
var totalScore = 0;
var body = document.body;

//These variables are being declared and getting defined with elements for the html page
var h1El = document.createElement("h1");
var outOfTime = document.createElement("h1");
var infoEl1 = document.createElement("p");
var buttonEl = document.createElement("button");
var answerChoice = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

function homePage(){
//These provide all the text content for the home page.
h1El.textContent = "Coding Quiz Challenge";
infoEl1.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
buttonEl.textContent = "Start Quiz";
timerCount.textContent = "Time: " + timeLeft;

//These variables with their assigned elements are getting appended to the the body of the html document
body.appendChild(h1El);
body.appendChild(infoEl1);
body.appendChild(buttonEl);

//This sets up the style, look, and positioning of the text and buttons.
h1El.setAttribute("style", "margin:auto; margin-bottom: 10px; width:50%; text-align:center;");
infoEl1.setAttribute("style", "margin:auto; margin-bottom: 15px; width:60%; text-align:center; font-size:20;");
buttonEl.setAttribute("style", "margin:auto; display: flex; padding-left: 8px; padding-right: 8px; padding-top: 3px; padding-bottom: 3px; color: white; background-color: #4f0a89; border-radius: 5px;");
}

/*This adds a clickable function to the "view high scores" text, so users can access the highscores list
at anytime. The argument in the records function is set to -1, so when the records function
is called, the value is not stored in the storedScores array. This allows the user to simply
view the highscores using the records function without adding another value to the highscores list.*/
viewHighScores.addEventListener("click", function handleClick() {
    body.innerHTML = "";
    records(-1,"");
});
homePage();

/*This function alerts the user that time has run out and allows the user to submit
their current score. */
function timerOut() {
    body.innerHTML = "";
    
    outOfTime.textContent = "Out of Time";
    goBackBtn.textContent = "Go Back";
    
    body.appendChild(outOfTime);
    
    outOfTime.setAttribute("style", "margin-top: 30vh; margin-bottom: 15px; text-align:center;");
    finalScore();
    answerChoice.remove();
}

/*This function sets and starts the count down timer when the user starts the quiz.*/
function countDown() {
    timeLeft = 75;

    timeInterval = setInterval(function (){
        if (timeLeft >= 1) {
            timerCount.textContent = "Time: " + timeLeft;
            timeLeft--;
        }else {
            timerCount.textContent = "Time: 0";
            clearInterval(timeInterval);
            timerOut();
        }
        
    }, 1000);
}

/*This function stops the count down if the user has completed the quiz ahead of time.
In the future, it would be nice to add the time to the high scores list.*/
function stopCountDown() {
    clearInterval(timeInterval);
}

var correctAnswer;
var incorrectAnswer;

/*This function is a response for the user. If the user makes a correct answer choice,
text will pop up letting the user know they got the correct answer.*/
function correct() {
    answerChoice.innerHTML = "";
    correctAnswer = document.createElement("div");
    correctAnswer.textContent = "Correct";
    answerChoice.appendChild(correctAnswer);
    body.appendChild(answerChoice);
    correctAnswer.setAttribute("style", "margin: 15px 0 0 25vw; padding: 5px; border-top: solid; border-color: gray; width: 600px; font-size: 36px; color: gray;");
}

/*This function is a response for the user. If the user makes an incorrect answer choice,
text will pop up letting the user know they got the incorrect answer.*/
function incorrect() {
    answerChoice.innerHTML = "";
    incorrectAnswer = document.createElement("div");
    incorrectAnswer.textContent = "Incorrect";
    answerChoice.appendChild(incorrectAnswer);
    body.appendChild(answerChoice);
    incorrectAnswer.setAttribute("style", "margin: 15px 0 0 25vw; padding: 5px; border-top: solid; border-color: gray; width: 600px; font-size: 36px; color: gray;");
}

/*This function starts the quiz for the user once the "Start Quiz" button has been clicked.
Elements wtih text were appended to the body and event listeners were added to each answer text.
Time is deducted for wrong answers and points are rewarded for the correct answer.*/
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

//The start game and count down timer function is called when this event listner is actived.
buttonEl.addEventListener("click", function handleClick() {
    countDown();
    startGame();
    buttonEl.remove();
});

/*This function is called when one of the first answers is picked. An "if" statement is included to provide 
a response to the user's answer. If the correct answer is chosen, the "correct" function is called, and a line
of text is presented underneath the list of answers. If the user's answer was incorrect, the incorrect function
is called. */
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

/*This function represents the third question and is called in the previous function along with a "false" or "true"
argument in the event listeners. The "response" parameter in the "thirdQuestion" function is also placed 
in the conditional of the "if" statement, and takes in the "true" or "false" argument to determine the correct
answer response. */
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

//This function represents the fourth question and follows the same logic as the previous function.
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

/*This function runs the code that displays the fifth and final question along with answer choices. The logic
follows the dame pattern as the previous question functions. The event listeners call functions that determine
the answer response and a function that pauses the timer after the final question is answered. */ 
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

/*This variable for the back button is global since the timerOut function
and the records function need access to this variable.*/
var goBackBtn = document.createElement("button");

/*This function allows the user to view their final score, and prompts them
to write their initials in the input box. An event listener is added to the
submit button which calls the record function and initiates the process of
adding the score and the user's initials to the high score list. */
function finalScore(response) {
    var infoEl1 = document.createElement("p");
    var score = document.createElement("span");
    var initials = document.createElement("div");
    var inputBox = document.createElement("input");
    var submitBtn = document.createElement("button");
    
    h1El.textContent = "All done!";
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
    inputBox.setAttribute("id", "input-box");
    submitBtn.setAttribute("style", "padding-left: 10px; padding-right: 10px; padding-top: 3px; padding-bottom: 3px; border-radius: 5px; color: white; background: #4f0a89;");
    
    li1.remove();
    li2.remove();
    li3.remove();
    li4.remove();

    /*The inputInitials variable is assigned the value placed in the input box by the user. The records function
    holds to arguments. The user's total score value and the user's initials value will be passed into the records
    function's parameters.*/
    submitBtn.addEventListener("click", function handleClick() {
        var inputInitials = document.getElementById("input-box").value
        records(totalScore, inputInitials);
        h1El.remove();
        infoEl1.remove();
        initials.remove();
        timerCount.remove();
        viewHighScores.remove(); 
        outOfTime.remove();
        answerChoice.innerHTML = "";
    }); 
}

/*The records function holds two parameters which takes the the user's score and initials. Those values are then
passed into the "combined" variable which has been defined as an object holding those two values. The combined 
variable with it's two values is pushed to the storedScore array. The number values in the array are sorted
in descending order by the sort function, and the array is limited to five entries by the splice method. The
values are then passed through the parameters of the combine function where the values are converted into a string
value before being set into local storage. The values are then taken out of local storage and placed in the 
storedScoreString variable where the string values are converted into JavaScript objects. Those values are then
stored in the storedScore array. A for loop iterates through the objects of the array and appends each pair of
of the user's score and initials to the high scores list in the correct descending order expected of a high scores
list.*/
function records(newScore, newInitials) {
    var scoreTitle = document.createElement("h1");
    var scoreList = document.createElement("ol");
    var clearBtn = document.createElement("button");
    
    var storedScore = []; 
    var storedScoreString = localStorage.getItem("combined-data");
   
    if (storedScoreString) {
        storedScore = JSON.parse(storedScoreString);
    }

    var combined = {
        score: newScore,
        initials: newInitials
    };
    
    /*This if statement allows the records function to be called again by the viewHighScore event listener
    without adding unnecessary values to the highscores list. The event listener calls the records function 
    with an argument value of -1 which passes thorugh to the new newScore parameter. The condition is read as
    false and the value is not added to the array.*/
    if (newScore >= 0) {
        storedScore.push(combined);
    }
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

    /*This clearBtn event listener clears all the scores stored in local storage. The high score list is cleared
    once the user clicks the "go back" button. */
    clearBtn.addEventListener("click", function handleClick() {
        localStorage.clear();
    });

}

//This event listener is kept global since the viewHighScores event listener and the records function require access to this function.
goBackBtn.addEventListener("click", function handleClick(){
    window.location.reload();
});





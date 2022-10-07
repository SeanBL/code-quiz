var nextCard = document.querySelector(".quiz-card");
var timerCount;
var isWin;

function startGame () {
    isWin = false;
    timerCount = 75;
    nextQuestion();
}

function nextQuestion() {
    nextCard.textContent = "Testing";
}

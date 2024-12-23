const cards = document.querySelectorAll(".card");
const scoreText = document.querySelector(".scoreText");
const bestText = document.querySelector(".bestText");
let score = 0;
let best = 0;
let consecutiveMatches =0;

cards.forEach((card) => card.addEventListener("click", flip))

//variables
var isFlipped = false;
var firstCard, secondCard;

(function loadBestScore() {
    const savedBestScore = localStorage.getItem("bestScore")
    if(savedBestScore !== null) {
        best = parseInt(savedBestScore);
    }
    bestText.innerHTML = best;
})();
// bestText.innerHTML = best;

// bestText.innerHTML = localStorage.getItem("bestScore");

function flip() {
   // console.log(this);
   this.classList.add("flip");
   if(!isFlipped) {
    isFlipped = true;
    firstCard = this;
   } else if (this == firstCard)
    score = score;
   
   else {
    secondCard = this;
    checkIt();
    console.log(firstCard);
    console.log(secondCard);
   }
   
}

function checkIt() {

    console.log("Checking...");
    firstCard.dataset.image === secondCard.dataset.image ? success() : fail();
}


function success() {
firstCard.removeEventListener('click', flip);
secondCard.removeEventListener('click', flip);
reset();
consecutiveMatches++;
score+= 10 * consecutiveMatches;
scoreText.innerHTML = score;
console.log("Success called", consecutiveMatches, "times");
if (score > best) {
    best = score
}
localStorage.setItem("bestScore", best)
bestText.innerHTML = best;
}


function fail() {
    consecutiveMatches = 0;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 1000);

}

function reset() {
     isFlipped = false;
     firstCard = null;
     secondCard = null;
}

//shuffle cards
(function shuffle() {
    cards.forEach((card) => {
        var index = Math.floor(Math.random() * 16);
        card.style.order = index;
    })
})();
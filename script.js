function startGame() {
  let startDiv = document.getElementById("start");
  let megaDiv = document.querySelector('.MEGA');
  let texty = document.querySelector('.texty');
  startDiv.style.display = "none";
  megaDiv.style.display = "grid";
  texty.style.display = "block";
  start();
}

let counter = 0;
let firstSelection = "";
let secondSelection = "";
let currentScore = 0;

const restart = document.querySelector('#restart');
 restart.addEventListener("click", () => {
    window.location.reload();
 });  

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
  card.addEventListener("click", (Event) => {

    let currentCard = Event.target.parentElement;
    card.classList.add("clicked");
    if (card) {
       if (currentCard.classList.contains("clicked")) {
        setScore(currentScore + 1);
       }
    }

    if (counter === 0) {
      firstSelection = card.getAttribute("color");
      counter++;

    } else {
      secondSelection = card.getAttribute("color");
      counter = 0;

      if (firstSelection === secondSelection) {
        const correctCards = document.querySelectorAll(
          ".card[color='" + firstSelection + "']"

        );

        correctCards[0].classList.add("checked");
        correctCards[0].classList.remove("clicked");
        correctCards[1].classList.add("checked");
        correctCards[1].classList.remove("clicked");
      } else {
        const incorrectCards = document.querySelectorAll(".card.clicked");

        incorrectCards[0].classList.add("shake");
        incorrectCards[1].classList.add("shake");

        setTimeout(() => {
          incorrectCards[0].classList.remove("shake");
          incorrectCards[0].classList.remove("clicked");
          incorrectCards[1].classList.remove("shake");
          incorrectCards[1].classList.remove("clicked");
        }, 1000);
      }
    }
      function setScore(newScore) {
        currentScore = newScore;
        document.querySelector("#currentScore").innerText = currentScore;
      }
  });
});
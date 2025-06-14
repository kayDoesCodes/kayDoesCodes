const headsBtn = document.getElementById("heads");
const tailsBtn = document.getElementById("tails");
const resetBtn = document.getElementById("reset");
const winScores = document.querySelector(".js-winpoints");
const loseScores = document.querySelector(".js-losepoints");
const gameGuess = document.querySelector(".js-guess");
const gameResult = document.querySelector(".js-result");
const autoPlayBtn = document.querySelector(".js-auto-play-btn"); 

const scores = JSON.parse(localStorage.getItem('gameScores')) || {
  wins : 0,
  losses: 0
};

function updateScores(){
  winScores.innerHTML = `Wins : ${scores.wins}`;
  loseScores.innerHTML = `Losses : ${scores.losses}`;
};

let isAutoPlaying = false;
let intervalId;

function autoplay() {
  if(!isAutoPlaying) {
    intervalId = setInterval(function() {
      const auto = Math.random() < 0.5 ? "Heads" : "Tails";
      playGame(auto);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  };

  if(isAutoPlaying) {
    autoPlayBtn.innerHTML = "Stop Playing";
  } else if(!isAutoPlaying) {
    autoPlayBtn.innerHTML = "Continue Playing";
  };
};

function playGame(guess) {
  const result = Math.random() < 0.5 ? "Heads" : "Tails";
  if (guess === result) {
    scores.wins += 1;
    updateScores();
  } else {
    scores.losses += 1;
    updateScores();
  }

  gameGuess.innerHTML = `You choose : ${guess}.`;
  gameResult.innerHTML = `You got : ${result}.`;

  localStorage.setItem('gameScores', JSON.stringify(scores));
};

resetBtn.addEventListener("click", () => {
  localStorage.removeItem('gameScores');
  scores.wins = 0;
  scores.losses = 0;
  updateScores();
  gameGuess.innerHTML = "";
  gameResult.innerHTML = "";
  autoPlayBtn.innerHTML = "Auto Play";
})

headsBtn.addEventListener("click", () => {
  playGame('Heads');
});

tailsBtn.addEventListener("click", () => {
  playGame('Tails');
});

autoPlayBtn.addEventListener("click", () => {
  autoplay();
});
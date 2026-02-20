let current = 0;
const cards = document.querySelectorAll(".card");
const bgm = document.getElementById("bgm");
const song2 = document.getElementById("song2");
const songInfo = document.getElementById("songInfo");

bgm.volume = 0.3;
bgm.play();

function nextCard() {
  cards[current].classList.remove("active");
  current++;
  if (current < cards.length) {
    cards[current].classList.add("active");
  }
}

function blowCandle() {
  const candle = document.querySelector(".candle");
  candle.innerText = "💨";
  candle.style.animation = "none";

  for (let i = 0; i < 15; i++) 
}

const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");

function playSong1() {
  song2.pause();
  song2.currentTime = 0;
  song1.play();
}

function playSong2() {
  song1.pause();
  song1.currentTime = 0;
  song2.play();
}

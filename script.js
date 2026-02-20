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

  for (let i = 0; i < 15; i++) {
    const sparkle = document.createElement("span");
    sparkle.classList.add("sparkle");
    sparkle.innerText = "✨";
    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1500);
  }
}

function playMainSong() {
  bgm.pause();
  song2.currentTime = 0;
  song2.play();
  songInfo.classList.remove("hidden");

  setTimeout(() => {
    song2.pause();
    songInfo.classList.add("hidden");
    bgm.play();
  }, 25000);
}

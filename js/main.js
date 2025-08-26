import { aiChoose } from "./ai-choose.js";
import {
  AI,
  elHands,
  modeChanger,
  playAgain,
  player,
  statusText,
} from "./html-selection.js";
import { switchZone } from "./switch-zone.js";
import { checkWinner } from "./check-winner.js";
import { mChanger, mode } from "./constants.js";
import { updateScore } from "./score.js";
// hands
elHands.forEach((el) => {
  el.addEventListener("click", (e) => {
    const rpsPlayer = e.target.alt;
    const playerSrc = e.target.src;
    player.src = playerSrc;
    switchZone(true);
    setTimeout(() => {
      const ai = aiChoose();
      const winner = checkWinner(ai, rpsPlayer);
      AI.src = `img/${ai}.svg`;
      statusText.textContent = winner;
      updateScore(winner);
    }, 1000);
  });
});

// refresh game
playAgain.addEventListener("click", () => {
  switchZone(false);
  AI.src = `img/oval.svg`;
});

// mode chnager
modeChanger.addEventListener("click", () => {
  if (mode === "easy") {
    modeChanger.textContent = "Hard mode";
    mChanger("hard");
  } else {
    mChanger("easy");
    modeChanger.textContent = "Easy mode";
  }
});

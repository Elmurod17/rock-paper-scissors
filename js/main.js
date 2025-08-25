import { aiChoose } from "./ai-choose.js";
import { AI, hands, playAgain, player, statusText } from "./html-selection.js";
import { switchZone } from "./switch-zone.js";
import { checkWinner } from "./check-winner.js";

hands.forEach((el) => {
  el.addEventListener("click", (e) => {
    const rpsPlayer = e.target.alt;
    const playerSrc = e.target.src;
    player.src = playerSrc;
    switchZone(true);
    setTimeout(() => {
      const ai = aiChoose();
      const winnner = checkWinner(ai, rpsPlayer);
      AI.src = `img/${ai}.svg`;
      statusText.textContent = winnner;
    }, 1000);
  });
});
playAgain.addEventListener("click", () => {
  switchZone(false);
  AI.src = `img/oval.svg`;
});

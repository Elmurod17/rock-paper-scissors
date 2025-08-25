import { checkWinner } from "./check-winner.js";
import { score } from "./html-selection.js";

const winner = checkWinner();

if (winner === "player") {
  score.textContent = Number(score.textContent) + 1;
} else if (winner === "computer") {
  const current = Number(score.textContent);
  if (current > 0) {
    score.textContent = current - 1;
  }
}

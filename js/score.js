import { score } from "./html-selection.js";

let currentScore = 0;

export function updateScore(winner) {
  if (winner === "player") {
    currentScore++;
    score.textContent = currentScore;
  } else if (winner === "ai") {
    if (currentScore > 0) {
      currentScore--;
      score.textContent = currentScore;
    }
  }
}

export function resetScore() {
  currentScore = 0;
  score.textContent = currentScore;
}

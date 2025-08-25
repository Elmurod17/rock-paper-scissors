import { handsHard, zoneGrid } from "./html-selection.js";

export const { rock, scissors, paper, spock, lizard } = {
  rock: "rock",
  scissors: "scissors",
  paper: "paper",
  spock: "spock",
  lizard: "lizard",
};
export const hands = [rock, scissors, paper, spock, lizard];

export let mode = "easy";
export function mChanger(value) {
  mode = value;
  handsHard.forEach((hand) => {
    if (value === "hard") {
      hand.classList.remove("hidden");
      zoneGrid.classList.add("grid-cols-2", "grid-rows-3");
    } else {
      zoneGrid.classList.remove("grid-cols-2", "grid-rows-3");
      hand.classList.add("hidden");
    }
  });
}

import { handsHard } from "./html-selection.js";

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
    } else {
      hand.classList.add("hidden");
    }
  });
}

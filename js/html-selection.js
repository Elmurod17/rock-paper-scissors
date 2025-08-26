const elHands = document.querySelectorAll(".hand");
const player = document.querySelector("#player");
const AI = document.querySelector(".ai");
const chooseZone = document.getElementById("chooseZone");
const statusZone = document.getElementById("statusZone");
const playAgain = document.getElementById("playAgain");
const statusText = document.getElementById("statusText");
const modeChanger = document.getElementById("modeChanger");
const handsHard = document.querySelectorAll(".mode-hard");
const zoneGrid = document.getElementById("zoneGrid");
const score = document.querySelector("#score");
const ruleImg = document.querySelector("#ruleImg");
const headerImg = document.querySelector("#headerImg");

export {
  elHands,
  player,
  chooseZone,
  statusZone,
  playAgain,
  AI,
  statusText,
  modeChanger,
  handsHard,
  zoneGrid,
  score,
  ruleImg,  
  headerImg,
};

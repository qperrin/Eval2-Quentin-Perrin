import { Game } from "./Game.js";
import { Player } from "./Player.js";
import { setTozero, updateDisplay } from "./utils.js";

const launchBtn = document.getElementById("launch");
const rollBtn = document.getElementById("roll");
const holdBtn = document.getElementById("hold");

const point1 = document.getElementById("point1");
const point2 = document.getElementById("point2");

const pointC1 = document.getElementById("pointC1");
const pointC2 = document.getElementById("pointC2");
let game = null;

launchBtn.addEventListener("click", () => {
  const player1 = new Player(1);
  const player2 = new Player(2);

  setTozero([point1, point2, pointC1, pointC2]);
  return (game = new Game([player1, player2]));
});

rollBtn.addEventListener("click", () => {
  if (game !== null) {
    let player = game.playerTurn();
    if (game.players[player].rollDice()) {
      game.turn = player == 1 ? 0 : 1;
    }
    if (player === 0) {
      updateDisplay(game.players[player].CurrentPoint, pointC1);
    } else {
      updateDisplay(game.players[player].CurrentPoint, pointC2);
    }
  }
});

holdBtn.addEventListener("click", () => {
  if (game !== null) {
    let player = game.playerTurn();
    game.players[player].holdPoint();
    if (player === 0) {
      updateDisplay(game.players[player].Globalpoint, point1);
      updateDisplay(game.players[player].CurrentPoint, pointC1);
    } else {
      updateDisplay(game.players[player].CurrentPoint, pointC2);
      updateDisplay(game.players[player].Globalpoint, point2);
    }
    game.turn = player == 1 ? 0 : 1;
    let winner = game.checkWinner(game.players[player]);
    if (winner === 1 || winner === 2) {
      game = null;
    }
  }
});

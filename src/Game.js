export class Game {
  constructor(players) {
    this.players = players;
    this.turn = 0;
    this.winner = null;
  }

  checkWinner(player) {
    if (player.Globalpoint > 99) {
      return player.id;
    }
    return "No-win";
  }

  playerTurn() {
    return this.turn;
  }
}

export class Game {
  constructor(players) {
    this.players = players;
    this.turn = 1;
    this.winner = null;
  }

  checkWinner() {
    this.players.forEach((player) => {
      console.log(player);
    });
  }
}

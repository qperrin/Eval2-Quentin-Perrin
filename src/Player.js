export class Player {
  constructor() {
    this.CurrentPoint = 0;
    this.Globalpoint = 0;
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
}

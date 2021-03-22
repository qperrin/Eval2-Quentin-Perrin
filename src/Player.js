export class Player {
  constructor() {
    this.CurrentPoint = 0;
    this.Globalpoint = 0;
  }

  rollDice() {
    let point = Math.floor(Math.random() * 6) + 1;
    if (point === 1) {
      this.CurrentPoint = 0;
    } else {
      this.CurrentPoint += point;
    }
  }

  HoldPoint() {
    this.Globalpoint += this.CurrentPoint;
  }
}

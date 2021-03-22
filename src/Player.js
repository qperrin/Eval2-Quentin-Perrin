export class Player {
  constructor(id) {
    this.id = id;
    this.CurrentPoint = 0;
    this.Globalpoint = 0;
  }

  rollDice() {
    let point = Math.floor(Math.random() * 6) + 1;
    if (point === 1) {
      this.CurrentPoint = 0;
      return true;
    } else {
      this.CurrentPoint += point;
    }
  }

  holdPoint() {
    this.Globalpoint += this.CurrentPoint;
    this.CurrentPoint = 0;
  }
}

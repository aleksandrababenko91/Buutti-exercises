interface InterfaceBoat {
  hullBreached: boolean;
  fillLevel: number;
  isItSinking(): void;
}

class Boat implements InterfaceBoat {
  hullBreached: boolean;
  fillLevel: number;
  sinked?: boolean;

  constructor(hullBreached: boolean, fillLevel: number) {
    this.hullBreached = hullBreached;
    this.fillLevel = fillLevel;
  }

  isItSinking() {
    if (this.hullBreached === true) {
      while (this.fillLevel < 100) {
        this.fillLevel += 20;
      }
      this.sinked = true;
    } else {
      console.log("The boat is not sinking");
    }
  }
}

const myBoat = new Boat(true, 20);
myBoat.isItSinking();
console.log(myBoat);

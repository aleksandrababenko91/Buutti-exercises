var Boat = /** @class */ (function () {
    function Boat(hullBreached, fillLevel) {
        this.hullBreached = hullBreached;
        this.fillLevel = fillLevel;
    }
    Boat.prototype.isItSinking = function () {
        if (this.hullBreached === true) {
            while (this.fillLevel < 100) {
                this.fillLevel += 20;
            }
            this.sinked = true;
        }
        else {
            console.log("The boat is not sinking");
        }
    };
    return Boat;
}());
var myBoat = new Boat(true, 0);
myBoat.isItSinking();
console.log(myBoat);

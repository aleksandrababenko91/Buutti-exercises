const processor = {
        name: "Buutti SuperCalculator 6000",
        cache: "96 GB",
        clockSpeed: 1001.0,
        overclock: function() {this.clockSpeed += 500;},
        savePower: function() { 
                if(this.clockSpeed > 2000) {
                    this.clockSpeed = 2000;
                } else if(this.clockSpeed <= 2000) {
                    this.clockSpeed = this.clockSpeed / 2;
                }
        }
}
processor.overclock();
console.log("ClockSpeed with overlock: ", processor.clockSpeed);
processor.savePower();
console.log("ClockSpeed with save power: ", processor.clockSpeed);


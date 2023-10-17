class Robot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    handleMessage(message) {
        if(message === "moveNorth") {
            this.y++;
        } else if(message === "moveSouth") {
            this.y--;
        } else if(message === "moveEast") {
            this.x++;
        } else if(message === "moveWest") {
            this.x--;
        }
    }
}
class FlexibleRobot extends Robot {
    constructor (x, y) {
        super(x, y);
    }
    handleMessage(message) {
        if(message === "moveNE") {
            this.x++;
            this.y++;
        } else if(message === "moveES") {
            this.x++;
            this.y--;
        } else if(message === "moveSW") {
            this.x--;
            this.y--;
        } else if(message === "moveWN") {
            this.x--;
            this.y++;
        } else {
            super.handleMessage(message);
        }   
    }
}
console.log("Base Class Robot Move: ");
const robot = new Robot(0, 0);
robot.handleMessage("moveWest");
console.log(robot.x, robot.y);

console.log("FlexibleRobot Derived Class Move: ");
const flexibleRobot1 = new FlexibleRobot(0, 0);
flexibleRobot1.handleMessage("moveWest");
console.log(flexibleRobot1.x, flexibleRobot1.y);

console.log("Call its handleMessage function 4 times to move to (4, 2): ");
const flexibleRobot = new FlexibleRobot(0, 0);
flexibleRobot.handleMessage("moveNE");
flexibleRobot.handleMessage("moveNE");
flexibleRobot.handleMessage("moveES");
flexibleRobot.handleMessage("moveNE");
console.log(flexibleRobot.x, flexibleRobot.y);







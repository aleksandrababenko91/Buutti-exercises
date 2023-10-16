/*If the message given to FlexibleRobot’s handleMessage 
isn’t recognized by FlexibleRobot, 
call the handleMessage function of the base Robot 
class to also allow direct movement along the x and y axes.

Create a new FlexibleRobot object at (0, 0) (x = 0, y = 0) 
and call its handleMessage function with a fitting 
parameter 4 times to instruct it to move to (4, 2) (x = 4, y = 2).*/


class Robot{
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
    handleMessage(message) {
        if(message === "moveNE") {
            this.x++ && this.y++;
        } else if(message === "moveES") {
            this.x++ && this.y++;
        } else if(message === "moveSW") {
            this.x-- && this.y--;
        } else if(message === "moveWN") {
            this.x++ && this.y++;
        } else {
            super.handleMessage(message);
        }   
    }
}

const flexibleRobot = new FlexibleRobot(0, 0);
flexibleRobot.handleMessage("moveSW");

console.log(flexibleRobot.x, flexibleRobot.y);
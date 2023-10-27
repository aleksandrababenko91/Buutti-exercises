const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";
class Robot {
    constructor(x, y) {
        this.x = x,
        this.y = y
    }
    handleCommandList(string) {
        for(let i = 0; i < commandList.length; i++) { //can use a swith ctatement also
            if(string[i] === "B") {
                break;
            } else if(string[i] === "N") {
                this.y++;
            } else if(string[i] === "E") {
                this.x++;
            } else if(string[i] === "S") {
                this.y--;
            } else if(string[i] === "W") {
                this.x--;
            } else if(string[i] === "C") {
                {};
            }
        }
    }
}
const robot = new Robot(0, 0);
robot.handleCommandList(commandList);
console.log(robot.x, robot.y);

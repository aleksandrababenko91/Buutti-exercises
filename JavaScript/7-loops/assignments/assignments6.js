let x = 10;
let y = 20;
const commandList = "KNNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";

for (let i = 0; i < commandList.length; i++) {
    const a = commandList.charAt(i);
    if (a === "B") {
        break;
    } 
    switch (a) {
        case "N":
            y++;
            break;    
        case "E":
            x++;
            break;
        case "S":
            y--;
            break;
        case "W":
            x--;
            break;
        case "S":
            break;
        default: 
            console.log(a);
    }
}
console.log(x, y);

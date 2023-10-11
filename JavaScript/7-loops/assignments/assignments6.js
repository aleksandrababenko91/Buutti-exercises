/*let x = 10;
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
console.log(x, y);*/

let x = 1;
let y = 1;
const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";

for (i = 0; i <= commandList.length; i++) {
    let currentLetter = commandList[i];
    if (currentLetter === "B") {
        break;
    }
    switch (currentLetter) {
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
        case "C":
            break;
        default:
            console.log(currentLetter);
    }
}

console.log(x, y);



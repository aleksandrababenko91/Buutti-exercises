const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";
let x = 0;
let y = 0;
const commandHandlers = {
    N: () => y++,
    E: () => x++,
    S: () => y--,
    W: () => x--,
    C: () => {}
}
for(let i = 0; i < commandList.length; i++) {
    if(commandList[i] === "B") {
        break;
    } 
    commandHandlers[commandList[i]]();
}
console.log(x, y);


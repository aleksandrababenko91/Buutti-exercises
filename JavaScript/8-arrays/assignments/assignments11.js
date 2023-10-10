let x = 0;
let y = 0;
const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";
const commandCodes = {n : 0, e : 1, s : 2, w : 3, c : 4, b : 5};
const numbersArray = [];
for(i = 0; i < commandList.length; i++) {
   let currentLetter = commandList[i];
   if (currentLetter === "B") {
    break;
   }
   //console.log(currentLetter);
   let commandCode = commandCodes[currentLetter.toLowerCase()];
 //console.log(commandCode);
 numbersArray.push(commandCode);

}
console.log(numbersArray);

function incrementY(){
y = y + 1;
}
function incrementX(){
x = x + 1;
}

function decrementY(){
y = y - 1;
}
function decrementX(){
x = x - 1;
}
function doNothing(){
return null;
}

const functionsArray = [incrementY, incrementX, decrementY, decrementX, doNothing];

for(let i = 0; i < numbersArray.length; i++){
    let number = numbersArray[i];
    let currentFunction = functionsArray[number];
    if(currentFunction){
    currentFunction();
    }
}

console.log(x, y);

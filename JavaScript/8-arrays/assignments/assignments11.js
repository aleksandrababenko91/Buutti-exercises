/*let x = 0;
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

console.log(x, y);*/

let x = 1;
let y = 1;
const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";
let array = [];
const letterToNumberMap = { N: 0, E: 1, S: 2, W: 3, C: 4, B: 5 };

for (i = 0; i < commandList.length; i++) {
    let value;
    switch (commandList[i]) {
        case "N":
            value = 0;
            break;
        case "E":
            value = 1;
            break;
        case "S":
            value = 2;
            break;
        case "W":
            value = 3;
            break;
        case "C":
            value = 4;
            break;
        case "B":
            value = 5;
            break;
        default:
            console.log(commandList[i]);
    }  
   array.push(value);
}

console.log(array);

const functionArray = [
  () => y++,
  () => x++,
  () => y--,
  () => x--,
  () => { }
];

for (i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    if (currentNumber === 5) {
      break;
  }
  functionArray[currentNumber]();
}


console.log(x, y);



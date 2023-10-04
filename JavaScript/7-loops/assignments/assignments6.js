/*Assignment 6 (Command list)
Create a program where we have variables x and y coordinates representing 
the position of a robot, and a command string that tells the robot where it should move.

The robot has the following command string:

const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";

Using a loop of your choice, go through this string letter-by-letter.

Depending on the letter, an action should be taken for each encountered letter:

if the letter is N, increment Y
if the letter is E, increment X
if the letter is S, decrement Y
if the letter is W, decrement X
if the letter is C, skip to next letter without doing anything
if the letter is B, end the program and skip all the remaining commands
Print the final values of X and Y once the string has been processed.

Tip: you can use the charAt function to get an individual letter by index, 
as is done in the code in assignment 6*/


let x = 10;
let y = 20;
const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";

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
console.log(x + y);

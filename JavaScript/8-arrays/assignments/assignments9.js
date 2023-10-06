/*Assignment 9 (Index of alphabets)
const charIndex = { a : 1, b : 2, c : 3, d : 4, e : 5, ... , y : 25, z : 26 };

Create a function charIndexString that turns any given string into a 
charIndex version of the string.

Examples:

console.log(charIndexString("bead")); // prints "2514"
console.log(charIndexString("rose")); // prints "1815195"
Tip: go through the string letter-by-letter. 
For each letter, figure out its charIndex. 
Then convert the charIndex into a string and add it to the string that you later return.*/


function charIndexString (string) {
   let charIndexSum = "";
    const charIndex = { a : 1, b : 2, c : 3, d : 4, e : 5, y : 25, z : 26, h : 27, l : 28, o : 29 };
    for (let i = 0; i < string.length; i++){
        let currentLetter = string[i];
       //console.log(currentLetter, "current");
       let currentCharIndex = charIndex[currentLetter.toLowerCase()];
       //console.log(currentCharIndex);
       charIndexSum += currentCharIndex;
    }
    return charIndexSum
}
console.log(charIndexString("Hello"));



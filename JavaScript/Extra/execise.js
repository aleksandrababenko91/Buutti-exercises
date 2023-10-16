//Write a JavaScript function that reverses a number.

const numbers = 32243;
let numToString = numbers.toString();
let reversedNUmbers = "";
function reverseNumbers(nums){
    for(let i = numToString.length - 1; i >= 0; i--) {
        reversedNUmbers += numToString[i];
}
    return reversedNUmbers;
}
console.log("Reversed nember: ", reverseNumbers(numbers));

function reverseByMethods(nums) { //I dont understand how to make parameters "num" light.
    return numToString.split("").reverse().join("");
}
console.log("Reversed numbers: ", reverseByMethods(numToString));


//Write a JavaScript function that accepts a string as a 
//parameter and converts the first letter of each word into upper case.
const string = 'the fow brown';

function convertToUpperCase(string) {
    string.split(" ");
    for(i = 0; i < string.length; i++){
        string[i][0].toUpperCase() + string[i].slice(1);
    }
    return string.join;
    }   

console.log(convertToUpperCase(string));
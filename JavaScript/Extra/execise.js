/*//Write a JavaScript function that reverses a number.

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
const string = "the quick brown fox";
let newString = "";
function convertToUpperCase(string) {
        newString = string.split(" ");
        for(i = 0; i < newString.length; i++){
        newString[i] = newString[i][0].toUpperCase() + newString[i].slice(1);
   }
        return newString.join(" ");
    }   
console.log("Capitalized letter of each word: ", convertToUpperCase(string));


//3 Write a JavaScript function that accepts an argument and returns the type.
//Note : There are six possible values that typeof returns: object, boolean, 
//function, number, string, and undefined.

const allValues = [{age: 32, surname: "Babenko"}, function upper(){}, true, 13, "Hello, world", undefined];
let typesOfValues = "";
function returnTheType(values) {
    for(i = 0; i < allValues.length; i++) {
    typesOfValues += typeof allValues[i] + " ";
    }
    return typesOfValues;
}
console.log("All DataTypes: ", returnTheType(allValues));*/

//Write a program that outputs the following. Use for-loops for this task.

let a = 10;
let printTriangle = "";
for(i = "*"; i <= 10; i++) {
    i++;
    printTriangle += i + "";
    console.log(printTriangle);
}
console.log(printTriangle);
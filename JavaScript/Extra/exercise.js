//1.Write a JavaScript function that reverses a number.
console.log("Exercise1");
const numbers = 32243;
let numToString = numbers.toString();
let reversedNUmbers = "";
function reverseNumbers(nums) {
    for(let i = nums.length - 1; i >= 0; i--) {
        reversedNUmbers += nums[i];
    }
    return reversedNUmbers;
}
console.log("Reversed number: ", reverseNumbers(numToString));

function reverseByMethods(nums) { 
    return nums.split("").reverse().join("");
}
console.log("Reversed numbers: ", reverseByMethods(numToString));


//2Write a JavaScript function that accepts a string as a 
//parameter and converts the first letter of each word into upper case.
console.log("Exercise2: ");
const string = "the quick brown fox";
function convertToUpperCase(str) {
    newString = str.split(" ");
    for(i = 0; i < newString.length; i++) {
        newString[i] = newString[i][0].toUpperCase() + newString[i].slice(1);
   }
    return newString.join(" ");
}  
console.log("Capitalized letter of each word: ", convertToUpperCase(string));


//3 Write a JavaScript function that accepts an argument and returns the type.
//Note : There are six possible values that typeof returns: object, boolean, 
//function, number, string, and undefined.

console.log("Exercise 3: ");
function returnTheType(value) {
    return typeof value;
}
console.log("All DataTypes: ", returnTheType({age: 32, surname: "Babenko"}));
console.log("All DataTypes: ", returnTheType(true));
console.log("All DataTypes: ", returnTheType(144));
console.log("All DataTypes: ", returnTheType(undefined));
console.log("All DataTypes: ", returnTheType(function F(){}));
console.log("All DataTypes: ", returnTheType("Babenko"));


//4Write a program that outputs the following. Use for-loops for this task.

console.log("Exercise 4");
let printTriangle = "";
for(let i = 0; i < 10; i++) {
    printTriangle += "*";
    console.log(printTriangle); 
}


//5
console.log("Exercise 5: ");
let x = 1;
let y = 1;

function square(x, y) {
    let result = "";
    for(i = 0; i < x; i++) {  //row
        result += "*";
    } for(j = 0; j < y; j++) { //column
        console.log(result);
    }   
}
console.log("Print 2 squares");
square(10, 2);
square(4, 10);

/*Assignment 5 (Sum)
Create a program that counts a sum of increasing integers, 1 + 2 + 3..., 
until the sum exceeds 10000, and finally prints the last number that was added to the sum.

Use your preferred loop method for this (while or for loop with a fitting condition, 
    or infinite while loop with a break statement).*/

/*function sumOfIncreasingNumbers(n) {
    let sum = 0;
    let i = 0;*/




let n = 0;
let sum = 0;
  while (sum < 10000) {
     n++;
    sum += n;
  }
console.log("The last number is " + n);